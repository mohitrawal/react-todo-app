(this.webpackJsonptodoapp=this.webpackJsonptodoapp||[]).push([[0],{20:function(t,e,n){},21:function(t,e,n){},22:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var o=n(1),a=n(2),s=n.n(a),c=n(4),i=n.n(c),r=(n(20),n(12)),d=n(7),u=n(8),l=n(14),j=n(13),h=(n(21),n(22),n(9)),p=n(10);var b=function(t){var e=t.items.map((function(e){return Object(o.jsx)("div",{className:"list",children:Object(o.jsxs)("p",{children:[Object(o.jsx)("input",{type:"text",id:e.key,value:e.text,onChange:function(n){t.setUpdate(n.target.value,e.key)}}),Object(o.jsx)("span",{children:Object(o.jsx)(h.a,{className:"faicons",icon:"trash",onClick:function(){return t.deleteItem(e.key)}})})]})},e.key)}));return Object(o.jsx)("div",{children:Object(o.jsx)(p.a,{duration:300,easing:"ease-in-out",children:e})})},f=n(3),x=n(11);f.b.add(x.a);var m=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(t){var o;return Object(d.a)(this,n),(o=e.call(this,t)).handleInput=function(t){o.setState({currentTodo:{text:t.target.value,key:Date.now()}})},o.saveTodo=function(t){t.preventDefault();var e=o.state.currentTodo;if(""!==e.text){var n=[].concat(Object(r.a)(o.state.todoItems),[e]);o.setState({todoItems:n,currentTodo:{text:"",key:""}})}},o.deleteTodo=function(t){var e=o.state.todoItems.filter((function(e){return e.key!==t}));o.setState({todoItems:e})},o.setUpdate=function(t,e){var n=o.state.todoItems;n.map((function(n){n.key===e&&(n.text=t)})),o.setState({todoItems:n})},o.state={todoItems:[],currentTodo:{text:"",key:""}},o}return Object(u.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("header",{children:Object(o.jsxs)("form",{id:"todo",onSubmit:this.saveTodo,children:[Object(o.jsx)("input",{type:"text",placeholder:"Please enter text",value:this.state.currentTodo.text,onChange:this.handleInput}),Object(o.jsx)("button",{type:"submit",children:"Add"})]})}),Object(o.jsx)(b,{items:this.state.todoItems,deleteItem:this.deleteTodo,setUpdate:this.setUpdate})]})}}]),n}(s.a.Component),v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,29)).then((function(e){var n=e.getCLS,o=e.getFID,a=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),o(t),a(t),s(t),c(t)}))};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),v()}},[[28,1,2]]]);
//# sourceMappingURL=main.5de661cf.chunk.js.map