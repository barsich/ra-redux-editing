(this["webpackJsonpra-redux-editing"]=this["webpackJsonpra-redux-editing"]||[]).push([[0],{18:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(5),i=n.n(c),a=(n(18),n(13)),u=n(3),o="ADD_SERVICE",s="REMOVE_SERVICE",d="CHANGE_SERVICE_FIELD",j="EDIT_SERVICE",l="CANCEL_EDIT_SERVICE",v="CHANGE_FILTER_FIELD";function b(e,t){return{type:d,payload:{name:e,value:t}}}function p(e){return{type:l,payload:{service:e}}}var O=n(1);var m=function(){var e=Object(r.useState)(!1),t=Object(a.a)(e,2),n=t[0],c=t[1],i=Object(u.c)((function(e){return e.serviceAdd})),s=Object(u.b)();Object(r.useEffect)((function(){""!==i.name||""!==i.price?c(!0):c(!1)}),[i.name,i.price]);var d=function(e){var t=e.target,n=t.name,r=t.value;s(b(n,r))};return Object(O.jsxs)("form",{onSubmit:function(e){var t,n;(e.preventDefault(),""!==i.name)&&(s((t=i.name,n=i.price,{type:o,payload:{name:t,price:n}})),s(b("name","")),s(b("price","")))},children:[Object(O.jsx)("input",{name:"name",onChange:d,value:i.name}),Object(O.jsx)("input",{name:"price",onChange:d,value:i.price}),Object(O.jsx)("button",{type:"submit",children:"Save"}),n&&Object(O.jsx)("button",{type:"reset",onClick:function(){s(b("name","")),s(b("price","")),s(p())},children:"Cancel"})]})};var f=function(){var e=Object(u.c)((function(e){return e.serviceFilter})),t=Object(u.b)();return Object(O.jsxs)("label",{children:["\u0424\u0438\u043b\u044c\u0442\u0440: ",Object(O.jsx)("input",{type:"text",onChange:function(e){var n=e.target.value;t(function(e){return{type:v,payload:{value:e}}}(n))},value:e})]})};var E=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.serviceList.services})),n=Object(u.c)((function(e){return e.serviceFilter})),r=t.filter((function(e){var t=e.name.toLowerCase(),r=n.trim().toLowerCase();return""!==r?t.includes(r):e})),c=function(t){e(function(e){return{type:s,payload:{id:e}}}(t)),e(p())},i=function(t){e(function(e){return{type:j,payload:{service:e}}}(t));var n=t.name,r=t.price;e(b("name",n)),e(b("price",r))};return Object(O.jsx)("ul",{children:r.map((function(e){return Object(O.jsxs)("li",{children:[e.name," ",e.price,Object(O.jsx)("button",{onClick:function(){return i(e)},children:"\u270e"}),Object(O.jsx)("button",{onClick:function(){return c(e.id)},children:"\u2715"})]},e.id)}))})};var y=function(){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(m,{}),Object(O.jsx)(f,{}),Object(O.jsx)(E,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var h=n(10),g=n(12),_=n(2),x=n(28),C={services:[{id:Object(x.a)(),name:"\u0417\u0430\u043c\u0435\u043d\u0430 \u0441\u0442\u0435\u043a\u043b\u0430",price:"21000"},{id:Object(x.a)(),name:"\u0417\u0430\u043c\u0435\u043d\u0430 \u0434\u0438\u0441\u043f\u043b\u0435\u044f",price:"25000"},{id:Object(x.a)(),name:"\u041f\u043e\u0441\u0442\u0430\u043d\u043e\u0432\u043a\u0430 \u0437\u0430\u0447\u0435\u0442\u0430",price:"\u0411\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u043e"},{id:Object(x.a)(),name:"\u041e\u0442\u043f\u0440\u0430\u0432\u043a\u0430 \u043d\u0430 \u0434\u043e\u0440\u0430\u0431\u043e\u0442\u043a\u0443",price:"50"}],currentlyEditing:{id:"",name:"",price:""}};var w=n(7),I={name:"",price:""};var S=Object(h.a)({serviceList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:var n=t.payload,r=n.name,c=n.price;return e.currentlyEditing.id?Object(_.a)(Object(_.a)({},e),{},{services:e.services.map((function(t){return t.id===e.currentlyEditing.id?{id:t.id,name:r,price:c}:t})),currentlyEditing:{id:"",name:"",price:""}}):Object(_.a)(Object(_.a)({},e),{},{services:[].concat(Object(g.a)(e.services),[{id:Object(x.a)(),name:r,price:c}])});case s:var i=t.payload.id;return Object(_.a)(Object(_.a)({},e),{},{services:e.services.filter((function(e){return e.id!==i}))});case j:var a=t.payload.service,u=a.id,d=a.name,v=a.price;return Object(_.a)(Object(_.a)({},e),{},{currentlyEditing:{id:u,name:d,price:v}});case l:return Object(_.a)(Object(_.a)({},e),{},{currentlyEditing:{id:"",name:"",price:""}});default:return e}},serviceAdd:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;if(t.type===d){var n=t.payload,r=n.name,c=n.value;return Object(_.a)(Object(_.a)({},e),{},Object(w.a)({},r,c.trim()))}return e},serviceFilter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;if(t.type===v){var n=t.payload.value;return n}return e}}),D=Object(h.b)(S,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(O.jsx)(u.a,{store:D,children:Object(O.jsx)(y,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.60e0f0b8.chunk.js.map