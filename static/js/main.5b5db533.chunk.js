(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){e.exports=a.p+"static/media/correct.0d290b6b.png"},12:function(e,t,a){e.exports=a.p+"static/media/wrong.71de1848.jpg"},14:function(e,t,a){e.exports=a(26)},20:function(e,t,a){},24:function(e,t,a){},26:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),s=a.n(o),c=(a(20),a(7)),i=a.n(c),l=a(6),u=a(13),h=a(10),p=a(1),m=a(2),d=a(4),w=a(3),f=a(5),v=function(e,t){for(var a=[],n=0;n<3;n++)a.push(Math.floor(Math.random()*t)+e);return a},g=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e,t,a=this,n=(e=this.props.index,t=this.props.row,e+t);return r.a.createElement("div",{className:"game-item",onClick:function(){return a.props.handleClick(n)}},r.a.createElement("div",{className:"front"},this.props.value))}}]),t}(n.Component),b=[100,200,300,400,500],C=function(e){return r.a.createElement("div",{className:"game-row"},r.a.createElement("div",{className:"title"},e.title),b.map(function(t,a){return r.a.createElement(g,{value:t,index:a,row:e.row,handleClick:e.handleClick})}))},y=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"game-board"},r.a.createElement("div",{className:"question-rows"},r.a.createElement(C,{row:0,title:this.props.titles[0],handleClick:this.props.handleClick}),r.a.createElement(C,{row:5,title:this.props.titles[1],handleClick:this.props.handleClick}),r.a.createElement(C,{row:10,title:this.props.titles[2],handleClick:this.props.handleClick})))}}]),t}(n.Component),E=a(11),k=a.n(E),j=a(12),O=a.n(j),S=function(e){return r.a.createElement("div",{className:e.show?"modal":"modal display-none"},r.a.createElement("div",{className:"modal-content",autoFocus:!1},r.a.createElement("button",{onClick:e.handleClose},"close"),r.a.createElement("div",{className:e.correct||e.wrong?"modal-question hide":""},r.a.createElement("div",null,e.question),r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("input",{autoFocus:!0,type:"text",value:e.playerAnswer,onChange:e.handleInputChange}))),r.a.createElement("div",{className:e.correct?"correct-show":"correct-hide"},r.a.createElement("span",null,"Correct!"),r.a.createElement("img",{src:k.a,alt:"correct"})),r.a.createElement("div",{className:e.wrong?"wrong-show":"wrong-hide"},r.a.createElement("span",null,"InCorrect!"),r.a.createElement("img",{src:O.a,alt:"wrong"}))))},A=(a(24),function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(w.a)(t)).call.apply(e,[this].concat(r)))).rows=3,a.state={activeQuestion:"",activeAnswer:"",playerAnswer:"",questions:[],titles:[],modal:!1,message:"",correct:!1,wrong:!1},a.fetchQuestions=Object(h.a)(i.a.mark(function e(){var t,n,r,o,s,c,h,p;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=v(1,1300),n=[],r=[],e.prev=3,e.next=6,Promise.all([fetch("https://cors-anywhere.herokuapp.com/http://jservice.io//api/category?id=".concat(t[0])),fetch("https://cors-anywhere.herokuapp.com/http://jservice.io//api/category?id=".concat(t[1])),fetch("https://cors-anywhere.herokuapp.com/http://jservice.io//api/category?id=".concat(t[2]))]);case 6:return o=e.sent,s=Object(u.a)(o,3),c=s[0],h=s[1],p=s[2],e.next=13,c.json();case 13:return c=e.sent,e.next=16,h.json();case 16:return h=e.sent,e.next=19,p.json();case 19:p=e.sent,n.push.apply(n,Object(l.a)(c.clues.slice(0,5)).concat(Object(l.a)(h.clues.slice(0,5)),Object(l.a)(p.clues.slice(0,5)))),n.forEach(function(e,t){e.key=t}),r.push(c.title,h.title,p.title),a.setState({questions:n,titles:r}),console.log("state",a.state),e.next=30;break;case 27:e.prev=27,e.t0=e.catch(3),a.setState({errorMessage:e.t0});case 30:case"end":return e.stop()}},e,this,[[3,27]])})),a.handleClick=function(e){var t=a.state.questions[e].question,n=a.state.questions[e].answer;a.setState({activeQuestion:t,activeAnswer:n}),console.log(a.state.activeQuestion),a.launchModal()},a.launchModal=function(){a.setState({modal:!0})},a.closeModal=function(){a.setState({modal:!1,playerAnswer:"",wrong:!1,correct:!1})},a.handleInputChange=function(e){a.setState({playerAnswer:e.target.value}),console.log(a.state.playerAnswer)},a.handleSubmit=function(e){e.preventDefault(),a.state.playerAnswer.toUpperCase()===a.state.activeAnswer.toUpperCase()?(a.showCorrect(),setTimeout(function(){return a.setState({correct:!1,modal:!1})},3e3)):(a.showFalse(),setTimeout(function(){return a.setState({wrong:!1})},3e3)),a.setState({playerAnswer:""}),setTimeout(function(){return a.setState({correct:!1,wrong:!1})},3e3)},a.showFalse=function(){a.setState({wrong:!0})},a.showCorrect=function(){a.setState({correct:!0})},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.fetchQuestions()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(y,{handleClick:this.handleClick,titles:this.state.titles,question:this.state.questions}),r.a.createElement(S,{show:this.state.modal,question:this.state.activeQuestion,handleSubmit:this.handleSubmit,handleInputChange:this.handleInputChange,playerAnswer:this.state.playerAnswer,correct:this.state.correct,wrong:this.state.wrong,handleClose:this.closeModal}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,2,1]]]);
//# sourceMappingURL=main.5b5db533.chunk.js.map