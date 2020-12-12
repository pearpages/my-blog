(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),i=(n(0),n(110)),o={slug:"yup-validation-with-file-type-and-size",title:"Yup validation with file type and size",author:"pere pages",author_image_url:"https://avatars2.githubusercontent.com/u/3802915?s=400&v=4",tags:["js","formik","yup"]},c={permalink:"/yup-validation-with-file-type-and-size",editUrl:"https://github.com/pearpages/my-blog/edit/master/blog/2020-12-05-yup-validation-with-file-type-and-size.md",source:"@site/blog/2020-12-05-yup-validation-with-file-type-and-size.md",description:"Resources",date:"2020-12-05T00:00:00.000Z",tags:[{label:"js",permalink:"/tags/js"},{label:"formik",permalink:"/tags/formik"},{label:"yup",permalink:"/tags/yup"}],title:"Yup validation with file type and size",readingTime:.34,truncated:!1,prevItem:{title:"Romulo Cintra's youtube channel",permalink:"/romulo-cintra-youtube-channel"},nextItem:{title:"Functional Programming Useful Definitions",permalink:"/definitions"}},l=[{value:"Resources",id:"resources",children:[]},{value:"Example",id:"example",children:[]}],p={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"resources"},"Resources"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/formium/formik/issues/926"}),"https://github.com/formium/formik/issues/926")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://hackernoon.com/formik-handling-files-and-recaptcha-209cbeae10bc"}),"Formik \u2014 Handling files and reCaptcha")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://codesandbox.io/s/4wrrx8qok0"}),"Sandbox Example"))),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"The trick is to use ",Object(i.b)("strong",{parentName:"p"},"mixed")," schema to be able to access the file object."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const FILE_SIZE = 160 * 1024\nconst SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/gif', 'image/png']\n\nconst iconFileSchema = Yup.mixed()\n  .test('fileSize', 'File size is too large', value => value.size <= FILE_SIZE)\n  .test('fileType', 'Unsupported File Format', value => SUPPORTED_FORMATS.includes(value.type))\n")))}u.isMDXComponent=!0},110:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),b=r,f=s["".concat(o,".").concat(b)]||s[b]||m[b]||i;return n?a.a.createElement(f,c(c({ref:t},p),{},{components:n})):a.a.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);