"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[495,867],{867:function(t,e,n){n.r(e),n.d(e,{default:function(){return o}});var r=n(87),a="PageNotFound_wrap__P6T1h",c="PageNotFound_link__vvzwk",s="PageNotFound_pnf__sQLHF",u=n(438),i=n(184),o=function(){return(0,i.jsxs)("div",{className:a,children:[(0,i.jsx)("img",{src:u,alt:"404 page not found",className:s}),(0,i.jsx)("b",{children:"Sorry, the page not found. The link you followed broken or the page has been removed."}),(0,i.jsx)(r.rU,{to:"/",className:c,children:"Go Home"})]})}},495:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var r=n(861),a=n(439),c=n(757),s=n.n(c),u=n(791),i=n(689),o=n(635),p="Cast_castList__hbalY",f="Cast_castItem__XA6Qz",h=n(298),d=n(111),l=n(867),v=n(184),m=function(){var t=(0,i.UO)().movieId,e=(0,u.useState)([]),n=(0,a.Z)(e,2),c=n[0],m=n[1],x=(0,u.useState)(!1),_=(0,a.Z)(x,2),b=_[0],w=_[1],g=(0,u.useState)(""),k=(0,a.Z)(g,2),y=k[0],j=k[1];return(0,u.useEffect)((function(){w(!0);var e=function(){var e=(0,r.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.Ex)(t);case 3:if(0!==(n=e.sent)){e.next=6;break}return e.abrupt("return");case 6:m(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),j(e.t0);case 12:return e.prev=12,w(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),(0,v.jsxs)(v.Fragment,{children:[b&&(0,v.jsx)(d.Z,{wrapperStyle:{fill:"#7b81ec"}}),y&&(0,v.jsx)(l.default,{}),0===c.length&&(0,v.jsx)("b",{children:"Sorry we couldn't find the cast"}),(0,v.jsx)("ul",{className:p,children:c.map((function(t){return(0,v.jsxs)("li",{className:f,children:[t.profile_path&&(0,v.jsx)("img",{src:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2".concat(t.profile_path),alt:t.name,width:"200px"}),!t.profile_path&&(0,v.jsx)("img",{src:h,alt:t.name,width:"200px"}),(0,v.jsx)("p",{children:(0,v.jsx)("b",{children:t.name})}),(0,v.jsxs)("p",{children:["Character: ",t.character]})]},t.cast_id)}))})]})}},635:function(t,e,n){n.d(e,{Ex:function(){return l},Fg:function(){return p},KH:function(){return i},an:function(){return m},n4:function(){return h}});var r=n(861),a=n(757),c=n.n(a),s=n(912),u="34c962a38697839d2de5b0a80a471826";function i(){return o.apply(this,arguments)}function o(){return(o=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(u));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(u,"&query=").concat(e));case 2:if(200===(n=t.sent).status&&0!==n.data.total_results){t.next=7;break}throw new Error;case 7:return t.abrupt("return",n.data.results);case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=").concat(u));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits?api_key=").concat(u));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews?api_key=").concat(u));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},298:function(t,e,n){t.exports=n.p+"static/media/noImg.1467cb9507d0b64eb878.jpg"},438:function(t,e,n){t.exports=n.p+"static/media/pnf.5b77165cb35e172b94c2.jpg"}}]);
//# sourceMappingURL=495.df060166.chunk.js.map