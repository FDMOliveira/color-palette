(this["webpackJsonpcolor-palette"]=this["webpackJsonpcolor-palette"]||[]).push([[0],{10:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a(1),c=a.n(r),o=a(4),s=a.n(o),i=a(3),l=["https://images.pexels.com/photos/853199/pexels-photo-853199.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","https://images.pexels.com/photos/4173624/pexels-photo-4173624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"];var d=function(){var e,t,a,r,o=c.a.useState([]),s=Object(i.a)(o,2),d=s[0],h=s[1],g=c.a.useState(!1),j=Object(i.a)(g,2),p=j[0],u=j[1],b=0,f=0,m=0,v=0,x={},O=[],w=function(n){var c=document.getElementsByTagName("canvas")[0],o=c.getContext("2d"),s=n.height>n.width?.2*window.innerWidth:.3*window.innerWidth,i=n.height*s/n.width;c.width=s,c.height=i,o.clearRect(0,0,s,i),o.drawImage(n,0,0,s,i);var l,d=o.getImageData(0,0,s,i);for(l=0;l<d.data.length;l+=4){if(e=d.data[l],t=d.data[l+1],a=d.data[l+2],r=d.data[l+3],x=0===m?{r:e,g:t,b:a}:x,m>0&&r>178.5){v=Math.pow(e-x.r,2)+Math.pow(t-x.g,2)+Math.pow(a-x.b,2),v=Math.sqrt(v);var g=new Array;g[0]=Math.floor(v),g[1]={r:e,g:t,b:a},g[2]=1,O.push(g)}m++}O.sort((function(e,t){return e[0]<t[0]?-1:e[0]>t[0]?1:0})),O.map((function(e,t,a){var n=Math.floor(e[0]),r=new Array;if(t>0)if(n<f){var c=a[b],o=c[1],s=e[1],i={r:s.r+o.r,g:s.g+o.g,b:s.b+o.b};r[0]=c[0],r[1]=i,r[2]=c[2]+1,a[b]=r}else b=t,f=n+50})),f=0;var j=O.filter((function(e,t,a){var n=e[2];if(100*n/(s*i)>1){var r="".concat(Math.floor(e[1].r/n),",").concat(Math.floor(e[1].g/n),",").concat(Math.floor(e[1].b/n));if(!(t>0))return e[1]=r,e;var c=Math.floor(e[0]);if(!(c<f))return e[1]=r,f=c+50,e}}));j.sort((function(e,t){return e[2]<t[2]?1:e[2]>t[2]?-1:void 0})),h(j),console.log(j),u(!1)};return Object(n.jsxs)("div",{children:[Object(n.jsxs)("nav",{children:[Object(n.jsx)("div",{className:"title",children:Object(n.jsx)("p",{children:" Try one of these images"})}),Object(n.jsx)("div",{className:"images",children:l.map((function(e){return Object(n.jsx)("div",{children:Object(n.jsx)("img",{src:e,onClick:function(e){return w(e.target)},crossOrigin:"anonymous"})})}))})]}),Object(n.jsxs)("div",{className:"main ".concat(p?"loading":""," "),children:[Object(n.jsx)("h1",{children:"Image color pallete"}),Object(n.jsx)("div",{className:"range"}),Object(n.jsxs)("div",{className:"loading",children:[Object(n.jsx)("div",{}),Object(n.jsx)("div",{})]}),Object(n.jsxs)("div",{className:"input",children:[Object(n.jsx)("p",{children:"... or upload your own"}),Object(n.jsx)("img",{src:"",class:"img"}),Object(n.jsx)("input",{type:"file",id:"file",accept:"image/*",onChange:function(e){var t=e.target.files[0],a=new FileReader,n=document.querySelector(".img");u(!0),a.addEventListener("load",(function(){n.onload=function(){w(n)},n.src=a.result}),!1),t&&a.readAsDataURL(t)}}),Object(n.jsx)("label",{for:"file",children:"Choose a file"})]}),Object(n.jsx)("canvas",{}),Object(n.jsx)("div",{children:d.map((function(e,t){return Object(n.jsx)("div",{"data-rgb":e[1],style:{background:"rgb(".concat(e[1],")")},children:" "})}))})]})]})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,11)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),r(e),c(e),o(e)}))};s.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(d,{})}),document.getElementById("root")),h()}},[[10,1,2]]]);
//# sourceMappingURL=main.67252d9c.chunk.js.map