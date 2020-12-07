(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{73:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(97)),i={slug:"conditional-validation-with-yup-and-formik",title:"Conditional validation with Yup and Formik",author:"pere pages",author_image_url:"https://avatars2.githubusercontent.com/u/3802915?s=400&v=4",tags:["js","formik","yup"]},c={permalink:"/blog/conditional-validation-with-yup-and-formik",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/blog/blog/2020-12-05-conditional-validation-with-yup-and-formik.md",source:"@site/blog/2020-12-05-conditional-validation-with-yup-and-formik.md",description:"https://stackoverflow.com/questions/54919228/conditional-validation-with-yup-and-formik",date:"2020-12-05T00:00:00.000Z",tags:[{label:"js",permalink:"/blog/tags/js"},{label:"formik",permalink:"/blog/tags/formik"},{label:"yup",permalink:"/blog/tags/yup"}],title:"Conditional validation with Yup and Formik",readingTime:.37,truncated:!1,nextItem:{title:"Deep equality in js Objects",permalink:"/blog/deep-equality-in-js-objects"}},l=[],p={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/54919228/conditional-validation-with-yup-and-formik"}),"https://stackoverflow.com/questions/54919228/conditional-validation-with-yup-and-formik")),Object(o.b)("p",null,"The trick for doing conditional validation is to be part of a bigger validation schema."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const validationSchema = Yup.object()\n  .shape({\n    isCompany: Yup.boolean()\n    companyName: Yup.string()\n  })\n")),Object(o.b)("p",null,"We want to conditionally validate ",Object(o.b)("strong",{parentName:"p"},"companyName")," using ",Object(o.b)("strong",{parentName:"p"},"isCompany")," value."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const validationSchema = Yup.object()\n  .shape({\n    isCompany: Yup.boolean()\n    companyName: Yup.string()\n      .when('isCompany', {\n        is: true, // it can also be a 'function', e.g. function (isCompany) { return assertion }\n        then: Yup.string().required('Field is required'),\n        otherwise: Yup.string()\n      })\n  })\n")))}u.isMDXComponent=!0},97:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),u=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(n),b=r,d=s["".concat(i,".").concat(b)]||s[b]||m[b]||o;return n?a.a.createElement(d,c(c({ref:t},p),{},{components:n})):a.a.createElement(d,c({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);