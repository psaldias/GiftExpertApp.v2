(this["webpackJsonpgif-expert-app"]=this["webpackJsonpgif-expert-app"]||[]).push([[0],{16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(1),c=a(8),i=a.n(c),r=a(2),s=a(7),o=a(0),l=function(e){var t=e.setCategoria,a=Object(n.useState)(""),c=Object(r.a)(a,2),i=c[0],l=c[1];return Object(o.jsxs)("form",{onSubmit:function(e){e.preventDefault(),i.trim().length>2&&(t((function(e){return e.find((function(e){return e===i}))?Object(s.a)(e):[i].concat(Object(s.a)(e))})),l(""))},autoComplete:"off",children:[Object(o.jsx)("input",{type:"text",className:"input",name:"nombre-categoria",placeholder:"Nombre Categoria",value:i,onChange:function(e){l(e.target.value)}}),Object(o.jsx)("button",{type:"submit",className:"button is-primary mt-2 is-fullwidth",children:"Agregar Categor\xeda"})]})},u=a(6),m=a.n(u),j=a(9),b=function(){var e=Object(j.a)(m.a.mark((function e(t){var a,n,c,i,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"GbaldlLEpcmkpLhMNOnCxBDSFoXe03NG",a="https://api.giphy.com/v1/gifs/search?api_key=".concat("GbaldlLEpcmkpLhMNOnCxBDSFoXe03NG","&q=").concat(encodeURI(t),"&limit=10"),e.next=4,fetch(a);case 4:return n=e.sent,e.next=7,n.json();case 7:return c=e.sent,i=c.data,r=i.map((function(e){return{id:e.id,title:e.title,url:e.images.downsized_large.url}})),e.abrupt("return",r);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),d=function(e){var t=e.imagen;return Object(o.jsxs)("div",{className:"column is-2-fullhd is-4-desktop is-6-touch animate__animated animate__fadeIn",children:[Object(o.jsx)("img",{src:t.url,alt:t.title}),Object(o.jsx)("p",{children:t.title})]})},p=function(e){var t=e.categoria,a=function(e){var t=Object(n.useState)({data:[],cargando:!0}),a=Object(r.a)(t,2),c=a[0],i=a[1];return Object(n.useEffect)((function(){b(e).then((function(e){i({data:e,cargando:!1})}))}),[e]),c}(t),c=a.data,i=a.cargando;return Object(o.jsxs)("li",{className:"column is-12 animate__animated animate__fadeIn",children:[Object(o.jsx)("h3",{className:"mb-3",children:Object(o.jsx)("b",{children:t})}),i&&Object(o.jsx)("progress",{className:"progress is-small is-primary",max:"100",children:"15%"}),0===c.length&&!i&&Object(o.jsx)("div",{className:"notification is-primary",children:"No existen imagenes para esta categor\xeda"}),Object(o.jsx)("div",{className:"columns is-mobile is-multiline",children:c.map((function(e){return Object(o.jsx)(d,{imagen:e},e.id)}))})]})},f=function(){var e=Object(n.useState)(["Dragon Ball"]),t=Object(r.a)(e,2),a=t[0],c=t[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{className:"has-text-centered",children:"GiftExpertApp"}),Object(o.jsx)("hr",{}),Object(o.jsx)("div",{className:"block",children:Object(o.jsx)(l,{setCategoria:c})}),Object(o.jsx)("ul",{className:"columns is-mobile is-multiline",children:a.map((function(e){return Object(o.jsx)(p,{categoria:e},e)}))})]})};a(16),a(17);i.a.render(Object(o.jsx)(f,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.71af98b8.chunk.js.map