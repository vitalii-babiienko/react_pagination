(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{10:function(e,a,t){},12:function(e,a,t){"use strict";t.r(a);var c=t(5),n=t.n(c),r=t(4),i=t(1),l=(t(10),t(2)),s=t.n(l),o=t(0),j=function(e){var a=e.total,t=e.perPage,c=e.currentPage,n=e.onPageChange,r=Math.ceil(a/t),i=Array(r).fill(1).map((function(e,a){return e+a}));return Object(o.jsxs)("ul",{className:"pagination",children:[Object(o.jsx)("li",{className:s()("page-item",{disabled:1===c}),children:Object(o.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#".concat(c),"aria-disabled":1===c,onClick:function(){return n(c-1)},children:"\xab"})}),i.map((function(e){return Object(o.jsx)("li",{className:s()("page-item",{active:e===c}),children:Object(o.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){return e!==c&&n(e)},children:e})},e)})),Object(o.jsx)("li",{className:s()("page-item",{disabled:c===r}),children:Object(o.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#".concat(c),"aria-disabled":c===r,onClick:function(){return n(c+1)},children:"\xbb"})})]})};var d=function(e,a){for(var t=[],c=e;c<=a;c+=1)t.push(c);return t}(1,42).map((function(e){return"Item ".concat(e)})),u=function(){var e=Object(i.useState)(5),a=Object(r.a)(e,2),t=a[0],c=a[1],n=Object(i.useState)(1),l=Object(r.a)(n,2),s=l[0],u=l[1],h=t*s,b=h-t,p=d.slice(b,h),m=Math.min(h,d.length);return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h1",{children:"Items with Pagination"}),Object(o.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(s," (items ").concat(b+1," - ").concat(m," of ").concat(d.length,")")}),Object(o.jsxs)("div",{className:"form-group row",children:[Object(o.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(o.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",onChange:function(e){return a=Number(e.target.value),c(a),u(1),void window.history.replaceState(null,"","#1");var a},children:[Object(o.jsx)("option",{value:"3",children:"3"}),Object(o.jsx)("option",{value:"5",selected:!0,children:"5"}),Object(o.jsx)("option",{value:"10",children:"10"}),Object(o.jsx)("option",{value:"20",children:"20"})]})}),Object(o.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(o.jsx)(j,{total:d.length,perPage:t,currentPage:s,onPageChange:function(e){return u(e)}}),Object(o.jsx)("ul",{children:p.map((function(e){return Object(o.jsx)("li",{"data-cy":"item",children:e},e)}))})]})};n.a.render(Object(o.jsx)(u,{}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.78a2a434.chunk.js.map