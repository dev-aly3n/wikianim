(this["webpackJsonpaly3n-anime"]=this["webpackJsonpaly3n-anime"]||[]).push([[5],{100:function(e,t,n){"use strict";var a,r=n(96),i=n(24),c=n(0),s=n(12),o=n(88),l=n(8),d=n(92),j=n(43),m=n(93),u=n(81),b=n(27),h=n(2),g=function(e){var t=e.anime,n=e.rank,r=Object(l.f)(),i=Object(u.a)(),c=t.description;return c=c.substring(0,300),Object(h.jsxs)("div",{className:"top-container group",children:[Object(h.jsxs)(o.a.a,{href:"/anime/".concat(t.id),onClick:function(e){e.preventDefault(),i.writeQuery({query:Object(b.a)(a||(a=Object(s.a)(["\n        query WriteIsLoading {\n          loadingbar {\n            isLoading\n          }\n        }\n      "]))),data:{loadingbar:{__typename:"LoadingBar",isLoading:30}}}),setTimeout((function(){r.push("/anime/".concat(t.id))}),500)},animate:{opacity:1,transition:{duration:1}},initial:{opacity:0},children:[Object(h.jsx)("img",{alt:"",src:t.coverImage.large}),Object(h.jsxs)("div",{className:"top-info-container",children:[Object(h.jsxs)("div",{className:"top-status",children:[Object(h.jsx)("h3",{children:t.title.english?t.title.english:t.title.romaji}),Object(h.jsxs)("div",{className:"top-information",children:[t.format&&Object(h.jsx)("p",{children:t.format.toLowerCase()}),t.source&&Object(h.jsx)("p",{children:t.source.toLowerCase()}),t.status&&Object(h.jsx)("p",{children:t.status.toLowerCase()}),Object(h.jsxs)("p",{children:[t.season?t.season.toLowerCase():""," ",t.seasonYear?t.seasonYear:""]})]}),Object(h.jsx)("div",{className:"top-tag-container",children:t.tags.filter((function(e,t){return t<=3})).map((function(e){return Object(h.jsx)("span",{children:e.name},e.name)}))})]}),Object(h.jsx)("div",{className:"top-desc",children:Object(h.jsx)(m.a,{content:c})}),Object(h.jsx)("div",{className:"top-rate-score transform translate-x-4 -translate-y-4 group-hover:translate-y-0.5 group-hover:-translate-x-0.5",children:Object(h.jsx)(d.a,{size:4,rate:t.averageScore})}),Object(h.jsx)("div",{className:"top-rate-popularity transform translate-x-4 translate-y-4 \r group-hover:-translate-y-0.5 group-hover:-translate-x-0.5",children:Object(h.jsxs)("div",{className:"relative",children:[Object(h.jsx)(d.a,{size:4,rate:(t.popularity/3e5*100).toFixed(0),symbol:j.d}),Object(h.jsx)("p",{className:"top-rate-pop-text",children:"popularity"})]})})]})]}),Object(h.jsx)("span",{children:n})]})};t.a=function(e){var t=e.allAnimeData,n=e.initialQuantity,a=e.keyParam,s=Object(c.useState)({stream:n}),l=Object(i.a)(s,2),d=l[0],j=l[1],m=[],u=t.filter((function(e){var t=void 0!==e.id?e:e.node;return!m.includes(t.id)&&(m.push(t.id),void 0!==e)&&e}));return Object(h.jsxs)(o.a.div,{className:"top-list-container",children:[Object(h.jsx)("div",{className:"anime-list-container",children:Object(h.jsx)(o.a.div,{className:"anime-list",children:u.filter((function(e,t){return t<=d.stream-1})).map((function(e,t){var n=void 0!==e.id?e:e.node;return Object(h.jsx)(g,{anime:n,rank:t+1},"".concat(a,"-").concat(n.id))}))})}),t.length>n&&Object(h.jsx)("button",{onClick:function(e){d.stream>30?(j(Object(r.a)(Object(r.a)({},d),{},{stream:d.stream+999})),e.target.style.display="none"):j(Object(r.a)(Object(r.a)({},d),{},{stream:d.stream+10})),d.stream+10>=t.length&&(e.target.style.display="none")},className:"stream-show-more-btn ",children:"Load More"})]})}},117:function(e,t,n){"use strict";n.r(t);var a,r,i,c=n(12),s=n(0),o=n.n(s),l=n(113),d=n(44),j=n(98),m=n(88),u=n(8),b=n(95),h=n(43),g=n(42),O=n(81),x=n(27),f=n(2),p=function(e){var t=e.airing,n=Object(u.f)(),r=Object(O.a)();return Object(f.jsx)(m.a.a,{onClick:function(e){e.preventDefault(),r.writeQuery({query:Object(x.a)(a||(a=Object(c.a)(["\n        query WriteIsLoading {\n          loadingbar {\n            isLoading\n          }\n        }\n      "]))),data:{loadingbar:{__typename:"LoadingBar",isLoading:30}}}),setTimeout((function(){n.push("/anime/".concat(t.id))}),500)},href:"/anime/".concat(t.id),className:"airing-container group",animate:{opacity:1,transition:{duration:2}},initial:{opacity:0},children:Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{alt:"",className:"transform group-hover:scale-110",src:t.bannerImage}),Object(f.jsxs)("div",{className:"group-hover:bg-opacity-60",children:[Object(f.jsx)("h3",{children:t.title.english?t.title.english:t.title.romaji}),Object(f.jsxs)("p",{children:[Object(f.jsxs)("span",{children:["Episode ",t.nextAiringEpisode.episode," "]}),Object(f.jsxs)("span",{className:"",children:[Object(f.jsx)(g.a,{icon:h.b})," ",Object(b.b)(t.nextAiringEpisode.timeUntilAiring,"dhm")]})]})]})]})})},v=function(e){var t=e.allAiring,n=e.keyParam,a=[],r=t.filter((function(e){return!(a.includes(e.media.id)||(a.push(e.media.id),!(void 0!==e.media&null!==e.media.bannerImage)))&&e}));return Object(f.jsx)(m.a.div,{className:"airing-list-container",children:Object(f.jsx)("div",{children:Object(f.jsx)("div",{children:r.filter((function(e,t){return t<=7})).map((function(e){return Object(f.jsx)(p,{airing:e.media},"".concat(n,"-").concat(e.media.id))}))})})})},y=n(97),N=function(e){var t=e.allRecom,n=e.keyParam;return Object(f.jsx)("div",{className:"home-rec",children:t.filter((function(e,t){return t<=1})).map((function(e){return Object(f.jsx)(y.a,{widthParam:!0,recom:e},n+e.media.id)}))})},L=n(100),w=n(99),k=n(24),C=n(93),T=function(e){var t=e.airing,n=e.onGrabbingSlider,a=Object(u.f)(),i=Object(O.a)(),s=function(e){e.preventDefault(),i.writeQuery({query:Object(x.a)(r||(r=Object(c.a)(["\n        query WriteIsLoading {\n          loadingbar {\n            isLoading\n          }\n        }\n      "]))),data:{loadingbar:{__typename:"LoadingBar",isLoading:30}}}),setTimeout((function(){a.push("/anime/".concat(t.id))}),500)};return Object(f.jsxs)("div",{className:"air-slide-container anni group",onMouseDown:function(){return n()},onTouchStart:function(){return n()},children:[Object(f.jsx)("img",{alt:"",className:"transform group-hover:scale-110 ",src:t.bannerImage}),Object(f.jsxs)("div",{className:"group-hover:bg-opacity-80",children:[Object(f.jsx)("div",{className:"air-slide-cover-image transform group-hover:scale-95 ",children:Object(f.jsx)("a",{onClick:s,href:"/anime/".concat(t.id),children:Object(f.jsx)("img",{alt:"",src:t.coverImage.large})})}),Object(f.jsxs)("div",{className:"air-slide-info",children:[Object(f.jsx)("a",{href:"/anime/".concat(t.id),onClick:s,children:Object(f.jsx)("h3",{onClick:s,children:t.title.english?t.title.english:t.title.romaji})}),t.format&&Object(f.jsxs)("p",{children:[Object(f.jsx)("b",{children:"Format:"}),Object(f.jsx)("br",{})," ",t.format.toLowerCase()]}),t.source&&Object(f.jsxs)("p",{children:[Object(f.jsx)("b",{children:"Source:"}),Object(f.jsx)("br",{})," ",t.source.toLowerCase()]}),t.genres&&Object(f.jsxs)("p",{children:[Object(f.jsx)("b",{children:"Genres:"}),Object(f.jsx)("br",{})," ",t.genres.filter((function(e,t){return t<=2})).map((function(e){return Object(f.jsx)("span",{className:"air-slide-genres",children:e},e)}))]}),Object(f.jsxs)("p",{className:"text-indigo-200",children:[Object(f.jsxs)("span",{children:[Object(f.jsx)("b",{children:"Next airing:"})," ",Object(f.jsx)("br",{})," Episode"," ",t.nextAiringEpisode.episode," "]}),Object(f.jsxs)("span",{className:"",children:[Object(f.jsx)(g.a,{icon:h.b})," ",Object(b.b)(t.nextAiringEpisode.timeUntilAiring,"dhm")]})]})]}),Object(f.jsx)("div",{className:"air-slide-desc",children:Object(f.jsx)(C.a,{content:t.description})})]})]})},M=function(e){var t,n=e.allAiring,a=e.keyParam,r=Object(s.useState)(0),i=Object(k.a)(r,2),c=i[0],o=i[1],l=Object(s.useState)(!0),d=Object(k.a)(l,2),j=d[0],m=d[1],u=Object(s.useCallback)((function(){m(!1),clearTimeout(t)}),[m]),b=[],O=n.filter((function(e){return!(b.includes(e.media.id)||(b.push(e.media.id),!(void 0!==e.media&null!==e.media.bannerImage)))&&e}));return Object(s.useEffect)((function(){if(j)return t=setTimeout((function(){o(7===c?0:c+1)}),4e3),function(){clearTimeout(t)}}),[c,j]),Object(f.jsxs)("div",{className:"airing-slider-container",children:[O.filter((function(e,t){return t===c})).map((function(e){return Object(f.jsx)(T,{onGrabbingSlider:u,airing:e.media},"".concat(a,"-").concat(e.media.id))})),Object(f.jsx)("button",{onClick:function(){m(!1),setTimeout((function(){o(0===c?7:c-1)}),200)},className:"left-0",children:Object(f.jsx)(g.a,{className:"text-4xl transform rotate-180 text-gray-500",icon:h.a})}),Object(f.jsx)("button",{onClick:function(){m(!1),setTimeout((function(){o(7===c?0:c+1)}),200)},className:"right-0",children:Object(f.jsx)(g.a,{className:"text-4xl text-gray-500",icon:h.a})})]})},R=n(45);t.default=function(e){var t=e.gridRef;Object(O.a)().writeQuery({query:Object(x.a)(i||(i=Object(c.a)(["\n      query WriteIsLoading {\n        loadingbar {\n          isLoading\n        }\n      }\n    "]))),data:{loadingbar:{__typename:"LoadingBar",isLoading:80}}});var n=d.d,a=Object(l.a)(n),r=a.loading,s=a.error,m=a.data;if(r)return Object(f.jsx)(R.a,{});if(s)return console.log(s.message),"Error! ".concat(s);var u=m.trending.media,b=m.airing.airingSchedules,h=m.allTime.media,g=m.top100.media;return Object(f.jsx)(o.a.Fragment,{children:Object(f.jsxs)("div",{ref:t,className:" home-grid-container home-page-container",children:[Object(f.jsxs)("div",{className:"h-header",children:[b[0]&&Object(f.jsx)("div",{children:Object(f.jsx)(M,{allAiring:b,keyParam:"airingSlider"})}),m.homeRecom.recommendations[0]&&Object(f.jsx)("div",{children:Object(f.jsx)(w.a,{allRecom:m.homeRecom.recommendations,initialQuantity:7,keyParam:"recSlider"})})]}),Object(f.jsxs)("div",{className:"h-sidebar ",children:[m.homeRecom.recommendations[0]&&Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{children:"Top Recommendations"}),Object(f.jsx)(N,{allRecom:m.homeRecom.recommendations,keyParam:"topRec"})]}),b[0]&&Object(f.jsxs)("div",{children:[Object(f.jsx)("h3",{children:"Airing Schedules"}),Object(f.jsx)(v,{allAiring:b,keyParam:"airing"})]})]}),Object(f.jsxs)("div",{className:"h-trending",children:[Object(f.jsx)("h3",{children:"Trending"}),Object(f.jsx)(j.a,{allAnimeData:u,colsInRow:4,initialQuantity:8,keyParam:"homeTrending"})]}),Object(f.jsxs)("div",{className:"h-alltime",children:[Object(f.jsx)("h3",{children:"Popular All Time"}),Object(f.jsx)(j.a,{allAnimeData:h,colsInRow:4,initialQuantity:8,keyParam:"homepopAllTime"})]}),Object(f.jsxs)("div",{className:"h-top100",children:[Object(f.jsx)("h3",{children:"Top 100"}),Object(f.jsx)(L.a,{allAnimeData:g,initialQuantity:8,keyParam:"top100"})]})]})})}},92:function(e,t,n){"use strict";n(0);var a=n(42),r=n(2);t.a=function(e){var t,n,i=e.rate,c=e.symbol,s=e.size;return null===i&&(i=0),i<=25?(n="bg-red-500",t="linear-gradient(".concat(i/100*360+90,"deg, transparent 50%, rgb(212, 212, 212) 50%), linear-gradient(90deg, rgb(212, 212, 212) 50%, transparent 50%)")):i<50?(n="bg-yellow-500",t="linear-gradient(".concat(i/100*360+90,"deg, transparent 50%, rgb(212, 212, 212) 50%), linear-gradient(90deg, rgb(212, 212, 212) 50%, transparent 50%)")):50===i?(n="bg-yellow-300",t="linear-gradient(90deg, rgb(212, 212, 212) 50%, transparent 50%)"):i>=100?(i=100,n="bg-green-600",t="none"):i<=75?(n="bg-green-300",t="linear-gradient(".concat((i-50)/100*360+90,"deg, transparent 50%, rgba(110,231,183,1) 50%), linear-gradient(90deg, rgb(212, 212, 212) 50%, transparent 50%)")):(n="bg-green-500",t="linear-gradient(".concat((i-50)/100*360+90,"deg, transparent 50%, rgba(16,185,129,1) 50%), linear-gradient(90deg, rgb(212, 212, 212) 50%, transparent 50%)")),Object(r.jsx)("div",{style:{backgroundImage:t,width:"".concat(s,"rem"),height:"".concat(s,"rem"),borderRadius:"50%"},className:"".concat(n," circle-rate-container group group-hover:animate-reversecycler"),children:Object(r.jsx)("div",{className:"group-hover:animate-cycler",style:{width:"".concat(s-1,"rem"),height:"".concat(s-1,"rem"),borderRadius:"50%"},children:c?Object(r.jsxs)("div",{className:"rate-symbol",children:[Object(r.jsx)(a.a,{icon:c,className:"".concat(5===s?"text-6xl":4===s?"text-5xl ":""," text-red-500")}),Object(r.jsxs)("div",{className:"".concat(5===s?"text-lg":4===s?"text-sm":""," text-white absolute"),style:{right:"50%",top:"50%",transform:"translate(50%, -50%)"},children:[i,"%"]})]}):Object(r.jsxs)("span",{className:"score-num",children:[Object(r.jsx)("span",{children:"score"}),Object(r.jsxs)("span",{className:"".concat(5===s?"text-2xl":4===s?"text-base":""),children:[i,"%"]})]})})})}},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return c}));var a=function(e,t){var n;return/^#([A-Fa-f0-9]{3}){1,2}$/.test(e)?(3===(n=e.substring(1).split("")).length&&(n=[n[0],n[0],n[1],n[1],n[2],n[2]]),"rgba("+[(n="0x"+n.join(""))>>16&255,n>>8&255,255&n].join(",")+",".concat(t,")")):"rgba(0,0,0,0.2)"},r=function(e,t){e=Number(e);var n=Math.floor(e/86400),a=Math.floor(e%86400/3600),r=Math.floor(e%3600/60),i=Math.floor(e%60),c=n>0?n+"d ":"",s=a>0?a+"h ":"",o=r>0?r+"min ":"";return"dhms"===t?c+s+o+(i>0?i+"s":""):"dhm"===t?c+s+o:void 0},i=function(e,t,n){return setTimeout((function(){if(e.current&&e.current.firstElementChild.offsetHeight>"".concat(n+100)){e.current.firstElementChild.style.height="".concat(n,"px"),e.current.firstElementChild.style.overflow="hidden",e.current.firstElementChild.style.position="relative";var a=document.createElement("button");a.className=t,a.textContent="Show More",e.current.firstElementChild.lastElementChild.after(a),a.addEventListener("click",(function(){a.style.display="none",e.current.firstElementChild.style.height="100%"}))}}),100)},c="https://png.pngitem.com/pimgs/s/52-526033_unknown-person-icon-png-transparent-png.png"},97:function(e,t,n){"use strict";var a,r=n(12),i=n(93),c=n(8),s=n(43),o=n(42),l=n(88),d=n(81),j=n(27),m=n(94),u=n.n(m),b=n(2);t.a=function(e){var t=e.recom,n=e.widthParam,m=t.node?t.node.mediaRecommendation:t.media,h=t.node?t.node.rating:t.rating,g=Object(c.f)(),O=Object(d.a)();return Object(b.jsxs)(l.a.a,{draggable:!0,href:"/anime/".concat(m.id),onClick:function(e){e.preventDefault(),O.writeQuery({query:Object(j.a)(a||(a=Object(r.a)(["\n        query WriteIsLoading {\n          loadingbar {\n            isLoading\n          }\n        }\n      "]))),data:{loadingbar:{__typename:"LoadingBar",isLoading:30}}}),setTimeout((function(){g.push("/anime/".concat(m.id))}),500)},className:" ".concat(n?"w-full ssm:w-8/12 sm:w-11/12 my-3":"w-60 mx-3","  recom-container"),children:[Object(b.jsxs)("div",{className:"recom-detail",children:[Object(b.jsx)(u.a,{offset:100,children:Object(b.jsx)("img",{alt:"",src:m.coverImage.large})}),Object(b.jsxs)("div",{className:"recom-info",children:[Object(b.jsxs)("p",{className:"line-clamp-4",children:[Object(b.jsx)("b",{children:"Title:"}),Object(b.jsx)("br",{})," ",m.title.english?m.title.english:m.title.romaji]}),m.format&&Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Format:"}),Object(b.jsx)("br",{})," ",m.format.toLowerCase()]}),m.source&&Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Source:"}),Object(b.jsx)("br",{})," ",m.source.toLowerCase()]}),m.status&&Object(b.jsxs)("p",{children:[Object(b.jsx)("b",{children:"Status:"}),Object(b.jsx)("br",{})," ",m.status.toLowerCase()]})]})]}),m.description&&Object(b.jsxs)("div",{className:"recom-desc line-clamp-5",children:[Object(b.jsx)("b",{children:"Description:"})," ",Object(b.jsx)(i.a,{content:m.description})]}),Object(b.jsx)("div",{className:"recom-rating",children:void 0!==h&&(h<=0?Object(b.jsxs)("div",{className:"red-rate",children:[h," ",Object(b.jsx)(o.a,{icon:s.f})]}):Object(b.jsxs)("div",{className:"green-rate",children:["+",h," ",Object(b.jsx)(o.a,{icon:s.g})]}))})]})}},98:function(e,t,n){"use strict";var a,r=n(96),i=n(24),c=n(0),s=n(12),o=n(88),l=n(8),d=n(92),j=n(81),m=n(27),u=n(94),b=n.n(u),h=n(2),g=function(e){var t=e.anime,n=Object(j.a)(),r=Object(l.f)();return Object(h.jsxs)(o.a.a,{href:"/anime/".concat(t.id),onClick:function(e){e.preventDefault(),n.writeQuery({query:Object(m.a)(a||(a=Object(s.a)(["\n        query WriteIsLoading {\n          loadingbar {\n            isLoading\n          }\n        }\n      "]))),data:{loadingbar:{__typename:"LoadingBar",isLoading:30}}}),setTimeout((function(){r.push("/anime/".concat(t.id))}),500)},className:"anime-card-container group hover-card-num-1",animate:{opacity:1,transition:{duration:1}},initial:{opacity:0},children:[void 0!==t.averageScore&&Object(h.jsx)("div",{className:"anime-circle-rate transform translate-x-4 -translate-y-4 \r group-hover:translate-y-0.5 group-hover:-translate-x-0.5 ",children:Object(h.jsx)(d.a,{rate:t.averageScore,size:4})}),Object(h.jsx)(b.a,{offset:100,children:Object(h.jsx)("img",{alt:"",src:t.coverImage.large})}),Object(h.jsxs)("div",{className:"anime-info\r ",children:[Object(h.jsx)("div",{className:" bg-yellow-300 ",children:t.format}),Object(h.jsx)("div",{className:" bg-green-300 ",children:t.source}),Object(h.jsx)("div",{className:" bg-red-300 ",children:t.status})]}),Object(h.jsx)("h3",{className:"line-clamp-2",children:null!==t.title.english?t.title.english:t.title.romaji})]})};t.a=function(e){var t=e.allAnimeData,n=e.initialQuantity,a=e.colsInRow,s=e.keyParam,l=Object(c.useState)({stream:n}),d=Object(i.a)(l,2),j=d[0],m=d[1],u="grid-cols-2 ssm:grid-cols-".concat(a-1," lg:grid-cols-").concat(a-1," xl:grid-cols-").concat(a),b=[],O=t.filter((function(e){var t=void 0!==e.id?e:e.node;return!b.includes(t.id)&&(b.push(t.id),void 0!==e)&&e}));return Object(h.jsxs)(o.a.div,{className:"pb-10",children:[Object(h.jsx)("div",{className:"anime-list-container",children:Object(h.jsx)(o.a.div,{className:"anime-list ".concat(u),children:O.filter((function(e,t){return t<=j.stream-1})).map((function(e){var t=void 0!==e.id?e:e.node;return Object(h.jsx)(g,{anime:t},"".concat(s,"-").concat(t.id))}))})}),t.length>n&&Object(h.jsx)("button",{onClick:function(e){j.stream>30?(m(Object(r.a)(Object(r.a)({},j),{},{stream:j.stream+999})),e.target.style.display="none"):m(Object(r.a)(Object(r.a)({},j),{},{stream:j.stream+10})),j.stream+10>=t.length&&(e.target.style.display="none")},className:"stream-show-more-btn",children:"Load More"})]})}},99:function(e,t,n){"use strict";var a=n(24),r=n(0),i=n.n(r),c=n(97),s=n(43),o=n(42),l=n(44),d=n(113),j=n(2);t.a=function(e){var t,n=e.allRecom,m=e.animeID,u=e.initialQuantity,b=e.keyParam,h=document.documentElement.clientWidth<=768,g=250,O=h?264:528,x=Object(r.useRef)(null),f=Object(r.useRef)(null),p=Object(r.useState)({recommend:u}),v=Object(a.a)(p,2),y=v[0],N=v[1];t=m||16498;var L,w=Object(d.a)(l.f,{variables:{id:t}}),k=w.loading,C=w.error,T=w.data;if(k)return null;if(C)return console.log(C.message),"Error! ".concat(C);L=n||T.Media.recommendations.edges;var M,R,E=!1;return Object(j.jsx)(i.a.Fragment,{children:L.length>0&&Object(j.jsxs)("div",{children:[Object(j.jsx)("h4",{className:"recom-list-title",children:"Recommendations"}),Object(j.jsxs)("div",{className:"recommendation-parent",children:[Object(j.jsx)("div",{className:"recommendation",ref:x,onTouchEnd:function(){var e=x.current.scrollLeft;e/x.current.scrollWidth<.5&&(h?y.recommend<L.length+1:y.recommend<L.length+3)&&N({recommend:L.length}),(Math.round(e)-g)%O!==0&&0!==e&&(e=(e=Math.round((Math.round(e)-g)/O))*O+g,x.current.scrollTo({top:0,left:e,behavior:"smooth"}))},onMouseDown:function(e){e.preventDefault(),E=!0,M=e.pageX-x.current.offsetLeft,R=x.current.scrollLeft},onMouseLeave:function(){E=!1,f.current.style.display="none"},onMouseUp:function(){E=!1,f.current.style.display="none",N({recommend:L.length})},onMouseMove:function(e){if(E){e.preventDefault();var t=1.5*(e.pageX-x.current.offsetLeft-M);x.current.scrollLeft=R-t,f.current.style.display="block"}},children:Object(j.jsxs)("div",{children:[L.slice(0,y.recommend-1).map((function(e,t){var n=e.node?e.node.mediaRecommendation.id:e.media.id;return Object(j.jsx)(c.a,{recom:e},b+n+t)})),Object(j.jsx)("div",{ref:f,className:"wasteful-cover"})]})}),Object(j.jsx)("button",{onClick:function(){var e=x.current.scrollLeft,t=x.current.scrollWidth;(Math.round(e)-g)%O!==0?(e=(e=Math.round((Math.round(e)-g)/O))*O+g,x.current.scrollTo({top:0,left:t===e?e-275:e-O,behavior:"smooth"})):x.current.scrollTo({top:0,left:t===e?e-275:e-O,behavior:"smooth"})},className:"left-0 bg-gradient-to-l",children:Object(j.jsx)(o.a,{className:"font-icon-recom-list rotate-180",icon:s.a})}),Object(j.jsx)("button",{onClick:function(){var e=x.current.scrollLeft,t=x.current.scrollWidth;if((Math.round(e)-g)%O!==0){if(e=(e=Math.round((Math.round(e)-g)/O))*O+g,x.current.scrollTo({top:0,left:t===e?e+275:e+O,behavior:"smooth"}),h?y.recommend<L.length+1:y.recommend<L.length+3){var n=h?y.recommend+1:y.recommend+3;N({recommend:n})}}else if(x.current.scrollTo({top:0,left:0===e?e+g:e+O,behavior:"smooth"}),h?y.recommend<L.length+1:y.recommend<L.length+3){var a=h?y.recommend+1:y.recommend+3;N({recommend:a})}},className:"right-0 bg-gradient-to-r",children:Object(j.jsx)(o.a,{className:"font-icon-recom-list",icon:s.a})})]})]})})}}}]);
//# sourceMappingURL=5.18f9d083.chunk.js.map