(this["webpackJsonpdashmote-case"]=this["webpackJsonpdashmote-case"]||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){},37:function(e,t,c){},38:function(e,t,c){},39:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(1),n=c.n(s),r=c(11),i=c.n(r),o=(c(25),c(26),c(3));c(27),c(28);var j=function(e){var t=e.menuActive;return Object(a.jsx)("div",{className:"nav-side-menu",style:t?{maxWidth:"200px"}:{},children:Object(a.jsxs)("div",{className:"side-links",children:[Object(a.jsx)("a",{href:"/",children:"Example"}),Object(a.jsx)("a",{href:"/",children:"Example"}),Object(a.jsx)("a",{href:"/",children:"Example"})]})})},l=[{firstName:"Oliver",lastName:"Palmer"}],d=c.p+"static/media/user-image-min.90c64a2f.jpeg",u=c(14),b=c.n(u),m=c(12),h=c.n(m),O=c(15),x=c.n(O);var f=function(){var e=Object(s.useState)(!1),t=Object(o.a)(e,2),c=t[0],n=t[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("nav",{children:[Object(a.jsx)("div",{className:"hamburger-menu",onClick:function(){n((function(e){return!e}))},children:c?Object(a.jsx)(h.a,{}):Object(a.jsx)(b.a,{})}),Object(a.jsxs)("div",{className:"user-info",children:[Object(a.jsx)(x.a,{}),Object(a.jsx)("span",{className:"user-full-name",children:"".concat(l[0].firstName," ").concat(l[0].lastName)}),Object(a.jsx)("img",{className:"user-image",src:d,alt:"User"})]})]}),Object(a.jsx)(j,{menuActive:c})]})};c(34),c(35);var p=function(){return Object(a.jsxs)("div",{className:"greeting-banner",children:[Object(a.jsx)("h2",{children:"Hello ".concat(l[0].firstName,"!")}),Object(a.jsx)("p",{children:"Here you can find your projects and dashboards."})]})},v=c(6),N=(c(36),c(37),c(16)),g=c.n(N);var y=function(e){var t=e.q,c=e.handleChange;return Object(a.jsx)("div",{className:"search-bar-container",children:Object(a.jsxs)("div",{className:"search-bar",children:[Object(a.jsx)("input",{value:t,onChange:c,className:"search-input mobile",type:"text",placeholder:"Search"}),Object(a.jsx)("input",{value:t,onChange:c,className:"search-input desktop",type:"text",placeholder:"Search for a keyword"}),Object(a.jsx)(g.a,{className:"dark-grey",fontSize:"small"})]})})},C=(c(38),c(39),c(18)),F=c.n(C),D=c(17),k=c.n(D);var S=function(e){var t=e.remove,c=e.setRemove,s=e.handleDelete,n=e.name;return Object(a.jsx)("div",{style:t?{marginLeft:0}:{},className:"delete-confirmation",children:Object(a.jsxs)("div",{className:"confirmation-content",children:[Object(a.jsxs)("div",{className:"confirmation-message",children:["Are you sure you want to delete ",n,"?"]}),Object(a.jsxs)("div",{className:"confirmation-buttons",children:[Object(a.jsx)(k.a,{onClick:function(){c(!1)},className:"fill-red",fontSize:"large"}),Object(a.jsx)(F.a,{onClick:function(){c(!1),setTimeout((function(){s(n)}),500)},className:"fill-green",fontSize:"large"})]})]})})};var E=function(e){var t=e.project,c=e.handleDelete,n=Object(s.useState)(!1),r=Object(o.a)(n,2),i=r[0],j=r[1],l={C:"#2A8FF7",D:"#5ECD75",F:"#B37FEB"},d={background:l[t.category]},u={background:{C:"#D1E8FC",D:"#CCF5E3",F:"#F0E5FB"}[t.category],color:l[t.category]};return Object(a.jsxs)("div",{className:"table-row",children:[Object(a.jsx)("span",{style:d,className:"project-color-code"}),Object(a.jsx)("span",{className:"project-category",children:Object(a.jsx)("span",{style:u,className:"category",children:Object(a.jsx)("span",{className:"category-content",children:t.category})})}),Object(a.jsx)("span",{className:"project-name",children:t.name}),Object(a.jsxs)("span",{className:"project-users",children:[t.users," users"]}),Object(a.jsx)("span",{className:"project-dashboards",children:Object(a.jsxs)("span",{className:"dashboards-inner",children:[t.dashboards," dashboards"]})}),Object(a.jsx)("span",{className:"project-delete",children:Object(a.jsx)("span",{onClick:function(){j(!0)},className:"delete-button",children:"Delete"})}),Object(a.jsx)(S,{name:t.name,remove:i,setRemove:j,handleDelete:c})]})},P=[{name:"Project A",users:4,dashboards:3,category:"D"},{name:"Project B",users:2,dashboards:4,category:"C"},{name:"Project C",users:1,dashboards:2,category:"F"},{name:"Project D",users:3,dashboards:2,category:"D"}];var w=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)(Object(v.a)(P)),i=Object(o.a)(r,2),j=i[0],l=i[1];function d(e){l((function(t){return t.filter((function(t){return t.name!==e}))}))}var u=j.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())}));return Object(a.jsxs)("div",{className:"projects-table-container",children:[Object(a.jsx)(y,{q:c,handleChange:function(e){var t=e.target.value;n(t)}}),Object(a.jsxs)("div",{className:"projects-table",children:[Object(a.jsx)("p",{className:"projects-table-title",children:"My Projects:"}),0===u.length?"No projects":u.map((function(e,t){return Object(a.jsx)(E,{project:e,handleDelete:d},t)}))]})]})};var A=function(){return Object(a.jsxs)("div",{className:"projects-interface-container",children:[Object(a.jsx)(p,{}),Object(a.jsx)(w,{})]})};var B=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(f,{}),Object(a.jsx)(A,{})]})},L=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,53)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;c(e),a(e),s(e),n(e),r(e)}))};i.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(B,{})}),document.getElementById("root")),L()}},[[41,1,2]]]);
//# sourceMappingURL=main.2d1cf7ed.chunk.js.map