(this["webpackJsonpaly3n-anime"]=this["webpackJsonpaly3n-anime"]||[]).push([[1],{44:function(e,n,t){"use strict";t.d(n,"e",(function(){return j})),t.d(n,"c",(function(){return u})),t.d(n,"b",(function(){return b})),t.d(n,"f",(function(){return h})),t.d(n,"d",(function(){return m})),t.d(n,"a",(function(){return g}));var a,r,i,s,c,o,l=t(11),d=t(26),j=Object(d.a)(a||(a=Object(l.a)(["\n  query MeNuSeArCh($search: String) {\n    Page(perPage: 5, page: 1) {\n      media(search: $search, sort: SEARCH_MATCH) {\n        id\n        coverImage {\n          medium\n          color\n        }\n        title {\n          english\n          romaji\n        }\n      }\n    }\n  }\n"]))),u=Object(d.a)(r||(r=Object(l.a)(["\n  query FiLtErPaGe($search: String) {\n    filter: Page(perPage: 50, page: 1) {\n      media(search: $search) {\n        id\n        title {\n          english\n          romaji\n        }\n        coverImage {\n          large\n          color\n        }\n        source\n        format\n        status\n        averageScore\n        popularity\n        seasonYear\n        season\n        tags {\n          name\n        }\n        description(asHtml: true)\n      }\n    }\n  }\n"]))),b=Object(d.a)(i||(i=Object(l.a)(["\n  query SelectedAnImE($id: Int) {\n    Media(id: $id) {\n      id\n      title {\n        english\n        romaji\n      }\n      description(asHtml: true)\n      duration\n      startDate {\n        year\n        month\n        day\n      }\n      endDate {\n        year\n        month\n        day\n      }\n      coverImage {\n        large\n        color\n      }\n      bannerImage\n      episodes\n      season\n      seasonYear\n      rankings {\n        id\n        context\n        allTime\n        rank\n        year\n        season\n      }\n      format\n      genres\n      streamingEpisodes {\n        title\n        thumbnail\n        url\n      }\n      relations {\n        edges {\n          node {\n            title {\n              english\n              romaji\n            }\n            id\n            coverImage {\n              large\n              color\n            }\n            source\n            format\n            status\n          }\n        }\n      }\n      reviews {\n        edges {\n          node {\n            id\n            user {\n              id\n              name\n              avatar {\n                medium\n              }\n            }\n            score\n            rating\n            ratingAmount\n            summary\n            body(asHtml: true)\n            createdAt\n          }\n        }\n      }\n      externalLinks {\n        id\n        site\n        url\n      }\n      studios {\n        edges {\n          isMain\n          node {\n            name\n            siteUrl\n            id\n          }\n        }\n      }\n      tags {\n        name\n        rank\n      }\n      popularity\n      meanScore\n      source\n      chapters\n      volumes\n      favourites\n      nextAiringEpisode {\n        timeUntilAiring\n        episode\n      }\n      trailer {\n        id\n      }\n      characters(sort: [ROLE]) {\n        edges {\n          role\n          voiceActors {\n            id\n            name {\n              full\n            }\n            image {\n              medium\n            }\n            languageV2\n          }\n          node {\n            id\n            name {\n              full\n            }\n            image {\n              medium\n            }\n          }\n        }\n      }\n      staff(sort: FAVOURITES_DESC) {\n        edges {\n          node {\n            id\n          }\n        }\n      }\n    }\n  }\n"]))),h=Object(d.a)(s||(s=Object(l.a)(["\n  query rEcOmLiStQuErY($id: Int) {\n    Media(id: $id) {\n      recommendations(sort: RATING_DESC) {\n        edges {\n          node {\n            rating\n            mediaRecommendation {\n              id\n              format\n              source\n              status\n              title {\n                english\n                romaji\n              }\n              coverImage {\n                large\n                color\n              }\n              description\n            }\n          }\n        }\n      }\n    }\n  }\n"]))),m=Object(d.a)(c||(c=Object(l.a)(["\n  query HoMeAnImE {\n    top100: Page(perPage: 50, page: 1) {\n      media(sort: SCORE_DESC) {\n        id\n        title {\n          english\n          romaji\n        }\n        coverImage {\n          large\n          color\n        }\n        source\n        format\n        status\n        averageScore\n        popularity\n        seasonYear\n        season\n        tags {\n          name\n        }\n        description(asHtml: true)\n      }\n    }\n    airing: Page(perPage: 50, page: 1) {\n      airingSchedules(sort: TIME, notYetAired: true) {\n        media {\n          id\n          nextAiringEpisode {\n            episode\n            timeUntilAiring\n          }\n          bannerImage\n          title {\n            english\n            romaji\n          }\n          source\n          format\n          genres\n          coverImage {\n            large\n            color\n          }\n          description(asHtml: true)\n        }\n      }\n    }\n    trending: Page(page: 1, perPage: 50) {\n      media(sort: TRENDING_DESC) {\n        id\n        coverImage {\n          large\n          color\n        }\n        title {\n          english\n          romaji\n        }\n        source\n        format\n        status\n        averageScore\n        meanScore\n      }\n    }\n    homeRecom: Page(perPage: 30, page: 1) {\n      recommendations(sort: RATING_DESC) {\n        rating\n        media {\n          id\n          description(asHtml: true)\n          title {\n            english\n            romaji\n          }\n          format\n          status\n          source\n          coverImage {\n            large\n            color\n          }\n        }\n      }\n    }\n    allTime: Page(perPage: 50, page: 1) {\n      media(sort: POPULARITY_DESC) {\n        id\n        title {\n          english\n          romaji\n        }\n        coverImage {\n          large\n          color\n        }\n        source\n        format\n        status\n        averageScore\n      }\n    }\n  }\n"]))),g=Object(d.a)(o||(o=Object(l.a)(["\n  query SelectedChar($char_id: Int, $staff_id: Int) {\n    Character(id: $char_id) {\n      id\n      name {\n        full\n        native\n      }\n      age\n      gender\n      dateOfBirth {\n        year\n        month\n        day\n      }\n      description(asHtml: true)\n      image {\n        large\n      }\n      favourites\n      media {\n        edges {\n          node {\n            id\n            coverImage {\n              large\n              color\n            }\n            format\n            source\n            status\n            title {\n              english\n              romaji\n            }\n          }\n        }\n      }\n    }\n    Staff(id: $staff_id) {\n      id\n      name {\n        full\n        native\n      }\n      favourites\n      age\n      gender\n      dateOfBirth {\n        year\n        month\n        day\n      }\n      dateOfDeath {\n        year\n        month\n        day\n      }\n      homeTown\n      languageV2\n      image {\n        large\n      }\n      yearsActive\n      description(asHtml: true)\n      staffMedia {\n        edges {\n          node {\n            id\n            coverImage {\n              large\n              color\n            }\n            format\n            source\n            status\n            title {\n              english\n              romaji\n            }\n          }\n        }\n      }\n    }\n  }\n"])))},45:function(e,n,t){"use strict";var a,r=t(11),i=t(72),s=t(26),c=t(2);n.a=function(e){var n,t,o,l,d=e.errMsg;switch(Object(i.a)().writeQuery({query:Object(s.a)(a||(a=Object(r.a)(["\n      query WriteIsLoading {\n        loadingbar {\n          isLoading\n        }\n      }\n    "]))),data:{loadingbar:{__typename:"LoadingBar",isLoading:80}}}),d){case"Failed to fetch":n=70,o=15,t=10,l=5;break;case"Not Found.":t=70,n=15,o=10,l=5;break;case"Too Many Requests.":o=70,n=15,t=10,l=5;break;default:l=70,o=15,n=10,t=5}return Object(c.jsxs)("div",{className:"error-page-container ",children:[Object(c.jsxs)("p",{children:[Object(c.jsx)("span",{children:"!"})," ",Object(c.jsx)("strong",{children:"WAIT! There is a problem!"}),Object(c.jsx)("br",{})," Here are 4 possibilities why you seeing this page by different priority:"]}),Object(c.jsxs)("div",{children:[Object(c.jsxs)("div",{className:"bg-blue-300",style:{order:-n},children:[Object(c.jsx)("div",{className:"error-possibility",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"error-pos-dash-style",style:{width:"".concat(n,"%")}}),Object(c.jsxs)("span",{style:{left:"".concat(n,"%")},children:[n,"% possibility"]})]})}),Object(c.jsxs)("strong",{children:["We coudn't get the data!",Object(c.jsx)("br",{})," here is some reasons for that:"]})," ",Object(c.jsx)("br",{}),"1- You are a user from Iran"," ",Object(c.jsx)("img",{alt:"",className:"inline-block",width:15,height:15,src:"/wikianime/media/iranflag.gif"})," ","(or other country with limited internet) and you need to"," ",Object(c.jsx)("strong",{children:"turn on your VPN"})," to see the contents! ",Object(c.jsx)("br",{})," ",Object(c.jsx)("br",{}),"2- You need to check your connection! maybe it lost. ",Object(c.jsx)("br",{})," ",Object(c.jsx)("br",{}),"3- The Server is down currently! (Low chance)"]}),Object(c.jsxs)("div",{className:" bg-yellow-300 ",style:{order:-t},children:[Object(c.jsx)("div",{className:"error-possibility",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"error-pos-dash-style",style:{width:"".concat(t,"%")}}),Object(c.jsxs)("span",{style:{left:"".concat(t,"%")},children:[t,"% possibility"]})]})}),Object(c.jsx)("strong",{children:"Media not Found! it may happen when:"})," ",Object(c.jsx)("br",{}),"1- You trying to reach a media with specific ID that is not exist in the server! ",Object(c.jsx)("br",{})," ",Object(c.jsx)("br",{}),"2- Do not try to add ID number 2 at the address bar after /anime/2 . it doesn't exist, don't try that! ",Object(c.jsx)("br",{})," ",Object(c.jsx)("br",{}),"3- The media was deleted from the server but still exist in relation of other media! (Low chance)"]}),Object(c.jsxs)("div",{className:" bg-pink-300",style:{order:-o},children:[Object(c.jsx)("div",{className:"error-possibility",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"error-pos-dash-style",style:{width:"".concat(o,"%")}}),Object(c.jsxs)("span",{style:{left:"".concat(o,"%")},children:[o,"% possibility"]})]})}),Object(c.jsx)("strong",{children:"Toooooooo many Request! it may happen when:"})," ",Object(c.jsx)("br",{}),"1- You trying to open more than 50 diferent pages in less than one minute! (WTF dude?) ",Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),"2- You are a bot! please get out my site stupid bot! DO NOT come back again, or no I will *** *** ***."]}),Object(c.jsxs)("div",{className:" bg-red-300 ",style:{order:-l},children:[Object(c.jsx)("div",{className:"error-possibility",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"error-pos-dash-style",style:{width:"".concat(l,"%")}}),Object(c.jsxs)("span",{style:{left:"".concat(l,"%")},children:[l,"% possibility"]})]})}),Object(c.jsx)("strong",{children:"We really really dont know WTF is going on!"}),Object(c.jsx)("br",{})," ",Object(c.jsx)("br",{}),"If you know please contact me from links at the footer and report the bug! I very appreciate that. ",Object(c.jsx)("br",{})," ",Object(c.jsx)("br",{}),"It can be because of changes that may happend on the server! (Low chance)"]})]})]})}},46:function(e,n,t){"use strict";var a=t(2);n.a=function(){return Object(a.jsx)("div",{className:"main-loading-container",children:Object(a.jsx)("div",{children:Object(a.jsxs)("div",{className:"lds-ripple",children:[Object(a.jsx)("div",{}),Object(a.jsx)("div",{})]})})})}},61:function(e,n,t){},70:function(e,n,t){"use strict";t.r(n);var a,r,i=t(0),s=t.n(i),c=t(52),o=t.n(c),l=(t(61),t(11)),d=t(8),j=t(72),u=t(26),b=t(24),h=t(83),m=t(19),g=t(2),O=function(e){var n=e.anime,t=e.emptySearchValue,r=Object(d.f)(),i=Object(j.a)();return Object(g.jsxs)("a",{href:"/anime/".concat(n.id),onClick:function(e){e.preventDefault(),i.writeQuery({query:Object(u.a)(a||(a=Object(l.a)(["\n        query WriteIsLoading {\n          loadingbar {\n            isLoading\n          }\n        }\n      "]))),data:{loadingbar:{__typename:"LoadingBar",isLoading:30}}}),setTimeout((function(){t(),r.push("/anime/".concat(n.id))}),500)},className:" search-anime-container",children:[Object(g.jsx)("img",{alt:"",src:n.coverImage.medium}),Object(g.jsx)("h4",{className:"line-clamp-2 mx-2",children:n.title.english?n.title.english:n.title.romaji})]})},p=t(89),f=t(42),x=t(43),v=t(44),y=function(){var e=Object(d.f)(),n=Object(i.useRef)(null),t=Object(i.useState)(""),a=Object(b.a)(t,2),r=a[0],s=a[1],c=Object(i.useState)(!0),o=Object(b.a)(c,2),l=o[0],j=o[1],u=Object(i.useState)(!1),y=Object(b.a)(u,2),k=y[0],w=y[1],N=[],L=Object(i.useCallback)((function(){s("")}),[s]);Object(i.useEffect)((function(){return window.addEventListener("click",(function(e){e.target.classList.contains("search-click")?w(!0):w(!1)})),function(){w(!1)}}),[]),Object(i.useEffect)((function(){j(!0);var e=setTimeout((function(){S({variables:{search:r}}),j(!1)}),700);return function(){clearTimeout(e)}}),[r]);var E=Object(h.a)(v.e),I=Object(b.a)(E,2),S=I[0],T=I[1],P=T.error,A=T.data;return P&&console.log(P),A&&(N=A.Page.media),Object(g.jsxs)("div",{className:"search-click searchbox-container",children:[Object(g.jsxs)("form",{onSubmit:function(n){n.preventDefault(),w(!1),e.push("/search/".concat(r)),s("")},className:"search-click",children:[Object(g.jsx)("span",{className:"search-click",children:Object(g.jsx)(f.a,{className:"search-click",icon:x.e,onClick:function(){return n.current.focus()}})}),Object(g.jsx)("input",{ref:n,onFocus:function(){return w(!0)},className:"search-click ",type:"text",value:r,placeholder:"Search...",onChange:function(e){s(e.target.value)}})]}),k&&Object(g.jsx)("div",{className:"search-click expanded-search-results",children:Object(g.jsxs)("div",{className:"search-click",children:[0===N.length&&Object(g.jsx)("p",{className:"search-click",children:""===r?"Search anything you want...":l?"":Object(g.jsx)(p.a.span,{animate:{opacity:1,transition:{duration:.1,delay:2}},initial:{opacity:0},className:"search-click",children:"Sorry! We couldn't find what looking for!"})}),l&&Object(g.jsx)("div",{className:"search-click lds-dual-ring"}),!l&&Object(g.jsxs)("div",{className:"searchbox-result",children:[N.length>0&&Object(g.jsx)(m.b,{className:"searchbox-result-link",to:"/search/".concat(r),onClick:function(){return s("")},children:"See All Results"}),Object(g.jsx)("div",{children:N.map((function(e){return Object(g.jsx)(O,{anime:e,emptySearchValue:L},e.id)}))})]})]})})]})},k=function(){var e=Object(j.a)(),n=Object(i.useRef)(null),t=Object(i.useRef)(null),a=Object(i.useRef)(null),s=Object(i.useRef)(null),c=Object(i.useRef)(null),o=Object(i.useRef)(null),d=Object(i.useRef)(null),b=document.getElementById("root");Object(i.useEffect)((function(){var e=t.current,r=a.current,i=[s.current,c.current,d.current,o.current];e.addEventListener("click",(function(){r.classList.toggle("nav-active"),i.forEach((function(e,n){e.style.animation?e.style.animation="":e.style.animation="navLinkFade 0.6s ease both ".concat(n/5+.3,"s")})),e.classList.toggle("toggle")})),document.addEventListener("click",(function(n){n.target.matches(".navigation")||(r.classList.remove("nav-active"),e.classList.remove("toggle"),i.forEach((function(e){e.style.animation=""})))}));var l=Number(b.scrollTop.toFixed(2));b.addEventListener("scroll",(function(){var e=Number(b.scrollTop.toFixed(2));l>e&&e>300?(n.current.style.top="0",n.current.style.backgroundColor="rgba(49,46,129,1)"):e<300||0===e?(n.current.style.top="0",n.current.style.backgroundColor="rgba(49,46,129,0.7)"):n.current.style.top="-72px",l=e})),window.addEventListener("touchmove",(function(){var e=Number(b.scrollTop.toFixed(2));l>e&&e>300?(n.current.style.top="0",n.current.style.backgroundColor="rgba(49,46,129,1)"):e<300||0===e?(n.current.style.top="0",n.current.style.backgroundColor="rgba(49,46,129,0.7)"):n.current.style.top="-72px",l=e})),i.forEach((function(e){e.addEventListener("click",h)}))}),[]);var h=function(){e.writeQuery({query:Object(u.a)(r||(r=Object(l.a)(["\n        query WriteIsLoading {\n          loadingbar {\n            isLoading\n          }\n        }\n      "]))),data:{loadingbar:{__typename:"LoadingBar",isLoading:30}}})},O=[{to:"/",text:"Home",activeStyle:{backgroundColor:"#EEF2FF",color:"#312E81"},ref:s},{to:"/search/",text:"Anime",activeStyle:{backgroundColor:"#EEF2FF",color:"#312E81"},ref:c},{to:"/anime/575gjjhg67",text:"Errors",activeStyle:{backgroundColor:"#EEF2FF",color:"#312E81"},ref:d},{to:"/404sadjh234oi21j3lkj/",text:"Error404",activeStyle:{backgroundColor:"#EEF2FF",color:"#312E81"},ref:o}];return Object(g.jsxs)("nav",{ref:n,id:"navigation",className:"navigation navigation-container",children:[Object(g.jsxs)("div",{className:"logo group",children:[Object(g.jsx)("h1",{className:" group-hover:animate-none",children:"WA"}),Object(g.jsx)("span",{className:"group-hover:animate-none",children:"Wiki Anime"})]}),Object(g.jsx)("ul",{ref:a,className:"nav-links navigation",children:O.map((function(e){return Object(g.jsx)("li",{ref:e.ref,children:Object(g.jsx)(m.c,{activeStyle:e.activeStyle,to:e.to,exact:!0,children:e.text})},e.text)}))}),Object(g.jsx)(y,{}),Object(g.jsxs)("div",{ref:t,className:"navigation burger",children:[Object(g.jsx)("div",{className:"navigation line1"}),Object(g.jsx)("div",{className:"navigation line2"}),Object(g.jsx)("div",{className:"navigation line3"})]})]})};function w(){var e=Object(d.g)().pathname,n=Object(i.useState)(e),t=Object(b.a)(n,2),a=t[0],r=t[1];return Object(i.useEffect)((function(){e.includes("character")||a.includes("character")||(document.getElementById("root").scrollTo(0,0),document.getElementById("navigation").style.top="0"),r(e)}),[e]),null}var N,L,E=function(){return Object(g.jsxs)("div",{className:"footer-container",children:[Object(g.jsxs)("div",{children:[Object(g.jsx)("div",{className:"footer-thank",children:Object(g.jsxs)("p",{children:["This Single Page Application built by the power of React, graphQL and Tailwind css and ect... ",Object(g.jsx)("br",{}),"this takes 50 days from me to built, however I learnt a lot at this time beside working on my application ",Object(g.jsx)("br",{}),"anyway thank you to visiting my app and a big thanks to anilist graphQL server ",Object(g.jsx)("br",{}),Object(g.jsx)("span",{children:"if you think there is something wrong, then please open the application with chrome browser."})]})}),Object(g.jsxs)("div",{className:"footer-logo group",children:[Object(g.jsx)("h1",{className:"animate-textShadowPopTl group-hover:animate-textShadowPopTr",children:"WA"}),Object(g.jsx)("span",{className:"animate-textShadowPopTl group-hover:animate-textShadowPopTr ",children:"Wiki Anime"})]}),Object(g.jsxs)("div",{className:"footer-links",children:[Object(g.jsx)("h4",{children:" Links"}),Object(g.jsxs)("ul",{children:[Object(g.jsxs)("li",{children:[Object(g.jsx)("img",{loading:"lazy",width:20,height:20,alt:"",src:"https://img.pngio.com/github-logo-icon-of-glyph-style-available-in-svg-png-eps-ai-github-icon-png-256_256.png"}),Object(g.jsxs)("a",{href:"https://github.com/dev-aly3n",target:"_blank",rel:"noopener noreferrer",children:[" ","dev-aly3n GitHub"]})]}),Object(g.jsxs)("li",{children:[Object(g.jsx)("img",{loading:"lazy",width:20,height:20,alt:"",src:"https://www.strategy-works.com/wp-content/uploads/2017/12/Icon-LinkedIn.png"}),Object(g.jsxs)("a",{href:"https://www.linkedin.com/in/aly-mohamadi-4bb966212/",target:"_blank",rel:"noopener noreferrer",children:[" ","dev-aly3n LinkedIn"]})]}),Object(g.jsxs)("li",{children:[Object(g.jsx)("img",{loading:"lazy",width:20,height:20,alt:"",src:"https://telegram.org/img/td_icon.png"}),Object(g.jsxs)("a",{href:"https://telegram.me/aly3n",target:"_blank",rel:"noopener noreferrer",children:[" ","dev-aly3n Telegram"]})]})]})]})]}),Object(g.jsx)("hr",{}),Object(g.jsx)("div",{children:" All right reserved \xa9 dev-aly3n 2021"})]})},I=function(){var e=Object(i.useRef)(null),n=Object(j.a)(),t=Object(u.a)(N||(N=Object(l.a)(["\n    query ReadLoading {\n      loadingbar {\n        isLoading\n      }\n    }\n  "]))),a=!1;return Object(i.useEffect)((function(){var r=e.current.firstElementChild,i=e.current.children[1];n.watchQuery({query:t,fetchPolicy:"cache-only"}).subscribe({next:function(n){var t=n.data;t.loadingbar.isLoading<50?(r.classList.add("first-load-animate"),e.current.classList.add("last-load-animate-for-parent"),i.classList.add("shining-bar-animate")):(e.current.classList.remove("last-load-animate-for-parent"),r.classList.remove("first-load-animate"),r.classList.add("last-load-animate"),e.current.classList.add("last-load-animate-for-parent"),setTimeout((function(){r.classList.remove("last-load-animate"),e.current.classList.remove("last-load-animate-for-parent"),i.classList.remove("shining-bar-animate")}),1e3)),a=!a},error:function(e){return console.error(e)}})}),[a]),Object(g.jsxs)("div",{ref:e,className:"progress-bar-container",children:[Object(g.jsx)("div",{}),Object(g.jsx)("div",{})]})},S=t(46),T=t(45),P=s.a.lazy((function(){return Promise.all([t.e(0),t.e(4)]).then(t.bind(null,111))})),A=s.a.lazy((function(){return Promise.all([t.e(0),t.e(6),t.e(5)]).then(t.bind(null,110))})),C=s.a.lazy((function(){return Promise.all([t.e(0),t.e(7)]).then(t.bind(null,108))})),F=s.a.lazy((function(){return t.e(8).then(t.bind(null,109))}));var R=function(){return Object(j.a)().writeQuery({query:Object(u.a)(L||(L=Object(l.a)(["\n      query WriteIsLoading {\n        loadingbar {\n          isLoading\n        }\n      }\n    "]))),data:{loadingbar:{__typename:"LoadingBar",isLoading:0}}}),Object(g.jsxs)("div",{className:"app all-grid-container",children:[Object(g.jsx)(I,{}),Object(g.jsx)("header",{className:"all-nav",children:Object(g.jsx)(k,{})}),Object(g.jsx)(w,{}),Object(g.jsx)("main",{className:"all-main",children:Object(g.jsx)(i.Suspense,{fallback:Object(g.jsx)(S.a,{}),children:Object(g.jsxs)(d.c,{children:[Object(g.jsx)(d.a,{path:["/","/wikianime"],exact:!0,children:Object(g.jsx)(P,{})}),Object(g.jsx)(d.a,{path:"/anime/:animeID",children:Object(g.jsx)(A,{})}),Object(g.jsx)(d.a,{path:"/search/",children:Object(g.jsx)(C,{})}),Object(g.jsx)(d.a,{path:"/anime/:animeID/character/:charID/actor/:actorID",children:Object(g.jsx)(A,{})}),Object(g.jsx)(d.a,{path:"/error",children:Object(g.jsx)(T.a,{})}),Object(g.jsx)(d.a,{path:"*",children:Object(g.jsx)(F,{})})]})})}),Object(g.jsx)("footer",{className:"all-footer",children:Object(g.jsx)(E,{})})]})},_=t(90),D=t(91),q=t(88),H=new _.a({uri:"https://graphql.anilist.co",cache:new D.a});o.a.render(Object(g.jsx)(q.a,{client:H,children:Object(g.jsx)(m.a,{children:Object(g.jsx)(R,{})})}),document.getElementById("root"))}},[[70,2,3]]]);
//# sourceMappingURL=main.3e6ee3e6.chunk.js.map