import cloneDeep from 'lodash.clonedeep';
import isEqual from 'lodash.isequal';
import mergeWith from 'lodash.mergewith';

class ReduxedStorage {
  /**
   * Redux interface to chrome.storage
   * @param {Object} obj
   * @param {function(function()[, Object, function()])} obj.createStore the Redux's createStore() function
   * @param {Object} obj.storage a WrappedStorage instance
   * @param {number} obj.bufferLife lifetime of the bulk actions buffer, in ms
   * @param {function(Object[, Object])} obj.reducer a reducing function
   * @param {Object} obj.initialState initial state of the store
   * @param {function(function())} obj.enhancer enhancer of the store
   */
  constructor({
    createStore,
    storage,
    bufferLife,
    reducer,
    initialState,
    enhancer,
    chrome,
    proxy,
  }) {
    this.createStore = createStore;
    this.storage = storage;
    this.reducer = reducer;
    this.enhancer = enhancer;
    this.buffLife = bufferLife ? Math.min(Math.max(bufferLife, 0), 2000) : 100;
    this.state = initialState;
    this.buffStore = this.buffState0 = null;
    this.listeners = [];
    this.dispatch = this.dispatch.bind(this);
    this.subscribe = this.subscribe.bind(this);
    this.proxy = proxy;
    this.chrome = chrome;
  }

  init() {
    const initialState = this.state;
    this.state = null;
    const defaultState = this.createStore(
      this.reducer,
      undefined,
      this.enhancer
    ).getState();
    // Subscribe for changes in chrome.storage
    this.storage.subscribe((data) => {
      if (isEqual(data, this.state)) return;
      this.setState(data);
      for (const fn of this.listeners) {
        fn();
      }
    });
    if (!this.proxy) {
      this.chrome.runtime.onMessage.addListener(
        (request, sender, sendResponse) => {
          if (request.type === "reduxedstorage.dispatch") {
            this.dispatch(request.payload);
          }
        }
      );
    }
    // return a promise to be resolved when the last state (if any) is restored from chrome.storage
    return new Promise((resolve) => {
      // Try to restore the last state stored in chrome.storage, if any
      this.storage.load((lastState) => {
        const mergeOrReplace = (data0, data) =>
          typeof data0 === "object" && !Array.isArray(data0)
            ? mergeWith({}, data0, data, (obj, src) =>
                Array.isArray(obj) ? src : undefined
              )
            : data;
        let state = lastState
          ? mergeOrReplace(defaultState, lastState)
          : defaultState;
        if (initialState) {
          state = mergeOrReplace(state, initialState);
        }
        this.setState(state);
        if (!isEqual(state, lastState)) {
          this.storage.save(state);
        }
        resolve(this);
      });
    });
  }

  /**
   * Sets/replaces all the state to/with a new content
   * @param data a new content of the state
   */
  setState(data) {
    if (!data) return;
    this.state = cloneDeep(data);
  }

  /**
   * Returns the current state
   * @returns {Object} the current state
   */
  getState() {
    return this.state;
  }

  /**
   * Adds a listener for changes in the store
   * @param {function()} fn the listener
   * @returns {function()} a function that unsubscribes the listener
   */
  subscribe(fn) {
    typeof fn === "function" && this.listeners.push(fn);
    return () => {
      if (typeof fn !== "function") return;
      this.listeners = this.listeners.filter((v) => v !== fn);
    };
  }

  /**
   * Dispatches a Redux action
   * @param {Object} action the Redux action
   * @returns {Object} the dispatched action
   */
  dispatch(action) {
    if (this.proxy) {
      chrome.runtime.sendMessage({
        type: "reduxedstorage.dispatch",
        payload: action,
      });
    } else {
      if (!this.buffStore) {
        this.buffStore = this.createStore(
          this.reducer,
          this.state,
          this.enhancer
        );
        this.buffState0 = this.buffStore.getState();
        setTimeout(() => {
          this.buffStore = null;
        }, this.buffLife);
      }
      this.buffStore.subscribe(() => {
        const state = this.buffStore.getState();
        if (isEqual(state, this.buffState0)) return;
        this.storage.save(state);
        this.buffState0 = state;
      });
      return this.buffStore.dispatch(action);
    }
  }
}

class WrappedStorage {
  /**
   * chrome.storage API wrapper
   * @param {Object} obj
   * @param {Object} obj.chrome Chrome host object
   * @param {string} obj.area the name of chrome.storage area to be used
   * @param {string} obj.key the key to be used for storing/tracking data in chrome.storage
   */
  constructor({ chrome, area, key }) {
    this.chrome = chrome;
    this.key = key;
    this.areaName = area === 'local'? 'local' : 'sync';
    this.areaApi = this.chrome.storage[this.areaName];
    this.listeners = [];
  }

  init() {
    // Setup internal (shared) listener for chrome.storage.onChanged
    this.chrome.storage.onChanged.addListener((changes, area) => {
      if (area !== this.areaName || !(this.key in changes))
        return;
      const {newValue} = changes[this.key];
      if (!newValue)
        return;
      for (const fn of this.listeners) {
        fn(newValue);
      }
    });
  }

  /**
   * Adds a listener for chrome.storage.onChanged
   * @param {function(Object)} fn the listener function
   */
  subscribe(fn) {
    typeof fn === 'function' && this.listeners.push(fn);
  }

  /**
   * Retrieves data from chrome.storage under specific key (this.key)
   * @param {function(Object)} fn a callback function to pass the retrieved data
   */
  load(fn) {
    typeof fn === 'function' &&
    this.areaApi.get(this.key, data => {
      fn(!this.chrome.runtime.lastError && data && data[this.key]);
    });
  }

  /**
   * Stores data in chrome.storage under specific key (this.key)
   * @param {Object} data the data to store
   */
  save(data) {
    this.areaApi.set({[this.key]: data});
  }
}

/**
 * ReduxedStorage creator factory
 * @param {Object} obj
 * @param {function(function()[, Object, function()])} obj.createStore the Redux's createStore() function
 * @param (string) obj.storageArea the name of chrome.storage area to be used, defaults to 'sync'
 * @param (string) obj.storageKey the key to be used for storing/tracking data in chrome.storage, defaults to 'reduxed'
 * @param (number) obj.bufferLife lifetime of the bulk actions buffer (in ms), defaults to 100 (ms)
 * @returns {function(function()[, Object, function()]):Promise} a function for creating a ReduxedStorage, which in turn returns a Promise to be resolved when the ReduxedStorage is ready
 */
function reduxedStorageCreatorFactory({
  createStore,
  storageArea,
  storageKey,
  bufferLife,
  proxy,
}) {
  const msg = "Missing or invalid argument";
  if (!validateStoreCreator(createStore))
    throw new Error(`(Factory) ${msg}: createStore`);
  const storage = new WrappedStorage({
    chrome,
    area: storageArea,
    key: storageKey || "reduxed",
  });
  storage.init();
  return (reducer, initialState, enhancer) => {
    if (typeof reducer !== "function")
      throw new Error(`(StoreCreator) ${msg}: reducer`);
    const store = new ReduxedStorage({
      createStore,
      storage,
      bufferLife,
      reducer,
      initialState,
      enhancer,
      chrome,
      proxy,
    });
    return store.init();
  };
}

function validateStoreCreator(createStore) {
  if (typeof createStore !== "function") return false;
  try {
    const store = createStore((state) => state || {});
    return (
      typeof store === "object" &&
      typeof store.getState === "function" &&
      typeof store.dispatch === "function"
    );
  } catch (error) {
    return false;
  }
}

export default reduxedStorageCreatorFactory;
