import ReduxedStorage from "./ReduxedStorage";
import WrappedStorage from "./WrappedStorage";

/**
 * ReduxedStorage creator factory
 * @param {Object} obj
 * @param {function(function()[, Object, function()])} obj.createStore the Redux's createStore() function
 * @param (string) obj.storageArea the name of chrome.storage area to be used, defaults to 'sync'
 * @param (string) obj.storageKey the key to be used for storing/tracking data in chrome.storage, defaults to 'reduxed'
 * @param (number) obj.bufferLife lifetime of the bulk actions buffer (in ms), defaults to 100 (ms)
 * @returns {function(function()[, Object, function()]):Promise} a function for creating a ReduxedStorage, which in turn returns a Promise to be resolved when the ReduxedStorage is ready
 */
export default function reduxedStorageCreatorFactory({
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
