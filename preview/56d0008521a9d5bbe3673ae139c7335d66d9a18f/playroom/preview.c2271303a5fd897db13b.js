(self.webpackChunksite=self.webpackChunksite||[]).push([[685],{377:(e,t,r)=>{"use strict";r.d(t,{A:()=>I});var n=r(7378),o=r(5347),i=r.n(o),c=(r(5148),r(7831)),u=r(33);const{grid:a,space:l,touchableSize:s,contentWidth:f,backgroundColor:{surfaceDark:h,bodyDark:d,...p},foregroundColor:y,textWeight:m,borderColor:b,borderRadius:v,borderWidth:w,shadow:g}=u.f,j={grid:a,space:l,touchableSize:s,contentWidth:f,backgroundColor:p,foregroundColor:y,textWeight:m,borderColor:b,borderRadius:v,borderWidth:w,shadow:g};function x(e){return(0,c.F)(e)}var O=r(6444),k=r(6621),_=r(3225),S=r(3922),P=r(4162);const E=function(){const e=(0,k.t)(),[t,r]=(0,n.useState)("lightMode");return(0,n.useEffect)((()=>{const e=new MutationObserver((e=>{for(const t of e)"attributes"===t.type&&"class"===t.attributeName&&r(document.documentElement.classList.contains(P.gW)?"darkMode":"lightMode")}));return e.observe(document.documentElement,{attributes:!0}),()=>{e.disconnect()}}),[t]),{vars:j,atoms:x,breakpoints:O.f,showToast:(0,_.d)(),responsiveValue:function(t){Object.values(t).forEach((e=>{if(null===e)throw new Error("You cannot use 'null' as a value when using 'responsiveValue'.")}));const r=e(t);return null===r?t.mobile:r},colorModeValue:function(e){if("object"==typeof e&&(e.darkMode||e.lightMode))return document.documentElement.classList.contains(P.gW)?e.darkMode:e.lightMode},...(0,S.Im)()}};var C=r(7666);function M(e){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(e)}function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){N(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function N(e,t,r){return(t=function(e){var t=function(e){if("object"!=M(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=M(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==M(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function I(e){var t,r=e.code,o=e.scope,c=D(D({},null!==(t=E())&&void 0!==t?t:{}),o);if(C.u6 in c)throw new Error("'".concat(C.u6,"' is used internally by Playroom and is not allowed in scope"));if(C._ in c)throw new Error("'".concat(C._,"' is used internally by Playroom and is not allowed in scope"));return i()(r,D(D({},c),{},N(N({React:n},C.u6,n.createElement),C._,n.Fragment)))}},1118:(e,t,r)=>{"use strict";var n={};r.r(n),r.d(n,{animationDelay:()=>p,animationDuration:()=>y,animationIterationCount:()=>m,hideSplash:()=>b,root:()=>v,size:()=>w,trace:()=>g});var o=r(727),i=r(306),c=r.n(i),u=r(3889),a=r(7666),l=r(7378),s=r(3698),f=r.n(s),h=r(6106),d=function(e){var t=e.size,r=void 0===t?100:t;return(0,h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 390 290",focusable:"false",width:r,children:(0,h.jsx)("path",{d:"M385,285H5V179.42H385ZM92.51,5H5V179.42H92.51ZM210.45,5H92.51V179.42H210.45ZM385,5H210.45V179.42H385Z",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"4"})})},p=(r(173),r(8658),500),y=1300,m=2,b="_1hhkxrh4j _1hhkxrh4f",v="fdlthx1 _1hhkxrht _1hhkxrhu _1hhkxrhv _1hhkxrhw _1hhkxrhs _1hhkxrhy _1hhkxrh1f _1hhkxrh19 _1hhkxrh4y _1hhkxrh4b",w="fdlthx5",g="fdlthx3";function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function x(e,t,r){return(t=function(e){var t=function(e){if("object"!=j(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=j(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==j(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var k=y,_=p,S=m,P=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(-1!==t.indexOf(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],-1===t.indexOf(r)&&{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(n,["animationDuration","animationDelay","animationIterationCount"]);const E=function(){var e,t,r=(e=(0,l.useState)(!1),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,c,u=[],a=!0,l=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(u.push(n.value),u.length!==t);a=!0);}catch(e){l=!0,o=e}finally{try{if(!a&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(l)throw o}}return u}}(e,t)||function(e,t){if(e){if("string"==typeof e)return O(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?O(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=r[0],o=r[1];return(0,l.useEffect)((function(){var e=setTimeout((function(){return o(!0)}),_+k*S);return function(){return clearTimeout(e)}}),[]),(0,h.jsx)("div",{className:f()(P.root,x({},P.hideSplash,n)),"data-testid":"splashscreen",children:(0,h.jsx)("div",{className:f()(P.trace,P.size),children:(0,h.jsx)(d,{size:"100%"})})})};var C=r(2541),M=r(377),A=r(9629);const D=function(e){var t=e.themes,r=e.components,n=e.FrameComponent,o=(0,u.g)((function(e){var t=e.get("code");if(t){var r,n=JSON.parse(null!==(r=c().decompressFromEncodedURIComponent(String(t)))&&void 0!==r?r:"");return{code:(0,a.hr)(n.code),themeName:n.theme,title:n.title}}return{}})),i=o.themeName,l=o.code,s=o.title,f=i?t[i]:null;return(0,h.jsxs)(C.A,{code:l,children:[(0,h.jsx)(A.m,{children:(0,h.jsx)("title",{children:s?"".concat(s," | Playroom Preview"):"Playroom Preview"})}),(0,h.jsx)("div",{className:"_1hhkxrhr _1hhkxrh4k",children:(0,h.jsx)(n,{themeName:i||"__PLAYROOM__NO_THEME__",theme:f,children:(0,h.jsx)(M.A,{code:l,scope:r})})}),(0,h.jsx)("div",{className:"_1hhkxrhr _1hhkxrh4l",children:(0,h.jsx)(E,{})})]})};var N=r(6803),I=r(6424),T=document.createElement("div");document.body.appendChild(T);var H=document.head.querySelector('link[rel="icon"]'),R=window.matchMedia("(prefers-color-scheme: dark)").matches?I:N,W="../".concat(R);H&&H.setAttribute("href",W),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.themes,n=void 0===t?r(5933):t,i=e.components,c=void 0===i?r(2411):i,u=e.FrameComponent,a=void 0===u?r(9087):u;(0,o.d)((0,h.jsx)(D,{components:c,themes:n,FrameComponent:a}),T)}()},2541:(e,t,r)=>{"use strict";r.d(t,{A:()=>d});var n=r(7378),o=r(6232),i=r(525),c=(r(173),r(8658),r(6106));function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,h(n.key),n)}}function l(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(l=function(){return!!e})()}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function f(e,t){return f=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},f(e,t)}function h(e){var t=function(e){if("object"!=u(e)||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=u(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==u(t)?t:t+""}var d=function(e){function t(){var e,r,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,c=new Array(i),a=0;a<i;a++)c[a]=arguments[a];return e=function(e,t,r){return t=s(t),function(e,t){if(t&&("object"==u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,l()?Reflect.construct(t,r||[],s(e).constructor):t.apply(e,r))}(this,t,[].concat(c)),r=e,o={error:null,invalidCode:null,errorInfo:null},(n=h(n="state"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&f(e,t)}(t,e),r=t,(n=[{key:"componentDidCatch",value:function(e,t){var r=this.props.code,n=void 0===r?null:r;this.setState({invalidCode:n,error:e,errorInfo:t})}},{key:"render",value:function(){var e,t,r=this.state,n=r.invalidCode,u=r.error,a=r.errorInfo,l=this.props,s=l.code,f=l.children;if(s!==n||!u)return f;var h=null!==(e=null==a||null===(t=a.componentStack)||void 0===t?void 0:t.split("\n").filter((function(e){return/RenderCode/.test(e)})).map((function(e){return e.replace(/ \(created by .*/g,"")})))&&void 0!==e?e:[],d=h.slice(0,h.length-1);return(0,c.jsx)("div",{className:"_1hhkxrht _1hhkxrhu _1hhkxrhv _1hhkxrhw _1hhkxrh1y _1hhkxrh28 _1hhkxrh2i _1hhkxrh2s _1hhkxrhs _1hhkxrh44",children:(0,c.jsxs)(o.E,{size:"large",tone:"critical",children:[(0,c.jsx)(i.O,{children:u.message}),d.map((function(e,t){return(0,c.jsx)("span",{children:e},t)}))]})})}}])&&a(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(n.Component)},5347:function(e){(function(){var t={}.hasOwnProperty,r=[].slice;e.exports=function(e,n){var o,i,c,u;for(o in i=[],u=[],n)t.call(n,o)&&(c=n[o],"this"!==o&&(i.push(o),u.push(c)));return Function.apply(null,r.call(i).concat(["return eval("+JSON.stringify(e)+")"])).apply(n.this,u)}}).call(this)},9087:(e,t,r)=>{var n=r(3069);e.exports=n.default||n}},e=>{e.O(0,[135,220,19],(()=>e(e.s=1118))),e.O()}]);