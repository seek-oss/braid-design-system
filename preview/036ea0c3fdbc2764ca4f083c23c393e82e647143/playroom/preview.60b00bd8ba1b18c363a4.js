(self.webpackChunksite=self.webpackChunksite||[]).push([[685],{8813:(e,t,r)=>{"use strict";r.d(t,{A:()=>d});var n=r(7378),o=r(8452),i=r(4905),c=(r(1516),r(4044),r(6106));function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,b(n.key),n)}}function l(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(l=function(){return!!e})()}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function b(e){var t=function(e){if("object"!=u(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==u(t)?t:t+""}var d=function(e){function t(){var e,r,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,c=new Array(i),a=0;a<i;a++)c[a]=arguments[a];return e=function(e,t,r){return t=s(t),function(e,t){if(t&&("object"==u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,l()?Reflect.construct(t,r||[],s(e).constructor):t.apply(e,r))}(this,t,[].concat(c)),r=e,o={error:null,invalidCode:null,errorInfo:null},(n=b(n="state"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(t,e),r=t,(n=[{key:"componentDidCatch",value:function(e,t){var r=this.props.code,n=void 0===r?null:r;this.setState({invalidCode:n,error:e,errorInfo:t})}},{key:"render",value:function(){var e,t,r=this.state,n=r.invalidCode,u=r.error,a=r.errorInfo,l=this.props,s=l.code,f=l.children;if(s!==n||!u)return f;var b=null!==(e=null==a||null===(t=a.componentStack)||void 0===t?void 0:t.split("\n").filter((function(e){return/RenderCode/.test(e)})).map((function(e){return e.replace(/ \(created by .*/g,"")})))&&void 0!==e?e:[],d=b.slice(0,b.length-1);return(0,c.jsx)("div",{className:"_1obz4xrt _1obz4xru _1obz4xrv _1obz4xrw _1obz4xr1y _1obz4xr28 _1obz4xr2i _1obz4xr2s _1obz4xrs _1obz4xr44",children:(0,c.jsxs)(o.E,{size:"large",tone:"critical",children:[(0,c.jsx)(i.O,{children:u.message}),d.map((function(e,t){return(0,c.jsx)("span",{children:e},t)}))]})})}}])&&a(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(n.Component)},1798:(e,t,r)=>{"use strict";r.d(t,{A:()=>N});var n=r(7378),o=r(5347),i=r.n(o),c=(r(6389),r(4831)),u=r(1178),a=r(8674),l=r(7662);const{grid:s,space:f,touchableSize:b,contentWidth:d,backgroundColor:{surfaceDark:p,bodyDark:y,...m},foregroundColor:v,textWeight:h,borderColor:w,borderRadius:g,borderWidth:j,shadow:O}=a.f,x={grid:s,space:f,touchableSize:b,contentWidth:d,backgroundColor:m,foregroundColor:v,textWeight:h,borderColor:w,borderRadius:g,borderWidth:j,shadow:O};function _(e){return(0,l.F)(e)}var S=r(4473),P=r(8439),z=r(7241);const E=function(){const e=(0,c.t)(),[t,r]=(0,n.useState)("lightMode");return(0,n.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)"attributes"===t.type&&"class"===t.attributeName&&r(document.documentElement.classList.contains(z.gW)?"darkMode":"lightMode")}));return e.observe(document.documentElement,{attributes:!0}),()=>{e.disconnect()}}),[t]),{vars:x,atoms:_,breakpoints:S.f,showToast:(0,u.d)(),responsiveValue:function(t){Object.values(t).forEach((e=>{if(null===e)throw new Error("You cannot use 'null' as a value when using 'responsiveValue'.")}));const r=e(t);return null===r?t.mobile:r},colorModeValue:function(e){if("object"==typeof e&&(e.darkMode||e.lightMode))return document.documentElement.classList.contains(z.gW)?e.darkMode:e.lightMode},...(0,P.Im)()}};var C=r(722);function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){D(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function D(e,t,r){return(t=function(e){var t=function(e){if("object"!=k(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=k(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==k(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function N(e){var t,r=e.code,o=e.scope,c=A(A({},null!==(t=E())&&void 0!==t?t:{}),o);if(C.u6 in c)throw new Error("'".concat(C.u6,"' is used internally by Playroom and is not allowed in scope"));if(C._ in c)throw new Error("'".concat(C._,"' is used internally by Playroom and is not allowed in scope"));return i()(r,A(A({},c),{},D(D({React:n},C.u6,n.createElement),C._,n.Fragment)))}},701:(e,t,r)=>{var n=r(5300);e.exports=n.default||n},3484:(e,t,r)=>{"use strict";var n={};r.r(n),r.d(n,{animationDelay:()=>p,animationDuration:()=>y,animationIterationCount:()=>m,hideSplash:()=>v,root:()=>h,size:()=>w,trace:()=>g});var o=r(8213),i=r(306),c=r.n(i),u=r(6420),a=r(722),l=r(7378),s=r(3698),f=r.n(s),b=r(6106),d=function(e){var t=e.size,r=void 0===t?100:t;return(0,b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 390 290",focusable:"false",width:r,children:(0,b.jsx)("path",{d:"M385,285H5V179.42H385ZM92.51,5H5V179.42H92.51ZM210.45,5H92.51V179.42H210.45ZM385,5H210.45V179.42H385Z",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"4"})})},p=(r(1516),r(4044),500),y=1300,m=2,v="_1obz4xr4j _1obz4xr4f",h="eqaewt1 _1obz4xrt _1obz4xru _1obz4xrv _1obz4xrw _1obz4xrs _1obz4xry _1obz4xr1f _1obz4xr19 _1obz4xr4y _1obz4xr4b",w="eqaewt5",g="eqaewt3";function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function O(e,t,r){return(t=function(e){var t=function(e){if("object"!=j(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==j(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var _=y,S=p,P=m,z=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(n,["animationDuration","animationDelay","animationIterationCount"]);const E=function(){var e,t,r=(e=(0,l.useState)(!1),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,c,u=[],a=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(u.push(n.value),u.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(l)throw o}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return x(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?x(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=r[0],o=r[1];return(0,l.useEffect)((function(){var e=setTimeout((function(){return o(!0)}),S+_*P);return function(){return clearTimeout(e)}}),[]),(0,b.jsx)("div",{className:f()(z.root,O({},z.hideSplash,n)),"data-testid":"splashscreen",children:(0,b.jsx)("div",{className:f()(z.trace,z.size),children:(0,b.jsx)(d,{size:"100%"})})})};var C=r(8813),k=r(1798),M=r(9629);const A=function(e){var t=e.themes,r=e.components,n=e.FrameComponent,o=(0,u.g)((function(e){var t=e.get("code");if(t){var r,n=JSON.parse(null!==(r=c().decompressFromEncodedURIComponent(String(t)))&&void 0!==r?r:"");return{code:(0,a.hr)(n.code),themeName:n.theme,title:n.title}}return{}})),i=o.themeName,l=o.code,s=o.title,f=i?t[i]:null;return(0,b.jsxs)(C.A,{code:l,children:[(0,b.jsx)(M.m,{children:(0,b.jsx)("title",{children:s?"".concat(s," | Playroom Preview"):"Playroom Preview"})}),(0,b.jsx)("div",{className:"_1obz4xrr _1obz4xr4k",children:(0,b.jsx)(n,{themeName:i||"__PLAYROOM__NO_THEME__",theme:f,children:(0,b.jsx)(k.A,{code:l,scope:r})})}),(0,b.jsx)("div",{className:"_1obz4xrr _1obz4xr4l",children:(0,b.jsx)(E,{})})]})};var D=document.createElement("div");document.body.appendChild(D),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.themes,n=void 0===t?r(371):t,i=e.components,c=void 0===i?r(2517):i,u=e.FrameComponent,a=void 0===u?r(701):u;(0,o.d)((0,b.jsx)(A,{components:c,themes:n,FrameComponent:a}),D)}()},5347:function(e){(function(){var t={}.hasOwnProperty,r=[].slice;e.exports=function(e,n){var o,i,c,u;for(o in i=[],u=[],n)t.call(n,o)&&(c=n[o],"this"!==o&&(i.push(o),u.push(c)));return Function.apply(null,r.call(i).concat(["return eval("+JSON.stringify(e)+")"])).apply(n.this,u)}}).call(this)}},e=>{e.O(0,[334,744,107],(()=>e(e.s=3484))),e.O()}]);