(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t(22)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(7),r=t.n(c),i=(t(14),t(15),t(1)),m=t(2),s=t(4),o=t(3),u=t(5),d=(t(16),function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("header",null,l.a.createElement("div",{className:"head"},l.a.createElement("div",{className:"head-inner"},l.a.createElement("a",{className:"logo"},l.a.createElement("img",{src:"https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png"})),l.a.createElement("i",{className:"shu"},"|"),l.a.createElement("i",{className:"she"},"\u793e\u62db\u5b98\u7f51"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{className:"active"},"\u9996\xa0\xa0\u9875")),l.a.createElement("li",null,l.a.createElement("a",null,"\u793e\u4f1a\u62db\u8058")),l.a.createElement("li",null,l.a.createElement("a",null,"\u6821\u56ed\u62db\u8058")),l.a.createElement("li",null,l.a.createElement("a",null,"\u4e86\u89e3\u963f\u91cc")),l.a.createElement("li",null,l.a.createElement("a",null,"\u4e2a\u4eba\u4e2d\u5fc3")),l.a.createElement("div",{className:"login"},"\u6b22\u8fce\u6765\u5230\u963f\u91cc\u5df4\u5df4\u96c6\u56e2\u62db\u8058\uff01",l.a.createElement("a",null,"\u767b\u9646"),"\xa0|\xa0",l.a.createElement("a",null,"\u6ce8\u518c"))))))}}]),a}(n.Component)),E=(t(17),function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("footer",null,l.a.createElement("div",{className:"foot"},"\u963f\u91cc\u5df4\u5df4\u96c6\u56e2 Copyright \xa91999-2019 \u7248\u6743\u6240\u6709"))}}]),a}(n.Component)),p=(t(18),function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"main"},l.a.createElement("img",{src:"https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png"}),l.a.createElement("div",{className:"kong"}),l.a.createElement("div",{className:"form"},l.a.createElement("form",null,l.a.createElement("div",{className:"text"},l.a.createElement("p",null,"If not now, when?"),l.a.createElement("p",null,"If not me, who?"),l.a.createElement("p",null,"\u6b64\u65f6\u6b64\u523b\uff0c\u975e\u6211\u83ab\u5c5e\uff01"),l.a.createElement("div",{className:"search"},l.a.createElement("div",{className:"kong"}),l.a.createElement("input",{type:"text",className:"sou",placeholder:"\u8bf7\u8f93\u5165\u804c\u4f4d\u5173\u952e\u8bcd"}),l.a.createElement("input",{type:"submit",value:"\u641c\u7d22"})),l.a.createElement("div",{className:"hot"},"\u70ed\u95e8\u641c\u7d22\uff1a",l.a.createElement("a",null,"Java"),l.a.createElement("a",null,"Java"),l.a.createElement("a",null,"Java"),l.a.createElement("a",null,"Java"),l.a.createElement("a",null,"Java"),l.a.createElement("a",null,"Java"),l.a.createElement("a",null,"Java"),l.a.createElement("a",null,"Java"),l.a.createElement("a",null,"Java"),l.a.createElement("a",null,"Java"))))))}}]),a}(n.Component)),v=(t(19),t(20),t(21),function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this.props.dataItem;return l.a.createElement("li",{class:"li"},l.a.createElement("a",null,e.name),l.a.createElement("em",{className:"time"},e.time),l.a.createElement("em",{className:"city"},e.address))}}]),a}(n.Component)),h=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,a=e.gap,t=e.speed,n=a||0,l=t||200,c=document.getElementById("scrollContent"),r=document.getElementById("scrollDiv1"),i=document.getElementById("scrollDiv2");function m(){i.offsetTop-c.scrollTop<=n&&(c.scrollTop-=r.offsetHeight),c.scrollTop++}var s=setInterval(m,l);c.onmouseover=function(){clearInterval(s)},c.onmouseout=function(){s=setInterval(m,l)}}},{key:"setStyle",value:function(e,a){return{overflow:"hidden",height:e,width:a}}},{key:"render",value:function(){var e=this.props,a=e.data,t=e.width,n=e.height,c=e.url,r=e.title,i=n||"250px",m=t||"800px",s=a?a.map(function(e,a){return l.a.createElement(v,{key:a,dataItem:e})}):null;return l.a.createElement("div",null,l.a.createElement("div",{className:"title"},r,l.a.createElement("a",{href:c},"\u66f4\u591a")),l.a.createElement("div",{id:"scrollContent",style:this.setStyle(i,m)},l.a.createElement("div",{id:"scrollDiv1"},l.a.createElement("ul",null,s)),l.a.createElement("div",{id:"scrollDiv2"},l.a.createElement("ul",null,s))))}}]),a}(n.Component),f=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"works-box"},l.a.createElement("div",{className:"works"},l.a.createElement("div",{class:"left2"},l.a.createElement(h,{data:[{name:"Lazada-iOS\u5f00\u53d1\u4e13\u5bb6-Seller-\u6df1\u5733",address:"\u6df1\u5733",time:"\u4e00\u5c0f\u65f6\u524d"},{name:"Lazada-iOS\u5f00\u53d1\u4e13\u5bb6(Mobile \u56e2\u961f)-\u6df1\u5733",address:"\u6df1\u5733",time:"\u4e00\u5c0f\u65f6\u524d"},{name:"\u76d2\u9a6c-\u7269\u6d41\u5927\u4ed3\u8d1f\u8d23\u4eba-\u6df1\u5733",address:"\u6df1\u5733",time:"\u4e00\u5c0f\u65f6\u524d"},{name:"Lazada-Data Scientist-\u6df1\u5733",address:"\u6df1\u5733",time:"\u4e00\u5c0f\u65f6\u524d"},{name:"\u76d2\u9a6c-\u95e8\u5e97\u4ed3\u50a8\u7ba1\u7406\u4e13\u5bb6-\u6df1\u5733",address:"\u6df1\u5733",time:"\u4e00\u5c0f\u65f6\u524d"},{name:"\u83dc\u9e1f-\u7ad9\u70b9\u7ebf\u4e0a\u8fd0\u8425",address:"\u6df1\u5733",time:"\u4e00\u5c0f\u65f6\u524d"},{name:"Lazada-JAVA \u4e13\u5bb6 - Seller&Operation-\u6df1\u5733",address:"\u6df1\u5733",time:"\u4e00\u5c0f\u65f6\u524d"},{name:"Lazada-Java\u5f00\u53d1\u4e13\u5bb6-\u6df1\u5733",address:"\u6df1\u5733",time:"\u4e00\u5c0f\u65f6\u524d"},{name:"Lazada-Android\u5f00\u53d1\u4e13\u5bb6mobile-\u6df1\u5733",address:"\u6df1\u5733",time:"\u4e00\u5c0f\u65f6\u524d"}],url:"https://job.alibaba.com/zhaopin/positionList.html?",title:"\u6700\u65b0\u804c\u4f4d"})),l.a.createElement("div",{className:"right"},l.a.createElement("a",{className:"one"},l.a.createElement("img",{src:"https://img.alicdn.com/tfs/TB1Z7JvoxGYBuNjy0FnXXX5lpXa-358-136.png"})),l.a.createElement("a",{className:"two"},l.a.createElement("img",{src:"https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg"})))))}}]),a}(n.Component),b=function(e){function a(){return Object(i.a)(this,a),Object(s.a)(this,Object(o.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d,null),l.a.createElement(p,null),l.a.createElement(f,null),l.a.createElement(E,null))}}]),a}(n.Component);var j=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(b,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.f8744161.chunk.js.map