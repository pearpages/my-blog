(window.webpackJsonp=window.webpackJsonp||[]).push([[64,21],{132:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),c=n(216),l=n(285),s=n(209),i=n(222);a.default=function(e){var a=e.metadata,n=e.items,t=e.sidebar,o=a.allTagsPath,u=a.name,d=a.count;return r.a.createElement(c.a,{title:'Posts tagged "'+u+'"',description:'Blog | Tagged "'+u+'"',wrapperClassName:"blog-wrapper"},r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(i.a,{sidebar:t})),r.a.createElement("main",{className:"col col--8"},r.a.createElement("h1",null,d," ",function(e,a){return e>1?a+"s":a}(d,"post"),' tagged with "',u,'"'),r.a.createElement(s.a,{href:o},"View All Tags"),r.a.createElement("div",{className:"margin-vert--xl"},n.map((function(e){var a=e.content;return r.a.createElement(l.a,{key:a.metadata.permalink,frontMatter:a.frontMatter,metadata:a.metadata,truncated:!0},r.a.createElement(a,null))})))))))}},217:function(e,a,n){"use strict";var t=n(0),r=n.n(t),c=n(213),l=n.n(c),s=n(210),i=n(22);a.a=function(e){var a=Object(t.useRef)(!1),c=Object(t.useRef)(null),o=Object(s.useHistory)(),u=Object(i.default)().siteConfig,d=(void 0===u?{}:u).baseUrl,h=function(){a.current||(Promise.all([fetch(d+"search-doc.json").then((function(e){return e.json()})),fetch(d+"lunr-index.json").then((function(e){return e.json()})),Promise.all([n.e(138),n.e(141)]).then(n.bind(null,219)),n.e(100).then(n.t.bind(null,218,7))]).then((function(e){!function(e,a,n){new n({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,n){var t=d+n.url;document.createElement("a").href=t,o.push(t)}})}(e[0],e[1],e[2].default)})),a.current=!0)},m=Object(t.useCallback)((function(a){c.current.contains(a.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:m,onKeyDown:m,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:h,onMouseOver:h,onFocus:m,onBlur:m,ref:c}))}}}]);