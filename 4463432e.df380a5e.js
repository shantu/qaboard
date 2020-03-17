(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(1),a=n(9),o=(n(0),n(184)),i=n(186),c={id:"tuning-from-the-webapp",sidebar_label:"Tuning from QA-Board",title:"Enabling tuning and extra runs from QA-Board"},u={id:"tuning-from-the-webapp",title:"Enabling tuning and extra runs from QA-Board",description:"import useBaseUrl from '@docusaurus/useBaseUrl';",source:"@site/docs/tuning-from-the-webapp.md",permalink:"/qaboard/docs/tuning-from-the-webapp",sidebar_label:"Tuning from QA-Board",sidebar:"docs",previous:{title:"Batches of inputs",permalink:"/qaboard/docs/batches-running-on-multiple-inputs"},next:{title:"Using celery as a task runner",permalink:"/qaboard/docs/celery-integration"}},s=[{value:"How to do tuning or trigger extra runs from QA-Board",id:"how-to-do-tuning-or-trigger-extra-runs-from-qa-board",children:[]},{value:"Enabling tuning from QA-Board",id:"enabling-tuning-from-qa-board",children:[{value:"Task runner",id:"task-runner",children:[]},{value:"Build Artifacts",id:"build-artifacts",children:[]},{value:"Handling tuning parameters",id:"handling-tuning-parameters",children:[]}]}],l={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"how-to-do-tuning-or-trigger-extra-runs-from-qa-board"},"How to do tuning or trigger extra runs from QA-Board"),Object(o.b)("p",null,"When doing QA or during development, you often want to run the code/configs from a given commit on new tests. QA-Board lets you define and runs batches of tests with extra tuning parameters:"),Object(o.b)("img",{alt:"Tuning from the UI",src:Object(i.a)("img/tuning-from-the-ui.jpg")}),Object(o.b)("div",{className:"admonition admonition-caution alert alert--warning"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("div",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"})))),"caution")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Right now, it doesn't work (outside of Samsung....) as the server is hardcoded to use our infra. It will change very soon!"))),Object(o.b)("h2",{id:"enabling-tuning-from-qa-board"},"Enabling tuning from QA-Board"),Object(o.b)("h3",{id:"task-runner"},"Task runner"),Object(o.b)("p",null,"You need to configure a task runner, that will execute tuning runs asynchronously. We recommend getting started with Celery. All the details are on the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"celery-integration"}),"next page"),"!"),Object(o.b)("h3",{id:"build-artifacts"},"Build Artifacts"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Define artifacts:"),' you must define the "artifacts" needed to run your software. Besides the source, you might need compiled binaries, configurations, trained networks, etc. Artifacts are defined in ',Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/Samsung/qaboard/blob/master/qatools/sample_project/qaboard.yaml#L85"}),"qaboard.yaml"),":")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-yaml"}),'artifacts:\n  binary:\n    glob: \'build/sample_project\'\n  # The "configurations" artifacts are shown in the UI under the commit\'s "Configuration" tab\n  configurations:\n    glob: configurations/*.json\n')),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"For convenience, ",Object(o.b)("em",{parentName:"p"},".qaboard.yaml")," and ",Object(o.b)("em",{parentName:"p"},"qatools/")," are saved automatically.")),Object(o.b)("ol",{start:2},Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Save the artifacts")," when your build/training is done. In your CI, you will want to execute:")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"qa save-artifacts\n")),Object(o.b)("h3",{id:"handling-tuning-parameters"},"Handling tuning parameters"),Object(o.b)("p",null,"You entrypint's ",Object(o.b)("inlineCode",{parentName:"p"},"run()")," function should do something with context.obj","['extra_parameters']","`. That's all."))}b.isMDXComponent=!0},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),b=l(n),p=r,m=b["".concat(i,".").concat(p)]||b[p]||d[p]||o;return n?a.a.createElement(m,c({ref:t},s,{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},185:function(e,t,n){"use strict";var r=n(0),a=n(51);t.a=function(){return Object(r.useContext)(a.a)}},186:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(189);var r=n(185);function a(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},187:function(e,t,n){var r=n(70),a=n(23);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},188:function(e,t,n){var r=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(a){}}return!0}},189:function(e,t,n){"use strict";var r=n(17),a=n(36),o=n(187),i="".startsWith;r(r.P+r.F*n(188)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return i?i.call(t,r,n):t.slice(n,n+r.length)===r}})}}]);