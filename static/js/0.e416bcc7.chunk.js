"use strict";(self.webpackChunkreact_template=self.webpackChunkreact_template||[]).push([[0],{4386:function(n,e,t){t.d(e,{A:function(){return l},f:function(){return s}});var r=t(5861),o=t(4687),i=t.n(o),a=t(1243);a.Z.defaults.baseURL="https://shopping-carg-api.onrender.com";var l=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,e=a.Z.get("/api/restaurant"),n.abrupt("return",e);case 5:n.prev=5,n.t0=n.catch(0),console.log(n.t0.message);case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,t=a.Z.post("/api/order",e),n.abrupt("return",t);case 5:n.prev=5,n.t0=n.catch(0),console.log(n.t0.message);case 8:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(e){return n.apply(this,arguments)}}()},4e3:function(n,e,t){t.r(e),t.d(e,{default:function(){return vn}});var r,o,i,a,l,s,c,d,u,p,f,h,x,g,m,b,v,w,Z=t(9439),j=t(2791),k=t(168),y=t(7691),C=y.ZP.li(r||(r=(0,k.Z)(["\n  font-size: 15px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: start;\n\n  height: 250px;\n  width: 200px;\n\n  background: rgba(255, 255, 255, 0.29);\n  border-radius: 16px;\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);\n  backdrop-filter: blur(2.6px);\n  -webkit-backdrop-filter: blur(2.6px);\n  border: 1px solid rgba(255, 255, 255, 0.54);\n"]))),P=y.ZP.div(o||(o=(0,k.Z)(["\n  text-align: center;\n  color: #fff;\n  width: 150px;\n  margin-bottom: 10px;\n"]))),S=y.ZP.div(i||(i=(0,k.Z)(["\n  position: absolute;\n  bottom: 45px;\n  margin-bottom: 5px;\n  & button {\n    width: 25px;\n    height: 25px;\n    border-radius: 50%;\n  }\n"]))),_=y.ZP.button(a||(a=(0,k.Z)(["\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  border: none;\n  border-radius: 50%;\n  border: 1px solid #fff;\n  background-color: transparent;\n  color: #fff;\n  transition: all 0.3s linear;\n\n  &:hover,\n  &:focus {\n    background-color: red;\n  }\n"]))),L=y.ZP.p(l||(l=(0,k.Z)(["\n  position: absolute;\n  bottom: 15px;\n\n  font-size: 20px;\n  color: #fff;\n"]))),E=t(184),O=function(n){var e=n.item,t=n.handleRemove,r=n.handleChange,o=e._id,i=e.img,a=e.name,l=e.price,s=e.amount;return(0,E.jsxs)(C,{children:[(0,E.jsx)(P,{children:(0,E.jsxs)("figure",{style:{width:125,margin:13},children:[(0,E.jsx)("img",{src:i,alt:a,loading:"lazy",style:{height:110,width:"100%"}}),(0,E.jsx)("figcaption",{style:{fontSize:16,color:"#fff"},children:a})]})}),(0,E.jsxs)(S,{children:[(0,E.jsx)("button",{onClick:function(){return r(e,1)},type:"button",children:"+"}),(0,E.jsx)("button",{type:"button",children:s}),(0,E.jsx)("button",{onClick:function(){return r(e,-1)},type:"button",children:"-"})]}),(0,E.jsxs)(L,{children:["Price: ",l]}),(0,E.jsx)(_,{onClick:function(){return t(o)},type:"button",children:"X"})]})},R=t(8656),z=y.ZP.div(s||(s=(0,k.Z)(["\n  background-image: url(",");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n\n  @media (max-width: 769px) {\n    overflow: scroll;\n\n    &::-webkit-scrollbar {\n      display: none;\n    }\n\n    scrollbar-width: none;\n  }\n"])),R),T=y.ZP.div(c||(c=(0,k.Z)(["\n  max-width: 1220px;\n  height: calc(100vh - 50px);\n  margin: 0 auto;\n  padding: 0 10;\n"]))),I=y.ZP.div(d||(d=(0,k.Z)(["\n  display: flex;\n\n  @media (max-width: 769px) {\n    flex-direction: column-reverse;\n    justify-content: center;\n    align-items: center;\n  }\n"]))),A=y.ZP.div(u||(u=(0,k.Z)(["\n  height: 900px;\n  width: 100%;\n  margin: 10px;\n\n  @media (max-width: 769px) {\n    height: 300px;\n  }\n\n  overflow-y: hidden;\n  overflow-y: scroll;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n  scrollbar-width: none;\n"]))),M=y.ZP.ul(p||(p=(0,k.Z)(["\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 20px;\n  width: calc((100% - 10px) / 1);\n"]))),W=t(5861),D=t(4687),K=t.n(D),B=t(5218),F=t(6088),H=t(6747),N=t(8329),V=(0,F.Z)(H.Z)((function(){return{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",maxWidth:500,height:380,background:"rgba(255, 255, 255, 0.29)",borderBottomLeftRadius:"16px",borderBottomRightRadius:"16px",boxShadow:"0 4px 30px rgba(0, 0, 0, 0.1)",backdropFilter:"blur(2.6px)",border:"1px solid rgba(255, 255, 255, 0.54)"}})),q=(0,F.Z)(N.Z)((function(){return{width:300,marginBottom:15,"& .MuiFormLabel-root ":{color:"black"},"& .MuiInputBase-root":{height:"40px"},"& .MuiFormLabel-root":{top:"-7px"},"& .MuiOutlinedInput-notchedOutline":{borderColor:"#fff",borderWidth:2}}})),J=t(4386),U=y.ZP.button(f||(f=(0,k.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: transparent;\n  color: #fff;\n  width: 150px;\n  height: 50px;\n  margin-top: 20px;\n  overflow: hidden;\n  border: 2px solid #fff;\n  transition: all 0.3s ease-in-out;\n\n  &::before {\n    content: ' ';\n    position: absolute;\n    display: block;\n    height: 100px;\n    width: 30px;\n    background-color: rgb(246, 243, 21);\n    transform: rotate(35deg);\n    left: -60px;\n    top: -30px;\n    transition: all 0.3s ease-in-out;\n  }\n\n  & span {\n    z-index: 2;\n  }\n\n  &:hover::before {\n    left: 200px;\n  }\n\n  &:hover {\n    border: 1px solid rgba(255, 255, 255, 1);\n  }\n"]))),Y="user-order-cred",G=function(n){var e=n.cart,t=n.price,r=n.place,o=n.setCart,i=(0,j.useState)(""),a=(0,Z.Z)(i,2),l=a[0],s=a[1],c=(0,j.useState)(""),d=(0,Z.Z)(c,2),u=d[0],p=d[1],f=(0,j.useState)(""),h=(0,Z.Z)(f,2),x=h[0],g=h[1],m=(0,j.useState)(""),b=(0,Z.Z)(m,2),v=b[0],w=b[1],k={cart:{id:e._id,name:e.name,price:e.price,amount:e.amount},data:{name:l,email:u,phone:x,address:v},totalPrice:t};(0,j.useEffect)((function(){w(r)}),[r]);var y=function(n){var e=n.target,t=e.name,r=e.value;switch(t){case"name":return s(r);case"email":return p(r);case"phone":return g(r);case"address":return w(r);default:return}},C=function(){var n=(0,W.Z)(K().mark((function n(t){return K().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.preventDefault(),l&&u&&x&&v&&0!==e.length?((0,J.f)(k),s(""),p(""),g(""),w(""),o([]),localStorage.removeItem(Y),B.ZP.success("Your order was sent")):B.ZP.error("Complete oll field for send order and add food to order");case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,j.useEffect)((function(){(l||u||x||v)&&localStorage.setItem(Y,JSON.stringify(k.data))}),[v,u,l,k.data,x]),(0,j.useEffect)((function(){var n=JSON.parse(localStorage.getItem(Y));if(n){var e=n.name,t=n.email,r=n.phone,o=n.address;s(e),p(t),g(r),w(o)}}),[]),(0,E.jsx)("div",{children:(0,E.jsxs)(V,{onSubmit:C,component:"form",noValidate:!0,autoComplete:"off",children:[(0,E.jsx)(q,{required:!0,name:"address",type:"text",value:v,onChange:y,id:"outlined-basic",label:"Address",variant:"outlined"}),(0,E.jsx)(q,{required:!0,id:"outlined-basic",label:"Name",value:l,variant:"outlined",name:"name",type:"text",onChange:y}),(0,E.jsx)(q,{required:!0,id:"outlined-basic",label:"Email",value:u,variant:"outlined",name:"email",type:"text",onChange:y}),(0,E.jsx)(q,{required:!0,id:"outlined-basic",label:"Phone",value:x,variant:"outlined",name:"phone",type:"number",onChange:y}),(0,E.jsxs)("span",{children:["Total prise: ",t," uah"]}),(0,E.jsx)(U,{type:"submit",children:(0,E.jsx)("span",{children:"Make order"})})]})})},X=t(7993),Q=t(3883),$=function(n){var e=n.position;return(0,E.jsx)(X.Jx,{position:e})},nn=t(4627),en=t(4033),tn=y.ZP.div(h||(h=(0,k.Z)(["\n  position: absolute;\n  width: 100%;\n"]))),rn=y.ZP.input(x||(x=(0,k.Z)(["\n  width: 100%;\n  padding: 10px 15px;\n  border: 2px solid black;\n\n  &:focus {\n    outline: none;\n    border-color: blue;\n  }\n\n  @media (max-width: 769px) {\n    width: 90%;\n  }\n"]))),on=y.ZP.ul(g||(g=(0,k.Z)(["\n  position: absolute;\n  top: 0;\n  transform: translateY(39px);\n  background-color: #fff;\n  border: 2px solid black;\n  width: 100%;\n  z-index: 5;\n  margin: 0;\n  padding: 0;\n  text-align: left;\n\n  @media (max-width: 769px) {\n  }\n"]))),an=y.ZP.li(m||(m=(0,k.Z)(["\n  cursor: pointer;\n  padding: 10px 15px;\n\n  &:hover {\n    background: #efefef;\n  }\n"]))),ln=function(n){var e=n.isLoaded,t=n.onPlaceSelect,r=n.onPlace,o=(0,nn.ZP)({initOnMount:!0,debounce:300}),i=o.ready,a=o.value,l=o.suggestions,s=l.status,c=l.data,d=o.setValue,u=o.init,p=o.clearSuggestions,f=(0,en.Z)((function(){p()})),h=function(n){var e=n.description;return function(){d(e,!1),p(),r(e),(0,nn.LM)({address:e}).then((function(n){var e=(0,nn.WV)(n[0]),r=e.lat,o=e.lng;console.log("\ud83d\udccd Coordinates: ",{lat:r,lng:o}),t({lat:r,lng:o})}))}};return(0,j.useEffect)((function(){e&&u()}),[u,e]),(0,E.jsxs)(tn,{ref:f,children:[(0,E.jsx)(rn,{type:"text",value:a,onChange:function(n){d(n.target.value)},disabled:!i,placeholder:"Select a delivery address"}),"OK"===s&&(0,E.jsx)(on,{children:c.map((function(n){var e=n.place_id,t=n.structured_formatting,r=t.main_text,o=t.secondary_text;return(0,E.jsxs)(an,{onClick:h(n),children:[(0,E.jsx)("strong",{children:r})," ",(0,E.jsx)("small",{children:o})]},e)}))})]})},sn=function(n){var e=n.position;return(0,E.jsx)(X.Jx,{position:e})},cn={panControl:!0,zoomControl:!0,mapTypeControl:!1,scaleControl:!1,streetViewControl:!1,rotateControl:!1,clickableIcons:!1,KeyboardShortcuts:!1,scrollwheel:!1,disableDoubleClickZoom:!0,fullscreenControl:!1},dn=y.ZP.div(b||(b=(0,k.Z)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n"]))),un=y.ZP.button(v||(v=(0,k.Z)(["\n  height: 40px;\n  width: 60px;\n  margin-left: 20px;\n  @media (max-width: 769px) {\n    width: 60px;\n  }\n"]))),pn=y.ZP.div(w||(w=(0,k.Z)(["\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n\n  right: 0;\n"]))),fn=0,hn=1,xn={NODE_ENV:"production",PUBLIC_URL:"/shopping-cart",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_GOOGLE_MAP_API_KEY,gn=function(n){var e=n.center,t=n.isLoaded,r=n.onPlaceSelect,o=n.onPlace,i=n.setPlace,a=(0,j.useState)({width:window.innerWidth,height:window.innerHeight}),l=(0,Z.Z)(a,2),s=l[0],c=l[1],d=(0,j.useState)(fn),u=(0,Z.Z)(d,2),p=u[0],f=u[1],h=(0,j.useState)([]),x=(0,Z.Z)(h,2),g=x[0],m=x[1],b=(0,j.useRef)(void 0);(0,j.useEffect)((function(){var n=function(){c({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",n),function(){window.removeEventListener("resize",n)}}),[]),Q.Z.setApiKey(xn),Q.Z.setLanguage("en");var v=(0,j.useCallback)((function(n){b.current=n}),[]),w=(0,j.useCallback)((function(n){b.current=void 0}),[]),k=(0,j.useCallback)((function(n){Q.Z.fromLatLng("".concat(n.lat),"".concat(n.lng)).then((function(n){var e=n.results[0].formatted_address;i(e)}),(function(n){console.error(n)})),m([n])}),[i]),y=(0,j.useCallback)((function(){if(p===fn)f(hn);else f(fn)}),[p]);return(0,E.jsxs)(dn,{children:[(0,E.jsxs)("div",{style:{display:"flex",zIndex:10},children:[(0,E.jsx)(ln,{isLoaded:t,onPlaceSelect:r,onPlace:o}),(0,E.jsxs)(pn,{children:[(0,E.jsx)(un,{onClick:y,children:"Set marker"}),(0,E.jsx)(un,{onClick:function(){m([])},children:"Remove marker"})]})]}),(0,E.jsxs)(X.b6,{onClick:function(n){if(p===hn){var e=n.latLng.lat(),t=n.latLng.lng();k({lat:e,lng:t})}},mapContainerStyle:function(){if(s.width<769){return{width:"330px",height:"250px"}}return{width:"500px",height:"400px"}}(),center:e,zoom:10,onLoad:v,onUnmount:w,options:cn,children:[null===g||void 0===g?void 0:g.map((function(n){return(0,E.jsx)($,{position:n},n.lng)})),(0,E.jsx)(sn,{position:e})]})]})},mn={lat:50.450001,lng:30.523333},bn={lat:50.450001,lng:30.523333},vn=function(n){var e=n.cart,t=n.setCart,r=n.handleChange,o=n.isLoaded,i=(0,j.useState)(0),a=(0,Z.Z)(i,2),l=a[0],s=a[1],c=(0,j.useState)(bn),d=(0,Z.Z)(c,2),u=d[0],p=d[1],f=(0,j.useState)(""),h=(0,Z.Z)(f,2),x=h[0],g=h[1],m=function(n){var r=e.filter((function(e){return e._id!==n}));t(r)};return(0,j.useEffect)((function(){!function(){var n=0;e.forEach((function(e){n+=e.amount*e.price})),s(n)}()}),[e]),(0,j.useEffect)((function(){new Promise((function(n,e){"geolocation"in navigator?navigator.geolocation.getCurrentPosition((function(e){var t=e.coords,r=t.latitude,o=t.longitude;n({lat:r,lng:o})}),(function(){e(mn)})):e(mn)})).then((function(n){return p(n)})).then((function(n){return p(n)}))}),[]),(0,E.jsx)(z,{children:(0,E.jsx)("section",{children:(0,E.jsx)(T,{children:(0,E.jsxs)(I,{children:[(0,E.jsxs)("div",{style:{marginTop:10},children:[o?(0,E.jsx)(gn,{center:u,isLoaded:o,onPlaceSelect:function(n){p(n)},onPlace:g,setPlace:g}):(0,E.jsx)("h2",{children:"Loading..."}),(0,E.jsx)(G,{cart:e,price:l,place:x,setCart:t})]}),(0,E.jsx)(A,{children:(0,E.jsx)(M,{children:(null===e||void 0===e?void 0:e.length)>0&&e.map((function(n){return(0,E.jsx)(O,{item:n,handleRemove:m,handleChange:r},n._id)}))})})]})})})})}},8656:function(n,e,t){n.exports=t.p+"static/media/background-img.4cd9f47d8e3cbd14e6ed.jpeg"}}]);
//# sourceMappingURL=0.e416bcc7.chunk.js.map