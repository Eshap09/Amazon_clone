(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var c=a(2),n=a(3),s=a.n(n),i=a(25),r=a.n(i),o=a(13),l=a(19),d=a(10),j=(a(48),a(49),a(50),a(27)),b=a.n(j),h=Object(n.createContext)(),u=function(e){var t=e.reducer,a=e.initialState,s=e.children;return Object(c.jsx)(h.Provider,{value:Object(n.useReducer)(t,a),children:s})},p=function(){return Object(n.useContext)(h)};var O=function(e){var t=e.id,a=e.title,n=e.image,s=e.price,i=e.rating,r=p(),l=Object(o.a)(r,2),d=(l[0].basket,l[1]);return Object(c.jsxs)("div",{className:"cp",children:[Object(c.jsx)("img",{className:"cp__image",src:n,alt:""}),Object(c.jsxs)("div",{className:"cp__info",children:[Object(c.jsx)("p",{className:"cp__title",children:a}),Object(c.jsxs)("p",{className:"cp__price",children:[Object(c.jsx)("small",{children:"Rs."}),Object(c.jsx)("strong",{children:s})]}),Object(c.jsx)("div",{className:"product__rating",children:Array(i).fill().map((function(e){return Object(c.jsx)("p",{children:Object(c.jsx)(b.a,{style:{color:"orange"}})})}))}),Object(c.jsx)("button",{onClick:function(){d({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from basket"})]})]})},m=a(33),g=a.n(m),x=(a(57),a(38)),M=a(22),f=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},A=function(e,t){switch(console.log(t),t.type){case"SET_USER":return Object(M.a)(Object(M.a)({},e),{},{user:t.user});case"ADD_TO_BASKET":return Object(M.a)(Object(M.a)({},e),{},{basket:[].concat(Object(x.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var a=Object(x.a)(e.basket),c=e.basket.findIndex((function(e){return e.id===t.id}));return c>=0?a.splice(c,1):console.warn("can't remove product (id:".concat(t.id,") as it's not in basket")),Object(M.a)(Object(M.a)({},e),{},{basket:a});default:return e}};var z=function(){var e=p(),t=Object(o.a)(e,1)[0].basket;return Object(c.jsxs)("div",{className:"subtotal",children:[Object(c.jsx)(g.a,{renderText:function(e){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("p",{children:["Subtotal (",t.length," items) : ",Object(c.jsx)("strong",{children:" ".concat(e)})]}),Object(c.jsxs)("small",{className:"subtotal__gift",children:[Object(c.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:f(t),displayType:"text",thousandSeparator:!0,prefix:"Rs "}),Object(c.jsx)("button",{children:"Proceed to Checkout"})]})};var v=function(){var e=p(),t=Object(o.a)(e,1)[0].basket;return Object(c.jsxs)("div",{className:"checkout",children:[Object(c.jsxs)("div",{className:"checkout__left",children:[Object(c.jsx)("img",{className:"checkout__ad",src:"https://d1e00ek4ebabms.cloudfront.net/production/8c37a9c8-922f-4778-a28d-67fcb10f470f.jpg",alt:""}),0===(null===t||void 0===t?void 0:t.length)?Object(c.jsx)("div",{children:Object(c.jsx)("h2",{children:"Your shopping basket is empty"})}):Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{className:"checkout__title",children:"Your shopping basket"}),null===t||void 0===t?void 0:t.map((function(e){return Object(c.jsx)(O,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),t.length>0&&Object(c.jsx)("div",{className:"checkout__right",children:Object(c.jsx)(z,{})})]})},w=a(40),y=a.n(w),N=a(41),k=a.n(N),S=(a(58),a(37)),E=(S.a.initializeApp({apiKey:"AIzaSyDUCFbePeoMQiFT3bhj0n0uCyPhZZBcp8Q",authDomain:"fir-52e66.firebaseapp.com",projectId:"fir-52e66",storageBucket:"fir-52e66.appspot.com",messagingSenderId:"281804664164",appId:"1:281804664164:web:491e6b4e5569052d579e71",measurementId:"G-LYWTYD2JDL"}),S.a.auth());var R=function(){var e=p(),t=Object(o.a)(e,1)[0],a=t.basket,n=t.user;return Object(c.jsxs)("nav",{className:"header",children:[Object(c.jsx)(l.b,{to:"/",children:Object(c.jsx)("img",{className:"header__logo",src:"data:image/png;base64,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",alt:"xyz"})}),Object(c.jsxs)("div",{className:"header__search",children:[Object(c.jsx)("input",{type:"text",className:"header__searchinput"}),Object(c.jsx)(y.a,{className:"header__searchicon"})]}),Object(c.jsxs)("div",{className:"header__nav",children:[Object(c.jsx)(l.b,{to:!n&&"/login",className:"header__link",children:Object(c.jsxs)("div",{onClick:function(){n&&E.signOut()},className:"header__option",children:[Object(c.jsx)("span",{className:"header__optionline1",children:"Hello Eshap"}),Object(c.jsx)("span",{className:"header__optionline2",children:n?"Sign out":"Sign In"})]})}),Object(c.jsx)(l.b,{to:"/",className:"header__link",children:Object(c.jsxs)("div",{className:"header__option",children:[Object(c.jsx)("span",{className:"header__optionline1",children:"Returns"}),Object(c.jsx)("span",{className:"header__optionline2",children:"& Orders"})]})}),Object(c.jsx)(l.b,{to:"/",className:"header__link",children:Object(c.jsxs)("div",{className:"header__option",children:[Object(c.jsx)("span",{className:"header__optionline1",children:"Your"}),Object(c.jsx)("span",{className:"header__optionline2",children:"Prime"})]})}),Object(c.jsx)(l.b,{to:"/checkout",className:"header__link",children:Object(c.jsxs)("div",{className:"header__optionbasket",children:[Object(c.jsx)(k.a,{}),Object(c.jsx)("span",{className:"header__optionline2 header__optionbasketcount",children:null===a||void 0===a?void 0:a.length})]})})]})]})};a(67),a(68);var T=function(e){var t=e.id,a=e.title,n=e.image,s=e.price,i=e.rating,r=p(),l=Object(o.a)(r,2),d=(l[0].basket,l[1]);return Object(c.jsxs)("div",{className:"product",children:[Object(c.jsxs)("div",{className:"product__info",children:[Object(c.jsx)("p",{children:a}),Object(c.jsxs)("p",{className:"product__price",children:[Object(c.jsx)("small",{children:"\u20b9"}),Object(c.jsx)("strong",{children:s})]}),Object(c.jsx)("div",{className:"product__rating",children:Array(i).fill().map((function(e){return Object(c.jsx)("p",{children:Object(c.jsx)(b.a,{style:{color:"orange"}})})}))})]}),Object(c.jsx)("img",{src:n,alt:""}),Object(c.jsx)("button",{onClick:function(){d({type:"ADD_TO_BASKET",item:{id:t,title:a,image:n,price:s,rating:i}})},children:"Add to basket"})]})};var D=function(){return Object(c.jsxs)("div",{className:"home",children:[Object(c.jsx)("img",{className:"home__img",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:""}),Object(c.jsxs)("div",{className:"home__row",children:[Object(c.jsx)(T,{id:"1234",title:"Naukar on super discount",price:599,rating:3,image:"https://scontent.fbho1-1.fna.fbcdn.net/v/t1.18169-9/10462595_1448875972059812_6469196317908527101_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=174925&_nc_ohc=nXEVo6G_dc4AX9m59OM&_nc_ht=scontent.fbho1-1.fna&oh=937da01808917e7f948b0018cd86ec2c&oe=60B7F6A6"}),Object(c.jsx)(T,{id:"1235",title:"Tide Plus Extra Power Detergent Washing Powder - 6 kg (Jasmine and Rose) with Free Detergent Powder - 2 kg",price:249,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/81YakxRZLzL._AC_SL1500_.jpg"})]}),Object(c.jsxs)("div",{className:"home__row",children:[Object(c.jsx)(T,{id:"1236",title:"Inspiron 3501 15.6'(39.62 cms) FHD Display Laptop  ",price:31999,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/510u0O5aJcL._AC_SL1000_.jpg"}),Object(c.jsx)(T,{id:"1237",title:"OnePlus Nord 5G (Blue Marble, 12GB RAM, 256GB Storage)",price:29999,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/71Lx9l3NivL._AC_SL1500_.jpg"}),Object(c.jsx)(T,{id:"1238",title:"D2Q 3 Ply Disposable Surgical Face Mask Protective layer (Pack of 50) For Men And Women | Use and Throw Face Masks",price:279,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/81x3ZwuzBXS._AC_SL1500_.jpg"})]}),Object(c.jsx)("div",{className:"home__row",children:Object(c.jsx)(T,{id:"1239",title:"Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV UA32T4340AKXXL (Glossy Black) (2020 Model)",price:16990,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/71xiB7FZbRL._AC_SL1500_.jpg"})})]})};a(69);var J=function(){var e=Object(d.f)(),t=Object(n.useState)(""),a=Object(o.a)(t,2),s=a[0],i=a[1],r=Object(n.useState)(""),j=Object(o.a)(r,2),b=j[0],h=j[1];return Object(c.jsxs)("div",{className:"login",children:[Object(c.jsx)(l.b,{to:"/",children:Object(c.jsx)("img",{className:"login__logo",src:"data:image/png;base64,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",alt:"xyz"})}),Object(c.jsxs)("div",{className:"login__container",children:[Object(c.jsx)("h1",{children:"Sign in"}),Object(c.jsxs)("form",{children:[Object(c.jsx)("h5",{children:"Email"}),Object(c.jsx)("input",{value:s,onChange:function(e){return i(e.target.value)},type:"email"}),Object(c.jsx)("h5",{children:"Password"}),Object(c.jsx)("input",{value:b,onChange:function(e){return h(e.target.value)},type:"password"}),Object(c.jsx)("button",{onClick:function(t){t.preventDefault(),E.signInWithEmailAndPassword(s,b).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},type:"submit",className:"login__signinbuttton",children:"Sign in"})]}),Object(c.jsx)("p",{children:"By signing in you agree to Amazon's condition of code of conduct, click here to see our privacy ntice, our cookies notice and outline notice"}),Object(c.jsx)("button",{onClick:function(t){t.preventDefault(),E.createUserWithEmailAndPassword(s,b).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerbutton",children:" Create your Amazon account"})]})]})},C=function(){var e=p(),t=Object(o.a)(e,2),a=t[0].user,s=t[1];return Object(n.useEffect)((function(){var e=E.onAuthStateChanged((function(e){s(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}));return function(){e()}}),[]),console.log("USER is >>>>",a),Object(c.jsx)(l.a,{children:Object(c.jsx)("div",{className:"app",children:Object(c.jsxs)(d.c,{children:[Object(c.jsxs)(d.a,{path:"/checkout",children:[Object(c.jsx)(R,{}),Object(c.jsx)(v,{})]}),Object(c.jsx)(d.a,{path:"/login",children:Object(c.jsx)(J,{})}),Object(c.jsxs)(d.a,{path:"/",children:[Object(c.jsx)(R,{}),Object(c.jsx)(D,{})]})]})})})};a(70);r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(u,{initialState:{basket:[],user:null},reducer:A,children:Object(c.jsx)(C,{})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.5a0cc1d2.chunk.js.map