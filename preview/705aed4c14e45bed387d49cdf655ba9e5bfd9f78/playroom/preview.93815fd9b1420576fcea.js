(self.webpackChunksite=self.webpackChunksite||[]).push([[685],{2556:(e,t,r)=>{"use strict";r.d(t,{A:()=>I});var n=r(7378),o=r(5347),i=r.n(o),c=(r(5148),r(7831)),u=r(33);const{grid:a,space:l,touchableSize:s,contentWidth:f,backgroundColor:{surfaceDark:d,bodyDark:p,...y},foregroundColor:m,textWeight:b,borderColor:v,borderRadius:h,borderWidth:w,shadow:j}=u.f,g={grid:a,space:l,touchableSize:s,contentWidth:f,backgroundColor:y,foregroundColor:m,textWeight:b,borderColor:v,borderRadius:h,borderWidth:w,shadow:j};function O(e){return(0,c.F)(e)}var _=r(6444),S=r(6621),P=r(3225),x=r(3922),E=r(1781);const C=function(){const e=(0,S.t)(),[t,r]=(0,n.useState)("lightMode");return(0,n.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)"attributes"===t.type&&"class"===t.attributeName&&r(document.documentElement.classList.contains(E.gW)?"darkMode":"lightMode")}));return e.observe(document.documentElement,{attributes:!0}),()=>{e.disconnect()}}),[t]),{vars:g,atoms:O,breakpoints:_.f,showToast:(0,P.d)(),responsiveValue:function(t){Object.values(t).forEach((e=>{if(null===e)throw new Error("You cannot use 'null' as a value when using 'responsiveValue'.")}));const r=e(t);return null===r?t.mobile:r},colorModeValue:function(e){if("object"==typeof e&&(e.darkMode||e.lightMode))return document.documentElement.classList.contains(E.gW)?e.darkMode:e.lightMode},...(0,x.Im)()}};var k=r(5527);function M(e){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(e)}function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){N(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function N(e,t,r){return(t=function(e){var t=function(e){if("object"!=M(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=M(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==M(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function I(e){var t,r=e.code,o=e.scope,c=D(D({},null!==(t=C())&&void 0!==t?t:{}),o);if(k.u6 in c)throw new Error("'".concat(k.u6,"' is used internally by Playroom and is not allowed in scope"));if(k._ in c)throw new Error("'".concat(k._,"' is used internally by Playroom and is not allowed in scope"));return i()(r,D(D({},c),{},N(N({React:n},k.u6,n.createElement),k._,n.Fragment)))}},3018:(e,t,r)=>{"use strict";r.d(t,{A:()=>p});var n=r(7378),o=r(629),i=r(4162),c=(r(3832),r(7460),r(6106));function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,d(n.key),n)}}function l(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(l=function(){return!!e})()}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function d(e){var t=function(e){if("object"!=u(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==u(t)?t:t+""}var p=function(e){function t(){var e,r,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,c=new Array(i),a=0;a<i;a++)c[a]=arguments[a];return e=function(e,t,r){return t=s(t),function(e,t){if(t&&("object"==u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,l()?Reflect.construct(t,r||[],s(e).constructor):t.apply(e,r))}(this,t,[].concat(c)),r=e,o={error:null,invalidCode:null,errorInfo:null},(n=d(n="state"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(t,e),r=t,(n=[{key:"componentDidCatch",value:function(e,t){var r=this.props.code,n=void 0===r?null:r;this.setState({invalidCode:n,error:e,errorInfo:t})}},{key:"render",value:function(){var e,t,r=this.state,n=r.invalidCode,u=r.error,a=r.errorInfo,l=this.props,s=l.code,f=l.children;if(s!==n||!u)return f;var d=null!==(e=null==a||null===(t=a.componentStack)||void 0===t?void 0:t.split("\n").filter((function(e){return/RenderCode/.test(e)})).map((function(e){return e.replace(/ \(created by .*/g,"")})))&&void 0!==e?e:[],p=d.slice(0,d.length-1);return(0,c.jsx)("div",{className:"_1n74c98t _1n74c98u _1n74c98v _1n74c98w _1n74c981y _1n74c9828 _1n74c982i _1n74c982s _1n74c98s _1n74c9844",children:(0,c.jsxs)(o.E,{size:"large",tone:"critical",children:[(0,c.jsx)(i.O,{children:u.message}),p.map((function(e,t){return(0,c.jsx)("span",{children:e},t)}))]})})}}])&&a(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(n.Component)},5006:(e,t,r)=>{"use strict";var n={};r.r(n),r.d(n,{animationDelay:()=>y,animationDuration:()=>m,animationIterationCount:()=>b,hideSplash:()=>v,root:()=>h,size:()=>w,trace:()=>j});var o=r(2712),i=r(306),c=r.n(i),u=r(9872),a=r(5527),l=r(7378),s=r(3698),f=r.n(s),d=r(6106),p=function(e){var t=e.size,r=void 0===t?100:t;return(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 390 290",focusable:"false",width:r,children:(0,d.jsx)("path",{d:"M385,285H5V179.42H385ZM92.51,5H5V179.42H92.51ZM210.45,5H92.51V179.42H210.45ZM385,5H210.45V179.42H385Z",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"4"})})},y=(r(3832),r(7460),500),m=1300,b=2,v="_1n74c984j _1n74c984f",h="_5dj76s1 _1n74c98t _1n74c98u _1n74c98v _1n74c98w _1n74c98s _1n74c98y _1n74c981f _1n74c9819 _1n74c984y _1n74c984b",w="_5dj76s5",j="_5dj76s3";function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function O(e,t,r){return(t=function(e){var t=function(e){if("object"!=g(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=g(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==g(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var S=m,P=y,x=b,E=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(-1!==t.indexOf(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],-1===t.indexOf(r)&&{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(n,["animationDuration","animationDelay","animationIterationCount"]);const C=function(){var e,t,r=(e=(0,l.useState)(!1),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,c,u=[],a=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(u.push(n.value),u.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(l)throw o}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=r[0],o=r[1];return(0,l.useEffect)((function(){var e=setTimeout((function(){return o(!0)}),P+S*x);return function(){return clearTimeout(e)}}),[]),(0,d.jsx)("div",{className:f()(E.root,O({},E.hideSplash,n)),"data-testid":"splashscreen",children:(0,d.jsx)("div",{className:f()(E.trace,E.size),children:(0,d.jsx)(p,{size:"100%"})})})};var k=r(3018),M=r(2556),A=r(9629);const D=function(e){var t=e.themes,r=e.components,n=e.FrameComponent,o=(0,u.g)((function(e){var t=e.get("code");if(t){var r,n=JSON.parse(null!==(r=c().decompressFromEncodedURIComponent(String(t)))&&void 0!==r?r:"");return{code:(0,a.hr)(n.code),themeName:n.theme,title:n.title}}return{}})),i=o.themeName,l=o.code,s=o.title,f=i?t[i]:null;return(0,d.jsxs)(k.A,{code:l,children:[(0,d.jsx)(A.m,{children:(0,d.jsx)("title",{children:s?"".concat(s," | Playroom Preview"):"Playroom Preview"})}),(0,d.jsx)("div",{className:"_1n74c98r _1n74c984k",children:(0,d.jsx)(n,{themeName:i||"__PLAYROOM__NO_THEME__",theme:f,children:(0,d.jsx)(M.A,{code:l,scope:r})})}),(0,d.jsx)("div",{className:"_1n74c98r _1n74c984l",children:(0,d.jsx)(C,{})})]})};var N=r(9705),I=r(8575),T=document.createElement("div");document.body.appendChild(T);var H=document.head.querySelector('link[rel="icon"]'),R=window.matchMedia("(prefers-color-scheme: dark)").matches?I:N,W="../".concat(R);H&&H.setAttribute("href",W),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.themes,n=void 0===t?r(4626):t,i=e.components,c=void 0===i?r(4360):i,u=e.FrameComponent,a=void 0===u?r(5387):u;(0,o.d)((0,d.jsx)(D,{components:c,themes:n,FrameComponent:a}),T)}()},5347:function(e){(function(){var t={}.hasOwnProperty,r=[].slice;e.exports=function(e,n){var o,i,c,u;for(o in i=[],u=[],n)t.call(n,o)&&(c=n[o],"this"!==o&&(i.push(o),u.push(c)));return Function.apply(null,r.call(i).concat(["return eval("+JSON.stringify(e)+")"])).apply(n.this,u)}}).call(this)},5387:(e,t,r)=>{var n=r(3069);e.exports=n.default||n}},e=>{e.O(0,[512,996,19],(()=>e(e.s=5006))),e.O()}]);