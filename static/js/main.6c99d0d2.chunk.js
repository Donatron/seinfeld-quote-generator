(window["webpackJsonpseinfeld-quotes"]=window["webpackJsonpseinfeld-quotes"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,r){e.exports=r.p+"static/media/seinfeld_cover.897bcfb3.jpg"},,,,,,,,,,,,,,,,,,function(e,t,r){e.exports=r(90)},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,r){},function(e,t,r){var n={"./elaine/elaine-1.jpg":64,"./elaine/elaine-2.jpg":65,"./elaine/elaine-3.jpg":66,"./elaine/elaine-4.jpg":67,"./elaine/elaine-5.jpg":68,"./generic/generic-1.jpg":69,"./generic/generic-2.jpg":70,"./generic/generic-3.jpg":71,"./generic/generic-4.jpg":72,"./generic/generic-5.jpg":73,"./george/george-1.jpg":74,"./george/george-2.jpg":75,"./george/george-3.jpg":76,"./george/george-4.jpg":77,"./george/george-5.jpg":78,"./jerry/jerry-1.jpg":79,"./jerry/jerry-2.jpg":80,"./jerry/jerry-3.jpg":81,"./jerry/jerry-4.jpg":82,"./jerry/jerry-5.jpg":83,"./kramer/kramer-1.jpg":84,"./kramer/kramer-2.jpg":85,"./kramer/kramer-3.jpg":86,"./kramer/kramer-4.jpg":87,"./kramer/kramer-5.jpg":88,"./seinfeld_cover.jpg":16};function a(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id=63},function(e,t,r){e.exports=r.p+"static/media/elaine-1.a0c5de38.jpg"},function(e,t,r){e.exports=r.p+"static/media/elaine-2.73c9b493.jpg"},function(e,t,r){e.exports=r.p+"static/media/elaine-3.7fb3b196.jpg"},function(e,t,r){e.exports=r.p+"static/media/elaine-4.c45d023c.jpg"},function(e,t,r){e.exports=r.p+"static/media/elaine-5.aa411f36.jpg"},function(e,t,r){e.exports=r.p+"static/media/generic-1.6ab50220.jpg"},function(e,t,r){e.exports=r.p+"static/media/generic-2.52645ea7.jpg"},function(e,t,r){e.exports=r.p+"static/media/generic-3.e0e0bb13.jpg"},function(e,t,r){e.exports=r.p+"static/media/generic-4.84c966f3.jpg"},function(e,t,r){e.exports=r.p+"static/media/generic-5.68689b0f.jpg"},function(e,t,r){e.exports=r.p+"static/media/george-1.e887d044.jpg"},function(e,t,r){e.exports=r.p+"static/media/george-2.01c209d0.jpg"},function(e,t,r){e.exports=r.p+"static/media/george-3.b8df9df3.jpg"},function(e,t,r){e.exports=r.p+"static/media/george-4.5ac46e85.jpg"},function(e,t,r){e.exports=r.p+"static/media/george-5.e3938fed.jpg"},function(e,t,r){e.exports=r.p+"static/media/jerry-1.a657ec87.jpg"},function(e,t,r){e.exports=r.p+"static/media/jerry-2.4924d993.jpg"},function(e,t,r){e.exports=r.p+"static/media/jerry-3.b9afd82f.jpg"},function(e,t,r){e.exports=r.p+"static/media/jerry-4.34e647c7.jpg"},function(e,t,r){e.exports=r.p+"static/media/jerry-5.9360c69c.jpg"},function(e,t,r){e.exports=r.p+"static/media/kramer-1.360c0345.jpg"},function(e,t,r){e.exports=r.p+"static/media/kramer-2.62709b3d.jpg"},function(e,t,r){e.exports=r.p+"static/media/kramer-3.5ff57d05.jpg"},function(e,t,r){e.exports=r.p+"static/media/kramer-4.6292178e.jpg"},function(e,t,r){e.exports=r.p+"static/media/kramer-5.d472bdc7.jpg"},function(e,t,r){e.exports=r.p+"static/media/spinner.7ba725da.gif"},function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(12),c=r.n(o),i=r(4),s=r(3),p=r(31),u=r(32),l=r(14);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(r,!0).forEach(function(t){Object(l.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var g={quotes:[],character:"",randomQuote:""};function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(r,!0).forEach(function(t){Object(l.a)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var h={episodes:[],selectedEpisode:{}},E=Object(s.combineReducers)({quotes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_QUOTES":return m({},e,{quotes:t.payload});case"SELECT_CHARACTER":return m({},e,{character:t.payload});case"GET_RANDOM_QUOTE":return m({},e,{randomQuote:t.payload});default:return e}},episodes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_EPISODES":return j({},e,{episodes:t.payload});case"SELECT_EPISODE":var r=t.payload,n=r.season,a=r.episode,o=e.episodes.filter(function(e){return e.season===n&&e.number===a});return j({},e,{selectedEpisode:o});default:return e}}}),y=Object(s.createStore)(E,{},Object(p.composeWithDevTools)(Object(s.applyMiddleware)(u.a))),b=function(e){var t=e.children;e.initialState;return a.a.createElement(i.a,{store:y},t)},v=r(6),O=r(7),k=r(10),w=r(8),x=r(9),q=r(11),C=r.n(q),S=r(19),D=r(20),P=r.n(D),T=function(e){var t=e.season,r=e.episode;return{type:"SELECT_EPISODE",payload:{season:parseInt(t),episode:parseInt(r),types:{season:typeof t,episode:typeof r}}}},N=(r(62),r(16)),_=r.n(N),Q=function(){return a.a.createElement("div",{className:"Header"},a.a.createElement("img",{src:_.a,alt:"seinfeld characters",className:"img-header"}),a.a.createElement("h1",null,"Seinfeld Quote Generator"))},M=function(e){function t(e){var r;return Object(v.a)(this,t),(r=Object(k.a)(this,Object(w.a)(t).call(this,e))).handleChange=function(e){r.props.selectCharacter(e.target.value),r.setState({selectedCharacter:e.target.value})},r.handleClick=function(e){var t,n=r.props,a=n.quotes,o=n.character;n.episodes;if(""===o){t=a[Math.floor(Math.random()*a.length)]}else{var c=a.filter(function(e){return e.author.toLowerCase()===o});t=c[Math.floor(Math.random()*c.length)]}r.props.getRandomQuote(t)},r.state={selectedCharacter:""},r}return Object(x.a)(t,e),Object(O.a)(t,[{key:"render",value:function(){var e=this.state.selectedCharacter;return a.a.createElement("div",{className:"Quote-Generator"},a.a.createElement("select",{name:"",id:"quote-select",onChange:this.handleChange,value:e},a.a.createElement("optgroup",{label:"Who would you like a quote from?"},a.a.createElement("option",{value:"all"},"Anyone"),a.a.createElement("option",{value:"jerry"},"Jerry"),a.a.createElement("option",{value:"george"},"George"),a.a.createElement("option",{value:"elaine"},"Elaine"),a.a.createElement("option",{value:"kramer"},"Kramer"))),a.a.createElement("button",{onClick:this.handleClick,id:"quote-btn"},"Giddyup"))}}]),t}(n.Component),A=Object(i.b)(function(e){return{quotes:e.quotes.quotes,character:e.quotes.character,episodes:e.episodes.episodes}},{selectCharacter:function(e){return{type:"SELECT_CHARACTER",payload:e}},getRandomQuote:function(e){return function(t){t({type:"GET_RANDOM_QUOTE",payload:e}),t(T(e))}}})(M),I=r(33),R=r.n(I),H=function(e){var t=e.episode;return a.a.createElement("div",{className:"Synopsis synopsis-section"},a.a.createElement("h3",null,"Episode Synopsis"),a.a.createElement("p",{id:"synopsis"},R()(t.summary)))},F=function(e){function t(){var e,n;Object(v.a)(this,t);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(n=Object(k.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(o)))).renderImage=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=Math.ceil(5*Math.random()),a=n.renderCharacterSwitch(e),o=r(63)("./".concat(a,"/").concat(a,"-").concat(t,".jpg"));return o},n}return Object(x.a)(t,e),Object(O.a)(t,[{key:"renderCharacterSwitch",value:function(e){switch(e){case"Jerry":return"jerry";case"George":return"george";case"Kramer":return"kramer";case"Elaine":return"elaine";default:return"generic"}}},{key:"render",value:function(){var e=this.props.quote,t=e.quote,r=e.author,n=e.season,o=e.episode,c=this.props.selectedEpisode,i=r||"",s=t?a.a.createElement("div",{className:"quote"},a.a.createElement("img",{src:this.renderImage(i),alt:"",className:"img-quote"}),a.a.createElement("div",{className:"quote-text"},a.a.createElement("p",null,t),a.a.createElement("p",{id:"quote-details"},r,": Season ",n,", Episode ",o),a.a.createElement("p",{id:"episode-name"},a.a.createElement("em",null,'"',c?c[0].name:"",'"')))):a.a.createElement("div",{id:"instructions"},a.a.createElement("p",null,"Click the button to view random quotes from Seinfeld."),a.a.createElement("p",null,"To see quotes by your favourite character, select from the drop down list"),a.a.createElement("br",null),a.a.createElement("p",null,"Thanks for stopping by. Hope you enjoy the site! :-)"));return a.a.createElement("div",{className:"Quote-Detail"},a.a.createElement("div",{className:"quote-text"},s),this.props.selectedEpisode.length?a.a.createElement(H,{episode:this.props.selectedEpisode[0]}):"")}}]),t}(n.Component),G=Object(i.b)(function(e){return{quote:e.quotes.randomQuote,selectedEpisode:e.episodes.selectedEpisode}})(F),L=function(){return a.a.createElement("div",{className:"quote-section"},a.a.createElement(A,null),a.a.createElement(G,null))},U=function(){return a.a.createElement("div",{className:"Spinner"},a.a.createElement("img",{src:r(89),alt:"loading spinner"}),a.a.createElement("p",null,"Loading..."))},J=function(){return a.a.createElement("div",{className:"footer"},a.a.createElement("p",null,"\xa9"," ",(new Date).getFullYear()," ",a.a.createElement("a",{href:"https://donatron.github.io/portfolio/",target:"_blank"},"Don Macarthur")),a.a.createElement("p",null,"Built using the"," ",a.a.createElement("a",{href:"https://seinfeld-quotes.herokuapp.com/",target:"_blank"},"Seinfeld Quote API")," ","created by William DiFruscio"))},W=function(e){function t(){return Object(v.a)(this,t),Object(k.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(x.a)(t,e),Object(O.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchQuotes(),this.props.fetchEpisodes()}},{key:"render",value:function(){var e=this.props.quotes;return a.a.createElement("div",{className:"App"},a.a.createElement("div",{className:"wrapper"},a.a.createElement(Q,null),e.length?a.a.createElement(L,null):a.a.createElement(U,null),a.a.createElement(J,null)))}}]),t}(n.Component),K=Object(i.b)(function(e){return{quotes:e.quotes.quotes}},{fetchQuotes:function(){return function(){var e=Object(S.a)(C.a.mark(function e(t){var r;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("https://seinfeld-quotes.herokuapp.com/quotes");case 2:r=e.sent,t({type:"FETCH_QUOTES",payload:r.data.quotes});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},fetchEpisodes:function(){return function(){var e=Object(S.a)(C.a.mark(function e(t){var r;return C.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get("http://api.tvmaze.com/shows/530/episodes");case 2:r=e.sent,console.log(r),t({type:"FETCH_EPISODES",payload:r.data});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(W);c.a.render(a.a.createElement(b,null,a.a.createElement(K,null)),document.querySelector("#root"))}],[[34,1,2]]]);
//# sourceMappingURL=main.6c99d0d2.chunk.js.map