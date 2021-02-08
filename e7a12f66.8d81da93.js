(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{182:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return o})),n.d(r,"metadata",(function(){return i})),n.d(r,"toc",(function(){return u})),n.d(r,"default",(function(){return l}));var t=n(3),a=n(7),c=(n(0),n(195)),o={slug:"reduce",title:"Reduce Usage Examples",author:"pere pages",author_image_url:"https://avatars2.githubusercontent.com/u/3802915?s=400&v=4",tags:["fp","js"]},i={permalink:"/reduce",editUrl:"https://github.com/pearpages/my-blog/edit/master/blog/2020-11-14-reduce.md",source:"@site/blog/2020-11-14-reduce.md",description:"Map",date:"2020-11-14T00:00:00.000Z",tags:[{label:"fp",permalink:"/tags/fp"},{label:"js",permalink:"/tags/js"}],title:"Reduce Usage Examples",readingTime:.38,truncated:!1,prevItem:{title:"Functional Programming Useful Definitions",permalink:"/definitions"}},u=[{value:"Map",id:"map",children:[]},{value:"Filter",id:"filter",children:[]},{value:"Compose",id:"compose",children:[]},{value:"Pipe",id:"pipe",children:[]}],p={toc:u};function l(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(t.a)({},p,n,{components:r,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"map"},"Map"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"function map(fn, arr) {\n  return arr.reduce((acc, item, index, arr) => {\n    return acc.concat(fn(item, index, arr))\n  }, [])\n}\n")),Object(c.b)("h2",{id:"filter"},"Filter"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"function filter(fn, arr) {\n  return arr.reduce((newArr, item) => {\n    return fn(item)\n      ? newArr.concat([item])\n      : newArr\n  }, [])\n}\n")),Object(c.b)("h2",{id:"compose"},"Compose"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"function compose(...fns) {\n  return x => fns.reduceRight((v, f) => f(v), x)\n}\n")),Object(c.b)("h2",{id:"pipe"},"Pipe"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-js"},"function compose(...fns) {\n  return x => fns.reduce((v, f) => f(v), x)\n}\n")))}l.isMDXComponent=!0},195:function(e,r,n){"use strict";n.d(r,"a",(function(){return s})),n.d(r,"b",(function(){return d}));var t=n(0),a=n.n(t);function c(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){c(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var r=a.a.useContext(p),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},s=function(e){var r=l(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,c=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),s=l(n),m=t,d=s["".concat(o,".").concat(m)]||s[m]||f[m]||c;return n?a.a.createElement(d,i(i({ref:r},p),{},{components:n})):a.a.createElement(d,i({ref:r},p))}));function d(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var c=n.length,o=new Array(c);o[0]=m;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:t,o[1]=i;for(var p=2;p<c;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);