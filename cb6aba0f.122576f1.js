(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{173:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(9),o=(n(0),n(183)),i={id:"alternatives",sidebar_label:"Alternatives",title:"Alternatives"},l={id:"alternatives",title:"Alternatives",description:"Non-features",source:"@site/docs/alternatives-and-missing-features.md",permalink:"/qaboard/docs/alternatives",editUrl:"https://github.com/Samsung/qaboard/edit/master/website/docs/alternatives-and-missing-features.md",sidebar_label:"Alternatives",sidebar:"docs",previous:{title:"QA-Board is a platform for algorithms R&D",permalink:"/qaboard/docs/introduction"},next:{title:"Installing QA-Board's CLI",permalink:"/qaboard/docs/installation"}},s=[{value:"Non-features",id:"non-features",children:[]},{value:"Why not use X instead?",id:"why-not-use-x-instead",children:[]}],c={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"non-features"},"Non-features"),Object(o.b)("p",null,"QA-Board works with other tools. It won't replace or provide:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Automation:")," You should call QA-Board's client, ",Object(o.b)("inlineCode",{parentName:"li"},"qa"),", in your CI. If you're looking for a CI plaform, consider ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://docs.gitlab.com/ee/ci/"}),"GitlabCI"),", ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/features/actions"}),"Github Actions"),", ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/drone/drone"}),"DroneCI"),", etc."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Monitoring, Deployement & Ops"),": in this space solutions tend to be custom, industry specific, and have a ",Object(o.b)("em",{parentName:"li"},"short")," life. Get in touch if you see low-hanging fruits!"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Data Versionning"))),Object(o.b)("h2",{id:"why-not-use-x-instead"},"Why not use X instead?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Most comparable tools focus on ",Object(o.b)("strong",{parentName:"li"},"training for machine learning")," (",Object(o.b)("inlineCode",{parentName:"li"},"sacred"),", ",Object(o.b)("inlineCode",{parentName:"li"},"nni"),", ",Object(o.b)("inlineCode",{parentName:"li"},"mlflow"),", ",Object(o.b)("inlineCode",{parentName:"li"},"tensorboard"),", ",Object(o.b)("inlineCode",{parentName:"li"},"polyaxon"),"...). Our use cases revolve around qualitative outputs for a wide range of algorithms. It means we ",Object(o.b)("em",{parentName:"li"},"need")," powerful visualizations. This said, those tools are great too! Many of the commercial solutions (",Object(o.b)("inlineCode",{parentName:"li"},"cometML"),", ",Object(o.b)("inlineCode",{parentName:"li"},"convrg.io"),", ",Object(o.b)("inlineCode",{parentName:"li"},"netpune.ai"),"...) can provide a lot of value too depending on your use-case and the size/maturity of your organization."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Notebooks")," are amazing for experimentation and r&d reporting, but are not easy to compare. "),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.tensorflow.org/tensorboard"}),Object(o.b)("inlineCode",{parentName:"a"},"tensorboard"))," has a lot of qualities, but it doesn't scale to many experiments, doesn't know about ",Object(o.b)("inlineCode",{parentName:"li"},"git"),', and is not persistent. We may integrate an "Open in Tensorboard" button, ask about it and stay tuned. As for ',Object(o.b)("inlineCode",{parentName:"li"},"visdom"),", it's great for experimenting, less to store historical information.")))}b.isMDXComponent=!0},183:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||o;return n?a.a.createElement(m,l(l({ref:t},c),{},{components:n})):a.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);