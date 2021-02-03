(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{169:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return u})),t.d(r,"default",(function(){return l}));var n=t(2),a=t(6),c=(t(0),t(182)),o={slug:"reduce",title:"Reduce Usage Examples",author:"pere pages",author_image_url:"https://avatars2.githubusercontent.com/u/3802915?s=400&v=4",tags:["fp","js"]},i={permalink:"/reduce",editUrl:"https://github.com/pearpages/my-blog/edit/master/blog/2020-11-14-reduce.md",source:"@site/blog/2020-11-14-reduce.md",description:"Map",date:"2020-11-14T00:00:00.000Z",tags:[{label:"fp",permalink:"/tags/fp"},{label:"js",permalink:"/tags/js"}],title:"Reduce Usage Examples",readingTime:.38,truncated:!1,prevItem:{title:"Functional Programming Useful Definitions",permalink:"/definitions"}},u=[{value:"Map",id:"map",children:[]},{value:"Filter",id:"filter",children:[]},{value:"Compose",id:"compose",children:[]},{value:"Pipe",id:"pipe",children:[]}],p={rightToc:u};function l(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"map"},"Map"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"function map(fn, arr) {\n  return arr.reduce((acc, item, index, arr) => {\n    return acc.concat(fn(item, index, arr))\n  }, [])\n}\n")),Object(c.b)("h2",{id:"filter"},"Filter"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"function filter(fn, arr) {\n  return arr.reduce((newArr, item) => {\n    return fn(item)\n      ? newArr.concat([item])\n      : newArr\n  }, [])\n}\n")),Object(c.b)("h2",{id:"compose"},"Compose"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"function compose(...fns) {\n  return x => fns.reduceRight((v, f) => f(v), x)\n}\n")),Object(c.b)("h2",{id:"pipe"},"Pipe"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"function compose(...fns) {\n  return x => fns.reduce((v, f) => f(v), x)\n}\n")))}l.isMDXComponent=!0},182:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return b}));var n=t(0),a=t.n(n);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),l=function(e){var r=a.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=l(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(t),m=n,b=s["".concat(o,".").concat(m)]||s[m]||f[m]||c;return t?a.a.createElement(b,i(i({ref:r},p),{},{components:t})):a.a.createElement(b,i({ref:r},p))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var c=t.length,o=new Array(c);o[0]=m;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var p=2;p<c;p++)o[p]=t[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);