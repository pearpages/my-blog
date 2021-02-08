(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{103:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),a=r(7),i=(r(0),r(195)),l={slug:"how-to-remove-array-duplicates-in-es6",title:"How to remove array duplicates in ES6",author:"pere pages",author_image_url:"https://avatars2.githubusercontent.com/u/3802915?s=400&v=4",tags:["js","array"]},o={permalink:"/how-to-remove-array-duplicates-in-es6",editUrl:"https://github.com/pearpages/my-blog/edit/master/blog/2020-12-11-how-to-remove-array-duplicates-in-es6.md",source:"@site/blog/2020-12-11-how-to-remove-array-duplicates-in-es6.md",description:"- How to Remove Array Duplicates in ES6",date:"2020-12-11T00:00:00.000Z",tags:[{label:"js",permalink:"/tags/js"},{label:"array",permalink:"/tags/array"}],title:"How to remove array duplicates in ES6",readingTime:.975,truncated:!1,prevItem:{title:"Multiple users in gitconfig",permalink:"/multiple-users-in-gitconfig"},nextItem:{title:"The Builder pattern",permalink:"/the-builder-pattern"}},c=[{value:"1. Using Set",id:"1-using-set",children:[]},{value:"2. Using filter",id:"2-using-filter",children:[{value:"Getting the duplicates",id:"getting-the-duplicates",children:[]}]},{value:"3. Using reduce",id:"3-using-reduce",children:[]}],u={toc:c};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://medium.com/dailyjs/how-to-remove-array-duplicates-in-es6-5daa8789641c"},"How to Remove Array Duplicates in ES6")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set"},"MDN Web Docs \u2014 Set")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter"},"MDN Web Docs \u2014 Filter")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce"},"MDN Web Docs \u2014 Reduce"))),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Using ",Object(i.b)("inlineCode",{parentName:"li"},"Set")),Object(i.b)("li",{parentName:"ol"},"Using ",Object(i.b)("inlineCode",{parentName:"li"},"filter")),Object(i.b)("li",{parentName:"ol"},"Using ",Object(i.b)("inlineCode",{parentName:"li"},"reduce"))),Object(i.b)("h2",{id:"1-using-set"},"1. Using Set"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Set is a new data object introduced in ES6. Because Set only lets you store unique values. When you pass in an array, it will remove any duplicate values.")),Object(i.b)("p",null,"It's very simple, very quick and elegant, but I don't think it might be very performant; so I would use it for small arrays."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"const array = [4, 1, 2, 4, 4, 3]\nconst uniqueSet = new Set(array)\nconst backToArray = [...uniqueSet]\n")),Object(i.b)("h2",{id:"2-using-filter"},"2. Using filter"),Object(i.b)("p",null,"Very smart and short solution. Because indexOf will return the first appearance, only the first unique value will stay in the new returning array."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"const array = [4, 1, 2, 4, 4, 3]\narray.filter((item, index) => array.indexOf(item) === index)\n")),Object(i.b)("h3",{id:"getting-the-duplicates"},"Getting the duplicates"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"array.filter((item, index) => array.indexOf(item) !== index)\n")),Object(i.b)("h2",{id:"3-using-reduce"},"3. Using reduce"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"const array = [4, 1, 2, 4, 4, 3]\narray.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], [])\n")))}s.isMDXComponent=!0},195:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,m=p["".concat(l,".").concat(d)]||p[d]||b[d]||i;return r?a.a.createElement(m,o(o({ref:t},u),{},{components:r})):a.a.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);