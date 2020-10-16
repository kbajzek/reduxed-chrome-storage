!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).reduxedChromeStorage=e()}(this,(function(){"use strict";var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e,r){return t(r={path:e,exports:{},require:function(t,e){return function(){throw Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}()}},r.exports),r.exports}var r=e((function(e,r){var n="[object Arguments]",o="[object Function]",i="[object GeneratorFunction]",a="[object Map]",u="[object Set]",c=/\w*$/,s=/^\[object .+?Constructor\]$/,f=/^(?:0|[1-9]\d*)$/,l={};l[n]=l["[object Array]"]=l["[object ArrayBuffer]"]=l["[object DataView]"]=l["[object Boolean]"]=l["[object Date]"]=l["[object Float32Array]"]=l["[object Float64Array]"]=l["[object Int8Array]"]=l["[object Int16Array]"]=l["[object Int32Array]"]=l[a]=l["[object Number]"]=l["[object Object]"]=l["[object RegExp]"]=l[u]=l["[object String]"]=l["[object Symbol]"]=l["[object Uint8Array]"]=l["[object Uint8ClampedArray]"]=l["[object Uint16Array]"]=l["[object Uint32Array]"]=!0,l["[object Error]"]=l[o]=l["[object WeakMap]"]=!1;var h="object"==typeof self&&self&&self.Object===Object&&self,p="object"==typeof t&&t&&t.Object===Object&&t||h||Function("return this")(),_=r&&!r.nodeType&&r,y=_&&e&&!e.nodeType&&e,b=y&&y.exports===_;function v(t,e){return t.set(e[0],e[1]),t}function d(t,e){return t.add(e),t}function j(t,e,r,n){var o=-1,i=t?t.length:0;for(n&&i&&(r=t[++o]);++o<i;)r=e(r,t[o],o,t);return r}function g(t){var e=!1;if(null!=t&&"function"!=typeof t.toString)try{e=!!(t+"")}catch(t){}return e}function w(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function m(t,e){return function(r){return t(e(r))}}function A(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var O,S=Array.prototype,z=Function.prototype,x=Object.prototype,k=p["__core-js_shared__"],E=(O=/[^.]+$/.exec(k&&k.keys&&k.keys.IE_PROTO||""))?"Symbol(src)_1."+O:"",F=z.toString,P=x.hasOwnProperty,U=x.toString,$=RegExp("^"+F.call(P).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),M=b?p.Buffer:void 0,I=p.Symbol,B=p.Uint8Array,D=m(Object.getPrototypeOf,Object),T=Object.create,L=x.propertyIsEnumerable,V=S.splice,R=Object.getOwnPropertySymbols,C=M?M.isBuffer:void 0,N=m(Object.keys,Object),W=yt(p,"DataView"),q=yt(p,"Map"),G=yt(p,"Promise"),K=yt(p,"Set"),H=yt(p,"WeakMap"),J=yt(Object,"create"),Q=gt(W),X=gt(q),Y=gt(G),Z=gt(K),tt=gt(H),et=I?I.prototype:void 0,rt=et?et.valueOf:void 0;function nt(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ot(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function it(t){var e=-1,r=t?t.length:0;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function at(t){this.__data__=new ot(t)}function ut(t,e){var r=mt(t)||function(t){return function(t){return function(t){return!!t&&"object"==typeof t}(t)&&At(t)}(t)&&P.call(t,"callee")&&(!L.call(t,"callee")||U.call(t)==n)}(t)?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],o=r.length,i=!!o;for(var a in t)!e&&!P.call(t,a)||i&&("length"==a||dt(a,o))||r.push(a);return r}function ct(t,e,r){var n=t[e];P.call(t,e)&&wt(n,r)&&(void 0!==r||e in t)||(t[e]=r)}function st(t,e){for(var r=t.length;r--;)if(wt(t[r][0],e))return r;return-1}function ft(t,e,r,s,f,h,p){var _;if(s&&(_=h?s(t,f,h,p):s(t)),void 0!==_)return _;if(!zt(t))return t;var y=mt(t);if(y){if(_=function(t){var e=t.length,r=t.constructor(e);e&&"string"==typeof t[0]&&P.call(t,"index")&&(r.index=t.index,r.input=t.input);return r}(t),!e)return function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(t,_)}else{var b=vt(t),m=b==o||b==i;if(Ot(t))return function(t,e){if(e)return t.slice();var r=new t.constructor(t.length);return t.copy(r),r}(t,e);if("[object Object]"==b||b==n||m&&!h){if(g(t))return h?t:{};if(_=function(t){return"function"!=typeof t.constructor||jt(t)?{}:(e=D(t),zt(e)?T(e):{});var e}(m?{}:t),!e)return function(t,e){return pt(t,bt(t),e)}(t,function(t,e){return t&&pt(e,xt(e),t)}(_,t))}else{if(!l[b])return h?t:{};_=function(t,e,r,n){var o=t.constructor;switch(e){case"[object ArrayBuffer]":return ht(t);case"[object Boolean]":case"[object Date]":return new o(+t);case"[object DataView]":return function(t,e){var r=e?ht(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}(t,n);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return function(t,e){var r=e?ht(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}(t,n);case a:return function(t,e,r){return j(e?r(w(t),!0):w(t),v,new t.constructor)}(t,n,r);case"[object Number]":case"[object String]":return new o(t);case"[object RegExp]":return function(t){var e=new t.constructor(t.source,c.exec(t));return e.lastIndex=t.lastIndex,e}(t);case u:return function(t,e,r){return j(e?r(A(t),!0):A(t),d,new t.constructor)}(t,n,r);case"[object Symbol]":return i=t,rt?Object(rt.call(i)):{}}var i}(t,b,ft,e)}}p||(p=new at);var O=p.get(t);if(O)return O;if(p.set(t,_),!y)var S=r?function(t){return function(t,e,r){var n=e(t);return mt(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,xt,bt)}(t):xt(t);return function(t,e){for(var r=-1,n=t?t.length:0;++r<n&&!1!==e(t[r],r,t););}(S||t,(function(n,o){S&&(n=t[o=n]),ct(_,o,ft(n,e,r,s,o,t,p))})),_}function lt(t){return!(!zt(t)||(e=t,E&&E in e))&&(St(t)||g(t)?$:s).test(gt(t));var e}function ht(t){var e=new t.constructor(t.byteLength);return new B(e).set(new B(t)),e}function pt(t,e,r,n){r||(r={});for(var o=-1,i=e.length;++o<i;){var a=e[o],u=n?n(r[a],t[a],a,r,t):void 0;ct(r,a,void 0===u?t[a]:u)}return r}function _t(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function yt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return lt(r)?r:void 0}nt.prototype.clear=function(){this.__data__=J?J(null):{}},nt.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},nt.prototype.get=function(t){var e=this.__data__;if(J){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return P.call(e,t)?e[t]:void 0},nt.prototype.has=function(t){var e=this.__data__;return J?void 0!==e[t]:P.call(e,t)},nt.prototype.set=function(t,e){return this.__data__[t]=J&&void 0===e?"__lodash_hash_undefined__":e,this},ot.prototype.clear=function(){this.__data__=[]},ot.prototype.delete=function(t){var e=this.__data__,r=st(e,t);return r>=0&&(r==e.length-1?e.pop():V.call(e,r,1),!0)},ot.prototype.get=function(t){var e=this.__data__,r=st(e,t);return 0>r?void 0:e[r][1]},ot.prototype.has=function(t){return st(this.__data__,t)>-1},ot.prototype.set=function(t,e){var r=this.__data__,n=st(r,t);return 0>n?r.push([t,e]):r[n][1]=e,this},it.prototype.clear=function(){this.__data__={hash:new nt,map:new(q||ot),string:new nt}},it.prototype.delete=function(t){return _t(this,t).delete(t)},it.prototype.get=function(t){return _t(this,t).get(t)},it.prototype.has=function(t){return _t(this,t).has(t)},it.prototype.set=function(t,e){return _t(this,t).set(t,e),this},at.prototype.clear=function(){this.__data__=new ot},at.prototype.delete=function(t){return this.__data__.delete(t)},at.prototype.get=function(t){return this.__data__.get(t)},at.prototype.has=function(t){return this.__data__.has(t)},at.prototype.set=function(t,e){var r=this.__data__;if(r instanceof ot){var n=r.__data__;if(!q||199>n.length)return n.push([t,e]),this;r=this.__data__=new it(n)}return r.set(t,e),this};var bt=R?m(R,Object):function(){return[]},vt=function(t){return U.call(t)};function dt(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||f.test(t))&&t>-1&&t%1==0&&e>t}function jt(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||x)}function gt(t){if(null!=t){try{return F.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function wt(t,e){return t===e||t!=t&&e!=e}(W&&"[object DataView]"!=vt(new W(new ArrayBuffer(1)))||q&&vt(new q)!=a||G&&"[object Promise]"!=vt(G.resolve())||K&&vt(new K)!=u||H&&"[object WeakMap]"!=vt(new H))&&(vt=function(t){var e=U.call(t),r="[object Object]"==e?t.constructor:void 0,n=r?gt(r):void 0;if(n)switch(n){case Q:return"[object DataView]";case X:return a;case Y:return"[object Promise]";case Z:return u;case tt:return"[object WeakMap]"}return e});var mt=Array.isArray;function At(t){return null!=t&&function(t){return"number"==typeof t&&t>-1&&t%1==0&&9007199254740991>=t}(t.length)&&!St(t)}var Ot=C||function(){return!1};function St(t){var e=zt(t)?U.call(t):"";return e==o||e==i}function zt(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function xt(t){return At(t)?ut(t):function(t){if(!jt(t))return N(t);var e=[];for(var r in Object(t))P.call(t,r)&&"constructor"!=r&&e.push(r);return e}(t)}e.exports=function(t){return ft(t,!0,!0)}})),n=e((function(e,r){var n="[object Arguments]",o="[object Map]",i="[object Object]",a="[object Set]",u=/^\[object .+?Constructor\]$/,c=/^(?:0|[1-9]\d*)$/,s={};s["[object Float32Array]"]=s["[object Float64Array]"]=s["[object Int8Array]"]=s["[object Int16Array]"]=s["[object Int32Array]"]=s["[object Uint8Array]"]=s["[object Uint8ClampedArray]"]=s["[object Uint16Array]"]=s["[object Uint32Array]"]=!0,s[n]=s["[object Array]"]=s["[object ArrayBuffer]"]=s["[object Boolean]"]=s["[object DataView]"]=s["[object Date]"]=s["[object Error]"]=s["[object Function]"]=s[o]=s["[object Number]"]=s[i]=s["[object RegExp]"]=s[a]=s["[object String]"]=s["[object WeakMap]"]=!1;var f="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,h=f||l||Function("return this")(),p=r&&!r.nodeType&&r,_=p&&e&&!e.nodeType&&e,y=_&&_.exports===p,b=y&&f.process,v=function(){try{return b&&b.binding&&b.binding("util")}catch(t){}}(),d=v&&v.isTypedArray;function j(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}function g(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}function w(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}var m,A,O,S=Array.prototype,z=Object.prototype,x=h["__core-js_shared__"],k=Function.prototype.toString,E=z.hasOwnProperty,F=(m=/[^.]+$/.exec(x&&x.keys&&x.keys.IE_PROTO||""))?"Symbol(src)_1."+m:"",P=z.toString,U=RegExp("^"+k.call(E).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),$=y?h.Buffer:void 0,M=h.Symbol,I=h.Uint8Array,B=z.propertyIsEnumerable,D=S.splice,T=M?M.toStringTag:void 0,L=Object.getOwnPropertySymbols,V=$?$.isBuffer:void 0,R=(A=Object.keys,O=Object,function(t){return A(O(t))}),C=bt(h,"DataView"),N=bt(h,"Map"),W=bt(h,"Promise"),q=bt(h,"Set"),G=bt(h,"WeakMap"),K=bt(Object,"create"),H=gt(C),J=gt(N),Q=gt(W),X=gt(q),Y=gt(G),Z=M?M.prototype:void 0,tt=Z?Z.valueOf:void 0;function et(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function rt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function nt(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function ot(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new nt;++e<r;)this.add(t[e])}function it(t){var e=this.__data__=new rt(t);this.size=e.size}function at(t,e){var r=At(t),n=!r&&mt(t),o=!r&&!n&&Ot(t),i=!r&&!n&&!o&&Et(t),a=r||n||o||i,u=a?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],c=u.length;for(var s in t)!e&&!E.call(t,s)||a&&("length"==s||o&&("offset"==s||"parent"==s)||i&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||jt(s,c))||u.push(s);return u}function ut(t,e){for(var r=t.length;r--;)if(wt(t[r][0],e))return r;return-1}function ct(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":T&&T in Object(t)?function(t){var e=E.call(t,T),r=t[T];try{t[T]=void 0;var n=!0}catch(t){}var o=P.call(t);n&&(e?t[T]=r:delete t[T]);return o}(t):function(t){return P.call(t)}(t)}function st(t){return kt(t)&&ct(t)==n}function ft(t,e,r,u,c){return t===e||(null==t||null==e||!kt(t)&&!kt(e)?t!=t&&e!=e:function(t,e,r,u,c,s){var f=At(t),l=At(e),h=f?"[object Array]":dt(t),p=l?"[object Array]":dt(e),_=(h=h==n?i:h)==i,y=(p=p==n?i:p)==i,b=h==p;if(b&&Ot(t)){if(!Ot(e))return!1;f=!0,_=!1}if(b&&!_)return s||(s=new it),f||Et(t)?pt(t,e,r,u,c,s):function(t,e,r,n,i,u,c){switch(r){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!u(new I(t),new I(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return wt(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case o:var s=g;case a:var f=1&n;if(s||(s=w),t.size!=e.size&&!f)return!1;var l=c.get(t);if(l)return l==e;n|=2,c.set(t,e);var h=pt(s(t),s(e),n,i,u,c);return c.delete(t),h;case"[object Symbol]":if(tt)return tt.call(t)==tt.call(e)}return!1}(t,e,h,r,u,c,s);if(!(1&r)){var v=_&&E.call(t,"__wrapped__"),d=y&&E.call(e,"__wrapped__");if(v||d){var j=v?t.value():t,m=d?e.value():e;return s||(s=new it),c(j,m,r,u,s)}}if(!b)return!1;return s||(s=new it),function(t,e,r,n,o,i){var a=1&r,u=_t(t),c=u.length,s=_t(e);if(c!=s.length&&!a)return!1;var f=c;for(;f--;){var l=u[f];if(!(a?l in e:E.call(e,l)))return!1}var h=i.get(t);if(h&&i.get(e))return h==e;var p=!0;i.set(t,e),i.set(e,t);var _=a;for(;++f<c;){var y=t[l=u[f]],b=e[l];if(n)var v=a?n(b,y,l,e,t,i):n(y,b,l,t,e,i);if(!(void 0===v?y===b||o(y,b,r,n,i):v)){p=!1;break}_||(_="constructor"==l)}if(p&&!_){var d=t.constructor,j=e.constructor;d==j||!("constructor"in t)||!("constructor"in e)||"function"==typeof d&&d instanceof d&&"function"==typeof j&&j instanceof j||(p=!1)}return i.delete(t),i.delete(e),p}(t,e,r,u,c,s)}(t,e,r,u,ft,c))}function lt(t){return!(!xt(t)||function(t){return!!F&&F in t}(t))&&(St(t)?U:u).test(gt(t))}function ht(t){if((e=t)!==("function"==typeof(r=e&&e.constructor)&&r.prototype||z))return R(t);var e,r,n=[];for(var o in Object(t))E.call(t,o)&&"constructor"!=o&&n.push(o);return n}function pt(t,e,r,n,o,i){var a=1&r,u=t.length,c=e.length;if(!(u==c||a&&c>u))return!1;var s=i.get(t);if(s&&i.get(e))return s==e;var f=-1,l=!0,h=2&r?new ot:void 0;for(i.set(t,e),i.set(e,t);++f<u;){var p=t[f],_=e[f];if(n)var y=a?n(_,p,f,e,t,i):n(p,_,f,t,e,i);if(void 0!==y){if(y)continue;l=!1;break}if(h){if(!j(e,(function(t,e){if(!h.has(e)&&(p===t||o(p,t,r,n,i)))return h.push(e)}))){l=!1;break}}else if(p!==_&&!o(p,_,r,n,i)){l=!1;break}}return i.delete(t),i.delete(e),l}function _t(t){return function(t,e,r){var n=e(t);return At(t)?n:function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}(n,r(t))}(t,Ft,vt)}function yt(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function bt(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return lt(r)?r:void 0}et.prototype.clear=function(){this.__data__=K?K(null):{},this.size=0},et.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},et.prototype.get=function(t){var e=this.__data__;if(K){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return E.call(e,t)?e[t]:void 0},et.prototype.has=function(t){var e=this.__data__;return K?void 0!==e[t]:E.call(e,t)},et.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=K&&void 0===e?"__lodash_hash_undefined__":e,this},rt.prototype.clear=function(){this.__data__=[],this.size=0},rt.prototype.delete=function(t){var e=this.__data__,r=ut(e,t);return r>=0&&(r==e.length-1?e.pop():D.call(e,r,1),--this.size,!0)},rt.prototype.get=function(t){var e=this.__data__,r=ut(e,t);return 0>r?void 0:e[r][1]},rt.prototype.has=function(t){return ut(this.__data__,t)>-1},rt.prototype.set=function(t,e){var r=this.__data__,n=ut(r,t);return 0>n?(++this.size,r.push([t,e])):r[n][1]=e,this},nt.prototype.clear=function(){this.size=0,this.__data__={hash:new et,map:new(N||rt),string:new et}},nt.prototype.delete=function(t){var e=yt(this,t).delete(t);return this.size-=e?1:0,e},nt.prototype.get=function(t){return yt(this,t).get(t)},nt.prototype.has=function(t){return yt(this,t).has(t)},nt.prototype.set=function(t,e){var r=yt(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this},ot.prototype.add=ot.prototype.push=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this},ot.prototype.has=function(t){return this.__data__.has(t)},it.prototype.clear=function(){this.__data__=new rt,this.size=0},it.prototype.delete=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},it.prototype.get=function(t){return this.__data__.get(t)},it.prototype.has=function(t){return this.__data__.has(t)},it.prototype.set=function(t,e){var r=this.__data__;if(r instanceof rt){var n=r.__data__;if(!N||199>n.length)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new nt(n)}return r.set(t,e),this.size=r.size,this};var vt=L?function(t){return null==t?[]:function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,i=[];++r<n;){var a=t[r];e(a,r,t)&&(i[o++]=a)}return i}(L(t=Object(t)),(function(e){return B.call(t,e)}))}:function(){return[]},dt=ct;function jt(t,e){return!!(e=null==e?9007199254740991:e)&&("number"==typeof t||c.test(t))&&t>-1&&t%1==0&&e>t}function gt(t){if(null!=t){try{return k.call(t)}catch(t){}try{return t+""}catch(t){}}return""}function wt(t,e){return t===e||t!=t&&e!=e}(C&&"[object DataView]"!=dt(new C(new ArrayBuffer(1)))||N&&dt(new N)!=o||W&&"[object Promise]"!=dt(W.resolve())||q&&dt(new q)!=a||G&&"[object WeakMap]"!=dt(new G))&&(dt=function(t){var e=ct(t),r=e==i?t.constructor:void 0,n=r?gt(r):"";if(n)switch(n){case H:return"[object DataView]";case J:return o;case Q:return"[object Promise]";case X:return a;case Y:return"[object WeakMap]"}return e});var mt=st(function(){return arguments}())?st:function(t){return kt(t)&&E.call(t,"callee")&&!B.call(t,"callee")},At=Array.isArray;var Ot=V||function(){return!1};function St(t){if(!xt(t))return!1;var e=ct(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}function zt(t){return"number"==typeof t&&t>-1&&t%1==0&&9007199254740991>=t}function xt(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function kt(t){return null!=t&&"object"==typeof t}var Et=d?function(t){return function(e){return t(e)}}(d):function(t){return kt(t)&&zt(t.length)&&!!s[ct(t)]};function Ft(t){return null!=(e=t)&&zt(e.length)&&!St(e)?at(t):ht(t);var e}e.exports=function(t,e){return ft(t,e)}})),o=e((function(e,r){var n=/^\[object .+?Constructor\]$/,o=/^(?:0|[1-9]\d*)$/,i={};i["[object Float32Array]"]=i["[object Float64Array]"]=i["[object Int8Array]"]=i["[object Int16Array]"]=i["[object Int32Array]"]=i["[object Uint8Array]"]=i["[object Uint8ClampedArray]"]=i["[object Uint16Array]"]=i["[object Uint32Array]"]=!0,i["[object Arguments]"]=i["[object Array]"]=i["[object ArrayBuffer]"]=i["[object Boolean]"]=i["[object DataView]"]=i["[object Date]"]=i["[object Error]"]=i["[object Function]"]=i["[object Map]"]=i["[object Number]"]=i["[object Object]"]=i["[object RegExp]"]=i["[object Set]"]=i["[object String]"]=i["[object WeakMap]"]=!1;var a="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,c=a||u||Function("return this")(),s=r&&!r.nodeType&&r,f=s&&e&&!e.nodeType&&e,l=f&&f.exports===s,h=l&&a.process,p=function(){try{var t=f&&f.require&&f.require("util").types;return t||h&&h.binding&&h.binding("util")}catch(t){}}(),_=p&&p.isTypedArray;function y(t,e,r){switch(r.length){case 0:return t.call(e);case 1:return t.call(e,r[0]);case 2:return t.call(e,r[0],r[1]);case 3:return t.call(e,r[0],r[1],r[2])}return t.apply(e,r)}var b,v,d,j=Array.prototype,g=Object.prototype,w=c["__core-js_shared__"],m=Function.prototype.toString,A=g.hasOwnProperty,O=(b=/[^.]+$/.exec(w&&w.keys&&w.keys.IE_PROTO||""))?"Symbol(src)_1."+b:"",S=g.toString,z=m.call(Object),x=RegExp("^"+m.call(A).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),k=l?c.Buffer:void 0,E=c.Symbol,F=c.Uint8Array,P=k?k.allocUnsafe:void 0,U=(v=Object.getPrototypeOf,d=Object,function(t){return v(d(t))}),$=Object.create,M=g.propertyIsEnumerable,I=j.splice,B=E?E.toStringTag:void 0,D=function(){try{var t=ct(Object,"defineProperty");return t({},"",{}),t}catch(t){}}(),T=k?k.isBuffer:void 0,L=Math.max,V=Date.now,R=ct(c,"Map"),C=ct(Object,"create"),N=function(){function t(){}return function(e){if(!gt(e))return{};if($)return $(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();function W(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function q(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function G(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}function K(t){var e=this.__data__=new q(t);this.size=e.size}function H(t,e){var r=yt(t),n=!r&&_t(t),o=!r&&!n&&vt(t),i=!r&&!n&&!o&&mt(t),a=r||n||o||i,u=a?function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}(t.length,String):[],c=u.length;for(var s in t)!e&&!A.call(t,s)||a&&("length"==s||o&&("offset"==s||"parent"==s)||i&&("buffer"==s||"byteLength"==s||"byteOffset"==s)||st(s,c))||u.push(s);return u}function J(t,e,r){(void 0!==r&&!pt(t[e],r)||void 0===r&&!(e in t))&&Y(t,e,r)}function Q(t,e,r){var n=t[e];A.call(t,e)&&pt(n,r)&&(void 0!==r||e in t)||Y(t,e,r)}function X(t,e){for(var r=t.length;r--;)if(pt(t[r][0],e))return r;return-1}function Y(t,e,r){"__proto__"==e&&D?D(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}W.prototype.clear=function(){this.__data__=C?C(null):{},this.size=0},W.prototype.delete=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e},W.prototype.get=function(t){var e=this.__data__;if(C){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return A.call(e,t)?e[t]:void 0},W.prototype.has=function(t){var e=this.__data__;return C?void 0!==e[t]:A.call(e,t)},W.prototype.set=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=C&&void 0===e?"__lodash_hash_undefined__":e,this},q.prototype.clear=function(){this.__data__=[],this.size=0},q.prototype.delete=function(t){var e=this.__data__,r=X(e,t);return r>=0&&(r==e.length-1?e.pop():I.call(e,r,1),--this.size,!0)},q.prototype.get=function(t){var e=this.__data__,r=X(e,t);return 0>r?void 0:e[r][1]},q.prototype.has=function(t){return X(this.__data__,t)>-1},q.prototype.set=function(t,e){var r=this.__data__,n=X(r,t);return 0>n?(++this.size,r.push([t,e])):r[n][1]=e,this},G.prototype.clear=function(){this.size=0,this.__data__={hash:new W,map:new(R||q),string:new W}},G.prototype.delete=function(t){var e=ut(this,t).delete(t);return this.size-=e?1:0,e},G.prototype.get=function(t){return ut(this,t).get(t)},G.prototype.has=function(t){return ut(this,t).has(t)},G.prototype.set=function(t,e){var r=ut(this,t),n=r.size;return r.set(t,e),this.size+=r.size==n?0:1,this},K.prototype.clear=function(){this.__data__=new q,this.size=0},K.prototype.delete=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r},K.prototype.get=function(t){return this.__data__.get(t)},K.prototype.has=function(t){return this.__data__.has(t)},K.prototype.set=function(t,e){var r=this.__data__;if(r instanceof q){var n=r.__data__;if(!R||199>n.length)return n.push([t,e]),this.size=++r.size,this;r=this.__data__=new G(n)}return r.set(t,e),this.size=r.size,this};var Z,tt=function(t,e,r){for(var n=-1,o=Object(t),i=r(t),a=i.length;a--;){var u=i[Z?a:++n];if(!1===e(o[u],u,o))break}return t};function et(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":B&&B in Object(t)?function(t){var e=A.call(t,B),r=t[B];try{t[B]=void 0;var n=!0}catch(t){}var o=S.call(t);n&&(e?t[B]=r:delete t[B]);return o}(t):function(t){return S.call(t)}(t)}function rt(t){return wt(t)&&"[object Arguments]"==et(t)}function nt(t){return!(!gt(t)||function(t){return!!O&&O in t}(t))&&(dt(t)?x:n).test(function(t){if(null!=t){try{return m.call(t)}catch(t){}try{return t+""}catch(t){}}return""}(t))}function ot(t){if(!gt(t))return function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}(t);var e=ft(t),r=[];for(var n in t)("constructor"!=n||!e&&A.call(t,n))&&r.push(n);return r}function it(t,e,r,n,o){t!==e&&tt(e,(function(i,a){if(o||(o=new K),gt(i))!function(t,e,r,n,o,i,a){var u=lt(t,r),c=lt(e,r),s=a.get(c);if(s)return void J(t,r,s);var f=i?i(u,c,r+"",t,e,a):void 0,l=void 0===f;if(l){var h=yt(c),p=!h&&vt(c),_=!h&&!p&&mt(c);f=c,h||p||_?yt(u)?f=u:wt(j=u)&&bt(j)?f=function(t,e){var r=-1,n=t.length;e||(e=Array(n));for(;++r<n;)e[r]=t[r];return e}(u):p?(l=!1,f=function(t,e){if(e)return t.slice();var r=t.length,n=P?P(r):new t.constructor(r);return t.copy(n),n}(c,!0)):_?(l=!1,y=c,b=!0?(new F(d=new(v=y.buffer).constructor(v.byteLength)).set(new F(v)),d):y.buffer,f=new y.constructor(b,y.byteOffset,y.length)):f=[]:function(t){if(!wt(t)||"[object Object]"!=et(t))return!1;var e=U(t);if(null===e)return!0;var r=A.call(e,"constructor")&&e.constructor;return"function"==typeof r&&r instanceof r&&m.call(r)==z}(c)||_t(c)?(f=u,_t(u)?f=function(t){return function(t,e,r,n){var o=!r;r||(r={});var i=-1,a=e.length;for(;++i<a;){var u=e[i],c=n?n(r[u],t[u],u,r,t):void 0;void 0===c&&(c=t[u]),o?Y(r,u,c):Q(r,u,c)}return r}(t,At(t))}(u):gt(u)&&!dt(u)||(f=function(t){return"function"!=typeof t.constructor||ft(t)?{}:N(U(t))}(c))):l=!1}var y,b,v,d;var j;l&&(a.set(c,f),o(f,c,n,i,a),a.delete(c));J(t,r,f)}(t,e,a,r,it,n,o);else{var u=n?n(lt(t,a),i,a+"",t,e,o):void 0;void 0===u&&(u=i),J(t,a,u)}}),At)}function at(t,e){return ht(function(t,e,r){return e=L(void 0===e?t.length-1:e,0),function(){for(var n=arguments,o=-1,i=L(n.length-e,0),a=Array(i);++o<i;)a[o]=n[e+o];o=-1;for(var u=Array(e+1);++o<e;)u[o]=n[o];return u[e]=r(a),y(t,this,u)}}(t,e,zt),t+"")}function ut(t,e){var r,n,o=t.__data__;return("string"==(n=typeof(r=e))||"number"==n||"symbol"==n||"boolean"==n?"__proto__"!==r:null===r)?o["string"==typeof e?"string":"hash"]:o.map}function ct(t,e){var r=function(t,e){return null==t?void 0:t[e]}(t,e);return nt(r)?r:void 0}function st(t,e){var r=typeof t;return!!(e=null==e?9007199254740991:e)&&("number"==r||"symbol"!=r&&o.test(t))&&t>-1&&t%1==0&&e>t}function ft(t){var e=t&&t.constructor;return t===("function"==typeof e&&e.prototype||g)}function lt(t,e){if(("constructor"!==e||"function"!=typeof t[e])&&"__proto__"!=e)return t[e]}var ht=function(t){var e=0,r=0;return function(){var n=V(),o=16-(n-r);if(r=n,o>0){if(++e>=800)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}(D?function(t,e){return D(t,"toString",{configurable:!0,enumerable:!1,value:(r=e,function(){return r}),writable:!0});var r}:zt);function pt(t,e){return t===e||t!=t&&e!=e}var _t=rt(function(){return arguments}())?rt:function(t){return wt(t)&&A.call(t,"callee")&&!M.call(t,"callee")},yt=Array.isArray;function bt(t){return null!=t&&jt(t.length)&&!dt(t)}var vt=T||function(){return!1};function dt(t){if(!gt(t))return!1;var e=et(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}function jt(t){return"number"==typeof t&&t>-1&&t%1==0&&9007199254740991>=t}function gt(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}function wt(t){return null!=t&&"object"==typeof t}var mt=_?function(t){return function(e){return t(e)}}(_):function(t){return wt(t)&&jt(t.length)&&!!i[et(t)]};function At(t){return bt(t)?H(t,!0):ot(t)}var Ot,St=(Ot=function(t,e,r,n){it(t,e,r,n)},at((function(t,e){var r=-1,n=e.length,o=n>1?e[n-1]:void 0,i=n>2?e[2]:void 0;for(o=Ot.length>3&&"function"==typeof o?(n--,o):void 0,i&&function(t,e,r){if(!gt(r))return!1;var n=typeof e;return!!("number"==n?bt(r)&&st(e,r.length):"string"==n&&e in r)&&pt(r[e],t)}(e[0],e[1],i)&&(o=3>n?void 0:o,n=1),t=Object(t);++r<n;){var a=e[r];a&&Ot(t,a,r,o)}return t})));function zt(t){return t}e.exports=St})),i=function(t){var e=t.storage,r=t.bufferLife,n=t.reducer,o=t.initialState,i=t.enhancer,a=t.chrome,u=t.proxy;this.createStore=t.createStore,this.storage=e,this.reducer=n,this.enhancer=i,this.buffLife=r?Math.min(Math.max(r,0),2e3):100,this.state=o,this.buffStore=this.buffState0=null,this.listeners=[],this.dispatch=this.dispatch.bind(this),this.subscribe=this.subscribe.bind(this),this.proxy=u,this.chrome=a};i.prototype.init=function(){var t=this,e=this.state;this.state=null;var r=this.createStore(this.reducer,void 0,this.enhancer).getState();return this.storage.subscribe((function(e){if(!n(e,t.state)){t.setState(e);for(var r=0,o=t.listeners;o.length>r;r+=1){(0,o[r])()}}})),this.proxy||this.chrome.runtime.onMessage.addListener((function(e,r,n){"reduxedstorage.dispatch"===e.type&&t.dispatch(e.payload)})),new Promise((function(i){t.storage.load((function(a){var u=function(t,e){return"object"!=typeof t||Array.isArray(t)?e:o({},t,e,(function(t,e){return Array.isArray(t)?e:void 0}))},c=a?u(r,a):r;e&&(c=u(c,e)),t.setState(c),n(c,a)||t.storage.save(c),i(t)}))}))},i.prototype.setState=function(t){t&&(this.state=r(t))},i.prototype.getState=function(){return this.state},i.prototype.subscribe=function(t){var e=this;return"function"==typeof t&&this.listeners.push(t),function(){"function"==typeof t&&(e.listeners=e.listeners.filter((function(e){return e!==t})))}},i.prototype.dispatch=function(t){var e=this;if(!this.proxy)return this.buffStore||(this.buffStore=this.createStore(this.reducer,this.state,this.enhancer),this.buffState0=this.buffStore.getState(),setTimeout((function(){e.buffStore=null}),this.buffLife)),this.buffStore.subscribe((function(){var t=e.buffStore.getState();n(t,e.buffState0)||(e.storage.save(t),e.buffState0=t)})),this.buffStore.dispatch(t);chrome.runtime.sendMessage({type:"reduxedstorage.dispatch",payload:t})};var a=function(t){var e=t.area,r=t.key;this.chrome=t.chrome,this.key=r,this.areaName="local"===e?"local":"sync",this.areaApi=this.chrome.storage[this.areaName],this.listeners=[]};return a.prototype.init=function(){var t=this;this.chrome.storage.onChanged.addListener((function(e,r){if(r===t.areaName&&t.key in e){var n=e[t.key].newValue;if(n)for(var o=0,i=t.listeners;i.length>o;o+=1){(0,i[o])(n)}}}))},a.prototype.subscribe=function(t){"function"==typeof t&&this.listeners.push(t)},a.prototype.load=function(t){var e=this;"function"==typeof t&&this.areaApi.get(this.key,(function(r){t(!e.chrome.runtime.lastError&&r&&r[e.key])}))},a.prototype.save=function(t){var e;this.areaApi.set(((e={})[this.key]=t,e))},function(t){var e=t.createStore,r=t.storageArea,n=t.storageKey,o=t.bufferLife,u=t.proxy,c="Missing or invalid argument";if(!function(t){if("function"!=typeof t)return!1;try{var e=t((function(t){return t||{}}));return"object"==typeof e&&"function"==typeof e.getState&&"function"==typeof e.dispatch}catch(t){return!1}}(e))throw Error("(Factory) "+c+": createStore");var s=new a({chrome:chrome,area:r,key:n||"reduxed"});return s.init(),function(t,r,n){if("function"!=typeof t)throw Error("(StoreCreator) "+c+": reducer");return new i({createStore:e,storage:s,bufferLife:o,reducer:t,initialState:r,enhancer:n,chrome:chrome,proxy:u}).init()}}}));