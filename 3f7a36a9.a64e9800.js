(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{105:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),o=(n(0),n(195)),i={slug:"deploy-blog-with-docusaurus",title:"Deploy blog with Docusaurus",author:"pere pages",author_image_url:"https://avatars2.githubusercontent.com/u/3802915?s=400&v=4",tags:["js","blog","docusaurus","github"]},s={permalink:"/deploy-blog-with-docusaurus",editUrl:"https://github.com/pearpages/my-blog/edit/master/blog/2020-12-09-deploy-blog-with-docusaurus.md",source:"@site/blog/2020-12-09-deploy-blog-with-docusaurus.md",description:"Resources",date:"2020-12-09T00:00:00.000Z",tags:[{label:"js",permalink:"/tags/js"},{label:"blog",permalink:"/tags/blog"},{label:"docusaurus",permalink:"/tags/docusaurus"},{label:"github",permalink:"/tags/github"}],title:"Deploy blog with Docusaurus",readingTime:2.825,truncated:!1,prevItem:{title:"The Builder pattern",permalink:"/the-builder-pattern"},nextItem:{title:"Change mac folder icons",permalink:"/change-mac-folder-icons"}},c=[{value:"Resources",id:"resources",children:[]},{value:"Testing build local",id:"testing-build-local",children:[]},{value:"<code>docusaurus.config.js</code>",id:"docusaurusconfigjs",children:[]},{value:"Using a custom domain",id:"using-a-custom-domain",children:[]},{value:"Configuring and apex domain (Using a DNS provider)",id:"configuring-and-apex-domain-using-a-dns-provider",children:[]},{value:"Manual deploy",id:"manual-deploy",children:[]},{value:"Automatic deploy using github actions",id:"automatic-deploy-using-github-actions",children:[]},{value:"Edit links pointing to your repo",id:"edit-links-pointing-to-your-repo",children:[]}],l={toc:c};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"resources"},"Resources"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://v2.docusaurus.io/docs/deployment/"},"Deployment")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://developers.google.com/search/docs/advanced/robots/create-robots-txt?authuser=2&authuser=2&hl=es&visit_id=637430180302633807-3952330285&rd=1"},"Create a robots.txt")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent"},"Generating a new SSH key"))),Object(o.b)("h2",{id:"testing-build-local"},"Testing build local"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"npm run build\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"npm run serve\n")),Object(o.b)("p",null,"or altogether"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"npm run serve --build --port 80 --host 0.0.0.0\n")),Object(o.b)("h2",{id:"docusaurusconfigjs"},Object(o.b)("inlineCode",{parentName:"h2"},"docusaurus.config.js")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},'module.exports = {\n  url: "https://pages.ninja",\n  baseUrl: "/",\n  organizationName: "pearpages", // Usually your GitHub org/user name.\n  projectName: "my-blog", // Usually your repo name.\n};\n')),Object(o.b)("h2",{id:"using-a-custom-domain"},"Using a custom domain"),Object(o.b)("p",null,"In case you want to use your custom domain for GitHub Pages, create a ",Object(o.b)("inlineCode",{parentName:"p"},"CNAME")," file in the ",Object(o.b)("strong",{parentName:"p"},"static")," directory."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"# CNAME\npearpages.ninja\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"Anything within the static directory will be copied to the root of the build directory for deployment.")),Object(o.b)("p",null,"At this point you can also think of adding a ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",{parentName:"strong",href:"https://developers.google.com/search/docs/advanced/robots/create-robots-txt?authuser=2&authuser=2&hl=es&visit_id=637430180302633807-3952330285&rd=1"},"robots.txt"))," file."),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"By default, GitHub Pages runs published files through ",Object(o.b)("em",{parentName:"p"},"Jekyll"),". Since ",Object(o.b)("em",{parentName:"p"},"Jekyll")," will discard any files that begin with ",Object(o.b)("inlineCode",{parentName:"p"},"_"),", it is recommended that you disable ",Object(o.b)("em",{parentName:"p"},"Jekyll")," by adding an empty file named ",Object(o.b)("inlineCode",{parentName:"p"},".nojekyll")," file to your ",Object(o.b)("inlineCode",{parentName:"p"},"static")," directory. ",Object(o.b)("strong",{parentName:"p"},"This is done by default"),"."))),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"User-agent: * \nDisallow: /\n")),Object(o.b)("h2",{id:"configuring-and-apex-domain-using-a-dns-provider"},"Configuring and apex domain (Using a DNS provider)"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://docs.github.com/en/free-pro-team@latest/github/working-with-github-pages/managing-a-custom-domain-for-your-github-pages-site#configuring-an-apex-domain"},"GitHub Docs")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"# the IPs are pointing now to GitHub\nA   @   185.199.108.153 600 seconds\nA   @   185.199.109.153 1 hour\nA   @   185.199.110.153 1 hour\nA   @   185.199.111.153 1 hour\n# www.yourdomain.com and yourdomain.com point to the same place\nCNAME   www @   1 hour\n")),Object(o.b)("p",null,"Once your DNS provider points to ",Object(o.b)("strong",{parentName:"p"},"GitHub")," you will be able to use ",Object(o.b)("inlineCode",{parentName:"p"},"https")," feature from GitHub."),Object(o.b)("h2",{id:"manual-deploy"},"Manual deploy"),Object(o.b)("p",null,"It is going to publish to ",Object(o.b)("inlineCode",{parentName:"p"},"gh-pages")," using the current branch."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"GIT_USER=pearpages npm run deploy\n")),Object(o.b)("h2",{id:"automatic-deploy-using-github-actions"},"Automatic deploy using github actions"),Object(o.b)("p",null,Object(o.b)("a",{parentName:"p",href:"https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent"},"Generating a new SSH key")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Use a ",Object(o.b)("strong",{parentName:"p"},"SSH key")," (an existing - but not used in GitHub - o create new one)")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Paste it as a ",Object(o.b)("strong",{parentName:"p"},"deploy key")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"# public key\npbcopy < ~/.ssh/key.pub\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Paste the private key as ",Object(o.b)("strong",{parentName:"p"},"GitHub secret"),". Using ",Object(o.b)("em",{parentName:"p"},"name")," ",Object(o.b)("strong",{parentName:"p"},"GH_PAGES_DEPLOY")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre"},"# private key\npbcopy < ~/.ssh/key\n"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Create the ",Object(o.b)("strong",{parentName:"p"},"workflow")," file in ",Object(o.b)("inlineCode",{parentName:"p"},".github/workflows/publishing.yml")),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-yml"},"name: publishing\n\non:\n  pull_request:\n    branches: [master]\n  push:\n    branches: [master]\n\njobs:\n  checks:\n    if: github.event_name != 'push'\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v1\n      - uses: actions/setup-node@v1\n        with:\n          node-version: '12.x'\n      - name: Test Build\n        run: |\n          if [ -e yarn.lock ]; then\n          yarn install --frozen-lockfile\n          elif [ -e package-lock.json ]; then\n          npm ci\n          else\n          npm i\n          fi\n          npm run build\n  gh-release:\n    if: github.event_name != 'pull_request'\n    runs-on: ubuntu-latest\n    steps:\n      - uses: actions/checkout@v1\n      - uses: actions/setup-node@v1\n        with:\n          node-version: '12.x'\n      - name: Add key to allow access to repository\n        env:\n          SSH_AUTH_SOCK: /tmp/ssh_agent.sock\n        run: |\n          mkdir -p ~/.ssh\n          ssh-keyscan github.com >> ~/.ssh/known_hosts\n          echo \"${{ secrets.GH_PAGES_DEPLOY }}\" > ~/.ssh/id_rsa\n          chmod 600 ~/.ssh/id_rsa\n          cat <<EOT >> ~/.ssh/config\n          Host github.com\n          HostName github.com\n          IdentityFile ~/.ssh/id_rsa\n          EOT\n      - name: Release to GitHub Pages\n        env:\n          USE_SSH: true\n          GIT_USER: git\n        run: |\n          git config --global user.email \"actions@gihub.com\"\n          git config --global user.name \"gh-actions\"\n          if [ -e yarn.lock ]; then\n          yarn install --frozen-lockfile\n          elif [ -e package-lock.json ]; then\n          npm ci\n          else\n          npm i\n          fi\n          npx docusaurus deploy\n")))),Object(o.b)("h2",{id:"edit-links-pointing-to-your-repo"},"Edit links pointing to your repo"),Object(o.b)("p",null,"This was you can publish directly from github web."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"{\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      {\n        docs: {\n          sidebarPath: require.resolve('./sidebars.js'),\n          // Please change this to your repo.\n          editUrl:\n            'https://github.com/pearpages/my-blog/edit/master/'\n        },\n        blog: {\n          showReadingTime: true,\n          // Please change this to your repo.\n          editUrl:\n            'https://github.com/pearpages/my-blog/edit/master/'\n        },\n        theme: {\n          customCss: require.resolve('./src/css/custom.css'),\n        },\n      },\n    ],\n  ],\n}\n")))}u.isMDXComponent=!0},195:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(i,".").concat(d)]||p[d]||b[d]||o;return n?r.a.createElement(m,s(s({ref:t},l),{},{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);