(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{214:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),m=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=m(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=m(n),u=a,d=p["".concat(i,".").concat(u)]||p[u]||b[u]||l;return n?r.a.createElement(d,s(s({ref:t},c),{},{components:n})):r.a.createElement(d,s({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<l;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return m}));var a=n(3),r=n(7),l=(n(0),n(214)),i={slug:"running-promises",title:"Running Promises",author:"pere pages",author_image_url:"https://avatars2.githubusercontent.com/u/3802915?s=400&v=4",tags:["js","promises"]},s={permalink:"/running-promises",editUrl:"https://github.com/pearpages/my-blog/edit/master/blog/2021-04-15-running-promises.md",source:"@site/blog/2021-04-15-running-promises.md",description:"Experiment on running promises either one after the other or in parallel(concurrently).",date:"2021-04-15T00:00:00.000Z",tags:[{label:"js",permalink:"/tags/js"},{label:"promises",permalink:"/tags/promises"}],title:"Running Promises",readingTime:2.875,truncated:!1,nextItem:{title:"Centralized PropTypes",permalink:"/centralized-prop-types"}},o=[{value:"The experiment",id:"the-experiment",children:[{value:"Sequentially",id:"sequentially",children:[]},{value:"In parallel",id:"in-parallel",children:[]},{value:"In parallel keeping the order",id:"in-parallel-keeping-the-order",children:[]}]},{value:"Original Experiment vs Final Experiment",id:"original-experiment-vs-final-experiment",children:[]}],c={toc:o};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Experiment on running promises either one after the other or in parallel(concurrently)."),Object(l.b)("div",{className:"admonition admonition-info alert alert--info"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"We say parallel, but we mean concurrently because node/js does not have threads."))),Object(l.b)("p",null,"One after the other it should take way more time than in parallel(concurrently), but I was shocked to see that they all took the same results:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Results"),Object(l.b)("th",{parentName:"tr",align:null},"Time"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"sequentially"),Object(l.b)("td",{parentName:"tr",align:null},"[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"),Object(l.b)("td",{parentName:"tr",align:null},"876")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"parallel"),Object(l.b)("td",{parentName:"tr",align:null},"[10, 8, 7, 2, 9, 4, 3, 1, 6, 5]"),Object(l.b)("td",{parentName:"tr",align:null},"877")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"parallel preserving the order"),Object(l.b)("td",{parentName:"tr",align:null},"[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"),Object(l.b)("td",{parentName:"tr",align:null},"877")))),Object(l.b)("p",null,"What's going wrong? Why sequentially is not taking way more than the other two? The expected result would be both parallel the same and faster, but sequentially taking way more."),Object(l.b)("p",null,"The answer:"),Object(l.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},Object(l.b)("em",{parentName:"p"},"Promises start running immediately after creation.")))),Object(l.b)("p",null,"When we do a:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"new Promise((resolve) => {\n  setTimeout(() => resolve(true), 200);\n});\n")),Object(l.b)("p",null,"the clock starts ticking already because it executes the promise right after its creation. They are already running internally, waiting to be read."),Object(l.b)("p",null,"So the only way of simulating and getting the initial expecting results is lazy executing the promises. How? With a function obviously:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"const createPromise = () =>\n  new Promise((resolve) => {\n    setTimeout(() => resolve(true), 200);\n  });\n\ncreatePromise(); // <-- it will only start ticking once we create the promise\n")),Object(l.b)("p",null,"See now the results:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Type"),Object(l.b)("th",{parentName:"tr",align:null},"Results"),Object(l.b)("th",{parentName:"tr",align:null},"Time"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"sequentially"),Object(l.b)("td",{parentName:"tr",align:null},"[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"),Object(l.b)("td",{parentName:"tr",align:null},"5037")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"parallel"),Object(l.b)("td",{parentName:"tr",align:null},"[10, 8, 7, 2, 9, 4, 3, 1, 6, 5]"),Object(l.b)("td",{parentName:"tr",align:null},"942")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"parallel preserving the order"),Object(l.b)("td",{parentName:"tr",align:null},"[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"),Object(l.b)("td",{parentName:"tr",align:null},"942")))),Object(l.b)("p",null,"Which matches with our initial expectations."),Object(l.b)("h2",{id:"the-experiment"},"The experiment"),Object(l.b)("p",null,"We want to create promises that execute async:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"function makePromise(value = 0, ms = 0) {\n  return new Promise((resolve) => {\n    setTimeout(() => resolve(value), ms)\n  })\n}\n")),Object(l.b)("p",null,"We want a set, so we want an array, but we need the exact same array three times, so we can truely compare:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nconst TUPLES = values\n  .map(makeValueRandomTimeTuple)\n\nfunction makePromises(tuples = [{value: 0, ms: 0}]) {\n  return tuples.map(({value, ms}) => makePromise(value, ms))\n}\n\nconst promisesA = makePromises(TUPLES)\nconst promisesB = makePromises(TUPLES)\nconst promisesC = makePromises(TUPLES)\n// All three sets are copies of the same sets with promises that have to behave the same way\n")),Object(l.b)("h3",{id:"sequentially"},"Sequentially"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"function sequentially(arrayOfPromiseOrAsyncFn) {\n  return arrayOfPromiseOrAsyncFn.reduce((previous, current) => previous\n    .then(async res => {\n      const next = await getPromise(current)\n      return [...res, next]\n    })\n    , Promise.resolve([]))\n}\n")),Object(l.b)("h3",{id:"in-parallel"},"In parallel"),Object(l.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(l.b)("div",{parentName:"div",className:"admonition-heading"},Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",{parentName:"h5",className:"admonition-icon"},Object(l.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(l.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(l.b)("div",{parentName:"div",className:"admonition-content"},Object(l.b)("p",{parentName:"div"},"There is also a possible implementation with ",Object(l.b)("inlineCode",{parentName:"p"},"for of"),"."))),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"function inParallel(arrayOfPromiseOrAsyncFn) {\n  return new Promise(async resolve => {\n\n    const result = []\n    const areAllResultsReady = () => result.length === arrayOfPromiseOrAsyncFn.length\n\n    arrayOfPromiseOrAsyncFn.forEach((promiseOrAsyncFn) => {\n      getPromise(promiseOrAsyncFn).then(res => {\n        result.push(res)\n        if (areAllResultsReady()) {\n          resolve(result)\n        }\n      })\n    })\n\n  })\n}\n")),Object(l.b)("h3",{id:"in-parallel-keeping-the-order"},"In parallel keeping the order"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"function inParallelButInOrder(array) {\n  const promises = array.map(getPromise)\n  return Promise.all(promises)\n}\n")),Object(l.b)("h2",{id:"original-experiment-vs-final-experiment"},"Original Experiment vs Final Experiment"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"(async () => {\n  console.log(await getResultAndTime(sequentially(makePromises(TUPLES))))\n  console.log(await getResultAndTime(inParallel(makePromises(TUPLES))))\n  console.log(await getResultAndTime(inParallelButInOrder(makePromises(TUPLES))))\n})()\n")),Object(l.b)("p",null,"vs"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-js"},"(async () => {\n  console.log(await getResultAndTime(sequentially(makeAsyncFns(TUPLES))))\n  console.log(await getResultAndTime(inParallel(makeAsyncFns(TUPLES))))\n  console.log(await getResultAndTime(inParallelButInOrder(makeAsyncFns(TUPLES))))\n})()\n")))}m.isMDXComponent=!0}}]);