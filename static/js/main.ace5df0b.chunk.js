(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var s=c(3),n=c.n(s),o=c(6),a=c(4),l=c(5),r=c(8),d=c(7),i=c(1),u=c.n(i),h=(c(13),c(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(e){Object(r.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(a.a)(this,c);for(var s=arguments.length,n=new Array(s),l=0;l<s;l++)n[l]=arguments[l];return(e=t.call.apply(t,[this].concat(n))).state={selectedGoods:["Jam"]},e.selectGood=function(t){e.setState((function(e){return{selectedGoods:[].concat(Object(o.a)(e.selectedGoods),[t])}}))},e.showSelectedGoods=function(){var t=e.state.selectedGoods;switch(t.length){case 0:return"No goods selected :(";case 1:return"".concat(t[0]," is selected");case 2:return"".concat(t[0]," and ").concat(t[1]," are selected");default:return"".concat(t.slice(0,-1).join(", ")," and ").concat(t[t.length-1]," are selected")}},e.removeGood=function(t){e.setState((function(e){return{selectedGoods:e.selectedGoods.filter((function(e){return e!==t}))}}))},e.clearSelected=function(){e.setState({selectedGoods:[]})},e}return Object(l.a)(c,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsxs)("div",{className:"heading",children:[Object(h.jsx)("h1",{className:"heading__title",children:this.showSelectedGoods()}),Object(h.jsx)("button",{type:"button",className:"button heading__button",onClick:this.clearSelected,children:"x"})]}),Object(h.jsx)("ul",{className:"list",children:b.map((function(t){return Object(h.jsxs)("li",{className:"list__item",children:[Object(h.jsx)("span",{children:t}),Object(h.jsx)("button",{type:"button",className:"button list__button",onClick:function(){e.state.selectedGoods.includes(t)?e.removeGood(t):e.selectGood(t)},children:e.state.selectedGoods.includes(t)?"Remove":"Add"})]},t)}))})]})}}]),c}(u.a.Component),m=j;n.a.render(Object(h.jsx)(m,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.ace5df0b.chunk.js.map