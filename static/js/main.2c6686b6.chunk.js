(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(n,e,t){n.exports=t(29)},23:function(n,e,t){},29:function(n,e,t){"use strict";t.r(e);var a=t(0),i=t.n(a),r=t(4),c=t.n(r),o=(t(23),t(5)),u=t(6),l=t(8),s=t(7),m=t(9),h=t(3),f=t(1),v=t(2);function d(){var n=Object(f.a)(["\nalign-items: center;\ndisplay: flex;\nflex-direction: column;\njustify-content: center;\n"]);return d=function(){return n},n}function k(){var n=Object(f.a)(["\nmax-width: calc(800px - 2rem);\npadding-left: 1rem;\npadding-right: 1rem;\n"]);return k=function(){return n},n}v.a.div(k());var j=v.a.div(d());function b(){var n=Object(f.a)(["\n  animation: shake 100ms infinite step-start;\n  font-size: 45vmin;\n\n  @keyframes shake {\n    0% { transform: translate(1vmin, 1.5vmin); }\n    25% { transform: translate(-1.5vmin, 1.5vmin); }\n    50% { transform: translate(-1.5vmin, -1vmin); }\n    75% { transform: translate(1vmin, -1vmin); }\n    100% { transform: translate(1vmin, 1.5vmin); }\n  }\n"]);return b=function(){return n},n}function O(){var n=Object(f.a)(["\n  height: 80vmin;\n  width: 80vmin;\n"]);return O=function(){return n},n}function w(){var n=Object(f.a)(["\n  font-size: calc(10px + 2vmin);\n  min-height: 100vh;\n"]);return w=function(){return n},n}var p=Object(v.a)(j)(w()),g=v.a.button(O()),E=Object(v.a)(j)(b()),y=function(n){function e(n){var t;return Object(o.a)(this,e),(t=Object(l.a)(this,Object(s.a)(e).call(this,n))).state={result:null},t.onOmikujiClick=t.onOmikujiClick.bind(Object(h.a)(Object(h.a)(t))),t}return Object(m.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){var n=this.state.result;if(n)switch(n.name){case"daikichi":return i.a.createElement(p,null,i.a.createElement(E,null,"\u5927\u5409"));case"kichi":return i.a.createElement(p,null,i.a.createElement(E,null,"\u5409"));case"daikyo":return i.a.createElement(p,null,i.a.createElement(E,null,"\u5927\u51f6"));default:throw console.warn("Result",n),new Error("Unknown result")}return i.a.createElement(p,null,i.a.createElement(g,{onClick:this.onOmikujiClick},"\u304a\u307f\u304f\u3058"))}},{key:"onOmikujiClick",value:function(n){var e=this.getOracle();this.setState({result:e})}},{key:"getOracle",value:function(){var n,e=this.props.omikujiPossibilities,t=e.reduce(function(n,e){return n+e.weight},0),a=Math.floor(Math.random()*t);return e.reduce(function(e,t){var i=e+t.weight;return a<i?(n=t,NaN):i},0),n}}]),e}(i.a.Component),C=[{name:"daikichi",weight:30},{name:"kichi",weight:50},{name:"daikyo",weight:20}],x=function(n){function e(n){var t;return Object(o.a)(this,e),(t=Object(l.a)(this,Object(s.a)(e).call(this,n))).state={result:0},t}return Object(m.a)(e,n),Object(u.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(y,{omikujiPossibilities:C}))}}]),e}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.2c6686b6.chunk.js.map