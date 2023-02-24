"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[726],{649:function(t,e,r){r.d(e,{Z:function(){return p}});var n="MovieList_list__yjDCC",a="MovieList_listItem__vOVoz",s="MovieList_listLink__EbNXd",i=r(87),c=r(689),u=r(298),o=r(184),p=function(t){var e=t.moviesList,r=(0,c.TH)();return(0,o.jsx)("ul",{className:n,children:e.map((function(t){return(0,o.jsx)("li",{className:a,children:(0,o.jsxs)(i.rU,{to:"/movies/".concat(t.id),state:{from:r},className:s,children:[t.poster_path&&(0,o.jsx)("img",{src:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2".concat(t.poster_path),alt:t.title,width:"200px"}),!t.poster_path&&(0,o.jsx)("img",{src:u,alt:t.title,width:"200px"}),(0,o.jsx)("p",{children:t.title})]})},t.id)}))})}},726:function(t,e,r){r.r(e),r.d(e,{default:function(){return b}});var n=r(861),a=r(439),s=r(757),i=r.n(s),c="SearchForm_searchBtn__rp2a7",u="SearchForm_searchInput__h6REp",o=r(184),p=function(t){var e=t.onSubmitHendler;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("form",{name:"form",onSubmit:function(t){t.preventDefault(),e(document.forms.form.elements.search.value)},children:[(0,o.jsx)("input",{type:"text",name:"search",className:u}),(0,o.jsx)("button",{type:"submit",className:c,children:"Search"})]})})},f=r(87),h=r(689),l=r(635),m=r(791),d=r(111),v=r(686),_=r.n(v),x=r(649),b=function(){var t,e=(0,m.useState)(null),r=(0,a.Z)(e,2),s=r[0],c=r[1],u=(0,m.useState)(!1),v=(0,a.Z)(u,2),b=v[0],w=v[1],y=(0,f.lr)(),g=(0,a.Z)(y,2),j=g[0],k=g[1],Z=null!==(t=j.get("search"))&&void 0!==t?t:"";return(0,m.useEffect)((function(){if(Z){w(!0);var t=function(){var t=(0,n.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,l.Fg)(Z);case 3:e=t.sent,c(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),_().Notify.failure("Sorry, we did not find this movie. Please repeat the search");case 10:return t.prev=10,w(!1),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])})));return function(){return t.apply(this,arguments)}}();t()}}),[Z]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(p,{onSubmitHendler:function(t){if(""===t.trim())return _().Notify.failure("Please type search and try again.");k({search:t})}}),b&&(0,o.jsx)(d.Z,{wrapperStyle:{fill:"#7b81ec"}}),s&&(0,o.jsx)(x.Z,{moviesList:s}),(0,o.jsx)(h.j3,{})]})}},635:function(t,e,r){r.d(e,{Ex:function(){return m},Fg:function(){return p},KH:function(){return u},an:function(){return v},n4:function(){return h}});var n=r(861),a=r(757),s=r.n(a),i=r(912),c="34c962a38697839d2de5b0a80a471826";function u(){return o.apply(this,arguments)}function o(){return(o=(0,n.Z)(s().mark((function t(){var e;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(c));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,n.Z)(s().mark((function t(e){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&query=").concat(e));case 2:if(200===(r=t.sent).status&&0!==r.data.total_results){t.next=7;break}throw new Error;case 7:return t.abrupt("return",r.data.results);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(s().mark((function t(e){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(c));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(s().mark((function t(e){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(c));case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return _.apply(this,arguments)}function _(){return(_=(0,n.Z)(s().mark((function t(e){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(c));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},298:function(t,e,r){t.exports=r.p+"static/media/noImg.1467cb9507d0b64eb878.jpg"}}]);
//# sourceMappingURL=726.04d830a8.chunk.js.map