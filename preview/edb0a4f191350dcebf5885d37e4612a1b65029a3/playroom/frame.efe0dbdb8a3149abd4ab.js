(self.webpackChunksite=self.webpackChunksite||[]).push([[18],{8813:(e,t,r)=>{"use strict";r.d(t,{A:()=>p});var o=r(7378),n=r(8452),i=r(4905),c=(r(1516),r(4044),r(6106));function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function a(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,d(o.key),o)}}function l(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(l=function(){return!!e})()}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function d(e){var t=function(e){if("object"!=u(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==u(t)?t:t+""}var p=function(e){function t(){var e,r,o,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,c=new Array(i),a=0;a<i;a++)c[a]=arguments[a];return e=function(e,t,r){return t=s(t),function(e,t){if(t&&("object"==u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,l()?Reflect.construct(t,r||[],s(e).constructor):t.apply(e,r))}(this,t,[].concat(c)),r=e,n={error:null,invalidCode:null,errorInfo:null},(o=d(o="state"))in r?Object.defineProperty(r,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[o]=n,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(t,e),r=t,(o=[{key:"componentDidCatch",value:function(e,t){var r=this.props.code,o=void 0===r?null:r;this.setState({invalidCode:o,error:e,errorInfo:t})}},{key:"render",value:function(){var e,t,r=this.state,o=r.invalidCode,u=r.error,a=r.errorInfo,l=this.props,s=l.code,f=l.children;if(s!==o||!u)return f;var d=null!==(e=null==a||null===(t=a.componentStack)||void 0===t?void 0:t.split("\n").filter((function(e){return/RenderCode/.test(e)})).map((function(e){return e.replace(/ \(created by .*/g,"")})))&&void 0!==e?e:[],p=d.slice(0,d.length-1);return(0,c.jsx)("div",{className:"_1obz4xrt _1obz4xru _1obz4xrv _1obz4xrw _1obz4xr1y _1obz4xr28 _1obz4xr2i _1obz4xr2s _1obz4xrs _1obz4xr44",children:(0,c.jsxs)(n.E,{size:"large",tone:"critical",children:[(0,c.jsx)(i.O,{children:u.message}),p.map((function(e,t){return(0,c.jsx)("span",{children:e},t)}))]})})}}])&&a(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,o}(o.Component)},1798:(e,t,r)=>{"use strict";r.d(t,{A:()=>R});var o=r(7378),n=r(5347),i=r.n(n),c=(r(6389),r(4831)),u=r(1178),a=r(8674),l=r(7662);const{grid:s,space:f,touchableSize:d,contentWidth:p,backgroundColor:{surfaceDark:b,bodyDark:y,...m},foregroundColor:v,textWeight:h,borderColor:g,borderRadius:O,borderWidth:w,shadow:j}=a.f,_={grid:s,space:f,touchableSize:d,contentWidth:p,backgroundColor:m,foregroundColor:v,textWeight:h,borderColor:g,borderRadius:O,borderWidth:w,shadow:j};function P(e){return(0,l.F)(e)}var x=r(4473),S=r(8439),E=r(7241);const C=function(){const e=(0,c.t)(),[t,r]=(0,o.useState)("lightMode");return(0,o.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)"attributes"===t.type&&"class"===t.attributeName&&r(document.documentElement.classList.contains(E.gW)?"darkMode":"lightMode")}));return e.observe(document.documentElement,{attributes:!0}),()=>{e.disconnect()}}),[t]),{vars:_,atoms:P,breakpoints:x.f,showToast:(0,u.d)(),responsiveValue:function(t){Object.values(t).forEach((e=>{if(null===e)throw new Error("You cannot use 'null' as a value when using 'responsiveValue'.")}));const r=e(t);return null===r?t.mobile:r},colorModeValue:function(e){if("object"==typeof e&&(e.darkMode||e.lightMode))return document.documentElement.classList.contains(E.gW)?e.darkMode:e.lightMode},...(0,S.Im)()}};var k=r(722);function z(e){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z(e)}function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){N(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function N(e,t,r){return(t=function(e){var t=function(e){if("object"!=z(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=z(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==z(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function R(e){var t,r=e.code,n=e.scope,c=D(D({},null!==(t=C())&&void 0!==t?t:{}),n);if(k.u6 in c)throw new Error("'".concat(k.u6,"' is used internally by Playroom and is not allowed in scope"));if(k._ in c)throw new Error("'".concat(k._,"' is used internally by Playroom and is not allowed in scope"));return i()(r,D(D({},c),{},N(N({React:o},k.u6,o.createElement),k._,o.Fragment)))}},3518:(e,t,r)=>{"use strict";var o=r(8213),n=r(6420),i=r(8813),c=r(1798),u=r(6106);function a(e){var t=e.themes,r=e.components,o=e.FrameComponent,a=(0,n.g)((function(e){return{themeName:e.get("themeName")||"",code:e.get("code")||""}})),l=a.themeName,s=a.code,f="__PLAYROOM__NO_THEME__"===l?null:l,d=f?t[f]:null;return(0,u.jsx)(i.A,{code:s,children:(0,u.jsx)(o,{themeName:f,theme:d,children:(0,u.jsx)(c.A,{code:s,scope:r})})})}var l=document.createElement("div");document.body.appendChild(l),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.themes,n=void 0===t?r(371):t,i=e.components,c=void 0===i?r(2517):i,s=e.FrameComponent,f=void 0===s?r(701):s;(0,o.d)((0,u.jsx)(a,{components:c,themes:n,FrameComponent:f}),l)}()},701:(e,t,r)=>{var o=r(5300);e.exports=o.default||o},5347:function(e){(function(){var t={}.hasOwnProperty,r=[].slice;e.exports=function(e,o){var n,i,c,u;for(n in i=[],u=[],o)t.call(o,n)&&(c=o[n],"this"!==n&&(i.push(n),u.push(c)));return Function.apply(null,r.call(i).concat(["return eval("+JSON.stringify(e)+")"])).apply(o.this,u)}}).call(this)}},e=>{e.O(0,[334,107],(()=>e(e.s=3518))),e.O()}]);