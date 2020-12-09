(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{102:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},j=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),j=r,f=p["".concat(c,".").concat(j)]||p[j]||b[j]||a;return n?o.a.createElement(f,i(i({ref:t},s),{},{components:n})):o.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=j;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"},67:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(6),a=(n(0),n(102)),c={slug:"deep-equality-in-js-objects",title:"Deep equality in js Objects",author:"pere pages",author_image_url:"https://avatars2.githubusercontent.com/u/3802915?s=400&v=4",tags:["js","objects"]},i={permalink:"/blog/deep-equality-in-js-objects",editUrl:"https://github.com/pearpages/my-blog/edit/master/blog/2020-12-05-deep-equality-in-js-objects.md",source:"@site/blog/2020-12-05-deep-equality-in-js-objects.md",description:"How to Compare Objects in JavaScript",date:"2020-12-05T00:00:00.000Z",tags:[{label:"js",permalink:"/blog/tags/js"},{label:"objects",permalink:"/blog/tags/objects"}],title:"Deep equality in js Objects",readingTime:.58,truncated:!1,prevItem:{title:"Conditional validation with Yup and Formik",permalink:"/blog/conditional-validation-with-yup-and-formik"},nextItem:{title:"Romulo Cintra's youtube channel",permalink:"/blog/romulo-cintra-youtube-channel"}},l=[],s={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://dmitripavlutin.com/how-to-compare-objects-in-javascript/"}),"How to Compare Objects in JavaScript")),Object(a.b)("p",null,"The deep equality is similar to the shallow equality, but with one difference. During the shallow check, if the compared properties are objects, a recursive shallow equality check is performed on these nested objects."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"function deepEqual(object1, object2) {\n  const keys1 = Object.keys(object1);\n  const keys2 = Object.keys(object2);\n\n  if (keys1.length !== keys2.length) {\n    return false;\n  }\n\n  for (const key of keys1) {\n    const val1 = object1[key];\n    const val2 = object2[key];\n    const areObjects = isObject(val1) && isObject(val2);\n    if (\n      areObjects && !deepEqual(val1, val2) ||\n      !areObjects && val1 !== val2\n    ) {\n      return false;\n    }\n  }\n\n  return true;\n}\n\nfunction isObject(object) {\n  return object != null && typeof object === 'object';\n}\n")))}u.isMDXComponent=!0}}]);