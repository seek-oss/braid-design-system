(self.webpackChunksite=self.webpackChunksite||[]).push([[685],{8009:(e,t,r)=>{"use strict";r.d(t,{A:()=>y});var n=r(7378),o=r(4163),i=r(6537),c=(r(2014),r(7077),r(6106));function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,d(n.key),n)}}function u(e,t,r){return t=s(t),function(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,f()?Reflect.construct(t,r||[],s(e).constructor):t.apply(e,r))}function f(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(e){}return(f=function(){return!!e})()}function s(e){return s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},s(e)}function p(e,t){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},p(e,t)}function d(e){var t=function(e,t){if("object"!=l(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==l(t)?t:t+""}var y=function(e){function t(){var e,r,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,c=new Array(i),l=0;l<i;l++)c[l]=arguments[l];return r=e=u(this,t,[].concat(c)),o={error:null,invalidCode:null,errorInfo:null},(n=d(n="state"))in r?Object.defineProperty(r,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[n]=o,e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(t,e),r=t,(n=[{key:"componentDidCatch",value:function(e,t){var r=this.props.code,n=void 0===r?null:r;this.setState({invalidCode:n,error:e,errorInfo:t})}},{key:"render",value:function(){var e,t,r=this.state,n=r.invalidCode,l=r.error,a=r.errorInfo,u=this.props,f=u.code,s=u.children;if(f!==n||!l)return s;var p=null!==(e=null==a||null===(t=a.componentStack)||void 0===t?void 0:t.split("\n").filter((function(e){return/RenderCode/.test(e)})).map((function(e){return e.replace(/ \(created by .*/g,"")})))&&void 0!==e?e:[],d=p.slice(0,p.length-1);return(0,c.jsx)("div",{className:"_1qnlfp1t _1qnlfp1u _1qnlfp1v _1qnlfp1w _1qnlfp11y _1qnlfp128 _1qnlfp12i _1qnlfp12s _1qnlfp1s _1qnlfp144",children:(0,c.jsxs)(o.E,{size:"large",tone:"critical",children:[(0,c.jsx)(i.O,{children:l.message}),d.map((function(e,t){return(0,c.jsx)("span",{children:e},t)}))]})})}}])&&a(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),r;var r,n}(n.Component)},832:(e,t,r)=>{"use strict";r.d(t,{A:()=>T});var n=r(7378),o=r(5347),i=r.n(o),c=(r(1589),r(8752)),l=r(303),a=r(7992),u=r(9720),f=r(9066),s=r(1054),{grid:p,space:d,touchableSize:y,contentWidth:b,backgroundColor:{surfaceDark:m,bodyDark:v},foregroundColor:h,textWeight:O,borderColor:j,borderRadius:w,borderWidth:g,shadow:_}=f.f,P={grid:p,space:d,touchableSize:y,contentWidth:b,backgroundColor:(0,u.A)(f.f.backgroundColor,["surfaceDark","bodyDark"]),foregroundColor:h,textWeight:O,borderColor:j,borderRadius:w,borderWidth:g,shadow:_};function S(e){return(0,s.F)(e)}var x=r(9241),E=r(8775),q=r(9009);function k(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}const C=function(){var e=(0,l.t)(),[t,r]=(0,n.useState)("lightMode");return(0,n.useEffect)((()=>{var e=new MutationObserver((e=>{for(var t of e)"attributes"===t.type&&"class"===t.attributeName&&r(document.documentElement.classList.contains(q.gW)?"darkMode":"lightMode")}));return e.observe(document.documentElement,{attributes:!0}),()=>{e.disconnect()}}),[t]),function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?k(Object(r),!0).forEach((function(t){(0,c.A)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):k(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({vars:P,atoms:S,breakpoints:x.f,showToast:(0,a.d)(),responsiveValue:function(t){Object.values(t).forEach((e=>{if(null===e)throw new Error("You cannot use 'null' as a value when using 'responsiveValue'.")}));var r=e(t);return null===r?t.mobile:r},colorModeValue:function(e){if("object"==typeof e&&(e.darkMode||e.lightMode))return document.documentElement.classList.contains(q.gW)?e.darkMode:e.lightMode}},(0,E.Im)())};var D=r(5513);function M(e){return M="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},M(e)}function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){I(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function I(e,t,r){var n;return n=function(e,t){if("object"!=M(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=M(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t),(t="symbol"==M(n)?n:n+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function T(e){var t,r=e.code,o=e.scope,c=N(N({},null!==(t=C())&&void 0!==t?t:{}),o);if(D.u6 in c)throw new Error("'".concat(D.u6,"' is used internally by Playroom and is not allowed in scope"));if(D._ in c)throw new Error("'".concat(D._,"' is used internally by Playroom and is not allowed in scope"));return i()(r,N(N({},c),{},I(I({React:n},D.u6,n.createElement),D._,n.Fragment)))}},6579:(e,t,r)=>{var n=r(7078);e.exports=n.default||n},8736:(e,t,r)=>{"use strict";var n={};r.r(n),r.d(n,{animationDelay:()=>y,animationDuration:()=>b,animationIterationCount:()=>m,hideSplash:()=>v,root:()=>h,size:()=>O,trace:()=>j});var o=r(2299),i=r(306),c=r.n(i),l=r(7856),a=r(5513),u=r(7378),f=r(6384),s=r.n(f),p=r(6106),d=function(e){var t=e.size,r=void 0===t?100:t;return(0,p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 390 290",focusable:"false",width:r,children:(0,p.jsx)("path",{d:"M385,285H5V179.42H385ZM92.51,5H5V179.42H92.51ZM210.45,5H92.51V179.42H210.45ZM385,5H210.45V179.42H385Z",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"4"})})},y=(r(2014),r(7077),500),b=1300,m=2,v="_1qnlfp14j _1qnlfp14f",h="_6wi71i1 _1qnlfp1t _1qnlfp1u _1qnlfp1v _1qnlfp1w _1qnlfp1s _1qnlfp1y _1qnlfp11f _1qnlfp119 _1qnlfp14y _1qnlfp14b",O="_6wi71i5",j="_6wi71i3";function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function g(e,t,r){var n;return n=function(e,t){if("object"!=w(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=w(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(t),(t="symbol"==w(n)?n:n+"")in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var P=b,S=y,x=m,E=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(n,["animationDuration","animationDelay","animationIterationCount"]);const q=function(){var e,t,r=(e=(0,u.useState)(!1),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,c,l=[],a=!0,u=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;a=!1}else for(;!(a=(n=i.call(r)).done)&&(l.push(n.value),l.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{if(!a&&null!=r.return&&(c=r.return(),Object(c)!==c))return}finally{if(u)throw o}}return l}}(e,t)||function(e,t){if(e){if("string"==typeof e)return _(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),n=r[0],o=r[1];return(0,u.useEffect)((function(){var e=setTimeout((function(){return o(!0)}),S+P*x);return function(){return clearTimeout(e)}}),[]),(0,p.jsx)("div",{className:s()(E.root,g({},E.hideSplash,n)),"data-testid":"splashscreen",children:(0,p.jsx)("div",{className:s()(E.trace,E.size),children:(0,p.jsx)(d,{size:"100%"})})})};var k=r(8009),C=r(832),D=r(9629);const M=function(e){var t=e.themes,r=e.components,n=e.FrameComponent,o=(0,l.g)((function(e){var t=e.get("code");if(t){var r,n=JSON.parse(null!==(r=c().decompressFromEncodedURIComponent(String(t)))&&void 0!==r?r:"");return{code:(0,a.hr)(n.code),themeName:n.theme,title:n.title}}return{}})),i=o.themeName,u=o.code,f=o.title,s=i?t[i]:null;return(0,p.jsxs)(k.A,{code:u,children:[(0,p.jsx)(D.m,{children:(0,p.jsx)("title",{children:f?"".concat(f," | Playroom Preview"):"Playroom Preview"})}),(0,p.jsx)("div",{className:"_1qnlfp1r _1qnlfp14k",children:(0,p.jsx)(n,{themeName:i||"__PLAYROOM__NO_THEME__",theme:s,children:(0,p.jsx)(C.A,{code:u,scope:r})})}),(0,p.jsx)("div",{className:"_1qnlfp1r _1qnlfp14l",children:(0,p.jsx)(q,{})})]})};var A=document.createElement("div");document.body.appendChild(A),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.themes,n=void 0===t?r(9057):t,i=e.components,c=void 0===i?r(3751):i,l=e.FrameComponent,a=void 0===l?r(6579):l;(0,o.d)((0,p.jsx)(M,{components:c,themes:n,FrameComponent:a}),A)}()},5347:function(e){(function(){var t={}.hasOwnProperty,r=[].slice;e.exports=function(e,n){var o,i,c,l;for(o in i=[],l=[],n)t.call(n,o)&&(c=n[o],"this"!==o&&(i.push(o),l.push(c)));return Function.apply(null,r.call(i).concat(["return eval("+JSON.stringify(e)+")"])).apply(n.this,l)}}).call(this)}},e=>{e.O(0,[611,744,33],(()=>(8736,e(e.s=8736)))),e.O()}]);