(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{152:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(1),o=n(9),a=(n(0),n(184)),i=n(186),c={id:"tuning-workflows",sidebar_label:"Tuning Workflows",title:"Various Tuning Workflows"},l={id:"tuning-workflows",title:"Various Tuning Workflows",description:"import useBaseUrl from '@docusaurus/useBaseUrl';\r",source:"@site/docs/tuning-workflows.md",permalink:"/qaboard/docs/tuning-workflows",sidebar_label:"Tuning Workflows",sidebar:"docs",previous:{title:"QA-Board's API",permalink:"/qaboard/docs/apis"},next:{title:"Integrating qatools with your CI",permalink:"/qaboard/docs/ci-integration"}},s=[{value:"Tuning from QA-Board",id:"tuning-from-qa-board",children:[]},{value:"Investigating results/configs you see in the UI",id:"investigating-resultsconfigs-you-see-in-the-ui",children:[]},{value:"Workflows used for Tuning",id:"workflows-used-for-tuning",children:[{value:"<strong>Local</strong> Workflow",id:"local-workflow",children:[]},{value:"<strong>Local configs &gt; SharedStorage &gt; Tuning from QA-Board</strong> Workflow",id:"local-configs--sharedstorage--tuning-from-qa-board-workflow",children:[]},{value:"<strong>Local &gt; QA-Board</strong> Workflow",id:"local--qa-board-workflow",children:[]},{value:"<strong>Commit &gt; CI &gt; QA-Board</strong> Qorkflow",id:"commit--ci--qa-board-qorkflow",children:[]}]}],u={rightToc:s};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"tuning-from-qa-board"},"Tuning from QA-Board"),Object(a.b)("p",null,"When doing QA or during development, you often want to run the code/configs from a given commit on new tests. QA-Board lets you define and runs batches of tests with extra tuning parameters:"),Object(a.b)("img",{alt:"Tuning from the UI",src:Object(i.a)("img/tuning-from-the-ui.jpg")}),Object(a.b)("h2",{id:"investigating-resultsconfigs-you-see-in-the-ui"},"Investigating results/configs you see in the UI"),Object(a.b)("p",null,"Every time you see an output in the web application, you see what configurations were used, and you can easily open the output directory:"),Object(a.b)("img",{alt:"Copy the Windows output dir",src:Object(i.a)("img/output-windows-dir.jpg")}),Object(a.b)("img",{alt:"Output directory from Windows",src:Object(i.a)("img/winows-explorer-output-dir.jpg")}),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"The output logs always show you the exact CLI commands that were used, so that reproducing results is only a ",Object(a.b)("inlineCode",{parentName:"p"},"git checkout $revision ; make ; qa run")," away.")),Object(a.b)("h2",{id:"workflows-used-for-tuning"},"Workflows used for Tuning"),Object(a.b)("h3",{id:"local-workflow"},Object(a.b)("strong",{parentName:"h3"},"Local")," Workflow"),Object(a.b)("p",null,"If you already have great development/debugging tools, use them!"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"At SIRC, ",Object(a.b)("inlineCode",{parentName:"li"},"CDE")," provides a great environment to run hardware chains and view images.**"),Object(a.b)("li",{parentName:"ul"},"For deep learning ",Object(a.b)("inlineCode",{parentName:"li"},"tensorboard")," is a great tool to investigate NNs."),Object(a.b)("li",{parentName:"ul"},"Many people love to write one-off ",Object(a.b)("inlineCode",{parentName:"li"},"matlab")," script.")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"You can continue to use the existing tools!")),Object(a.b)("p",null,"This said, it's worth having your IDE/debugger/scripts call your code via qatools' CLI. ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"debugging"}),"Here is how to do it"),"."),Object(a.b)("h3",{id:"local-configs--sharedstorage--tuning-from-qa-board-workflow"},Object(a.b)("strong",{parentName:"h3"},"Local configs > SharedStorage > Tuning from QA-Board")," Workflow"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Details: WIP")),Object(a.b)("h3",{id:"local--qa-board-workflow"},Object(a.b)("strong",{parentName:"h3"},"Local > QA-Board")," Workflow"),Object(a.b)("p",null,"QA-Board lets you runs your ",Object(a.b)("em",{parentName:"p"},"local")," code/configurations, and see results in the web application. ",Object(a.b)("strong",{parentName:"p"},"It gives you an easy way to tweak/compile/run your code and compare results across runs:")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"qa --share run [...]\nqa --share --label testing-some-logic-tweaks batch [...]\n")),Object(a.b)("p",null,"Results will appear in a new batch:"),Object(a.b)("img",{alt:"selecting local runs",src:Object(i.a)("img/selecting-local-runs.jpg")}),Object(a.b)("img",{alt:"local runs warning",src:Object(i.a)("img/local-runs-warning.jpg")}),Object(a.b)("h3",{id:"commit--ci--qa-board-qorkflow"},Object(a.b)("strong",{parentName:"h3"},"Commit > CI > QA-Board")," Qorkflow"),Object(a.b)("p",null,"If you make changes in configuration files, you need to commit them.\n1. Make changes\n2. Commit the changes\n3. Push your commit\n4. See results in the UI"))}b.isMDXComponent=!0},184:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return p}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},b=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=u(n),d=r,p=b["".concat(i,".").concat(d)]||b[d]||g[d]||a;return n?o.a.createElement(p,c({ref:t},s,{components:n})):o.a.createElement(p,c({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},185:function(e,t,n){"use strict";var r=n(0),o=n(51);t.a=function(){return Object(r.useContext)(o.a)}},186:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(189);var r=n(185);function o(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},187:function(e,t,n){var r=n(70),o=n(23);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(e))}},188:function(e,t,n){var r=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(o){}}return!0}},189:function(e,t,n){"use strict";var r=n(17),o=n(36),a=n(187),i="".startsWith;r(r.P+r.F*n(188)("startsWith"),"String",{startsWith:function(e){var t=a(this,e,"startsWith"),n=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return i?i.call(t,r,n):t.slice(n,n+r.length)===r}})}}]);