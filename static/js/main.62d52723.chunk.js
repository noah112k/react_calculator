(window.webpackJsonpreact_calculator=window.webpackJsonpreact_calculator||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),o=a(7),i=a.n(o),c=(a(13),a(1)),l=a(2),n=a(4),p=a(3),d=a(5),u=function(e){function t(){return Object(c.a)(this,t),Object(n.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"buttons-container"},r.a.createElement("div",{onClick:this.props.clear,style:h,className:"c"},"C"),r.a.createElement("div",{onClick:this.props.opClick.bind(this,"+"),style:h,className:"add"},"+"),r.a.createElement("div",{onClick:this.props.opClick.bind(this,"-"),style:h,className:"sub"},"-"),r.a.createElement("div",{onClick:this.props.opClick.bind(this,"/"),style:h,className:"div"},"/"),r.a.createElement("div",{onClick:this.props.opClick.bind(this,"*"),style:h,className:"mult"},"*"),r.a.createElement("div",{onClick:this.props.equal,style:h,className:"equal"},"="),r.a.createElement("div",{onClick:this.props.numClick.bind(this,"9"),style:m,className:"nine"},"9"),r.a.createElement("div",{onClick:this.props.numClick.bind(this,"8"),style:m,className:"eight"},"8"),r.a.createElement("div",{onClick:this.props.numClick.bind(this,"7"),style:m,className:"seven"},"7"),r.a.createElement("div",{onClick:this.props.numClick.bind(this,"6"),style:m,className:"six"},"6"),r.a.createElement("div",{onClick:this.props.numClick.bind(this,"5"),style:m,className:"five"},"5"),r.a.createElement("div",{onClick:this.props.numClick.bind(this,"4"),style:m,className:"four"},"4"),r.a.createElement("div",{onClick:this.props.numClick.bind(this,"3"),style:m,className:"three"},"3"),r.a.createElement("div",{onClick:this.props.numClick.bind(this,"2"),style:m,className:"two"},"2"),r.a.createElement("div",{onClick:this.props.numClick.bind(this,"1"),style:m,className:"one"},"1"),r.a.createElement("div",{onClick:this.props.numClick.bind(this,"0"),style:m,className:"zero"},"0"),r.a.createElement("div",{onClick:this.props.dotClick,style:m,className:"dot"},"."))}}]),t}(s.Component),m={color:"#000",padding:"6vh",backgroundColor:"#ADEFD1",cursor:"pointer"},h={color:"#fff",padding:"6vh",backgroundColor:"#00203F",cursor:"pointer"},y=u,k=function(e){function t(){return Object(c.a)(this,t),Object(n.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{style:b},this.props.display)}}]),t}(s.Component),b={background:"#003434",color:"#fff",marginBottom:"5px",textAlign:"right",fontSize:"3rem",fontWeight:"500",padding:"10px"},v=k,C=(a(14),function(e){function t(){var e,a;Object(c.a)(this,t);for(var s=arguments.length,r=new Array(s),o=0;o<s;o++)r[o]=arguments[o];return(a=Object(n.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={display:"0",hasOperator:!1,operationComplete:!1},a.numClick=function(e){"0"===a.state.display&&!a.state.hasOperator||a.state.operationComplete&&!a.state.hasOperator?a.setState({display:e,hasOperator:!1,operationComplete:!1}):"0"===a.state.display||a.state.hasOperator?a.state.hasOperator&&a.setState({hasOperator:!0,operator:a.state.operator,firstNum:a.state.firstNum,display:"0"!==a.state.display?a.state.display+e:e}):a.setState({display:a.state.display+e,hasOperator:!1})},a.clear=function(){if(a.state.hasOperator)switch(a.state.operator){case"+":document.querySelector(".add").classList.remove("operator-selected");break;case"-":document.querySelector(".sub").classList.remove("operator-selected");break;case"*":document.querySelector(".mult").classList.remove("operator-selected");break;case"/":document.querySelector(".div").classList.remove("operator-selected")}a.setState({display:"0",hasOperator:!1,operationComplete:!1})},a.dotClick=function(){a.state.display.includes(".")||a.setState({display:a.state.display+".",hasOperator:!1})},a.opClick=function(e){if(a.state.hasOperator)switch(a.state.operator){case"+":document.querySelector(".add").classList.remove("operator-selected");break;case"-":document.querySelector(".sub").classList.remove("operator-selected");break;case"*":document.querySelector(".mult").classList.remove("operator-selected");break;case"/":document.querySelector(".div").classList.remove("operator-selected")}var t=a.state.display;if(a.state.hasOperator&&"0"!==a.state.display)switch(a.state.operator){case"+":t=parseFloat(a.state.firstNum)+parseFloat(a.state.display);break;case"-":t=parseFloat(a.state.firstNum)-parseFloat(a.state.display);break;case"*":t=parseFloat(a.state.firstNum)*parseFloat(a.state.display);break;case"/":t=parseFloat(a.state.firstNum)/parseFloat(a.state.display)}switch(e){case"+":document.querySelector(".add").classList.add("operator-selected");break;case"-":document.querySelector(".sub").classList.add("operator-selected");break;case"*":document.querySelector(".mult").classList.add("operator-selected");break;case"/":document.querySelector(".div").classList.add("operator-selected")}a.setState({firstNum:t,operator:e,display:"0",hasOperator:!0})},a.equal=function(){if(a.state.hasOperator){var e=0;switch(a.state.operator){case"+":e=parseFloat(a.state.firstNum)+parseFloat(a.state.display);break;case"-":e=parseFloat(a.state.firstNum)-parseFloat(a.state.display);break;case"*":e=parseFloat(a.state.firstNum)*parseFloat(a.state.display);break;case"/":e=parseFloat(a.state.firstNum)/parseFloat(a.state.display)}switch(a.setState({display:e,hasOperator:!1,operationComplete:!0}),a.state.operator){case"+":document.querySelector(".add").classList.remove("operator-selected");break;case"-":document.querySelector(".sub").classList.remove("operator-selected");break;case"*":document.querySelector(".mult").classList.remove("operator-selected");break;case"/":document.querySelector(".div").classList.remove("operator-selected")}}},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,{display:this.state.display}),r.a.createElement(y,{numClick:this.numClick,clear:this.clear,dotClick:this.dotClick,opClick:this.opClick,equal:this.equal}))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.62d52723.chunk.js.map