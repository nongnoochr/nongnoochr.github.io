(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{21:function(e,t,n){e.exports={Status:"Status_Status__18r35",StatusText:"Status_StatusText__2isoA",Standby:"Status_Standby__3C7PQ",Initializing:"Status_Initializing__2Qqtx",Running:"Status_Running__1y_nl",ProgressBarContainer:"Status_ProgressBarContainer__3Gux2"}},29:function(e,t,n){e.exports={Container:"DisplayPanel_Container__285zM",DisplayElement:"DisplayPanel_DisplayElement__3afS8",Summary:"DisplayPanel_Summary__2ewc5",Status:"DisplayPanel_Status__2URGt"}},30:function(e,t,n){e.exports={Container:"ControlPanel_Container__qnkq1",DisplayElement:"ControlPanel_DisplayElement__2h3sc",Settings:"ControlPanel_Settings__1ZOo6",ControlButton:"ControlPanel_ControlButton__2Oa9-"}},31:function(e,t,n){e.exports={Label:"Settings_Label__3eKuP",TimeSelectorContainer:"Settings_TimeSelectorContainer__27_OR"}},36:function(e,t,n){e.exports={"loading-animation-container":"Loader_loading-animation-container__2M4Ci",dot:"Loader_dot__2wAQQ",bounce:"Loader_bounce__3a78I"}},48:function(e,t,n){e.exports={AlertContents:"Summary_AlertContents__yj2hY",Summary:"Summary_Summary__3T0TE"}},51:function(e,t,n){e.exports={ControlButton:"ControlButton_ControlButton__376PQ",ButtonIcon:"ControlButton_ButtonIcon__2CN2X"}},52:function(e,t,n){e.exports={Container:"MainContainer_Container__1w31R",Panel:"MainContainer_Panel__nSoDg"}},68:function(e,t,n){e.exports={TimerSelector:"TimerSelector_TimerSelector__1SvwW"}},75:function(e,t,n){e.exports=n(89)},80:function(e,t,n){},89:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(26),l=n.n(i),s=(n(80),n(95)),o=n(94),c=n(43),u=function(e){return r.a.createElement(s.a,{bg:"dark",variant:"dark",expand:"lg"},r.a.createElement(s.a.Brand,{href:"#home"},"RPi machine"),r.a.createElement(s.a.Toggle,{"aria-controls":"basic-navbar-nav"}),r.a.createElement(s.a.Collapse,{id:"basic-navbar-nav"},r.a.createElement(o.a,{className:"mr-auto"},r.a.createElement(o.a.Link,{as:c.b,to:"/"},"Home"),r.a.createElement(o.a.Link,{href:"#link"},"Link"))))},m=n(47),d=n.n(m),p=n(10),E=n(11),b=n(12),h=n(14),g=n(13),f=n(15),v=n(29),_=n.n(v),S=n(24),y=n(48),O=n.n(y),j=n(7),T=n(73),C=n(50),N={hour:0,minute:0,second:0},k=function(e){return w(N,e)},x=function(e){return 3600*e.hour+60*e.minute+e.second},w=function(e,t){var n=x(e)+t/1e3,a=n%60,r=Math.floor(n/60),i=r%60;return{hour:Math.floor(r/60),minute:i,second:a}},D=function(e){var t=k(e),n="";return t.hour>0&&(n=n+t.hour.toFixed()+" hrs "),t.minute>0&&(n=n+t.minute.toFixed()+" mins "),t.second>0&&(n=n+t.second.toFixed()+" secs "),n},P=function(e){var t=e.toFixed();return 1===t.length&&(t="0"+t),t},A="External Controller",L="Settings",B="Duration",I="LED1",G="LED2",R=function(e){function t(){return Object(E.a)(this,t),Object(h.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e,t,n,i;t=this.props.data.duration?D(this.props.data.duration):"N/A",n=this.props.settings.settings.length>0?this.props.settings.settings.join("+"):"None",i=this.props.data.lastActualDuration?D(this.props.data.lastActualDuration):"N/A";var l=(e={},Object(S.a)(e,A,this.props.settings.externalCtrl?"Enabled":"Disabled"),Object(S.a)(e,L,n),Object(S.a)(e,B,t),Object(S.a)(e,"Last RunTime Duration",i),e),s=Object.keys(l).map((function(e){return r.a.createElement(a.Fragment,{key:e},r.a.createElement("div",{className:"col-5"},r.a.createElement("label",null,e)),r.a.createElement("div",{className:"col-7"},l[e]))}));return r.a.createElement("div",{className:O.a.Summary},r.a.createElement(T.a,{variant:"primary",className:O.a.AlertContents},r.a.createElement("div",null,r.a.createElement(C.b,null),r.a.createElement("label",null,"Temperature:")," 20 ",r.a.createElement("span",null,"\u2103")),r.a.createElement("div",null,r.a.createElement(C.a,null),r.a.createElement("label",null,"Humidity:")," 5%")),r.a.createElement("div",{className:"row"},s))}}]),t}(a.Component),U=Object(j.b)((function(e){return{settings:e.settings}}))(R),M=function(e){return{type:"UPDATE_SETTINGS",settings:e}},F=n(21),z=n.n(F),Q=n(36),V=n.n(Q),H=function(e){return r.a.createElement("div",{className:V.a["loading-animation-container"]},r.a.createElement("div",{className:V.a.dot}),r.a.createElement("div",{className:V.a.dot}),r.a.createElement("div",{className:V.a.dot}))},q=function(e){return r.a.createElement("div",null,(t=e.data.current,P(t.hour)+":"+P(t.minute)+":"+P(t.second)));var t},W=n(67),X=n(66),J=function(e){function t(){return Object(E.a)(this,t),Object(h.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e={className:"",content:null};switch(this.props.state){case"standby":e={className:z.a.Standby,content:r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:z.a.StatusText},"Standby"),r.a.createElement("div",null,r.a.createElement(X.a,null)))};break;case"initialize":e={className:z.a.Initializing,content:r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:z.a.StatusText},"Initializing"),r.a.createElement(H,null))};break;case"running":var t,n,i={isrunning:this.props.isrunning,current:Object(p.a)({},this.props.data.current)};if(this.props.data.duration){var l=1e3*x(this.props.data.current);t=Math.ceil(l/this.props.data.duration*100),n="".concat(t,"%")}else t=100,n="In progress...";e={className:z.a.Running,content:r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:z.a.StatusText},"Running"),r.a.createElement(q,{data:i}),r.a.createElement("div",{className:z.a.ProgressBarContainer},r.a.createElement(W.a,{animated:!0,now:t,label:n})))}}return r.a.createElement("div",{className:["box-border",z.a.Status,e.className].join(" ")},e.content)}}]),t}(a.Component),K=Object(j.b)((function(e){return{isrunning:e.timer.isrunning}}),(function(e){return{onToggleStatus:function(t){return e({type:"TOGGLE_STATUS"})}}}))(J),Y=n(17),Z=function(e){function t(e){var n;return Object(E.a)(this,t),(n=Object(h.a)(this,Object(g.a)(t).call(this,e)))._initData=function(){var e=new Date,t=null;n.props.duration&&(t=new Date(e.getTime())).setMilliseconds(n.props.duration),n.setState({start:e,computedEnd:t,current:Object(p.a)({},N)})},n._addMilliSecond=function(e){var t=w(n.state.current,e);n.setState({current:t})},n._startTimer=function(){d.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:n._initData();case 1:if(!n.props.isrunning){e.next=12;break}if(!n.props.duration){e.next=7;break}if(!(1e3*x(n.state.current)>=n.props.duration)){e.next=7;break}return n.props.onToggleStatus(),e.abrupt("break",12);case 7:return e.next=9,d.a.awrap(ee(250));case 9:n._addMilliSecond(250),e.next=1;break;case 12:case"end":return e.stop()}}))},n.state={start:null,computedEnd:null,actualEnd:null,current:Object(p.a)({},N),timerstatus:!1,lastActualDuration:null},n}return Object(f.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this._initData()}},{key:"componentDidUpdate",value:function(){if(this.props.isrunning&&!this.state.timerstatus&&(this._startTimer(),this.setState({timerstatus:!0})),!this.props.isrunning&&this.state.timerstatus){var e=new Date,t=e-this.state.start;this.setState({actualEnd:e,lastActualDuration:t,timerstatus:!1})}}},{key:"render",value:function(){var e=this.props.duration,t=this.props.isrunning?"running":"standby";return r.a.createElement("div",{className:_.a.Container},r.a.createElement("div",{className:[_.a.DisplayElement,_.a.Summary].join(" ")},r.a.createElement(Y.a,null,r.a.createElement(Y.a.Body,null,r.a.createElement(U,{data:{duration:e,lastActualDuration:this.state.lastActualDuration}})))),r.a.createElement("div",{className:[_.a.DisplayElement,_.a.Status].join(" ")},r.a.createElement(Y.a,{className:"text-center",style:{height:"100%"}},r.a.createElement(Y.a.Header,null,r.a.createElement("strong",null,"STATUS")),r.a.createElement(Y.a.Body,null,r.a.createElement(K,{state:t,data:{current:this.state.current,duration:e}})))))}}]),t}(a.Component),$=Object(j.b)((function(e){return{isrunning:e.timer.isrunning,duration:e.settings.duration}}),(function(e){return{onToggleStatus:function(){return e({type:"TOGGLE_STATUS"})}}}))(Z),ee=function(e){return new Promise((function(t){return setTimeout(t,e)}))},te=n(30),ne=n.n(te),ae=n(31),re=n.n(ae),ie=n(93),le=n(91),se=n(69),oe=n(92),ce=n(96),ue=n(70),me=n(71),de=n(68),pe=n.n(de),Ee=function(e){function t(){var e,n;Object(E.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).updatePropValue=function(e,t){var a={hour:n.props.hour,minute:n.props.minute,second:n.props.second};a[t]=+e.target.value;var r=1e3*x(a);n.props.onUpdateSettings({duration:r})},n}return Object(f.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:pe.a.TimerSelector},r.a.createElement("div",null,r.a.createElement("input",{type:"number",name:"hour",min:"0",max:"999",value:this.props.hour,disabled:this.props.disabled,onChange:function(t){return e.updatePropValue(t,"hour")}})," Hours"),r.a.createElement("div",null,r.a.createElement("input",{type:"number",name:"minute",min:"0",max:"60",value:this.props.minute,disabled:this.props.disabled,onChange:function(t){return e.updatePropValue(t,"minute")}})," Minutes"),r.a.createElement("div",null,r.a.createElement("input",{type:"number",name:"second",min:"0",max:"60",value:this.props.second,disabled:this.props.disabled,onChange:function(t){return e.updatePropValue(t,"second")}})," Seconds"))}}]),t}(a.Component),be=Object(j.b)((function(e){var t=e.settings.duration,n=k(t);return Object(p.a)({duration:t},n)}),(function(e){return{onUpdateSettings:function(t){return e(M(t))}}}))(Ee),he=n(34),ge=function(e){function t(){var e,n;Object(E.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(h.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).state={showTimer:!1},n}return Object(f.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:re.a.Settings},r.a.createElement(ie.a,null,r.a.createElement("fieldset",null,r.a.createElement("legend",null,r.a.createElement(he.b,null),"Configurations"),r.a.createElement(ie.a.Group,{as:le.a,controlId:"externalCtrlForm"},r.a.createElement(ie.a.Label,{className:re.a.Label,column:!0,sm:6},A),r.a.createElement(se.a,{sm:6},r.a.createElement(ie.a.Check,{type:"switch",id:"switch-ext-ctrl",label:"",checked:this.props.settings.externalCtrl,disabled:this.props.isrunning,onChange:function(t){var n=t.target.checked;e.props.onUpdateSettings({externalCtrl:n})}}))),r.a.createElement(ie.a.Group,{as:le.a,controlId:"settingsForm"},r.a.createElement(ie.a.Label,{className:re.a.Label,column:!0,sm:6},L),r.a.createElement(se.a,{sm:6},r.a.createElement(oe.a,null,r.a.createElement(ce.a,{type:"checkbox",value:this.props.settings.settings,onChange:function(t){e.props.onUpdateSettings({settings:t})}},r.a.createElement(ue.a,{value:I,variant:"outline-primary",disabled:this.props.isrunning},I),r.a.createElement(ue.a,{value:G,variant:"outline-primary",disabled:this.props.isrunning},G))))),r.a.createElement(ie.a.Group,{as:le.a,controlId:"durationForm"},r.a.createElement(ie.a.Label,{className:re.a.Label,column:!0,sm:6},B),r.a.createElement(se.a,{sm:6},r.a.createElement(ie.a.Check,{type:"switch",id:"switch-duration",label:"",checked:this.state.showTimer,disabled:this.props.isrunning,onChange:function(t){e.setState({showTimer:t.target.checked})}})),r.a.createElement("div",{style:{display:this.state.showTimer?null:"none"},className:re.a.TimeSelectorContainer},r.a.createElement(be,{disabled:this.props.isrunning}))),r.a.createElement(me.a,{variant:"outline-info",onClick:function(){e.props.onResetSettings(),e.setState({showTimer:!1})}},"RESET"))))}}]),t}(a.Component),fe=Object(j.b)((function(e){return{isrunning:e.timer.isrunning,settings:e.settings}}),(function(e){return{onUpdateSettings:function(t){return e(M(t))},onResetSettings:function(){return e({type:"RESET_SETTINGS"})}}}))(ge),ve=n(51),_e=n.n(ve),Se=function(e){function t(){return Object(E.a)(this,t),Object(h.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this,t=null;return t=this.props.isrunning?{className:"btn btn-lg btn-block btn-danger",label:"Press to STOP",icon:r.a.createElement(he.c,null)}:{className:"btn btn-lg btn-block btn-primary",label:"Press to START",icon:r.a.createElement(he.a,null)},r.a.createElement("div",{className:_e.a.ControlButton},r.a.createElement("button",{type:"button",className:t.className,style:{height:"100%"},onClick:function(){return e.props.onToggleStatus()}},r.a.createElement("div",null,r.a.createElement("div",{className:_e.a.ButtonIcon},t.icon),r.a.createElement("div",null,t.label))))}}]),t}(a.Component),ye=Object(j.b)((function(e){return{isrunning:e.timer.isrunning}}),(function(e){return{onToggleStatus:function(){return e({type:"TOGGLE_STATUS"})}}}))(Se),Oe=function(e){function t(){return Object(E.a)(this,t),Object(h.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){return r.a.createElement(Y.a,null,r.a.createElement(Y.a.Body,null,r.a.createElement("div",{className:ne.a.Container},r.a.createElement("div",{style:{opacity:this.props.isrunning?.4:null},className:[ne.a.Settings,ne.a.DisplayElement].join(" ")},r.a.createElement(Y.a,null,r.a.createElement(Y.a.Body,null,r.a.createElement(fe,null)))),r.a.createElement("div",{className:[ne.a.ControlButton,ne.a.DisplayElement].join(" ")},r.a.createElement(ye,null)))))}}]),t}(a.Component),je=Object(j.b)((function(e){return{isrunning:e.timer.isrunning}}))(Oe),Te=n(52),Ce=n.n(Te),Ne=function(e){var t=[r.a.createElement($,null),r.a.createElement(je,null)].map((function(e,t){return r.a.createElement("div",{key:t,className:Ce.a.Panel},e)}));return r.a.createElement("div",{className:["container-fluid",Ce.a.Container].join(" ")},t)},ke=function(e){return r.a.createElement("div",null,r.a.createElement(u,null),r.a.createElement(Ne,null))};n(88);var xe=function(){return r.a.createElement("div",null,r.a.createElement(ke,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var we=n(25),De=n(72),Pe=function(e,t){return Object(p.a)({},e,{},t)},Ae=Object(p.a)({},{isrunning:!1,duration:0}),Le=function(e,t){var n=!e.isrunning;return Pe(e,{isrunning:n})},Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_STATUS":return Le(e);default:return e}},Ie={externalCtrl:!1,settings:[I,G],duration:0},Ge=function(e,t){var n=Object(p.a)({},t.settings);return Pe(e,Object(p.a)({},n))},Re=function(e,t){return Pe(e,Object(p.a)({},Ie))},Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_SETTINGS":return Ge(e,t);case"RESET_SETTINGS":return Re(e);default:return e}},Me=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||we.d,Fe=Object(we.c)({timer:Be,settings:Ue}),ze=Object(we.e)(Fe,Me(Object(we.a)(De.a))),Qe=r.a.createElement(j.a,{store:ze},r.a.createElement(c.a,null,r.a.createElement(xe,null)));l.a.render(Qe,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[75,1,2]]]);
//# sourceMappingURL=main.893eebbc.chunk.js.map