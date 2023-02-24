"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[914,867],{867:function(e,t,r){r.r(t),r.d(t,{default:function(){return u}});var n=r(87),a="PageNotFound_wrap__P6T1h",s="PageNotFound_link__vvzwk",c="PageNotFound_pnf__sQLHF",i=r(438),o=r(184),u=function(){return(0,o.jsxs)("div",{className:a,children:[(0,o.jsx)("img",{src:i,alt:"404 page not found",className:c}),(0,o.jsx)("b",{children:"Sorry, the page not found. The link you followed broken or the page has been removed."}),(0,o.jsx)(n.rU,{to:"/",className:s,children:"Go Home"})]})}},914:function(e,t,r){r.r(t),r.d(t,{default:function(){return _}});var n=r(861),a=r(439),s=r(757),c=r.n(s),i=r(791),o=r(635),u=r(87),p=r(689),l="MovieDetails_card__pqAte",h="MovieDetails_info__qv2SI",d="MovieDetails_links__EzCWB",f=r(298),v=r(111),m=r(867),x=r(184),_=function(){var e,t,r=(0,i.useState)(null),s=(0,a.Z)(r,2),_=s[0],w=s[1],b=null!==(e=null===(t=(0,p.TH)().state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/",g=(0,p.UO)().movieId,j=(0,i.useState)(!1),k=(0,a.Z)(j,2),y=k[0],Z=k[1],N=(0,i.useState)(""),F=(0,a.Z)(N,2),S=F[0],U=F[1];(0,i.useEffect)((function(){Z(!0);var e=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.n4)(g);case 3:if(0!==(t=e.sent)){e.next=6;break}return e.abrupt("return");case 6:w(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),U(e.t0);case 12:return e.prev=12,Z(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[g]);var C=_?_.genres.map((function(e){return e.name})).join(", "):"";return(0,x.jsxs)(x.Fragment,{children:[S&&(0,x.jsx)(m.default,{}),(0,x.jsx)(u.rU,{to:b,className:d,children:"Go back"}),y&&(0,x.jsx)(v.Z,{wrapperStyle:{fill:"#7b81ec"}}),_&&(0,x.jsxs)("div",{className:l,children:[_.poster_path&&(0,x.jsx)("img",{src:"https://www.themoviedb.org/t/p/w300_and_h450_bestv2".concat(_.poster_path),alt:_.title,width:"400px"}),!_.poster_path&&(0,x.jsx)("img",{src:f,alt:_.title,width:"400px"}),(0,x.jsxs)("div",{className:h,children:[(0,x.jsxs)("h2",{children:[_.title," ( ",_.release_date.slice(0,4)," )"]}),(0,x.jsxs)("p",{children:["User score: ",_.vote_average]}),(0,x.jsx)("h3",{children:"Overview"}),(0,x.jsx)("p",{children:_.overview}),(0,x.jsx)("h4",{children:"Genres"}),(0,x.jsx)("p",{children:C}),(0,x.jsx)(u.rU,{to:"cast",className:d,state:{from:b},children:"Cast"}),(0,x.jsx)(u.rU,{to:"reviews",className:d,state:{from:b},children:"Reviews"})]})]}),(0,x.jsx)(p.j3,{})]})}},635:function(e,t,r){r.d(t,{Ex:function(){return f},Fg:function(){return p},KH:function(){return o},an:function(){return m},n4:function(){return h}});var n=r(861),a=r(757),s=r.n(a),c=r(912),i="34c962a38697839d2de5b0a80a471826";function o(){return u.apply(this,arguments)}function u(){return(u=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return l.apply(this,arguments)}function l(){return(l=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&query=").concat(t));case 2:if(200===(r=e.sent).status&&0!==r.data.total_results){e.next=7;break}throw new Error;case 7:return e.abrupt("return",r.data.results);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return d.apply(this,arguments)}function d(){return(d=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(i));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return v.apply(this,arguments)}function v(){return(v=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(i));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return x.apply(this,arguments)}function x(){return(x=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(i));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},298:function(e,t,r){e.exports=r.p+"static/media/noImg.1467cb9507d0b64eb878.jpg"},438:function(e,t,r){e.exports=r.p+"static/media/pnf.5b77165cb35e172b94c2.jpg"}}]);
//# sourceMappingURL=914.abbbd788.chunk.js.map