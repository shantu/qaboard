(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{137:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(1),r=a(9),i=(a(0),a(184)),c=a(186),o={id:"computing-quantitative-metrics",sidebar_label:"Metrics",title:"Computing quantitative metrics"},s={id:"computing-quantitative-metrics",title:"Computing quantitative metrics",description:"import useBaseUrl from '@docusaurus/useBaseUrl';\r",source:"@site/docs/computing-quantitative-metrics.md",permalink:"/qaboard/docs/computing-quantitative-metrics",sidebar_label:"Metrics",sidebar:"docs",previous:{title:"Creating and viewing outputs files",permalink:"/qaboard/docs/creating-and-viewing-outputs-files"},next:{title:"Specifying configurations",permalink:"/qaboard/docs/specifying-configurations"}},l=[],u={rightToc:l};function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Algorithms are usually evaluated using KPIs / Objective Figures of Merit / metrics. To make sure qatools's web UI displays them:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("inlineCode",{parentName:"li"},"run()")," should return a dict of metrics:")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),'def run():\n    # --snip--\n    return {\n        "loss": loss\n    }\n')),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"Alternatively, you can also write your metrics as JSON in ",Object(i.b)("inlineCode",{parentName:"p"},"ctx.obj['output_directory'] / metrics.json"),"."))),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"Describe your metrics in ",Object(i.b)("em",{parentName:"li"},"qa/metrics.yaml"),". Here is an example")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-yaml"}),"# qa/metrics.yaml (location from qaboard.yaml: outputs.metrics)\navailable_metrics:\n  loss:  # the fields below are all optionnal\n    label: Loss function     # human-readable name\n    short_label: Loss        # somes part of the UI are better with thin labels...\n    smaller_is_better: true  # default: true\n    target: 0.01             # plots in the UI will compare KPIs versus a target if given\n    # when displaying results in the UI, you often want to change units\n    # scale: 100\n    # suffix: '%'\n")),Object(i.b)("p",null,"If it all goes well you get:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Tables to compare KPIs per-input across versions:")),Object(i.b)("img",{alt:"https://qa/tof/swip_tof/commit/42778afb1fea31e19c00291a2a52bf490e3acc2c?reference=a451dda9cfdd586702ead95f436e41c5b074ebfa&selected_views=summary&filter=old",src:Object(c.a)("img/quantitative-metrics.png")}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Summaries:")),Object(i.b)("img",{alt:"https://qa/tof/swip_tof/commit/42778afb1fea31e19c00291a2a52bf490e3acc2c?reference=a451dda9cfdd586702ead95f436e41c5b074ebfa&selected_views=summary&filter=old",src:Object(c.a)("img/summary-metrics.png")}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Metrics integrated in the visualizations:"),Object(i.b)("img",{alt:"https://qa/tof/swip_tof/commit/42778afb1fea31e19c00291a2a52bf490e3acc2c?reference=a451dda9cfdd586702ead95f436e41c5b074ebfa&selected_views=output-list&filter=old%20low%204ta",src:Object(c.a)("img/quantitative-metrics-on-viz.png")})),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"and evolution over time per branch..."))),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("div",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(n.a)({parentName:"div"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"We plan on not requiring you to define metrics ahead of time."))))}b.isMDXComponent=!0},184:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o({},t,{},e)),a},b=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),b=u(a),p=n,d=b["".concat(c,".").concat(p)]||b[p]||m[p]||i;return a?r.a.createElement(d,o({ref:t},l,{components:a})):r.a.createElement(d,o({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,c=new Array(i);c[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=a[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},185:function(e,t,a){"use strict";var n=a(0),r=a(51);t.a=function(){return Object(n.useContext)(r.a)}},186:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a(189);var n=a(185);function r(e){var t=(Object(n.a)().siteConfig||{}).baseUrl,a=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},187:function(e,t,a){var n=a(70),r=a(23);e.exports=function(e,t,a){if(n(t))throw TypeError("String#"+a+" doesn't accept regex!");return String(r(e))}},188:function(e,t,a){var n=a(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[n]=!1,!"/./"[e](t)}catch(r){}}return!0}},189:function(e,t,a){"use strict";var n=a(17),r=a(36),i=a(187),c="".startsWith;n(n.P+n.F*a(188)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),a=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return c?c.call(t,n,a):t.slice(a,a+n.length)===n}})}}]);