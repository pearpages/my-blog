(window.webpackJsonp=window.webpackJsonp||[]).push([[101,18],{178:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(190),l=t(246),i=t(182);var s=function(e){var a=e.nextItem,t=e.prevItem;return r.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog post page navigation"},r.a.createElement("div",{className:"pagination-nav__item"},t&&r.a.createElement(i.a,{className:"pagination-nav__link",to:t.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Newer Post"),r.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.title))),r.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&r.a.createElement(i.a,{className:"pagination-nav__link",to:a.permalink},r.a.createElement("div",{className:"pagination-nav__sublabel"},"Older Post"),r.a.createElement("div",{className:"pagination-nav__label"},a.title," \xbb"))))},o=t(195),m=t(251);a.default=function(e){var a=e.content,t=e.sidebar,n=a.frontMatter,i=a.metadata,d=i.title,u=i.description,v=i.nextItem,h=i.prevItem,f=i.editUrl,p=n.hide_table_of_contents;return r.a.createElement(c.a,{title:d,description:u},a&&r.a.createElement("div",{className:"container margin-vert--lg"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col col--2"},r.a.createElement(o.a,{sidebar:t})),r.a.createElement("div",{className:"col col--8"},r.a.createElement(l.a,{frontMatter:n,metadata:i,isBlogPostPage:!0},r.a.createElement(a,null)),r.a.createElement("div",null,f&&r.a.createElement("a",{href:f,target:"_blank",rel:"noreferrer noopener"},r.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(v||h)&&r.a.createElement("div",{className:"margin-vert--xl"},r.a.createElement(s,{nextItem:v,prevItem:h}))),!p&&a.rightToc&&r.a.createElement("div",{className:"col col--2"},r.a.createElement(m.a,{headings:a.rightToc})))))}},191:function(e,a,t){"use strict";var n=t(0),r=t.n(n),c=t(188),l=t.n(c),i=t(184),s=t(180);a.a=function(e){var a=Object(n.useRef)(!1),c=Object(n.useRef)(null),o=Object(i.useHistory)(),m=Object(s.a)().siteConfig,d=(void 0===m?{}:m).baseUrl,u=function(){a.current||(Promise.all([fetch(d+"search-doc.json").then((function(e){return e.json()})),fetch(d+"lunr-index.json").then((function(e){return e.json()})),Promise.all([t.e(124),t.e(127)]).then(t.bind(null,193)),t.e(90).then(t.t.bind(null,192,7))]).then((function(e){!function(e,a,t){new t({searchDocs:e,searchIndex:a,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var n=d+t.url;document.createElement("a").href=n,o.push(n)}})}(e[0],e[1],e[2].default)})),a.current=!0)},v=Object(n.useCallback)((function(a){c.current.contains(a.target)||c.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return r.a.createElement("div",{className:"navbar__search",key:"search-box"},r.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:l()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:v,onKeyDown:v,tabIndex:0}),r.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:l()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:u,onMouseOver:u,onFocus:v,onBlur:v,ref:c}))}},251:function(e,a,t){"use strict";var n=t(0),r=t.n(n);var c=function(e,a,t){var r=Object(n.useState)(void 0),c=r[0],l=r[1];Object(n.useEffect)((function(){function n(){var n=function(){var e=Array.from(document.getElementsByClassName("anchor")),a=e.find((function(e){return e.getBoundingClientRect().top>=t}));if(a){if(a.getBoundingClientRect().top>=t){var n=e[e.indexOf(a)-1];return null!=n?n:a}return a}return e[e.length-1]}();if(n)for(var r=0,i=!1,s=document.getElementsByClassName(e);r<s.length&&!i;){var o=s[r],m=o.href,d=decodeURIComponent(m.substring(m.indexOf("#")+1));n.id===d&&(c&&c.classList.remove(a),o.classList.add(a),l(o),i=!0),r+=1}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),function(){document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},l=t(48),i=t.n(l),s="table-of-contents__link";function o(e){var a=e.headings,t=e.isChild;return a.length?r.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},a.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("a",{href:"#"+e.id,className:s,dangerouslySetInnerHTML:{__html:e.value}}),r.a.createElement(o,{isChild:!0,headings:e.children}))}))):null}a.a=function(e){var a=e.headings;return c(s,"table-of-contents__link--active",100),r.a.createElement("div",{className:i.a.tableOfContents},r.a.createElement(o,{headings:a}))}}}]);