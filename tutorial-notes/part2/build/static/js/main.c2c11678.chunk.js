(this.webpackJsonppart2=this.webpackJsonppart2||[]).push([[0],{39:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var c=n(15),o=n.n(c),r=n(6),i=n(4),a=n(2),u=n(0),s=function(t){var e=t.note,n=t.toggleImportance,c=e.important?"make not important":"make important";return Object(u.jsxs)("li",{className:"note",children:[e.content,Object(u.jsx)("button",{onClick:n,children:c})]})},j=function(){return Object(u.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(u.jsx)("br",{}),Object(u.jsx)("em",{children:"Note app, Department of Computer Science, University of Helsinki 2021"})]})},l=function(){return Object(u.jsxs)("div",{style:{color:"green",fontStyle:"italic",fontSize:16},children:[Object(u.jsx)("br",{}),Object(u.jsx)("em",{children:"Note app, Department of Computer Science, University of Helsinki 2021"})]})},f=n(3),b=n.n(f),d="/api/notes",p={getAll:function(){var t=b.a.get(d),e={id:1e4,content:"This note is not saved to server",date:"2019-05-30T17:30:31.098Z",important:!0};return t.then((function(t){return t.data.concat(e)}))},create:function(t){return b.a.post(d,t).then((function(t){return t.data}))},update:function(t,e){return b.a.put("".concat(d,"/").concat(t),e).then((function(t){return t.data}))}},m=function(){var t=Object(a.useState)([]),e=Object(i.a)(t,2),n=e[0],c=e[1],o=Object(a.useState)(""),f=Object(i.a)(o,2),b=f[0],d=f[1],m=Object(a.useState)(!1),O=Object(i.a)(m,2),h=O[0],v=O[1],x=Object(a.useState)(null),g=Object(i.a)(x,2),S=g[0],y=g[1];Object(a.useEffect)((function(){p.getAll().then((function(t){c(t)}))}),[]);var k=h?n:n.filter((function(t){return t.important}));return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Notes"}),Object(u.jsx)(j,{message:S}),Object(u.jsx)("div",{children:Object(u.jsxs)("button",{onClick:function(){return v(!h)},children:["show ",h?"important":"all"]})}),Object(u.jsx)("ul",{children:k.map((function(t){return Object(u.jsx)(s,{note:t,toggleImportance:function(){return function(t){var e=n.find((function(e){return e.id===t})),o=Object(r.a)(Object(r.a)({},e),{},{important:!e.important});p.update(t,o).then((function(e){c(n.map((function(n){return n.id!==t?n:e})))})).catch((function(t){y("Note '".concat(e.content,"' was already removed from server")),setTimeout((function(){y(null)}),5e3)}))}(t.id)}},t.id)}))}),Object(u.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e={content:b,date:(new Date).toISOString(),important:Math.random()>.5};p.create(e).then((function(t){c(n.concat(t)),d("")}))},children:[Object(u.jsx)("input",{value:b,onChange:function(t){console.log(t.target.value),d(t.target.value)}}),Object(u.jsx)("button",{type:"submit",children:"save"})]}),Object(u.jsx)(l,{})]})};n(39);o.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.c2c11678.chunk.js.map