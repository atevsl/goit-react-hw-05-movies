"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[492],{492:function(e,t,r){r.r(t),r.d(t,{default:function(){return x}});var a=r(439),n="SearchForm_searchBtn__rp2a7",s="SearchForm_searchInput__h6REp",i=r(184),o=function(e){var t=e.onInputHendler,r=e.onSubmitHendler,a=e.search;return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("form",{onSubmit:r,children:[(0,i.jsx)("input",{value:a||"",type:"text",name:"search",onChange:t,className:s}),(0,i.jsx)("button",{type:"submit",className:n,children:"Search"})]})})},l=r(87),c=r(689),u=r(934),h=r(791),m=r(111),p=r(686),d=r.n(p),_=r(989),f="Movies_list__pLFBP",v="Movies_listItem__YcYJo",g="Movies_listLink__YwdiD",x=function(){var e=(0,h.useState)(""),t=(0,a.Z)(e,2),r=t[0],n=t[1],s=(0,h.useState)(null),p=(0,a.Z)(s,2),x=p[0],j=p[1],w=(0,h.useState)(!1),b=(0,a.Z)(w,2),y=b[0],S=b[1],N=(0,c.TH)(),I=(0,l.lr)(),k=(0,a.Z)(I,2),F=k[0],H=k[1];console.log(F);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(o,{onInputHendler:function(e){n(e.currentTarget.value)},onSubmitHendler:function(e){if(e.preventDefault(),S(!0),""===r.trim())return j([]),S(!1),d().Notify.failure("Please type search and try again.");(0,u.Fg)(r).then((function(e){var t=e.data;if(0===t.total_results)return j([]),S(!1),d().Notify.failure("Sorry, we cant find such movie. Please type search and try again.");H({query:r}),j(t.results),S(!1)})),n("")},search:r}),y&&(0,i.jsx)(m.Z,{wrapperStyle:{fill:"#7b81ec"}}),(0,i.jsx)("ul",{className:f,children:x&&x.map((function(e){return(0,i.jsx)("li",{className:v,children:(0,i.jsxs)(l.rU,{to:(0,_.Gn)("/movies/:movieId",{movieId:e.id}),state:{from:N},className:g,children:[" ",(0,i.jsx)("img",{src:e.poster_path?"https://www.themoviedb.org/t/p/w300_and_h450_bestv2".concat(e.poster_path):"https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/495px-No-Image-Placeholder.svg.png?20200912122019",alt:"movie poster",width:"200px"}),(0,i.jsx)("p",{children:e.title})]})},e.id)}))}),(0,i.jsx)(c.j3,{})]})}}}]);
//# sourceMappingURL=492.bed57bdd.chunk.js.map