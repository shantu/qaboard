(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{180:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(188),i=t.n(l),s=t(193),o=t(189),c=t(183),m=t(184),u=t(170),d=t.n(u);function g(e){var a,t=e.reversed,r=e.title,l=e.img,s=e.text,o=n.a.createElement("div",{className:d.a.featureImage},l),c=n.a.createElement("div",{className:d.a.featureText},n.a.createElement("h3",{className:d.a.featureTitle},r),s);return n.a.createElement("div",{className:d.a.featureContainer},n.a.createElement("div",{className:i()("col col--12",d.a.featureContent,(a={},a[d.a.reversed]=!0===t,a))},t?n.a.createElement(n.a.Fragment,null,c,o):n.a.createElement(n.a.Fragment,null,o,c)))}var p=t(127),h=t.n(p),E=[{title:n.a.createElement(n.a.Fragment,null,"What is QA-Board?"),imageUrl:"img/undraw/undraw_forming_ideas_0pav.svg",description:n.a.createElement(n.a.Fragment,null,"QA-Board helps Algorithms and QA engineers build great products. It offers powerful quality evaluation and collaboration tools.")},{title:n.a.createElement(n.a.Fragment,null,"What does it do?"),imageUrl:"img/undraw/undraw_ideation_2a64.svg",description:n.a.createElement(n.a.Fragment,null,"Compare results between commits. Create advanced visualizations from your existing output files. Track metrics across time. Start tuning experiments.")},{title:n.a.createElement(n.a.Fragment,null,"How do I use it?"),imageUrl:"img/undraw/undraw_factory_dy0a.svg",description:n.a.createElement(n.a.Fragment,null,"Run your code with a small CLI wrapper. You will see results from the web application.")}];a.default=function(){var e=Object(c.a)().siteConfig,a=void 0===e?{}:e;return n.a.createElement(s.a,{title:a.title,description:a.tagline},n.a.createElement("header",{className:i()("hero hero--primary",h.a.heroBanner)},n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"hero__title"},a.title),n.a.createElement("p",{className:"hero__subtitle"},a.tagline),n.a.createElement("div",{className:h.a.buttons},n.a.createElement(o.a,{className:i()("button button--secondary button--lg",h.a.getStarted),to:Object(m.a)("https://samsung.github.io/qaboard/docs/introduction")},"Get Started"),n.a.createElement("span",{className:h.a.indexCtasGitHubButtonWrapper},n.a.createElement("iframe",{className:h.a.indexCtasGitHubButton,src:"https://ghbtns.com/github-btn.html?user=Samsung&repo=qaboard&type=star&count=true&size=large",width:160,height:30,title:"GitHub Stars"}))))),n.a.createElement("main",null,E&&E.length&&n.a.createElement("section",{className:h.a.features},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},E.map((function(e,a){var t=e.imageUrl,r=e.title,l=e.description;return n.a.createElement("div",{key:a,className:i()("col col--4",h.a.feature)},t&&n.a.createElement("div",{className:"text--center"},n.a.createElement("img",{className:h.a.featureImage,src:Object(m.a)(t),alt:r})),n.a.createElement("h3",null,r),n.a.createElement("p",null,l))}))))),n.a.createElement("div",{className:"container"},n.a.createElement(g,{img:n.a.createElement("img",{src:Object(m.a)("img/slides/commit-list.jpg"),alt:"Annotations",loading:"lazy"}),title:"Organize & Share",text:n.a.createElement(n.a.Fragment,null,n.a.createElement("p",null,"Triggered runs from the ",n.a.createElement("strong",null,"CI or locally"),", and see them ",n.a.createElement("strong",null,"all in one place"),"."),n.a.createElement("p",null,"QA-Board is aware of version control; you can filter by commit, branch, author, message..."))}),n.a.createElement(g,{img:n.a.createElement("img",{src:Object(m.a)("img/slides/always-compare.jpg"),alt:"Always Compare",loading:"lazy"}),title:"Always Compare",reversed:!0,text:n.a.createElement(n.a.Fragment,null,n.a.createElement("p",null,"Whether you look at metrics or visualizations, QA-Board always compares each output to a reference version. You can ",n.a.createElement("a",{href:"https://samsung.github.io/qaboard/docs/references-and-milestones"},"save Milestones")," to benchmark new results."),n.a.createElement("p",null,"You can compare configurations and filter results however you like."))}),n.a.createElement(g,{img:n.a.createElement("img",{src:Object(m.a)("img/slides/aggregate.jpg"),alt:"Aggregation and rich KPIs",loading:"lazy"}),title:"Rich Metrics",text:n.a.createElement(n.a.Fragment,null,n.a.createElement("p",null,"Real-world project need to look at heterogenuous KPIs: performance, quality, training time..."),n.a.createElement("p",null,"QA-Board lets you ",n.a.createElement("a",{href:"https://samsung.github.io/qaboard/docs/computing-quantitative-metrics"},"define as many metrics as needed"),", add metada (targets, label, units..), and can give you aggregated summaries as well as granular tables."))}),n.a.createElement(g,{img:n.a.createElement("img",{src:Object(m.a)("img/slides/show-files.jpg"),alt:"File-based Visualizations",loading:"lazy"}),title:"Output Visualizations",reversed:!0,text:n.a.createElement(n.a.Fragment,null,n.a.createElement("p",null,"With QA-Board, each run dumps files in an output folder. When comparing results, you see a diff of all the files. Files are displayed with a ",n.a.createElement("a",{href:"https://samsung.github.io/qaboard/docs/visualizations#available-file-viewers"},"wide range of viewers"),": ",n.a.createElement("strong",null,"first-party support for ",n.a.createElement("a",{href:"https://plotly.com/python/"},"plotly")),", text, images, synced videos, 3d pointclouds, raw HTML..."),n.a.createElement("p",null,"You can ",n.a.createElement("a",{href:"https://samsung.github.io/qaboard/docs/visualizations"},"declaratively create visualizations")," to show e.g. multiple images, debug data, sliders...."))}),n.a.createElement(g,{img:n.a.createElement("img",{src:Object(m.a)("img/slides/image-viewer.jpg"),alt:"Advanced Image Viewer",loading:"lazy"}),title:"Advanced Image Viewer",text:n.a.createElement(n.a.Fragment,null,n.a.createElement("p",null,"QA-Board notably supports a performance image viewer based on ",n.a.createElement("a",{href:"https://openseadragon.github.io/"},"OpenSeaDragon"),". At Samsung it lets use work smoothly with >100MP images."),n.a.createElement("p",null,'Advanced features include showing perceptual differences, automatically finding interesting (or defining ahead of time) "Regions of Interest", histograms, color tooltops and standard image.'))}),n.a.createElement(g,{img:n.a.createElement("img",{src:Object(m.a)("img/slides/tuning.jpg"),alt:"Tuning & Optimization",loading:"lazy"}),title:"Tuning & Optimization",reversed:!0,text:n.a.createElement(n.a.Fragment,null,n.a.createElement("p",null,n.a.createElement("a",{href:"https://samsung.github.io/qaboard/docs/batches-running-on-multiple-inputs"},"Define batches of inputs")," to run on files/databases that matter to you. Start tuning experiments to compare parameters or feature flags"),n.a.createElement("p",null,"Use Grid-Search or ",n.a.createElement("strong",null,"Black-box optimization")," (via ",n.a.createElement("a",{href:"https://scikit-optimize.github.io/"},"scikit-optimize"),"), and analyse trade-offs. Use ",n.a.createElement("a",{href:"https://github.com/Samsung/qaboard/wiki/Adding-new-runners"},"common tools")," for distributed runs."))}),n.a.createElement(g,{img:n.a.createElement("img",{src:Object(m.a)("img/slides/triggers.jpg"),alt:"Integrations",loading:"lazy"}),title:"Integrations",text:n.a.createElement(n.a.Fragment,null,n.a.createElement("p",null,"From QA-Board itsef you can link to your docs, or artifacts. You can also add buttons to ",n.a.createElement("a",{href:"https://samsung.github.io/qaboard/docs/triggering-third-party-tools"},"trigger 3rd party tools")," like Jenkins, GitlabCi, or webhooks. ",n.a.createElement("strong",null,"When runing during CI runs"),", QA-Board will update your CI tool with the run's status."))}),n.a.createElement(g,{img:n.a.createElement("img",{src:Object(m.a)("img/slides/regressions.jpg"),alt:"Regression Explorer",loading:"lazy"}),title:"Regression Explorer",reversed:!0,text:n.a.createElement(n.a.Fragment,null,n.a.createElement("p",null,"If a regression occured, you can simply quickly investigate when it happened, and diff the change."),n.a.createElement("p",null,"More generally, QA-Board can be used for dashboard that show progress over time."))}),n.a.createElement(g,{title:"More features...",text:n.a.createElement(n.a.Fragment,null,n.a.createElement("p",null,"Mono-repo support, Bit-accuracy checks, Input metadata...."))}))))}},195:function(e,a,t){"use strict";t(24),t(19),t(71),t(50),t(18);var r=t(0),n=t.n(r),l=t(188),i=t.n(l),s=t(191),o=t(183),c=!1;a.a=function(e){var a=Object(r.useRef)(!1),l=Object(r.useRef)(null),m=Object(s.b)(),u=Object(o.a)().siteConfig,d=(void 0===u?{}:u).baseUrl,g=function(){a.current||(new window.DocSearch({searchData:window.searchData,inputSelector:"#search_input_react",handleSelected:function(e,a,t){var r=d+t.url;document.createElement("a").href=r,m.push(r)}}),a.current=!0)},p=function(){c?g():Promise.all([fetch(d+"search-data.json").then((function(e){return e.json()})),Promise.all([t.e(49),t.e(51)]).then(t.bind(null,197)),t.e(36).then(t.t.bind(null,196,7))]).then((function(e){var a=e[0],t=e[1].default;c=!0,window.searchData=a,window.DocSearch=t,g()}))},h=Object(r.useCallback)((function(a){l.current.contains(a.target)||l.current.focus(),e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return n.a.createElement("div",{className:"navbar__search",key:"search-box"},n.a.createElement("span",{"aria-label":"expand searchbar",role:"button",className:i()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:h,onKeyDown:h,tabIndex:0}),n.a.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:i()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:p,onMouseOver:p,onFocus:h,onBlur:h,ref:l}))}}}]);