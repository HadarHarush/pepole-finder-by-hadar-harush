(this["webpackJsonpppl-finder"]=this["webpackJsonpppl-finder"]||[]).push([[0],{127:function(n,e,t){},128:function(n,e,t){"use strict";t.r(e);var i,r,a,c=t(0),o=t.n(c),l=t(21),s=t.n(l),u=t(9),d=t(85),j=t(8),f=t(10),b=t(24),v=f.a.div(i||(i=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  padding-block-start: 100px;\n"]))),x=f.a.ul(r||(r=Object(u.a)(["\n  overflow-y: scroll;\n  padding-bottom: 30px;\n  max-width: 1000px;\n  flex-wrap: wrap;\n  row-gap: 10px;\n  column-gap: 10px;\n  display: flex;\n  justify-content: center;\n  @media (max-width: 450px) {\n    row-gap: unset;\n    column-gap: unset;\n    > *:not(last-child) {\n      margin-bottom: 10px;\n    }\n  }\n"]))),h=t(156),p=t(46),O=t.n(p),m=t(154),g=Object(f.a)(m.a)(a||(a=Object(u.a)(["\n  && {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n    width: 300px;\n    padding: 20px;\n    > .content {\n      align-self: stretch;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      > img {\n        width: 100px;\n        height: 100px;\n        border-radius: 50%;\n      }\n      > *:not(last-child) {\n        margin-bottom: 10px;\n      }\n    }\n    @media (max-width: 450px) {\n      width: 90%;\n    }\n  }\n"]))),y=t(131),w=t(2),E=function(n){var e=n.variant,t=void 0===e?"body1":e,i=n.children,r=n.bold,a=void 0!==r&&r,c=n.textAlign,o=void 0===c?"left":c;return Object(w.jsx)(y.a,{variant:t,align:o,style:{fontWeight:a?"bold":"400"},children:i})};var k={on:function(n,e){console.log("on:",n);var t=function(n){var t=n.detail;e(t)};return window.addEventListener(n,t),function(){window.removeEventListener(n,t)}},emit:function(n,e){window.dispatchEvent(new CustomEvent(n,{detail:e}))}};window.myBus=k;var F=function(n,e){console.log("emitting notify"),k.emit("notify",{type:n,txt:e})},C={isIncludesStr:A,isStringsIncludesString:function(n,e){return n.some((function(n){return A(n,e)}))},getFullNameFromUser:function(n){var e=n.name,t=e.title,i=e.first,r=e.last;return[t,i,r].join(" ")}};function A(n,e){return n.toLowerCase().includes(e.toLowerCase())}function S(n){return function(e,t){var i,r;t().favoritesReducer.favorites.some((function(e){return e.login.uuid===n.login.uuid}))?(i={type:"REMOVE_FAVORITE",uuid:n.login.uuid},r="Removed ".concat(C.getFullNameFromUser(n)," from favorites")):(i={type:"ADD_FAVORITE",favorite:n},r="Added ".concat(C.getFullNameFromUser(n)," to favorites")),e(i),F("success",r)}}var R=function(n){var e=n.user,t=Object(b.b)();return Object(w.jsxs)(g,{className:"favorite-preview",children:[Object(w.jsxs)("div",{className:"content",children:[Object(w.jsx)("img",{src:e.picture.large,alt:""}),Object(w.jsx)(E,{variant:"h6",textAlign:"center",bold:!0,children:C.getFullNameFromUser(e)}),Object(w.jsx)(E,{variant:"body2",textAlign:"center",children:(null===e||void 0===e?void 0:e.email)?e.email:"No email"}),Object(w.jsxs)(E,{variant:"body2",textAlign:"center",children:[null===e||void 0===e?void 0:e.location.city," ",null===e||void 0===e?void 0:e.location.country]})]}),Object(w.jsx)(h.a,{variant:"contained",startIcon:Object(w.jsx)(O.a,{}),color:"secondary",onClick:function(){return t(S(e))},children:"favorites"})]},e.login.uuid)},I=function(){var n=Object(b.c)((function(n){return n.favoritesReducer})).favorites;return Object(w.jsxs)(v,{children:[Object(w.jsx)(E,{variant:"h2",bold:!0,children:"Favorites"}),!n.length&&Object(w.jsx)(E,{variant:"body2",textAlign:"center",children:"Its looks like you dont have any favorites. You can add them in the home page."}),Object(w.jsx)(x,{children:n.map((function(n){return Object(w.jsx)(R,{user:n},n.login.uuid)}))})]})},N=t(53);t(104);N.a.configure();var U,_,T,L,V,D,z,M,H,P,B,J,X,Y=function(){var n=function(n){N.a[n.type](n.txt)};return Object(c.useEffect)((function(){k.on("notify",n)}),[]),null},q=t(28),W=t(157),G=t(164),K=t(158),Q=["/","/favorites"],Z=function(){var n=Object(j.f)(),e=Object(j.g)(),t=o.a.useState(0),i=Object(q.a)(t,2),r=i[0],a=i[1];Object(c.useEffect)((function(){"/favorites"===e.pathname?a(Q.findIndex((function(n){return"/favorites"===n}))):a(Q.findIndex((function(n){return"/"===n})))}),[e.pathname]);var l=function(e){n.push(e),a(Q.findIndex((function(n){return n===e})))};return Object(w.jsx)(W.a,{position:"static",color:"transparent",style:{position:"fixed",top:0},children:Object(w.jsxs)(G.a,{value:r,"aria-label":"Navigation",indicatorColor:"primary",textColor:"primary",children:[Object(w.jsx)(K.a,{onClick:function(){return l("/")},label:"Home"}),Object(w.jsx)(K.a,{onClick:function(){return l("/favorites")},label:"Favorites"})]})})},$=t(89),nn=t(159),en=t(160),tn=function(n){var e=n.children,t={MuiTab:{root:{backgroundColor:"#303030"}}},i=o.a.useMemo((function(){return Object($.a)({overrides:t,palette:{type:"dark",primary:{main:"#84ffff"},error:{main:"#f06292"}}})}),[]);return Object(w.jsxs)(nn.a,{theme:i,children:[Object(w.jsx)(en.a,{}),e]})},rn=t(30),an=t(163),cn=t(82),on=t.n(cn),ln=f.a.div(U||(U=Object(u.a)(["\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  @media (max-width: 650px) {\n    padding: 0px 20px;\n  }\n"]))),sn=f.a.div(_||(_=Object(u.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  & > *:not(last-child) {\n    margin-inline-end: 8px;\n  }\n"]))),un=f.a.div(T||(T=Object(u.a)(["\n  display: flex;\n  align-itmes: center;\n  border-radius: 4px;\n  padding: 5px 20px;\n  padding-inline-end: 5px;\n  background-color: rgba(255, 255, 255, 0.15);\n  &:hover: {\n    background-color: rgba(255, 255, 255, 0.15);\n  }\n  & > *:not(last-child) {\n    margin-inline-end: 0.3rem;\n  }\n"]))),dn=f.a.input(L||(L=Object(u.a)(["\n  font-size: 16px;\n  flex-grow: 1;\n  background: unset;\n  outline: unset;\n  border: unset;\n  color: rgb(255, 255, 255);\n  &::placeholder {\n    font-weight: bold;\n  }\n"]))),jn=f.a.div(V||(V=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 35px;\n  width: 500px;\n  margin-block-start: 30px;\n  overflow-y: scroll;\n  @media (max-width: 600px) {\n    width: unset;\n  }\n"]))),fn=f.a.div(D||(D=Object(u.a)(["\n  display: flex;\n  > *:not(last-child) {\n    margin-inline-end: 25px;\n  }\n  &:hover {\n    .icon-button-wrapper {\n      opacity: 1;\n    }\n  }\n  @media (max-width: 600px) {\n    > *:not(last-child) {\n      margin-inline-end: unset;\n    }\n    flex-direction: column;\n    align-items: center;\n    > *:not(last-child) {\n      margin-bottom: 0.2rem;\n    }\n  }\n"]))),bn=f.a.div(z||(z=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  flex-grow: 1;\n  max-height: 128px;\n  gap: 2px;\n  overflow: hidden;\n  @media (max-width: 600px) {\n    align-items: center;\n  }\n"]))),vn=f.a.img(M||(M=Object(u.a)(["\n  border-radius: 45%;\n"]))),xn=f.a.div(H||(H=Object(u.a)(["\n  display: flex;\n  justify-content: center;\n"]))),hn=f.a.div(P||(P=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  transition: opacity 0.2s ease-in-out;\n  opacity: 0;\n  &.active {\n    opacity: 1;\n  }\n"]))),pn=t(161),On=function(n){var e=n.size,t=n.color,i=n.thickness,r=n.variant;return Object(w.jsx)(pn.a,{size:e,color:t,thickness:i,variant:r})},mn=t(165),gn=t(162),yn=f.a.div(B||(B=Object(u.a)([""]))),wn=function(n){var e=n.isChecked,t=n.onChange,i=n.label,r=n.value;return Object(w.jsx)(yn,{children:Object(w.jsx)(gn.a,{control:Object(w.jsx)(mn.a,{checked:e,onChange:function(){t&&t(r)},color:"primary"}),label:i})})},En=[{nat:"BR",name:"brazil"},{nat:"AU",name:"australia"},{nat:"CA",name:"canada"},{nat:"DE",name:"germany"}],kn=function(n){var e=n.users,t=n.isLoading,i=n.fetchUsers,r=Object(b.b)(),a=Object(c.useRef)(null),o=Object(c.useState)([]),l=Object(q.a)(o,2),s=l[0],u=l[1],d=Object(b.c)((function(n){return n.favoritesReducer})).favorites,j=Object(c.useState)(""),f=Object(q.a)(j,2),v=f[0],x=f[1];return Object(w.jsxs)(ln,{children:[Object(w.jsx)(sn,{children:En.map((function(n){var e=n.nat,t=n.name;return Object(w.jsx)(wn,{isChecked:s.includes(e),value:e,label:t.charAt(0).toUpperCase()+t.slice(1),onChange:function(){return function(n){if(s.includes(n))return u(s.filter((function(e){return e!==n})));u([].concat(Object(rn.a)(s),[n]))}(e)}},e)}))}),Object(w.jsxs)(un,{className:"search flex align-center",children:[Object(w.jsx)(on.a,{}),Object(w.jsx)(dn,{placeholder:"Search...",className:"fg-1",value:v,onChange:function(n){var e=n.target.value;return x(e)}})]}),Object(w.jsxs)(jn,{ref:a,className:"users-list",onScroll:function(){if(!t&&e.length<150){var n=a.current;n.offsetHeight+n.scrollTop>=n.scrollHeight-100&&i()}},children:[function(){var n=e;return n=(n=s.length?n.filter((function(n){var e=n.nat;return s.includes(e)})):n).filter((function(n){var e=n.email,t=n.name,i=n.location,r=i.street,a=i.city,c=i.country;return C.isStringsIncludesString([e||"",r.name,a,c,Object.values(t).join(" ")],v)}))}().map((function(n){return Object(w.jsxs)(fn,{children:[Object(w.jsx)(vn,{src:null===n||void 0===n?void 0:n.picture.large,alt:""}),Object(w.jsxs)(bn,{children:[Object(w.jsx)(E,{variant:"h6",bold:!0,children:C.getFullNameFromUser(n)}),Object(w.jsx)(E,{variant:"body2",children:null===n||void 0===n?void 0:n.email}),Object(w.jsxs)(E,{variant:"body2",children:[null===n||void 0===n?void 0:n.location.street.number," ",null===n||void 0===n?void 0:n.location.street.name]}),Object(w.jsxs)(E,{variant:"body2",children:[null===n||void 0===n?void 0:n.location.city," ",null===n||void 0===n?void 0:n.location.country]})]}),Object(w.jsx)(hn,{className:"icon-button-wrapper ".concat(d.some((function(e){return e.login.uuid===n.login.uuid}))?"active":""),children:Object(w.jsx)(an.a,{onClick:function(){return r(S(n))},children:Object(w.jsx)(O.a,{color:"error"})})})]},n.login.uuid)})),t&&Object(w.jsx)(xn,{children:Object(w.jsx)(On,{color:"primary",size:"45px",thickness:6,variant:"indeterminate"})}),e.length>=150&&Object(w.jsx)(E,{variant:"body1",children:"You have reached the allowed amount of users"})]})]})},Fn=t(56),Cn=t.n(Fn),An=t(83),Sn=t(84),Rn=t.n(Sn),In=f.a.div(J||(J=Object(u.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n  max-height: 100%;\n  padding-block-start: 100px;\n"]))),Nn=function(){var n=function(){var n=Object(c.useState)([]),e=Object(q.a)(n,2),t=e[0],i=e[1],r=Object(c.useState)(!1),a=Object(q.a)(r,2),o=a[0],l=a[1];Object(c.useEffect)((function(){u()}),[]);var s=function(){return Rn.a.get("https://randomuser.me/api/?results=25&page=1").then((function(n){return n.data.results}))};function u(){return d.apply(this,arguments)}function d(){return(d=Object(An.a)(Cn.a.mark((function n(){var e;return Cn.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return l(!0),n.next=3,s();case 3:e=n.sent,l(!1),i([].concat(Object(rn.a)(t),Object(rn.a)(e)));case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}return{users:t,isLoading:o,fetchUsers:u}}(),e=n.users,t=n.isLoading,i=n.fetchUsers;return Object(w.jsxs)(In,{children:[Object(w.jsx)(E,{variant:"h2",bold:!0,children:"PplFinder"}),Object(w.jsx)(kn,{users:e,isLoading:t,fetchUsers:i})]})},Un=f.a.div(X||(X=Object(u.a)(["\n  height: 100%;\n  max-height: 100%;\n"]))),_n=function(){return Object(w.jsx)(tn,{children:Object(w.jsxs)(d.a,{children:[Object(w.jsx)(Z,{}),Object(w.jsx)(Y,{}),Object(w.jsx)(Un,{children:Object(w.jsxs)(j.c,{children:[Object(w.jsx)(j.a,{path:"/favorites",component:I}),Object(w.jsx)(j.a,{path:"/",component:Nn})]})})]})})},Tn=t(86),Ln=t(25),Vn=t(57),Dn=t(87),zn=t.n(Dn),Mn=t(88),Hn=t(26),Pn={favorites:[]};var Bn={key:"root",storage:zn.a,whitelist:["favoritesReducer"]},Jn=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Ln.c,Xn=Object(Ln.b)({favoritesReducer:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pn,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_FAVORITES":return Object(Hn.a)(Object(Hn.a)({},n),{},{favorites:e.favorites});case"ADD_FAVORITE":return console.log("adding"),Object(Hn.a)(Object(Hn.a)({},n),{},{favorites:[].concat(Object(rn.a)(n.favorites),[e.favorite])});case"REMOVE_FAVORITE":return Object(Hn.a)(Object(Hn.a)({},n),{},{favorites:n.favorites.filter((function(n){return n.login.uuid!==e.uuid}))});case"UPDATE_FAVORITE":var t=e.updatedFavorite;return Object(Hn.a)(Object(Hn.a)({},n),{},{favorites:n.favorites.map((function(n){return n.login.uuid===t.login.uuid?t:n}))});default:return n}}}),Yn=Object(Vn.a)(Bn,Xn),qn=Object(Ln.d)(Yn,Jn(Object(Ln.a)(Mn.a))),Wn=Object(Vn.b)(qn);t(127);s.a.render(Object(w.jsx)(b.a,{store:qn,children:Object(w.jsx)(Tn.a,{loading:null,persistor:Wn,children:Object(w.jsx)(_n,{})})}),document.querySelector("#root"))}},[[128,1,2]]]);
//# sourceMappingURL=main.d51d673f.chunk.js.map