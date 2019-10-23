(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(25),s=a.n(o),i=(a(87),a(8)),l=a(9),c=a(11),u=a(10),m=a(12),d=a(56),p=a(41),h=a(74),f=a(64),g=a(75),v=a(6),y=a.n(v),b=a(14),k=a(37),E=a.n(k),w={getToken:function(){return localStorage.getItem("token")},setToken:function(e){localStorage.setItem("token","string"===typeof e?e:JSON.stringify(e))},loggedIn:function(){var e=localStorage.getItem("token");return e&&e.trim()},logout:function(){localStorage.removeItem("token")}},O="https://cd-app-usask.herokuapp.com/v1";function x(){return{headers:{Authorization:"Bearer ".concat(w.getToken())}}}var j={register:function(){var e=Object(b.a)(y.a.mark(function e(t,a,n){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.post("".concat(O,"/user/register"),{username:t,password:a,role:n});case 2:case"end":return e.stop()}},e)}));return function(t,a,n){return e.apply(this,arguments)}}(),login:function(){var e=Object(b.a)(y.a.mark(function e(t,a){var n,r;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.post("".concat(O,"/user/login"),{username:t,password:a});case 2:if(n=e.sent,r=n.data.token){e.next=6;break}throw new Error("Invalid login response from server");case 6:return e.abrupt("return",r);case 7:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),getTasks:function(){var e=Object(b.a)(y.a.mark(function e(){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("".concat(O,"/fs"),x());case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),updateTask:function(){var e=Object(b.a)(y.a.mark(function e(t,a){var n;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.put("".concat(O,"/fs/").concat(t),a,x());case 2:return n=e.sent,e.abrupt("return",n.data.globalUniqueID);case 4:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}(),includeTask:function(){var e=Object(b.a)(y.a.mark(function e(t){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.post("".concat(O,"/fs"),t,x());case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},C=a(140),T=a(149),S=a(138),F=a(147),I=a(146),U=a(20),B=function(){return r.a.createElement("div",null,r.a.createElement(F.a,{bg:"light",variant:"dark"},r.a.createElement(I.a,{className:"mr-auto"},r.a.createElement(U.LinkContainer,{to:"/"},r.a.createElement(S.a,{variant:"link"},"Home")),r.a.createElement(U.LinkContainer,{to:"/tasks/include"},r.a.createElement(S.a,{variant:"link"},"Include")),r.a.createElement(U.LinkContainer,{to:"/logout"},r.a.createElement(S.a,{variant:"link"},"Logout")))),r.a.createElement("br",null))},L=a(145),D=a(139),N=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=void 0!==this.props.loading&&null!==this.props.loading,t="Loading";return"string"===typeof this.props.loading&&this.props.loading.trim().length>0&&(t=this.props.loading),r.a.createElement("div",null,e?r.a.createElement(L.a,{show:e,centered:!0},r.a.createElement(L.a.Body,null,r.a.createElement("div",{className:"text-center"},r.a.createElement(D.a,{animation:"border",variant:"primary"}),"\xa0"," ",t))):r.a.createElement("div",null,this.props.children))}}]),t}(n.Component),W=a(55),A=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={tasks:[]},e.activeTasks=function(){return e.state.tasks.filter(function(e){return!(e.data.startTime&&e.data.endTime)})},e.completedTasks=function(){return e.state.tasks.filter(function(e){return e.data.startTime&&e.data.endTime})},e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(y.a.mark(function e(){var t;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.setState({loading:!0}),e.next=4,j.getTasks();case 4:t=e.sent,this.setState({tasks:t}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0);case 11:return e.prev=11,this.componentUnmounted||this.setState({loading:void 0}),e.finish(11);case 14:case"end":return e.stop()}},e,this,[[0,8,11,14]])}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.componentUnmounted=!0}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(B,null),r.a.createElement(C.a,null,r.a.createElement(N,{loading:this.state.loading},r.a.createElement("h4",{style:{color:"#2699FB"}},"Active tasks"),this.activeTasks().map(function(e){return r.a.createElement("div",{key:e.guid},r.a.createElement(T.a,{style:{backgroundColor:"#F1F8FF",color:"#2699FB"}},r.a.createElement(T.a.Body,null,r.a.createElement("h5",null," ",r.a.createElement(W.a,null)," ",e.data.name," "),r.a.createElement(U.LinkContainer,{to:"/tasks/".concat(e.guid,"/details"),replace:!0},r.a.createElement(S.a,{variant:"primary"},"Start Task")))),r.a.createElement("br",null))}),r.a.createElement("h4",{style:{color:"#2699FB"}},"Completed Tasks"),this.completedTasks().map(function(e){return r.a.createElement("div",{key:e.guid},r.a.createElement(T.a,{style:{backgroundColor:"#F1F8FF",color:"#2699FB"}},r.a.createElement(T.a.Body,null,r.a.createElement(U.LinkContainer,{style:{backgroundColor:"#F1F8FF",color:"#2699FB"},to:"/tasks/".concat(e.guid,"/details"),replace:!0},r.a.createElement(S.a,{size:"lg",variant:"light"},r.a.createElement(W.a,null)," ",e.data.name)))),r.a.createElement("br",null))}))))}}]),t}(n.Component),M=a(81),R=a(35),H=a(141),Y=a(142),P=a(148),z=function(e){return e.split("").map(function(e,t){return 0===t?e.toUpperCase():e}).join("")},q=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(H.a,null,r.a.createElement(Y.a,null,r.a.createElement(P.a,{placeholder:this.props.placeholder?z(this.props.placeholder):"",type:this.props.type?this.props.type:"text",name:this.props.name,onChange:this.props.onChange}))),r.a.createElement("br",null))}}]),t}(n.Component);function G(){var e=r.a.useState(!1),t=Object(M.a)(e,2),a=t[0],n=t[1],o=function(){return n(!1)};return r.a.createElement("div",null,r.a.createElement(S.a,{variant:"primary",onClick:function(){return n(!0)}},"Include"),r.a.createElement(L.a,{show:a,onHide:o},r.a.createElement(L.a.Body,null," Do not leave name empty "),r.a.createElement(L.a.Footer,null,r.a.createElement(S.a,{variant:"secondary",onClick:o},"Close"))))}var J=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={name:""},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(R.a)({},n,r))},a.validInput=function(){return a.state.name.trim().length>0},a.submit=function(){var e=Object(b.a)(y.a.mark(function e(t){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a.setState({loading:"Including task"}),e.next=4,j.includeTask(a.state);case 4:a.props.history.push("/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),alert(e.t0);case 10:return e.prev=10,a.componentUnmounted||a.setState({loading:void 0}),e.finish(10);case 13:case"end":return e.stop()}},e,null,[[0,7,10,13]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillUnmount",value:function(){this.componentUnmounted=!0}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(B,null),r.a.createElement(C.a,null,r.a.createElement("h1",{className:"text-center"},"Include task"),r.a.createElement(N,{loading:this.state.loading},r.a.createElement(q,{name:"name",onChange:this.handleChange}),r.a.createElement("div",{className:"text-center"},this.validInput()?r.a.createElement(S.a,{onClick:this.submit}," Include "):r.a.createElement(G,null)))))}}]),t}(n.Component),K=a(143),$=a(38),Q=a.n($),V=a(79),X=a.n(V),Z=(a(134),"MMMM Do YYYY, h:mm:ss a"),_=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(c.a)(this,Object(u.a)(t).call(this))).state={guid:"",task:{}},e.changeTask=function(){var t=Object(b.a)(y.a.mark(function t(a){var n,r,o;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:t.prev=0,e.setState({loading:"Updating ..."}),n=e.state.task,t.t0=a,t.next="START"===t.t0?6:"END"===t.t0?10:14;break;case 6:if(!n.startTime){t.next=8;break}return t.abrupt("return",console.warn("Already started"));case 8:return n.startTime=Q()().format(Z),t.abrupt("break",15);case 10:if(!n.endTime){t.next=12;break}return t.abrupt("return",console.warn("Already end"));case 12:return n.endTime=Q()().format(Z),t.abrupt("break",15);case 14:return t.abrupt("return",console.warn("No ".concat(a)));case 15:return t.next=17,j.updateTask(e.state.guid,n);case 17:return r=t.sent,t.next=20,j.getTasks();case 20:t.t1=function(e){return e.guid===r},o=t.sent.filter(t.t1)[0],e.setState({guid:o.guid,task:o.data}),e.props.history.replace("/tasks/".concat(r,"/details")),t.next=29;break;case 26:t.prev=26,t.t2=t.catch(0),alert(t.t2);case 29:return t.prev=29,e.componentUnmounted||e.setState({loading:void 0}),t.finish(29);case 32:case"end":return t.stop()}},t,null,[[0,26,29,32]])}));return function(e){return t.apply(this,arguments)}}(),e.taskStatus=function(){return e.state.task.startTime?e.state.task.startTime&&!e.state.task.endTime?"You're currently working on this task":e.state.task.startTime&&e.state.task.endTime?"You've completed this task":"Error":"You haven't started this task"},e.taskDuration=function(){var t=Q.a.duration(Q()(e.state.task.endTime,Z).diff(Q()(e.state.task.startTime,Z)));return Math.round(100*t.asMinutes())/100},e.handleSubmitStress=function(){var t=Object(b.a)(y.a.mark(function t(a){var n,r,o;return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e.setState({loading:"Updating ..."}),(n=e.state.task).stress=a,t.next=6,j.updateTask(e.state.guid,n);case 6:return r=t.sent,t.next=9,j.getTasks();case 9:t.t0=function(e){return e.guid===r},o=t.sent.filter(t.t0)[0],e.setState({guid:o.guid,task:o.data}),e.props.history.replace("/tasks/".concat(r,"/details")),t.next=18;break;case 15:t.prev=15,t.t1=t.catch(0),alert(t.t1);case 18:return t.prev=18,e.componentUnmounted||e.setState({loading:void 0}),t.finish(18);case 21:case"end":return t.stop()}},t,null,[[0,15,18,21]])}));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=Object(b.a)(y.a.mark(function e(){var t,a,n=this;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,this.setState({loading:!0}),e.next=4,j.getTasks();case 4:t=e.sent,a=t.filter(function(e){return e.guid===n.props.match.params.id})[0],this.setState({guid:a.guid,task:a.data}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert(e.t0);case 12:return e.prev=12,this.componentUnmounted||this.setState({loading:void 0}),e.finish(12);case 15:case"end":return e.stop()}},e,this,[[0,9,12,15]])}));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.componentUnmounted=!0}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(B,null),r.a.createElement(N,{loading:this.state.loading},r.a.createElement(C.a,{className:"text-center"},this.state.task.startTime&&this.state.task.endTime?r.a.createElement("div",null,r.a.createElement(T.a,{style:{backgroundColor:"#2799F9",color:"white"}},r.a.createElement(T.a.Body,null,r.a.createElement("h2",null,"Task ",this.state.task.name," completed"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h5",null,"Time spent"),r.a.createElement("h6",null,this.taskDuration()," minutes"))),r.a.createElement("br",null),r.a.createElement("br",null),"number"===typeof this.state.task.stress?r.a.createElement("h6",{style:{color:"#2699FB"}},"Submitted stress level: ",this.state.task.stress):r.a.createElement(ee,{submitStress:this.handleSubmitStress})):r.a.createElement("div",null,r.a.createElement(T.a,{style:{backgroundColor:"#2799F9",color:"white"}},r.a.createElement(T.a.Body,null,r.a.createElement("h2",null,this.state.task.name," aaa"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h6",null,this.taskStatus()),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h5",null,"Task Details"),r.a.createElement("h6",null,"Start Date: ",this.state.task.startTime," | End Date: ",this.state.task.endTime))),r.a.createElement("div",null,r.a.createElement("style",{type:"text/css"},"\n\t\t\t\t\t\t\t\t\t    .btn-flat {\n\t\t\t\t\t\t\t\t\t      background-color: #2799F9;\n\t\t\t\t\t\t\t\t\t      color: white;\n\t\t\t\t\t\t\t\t\t    }\n\n\t\t\t\t\t\t\t\t\t    .btn-xxl {\n\t\t\t\t\t\t\t\t\t      margin: 5rem 1rem;\n\t\t\t\t\t\t\t\t\t      font-size: 3rem;\n\t\t\t\t\t\t\t\t\t      height: 20rem;\n\t\t\t\t\t\t\t\t\t      width: 20rem;\n\t\t\t\t\t\t\t\t\t      border-radius: 40rem;\n\t\t\t\t\t\t\t\t\t  \t}\n\t\t\t\t\t\t\t\t    "),this.state.task.startTime?r.a.createElement("div",null):r.a.createElement(S.a,{variant:"flat",size:"xxl",onClick:function(){return e.changeTask("START")}},"Start"),!this.state.task.endTime&&this.state.task.startTime?r.a.createElement(S.a,{variant:"flat",size:"xxl",onClick:function(){return e.changeTask("END")}},"Stop"):r.a.createElement("div",null))))))}}]),t}(n.Component),ee=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={value:5},a.onEnd=function(){return function(e,t,n,r,o){a.setState({value:o/10})}},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h6",{style:{color:"#2699FB"}},"Drag the scroll bar up to indicate how stressful you felt in completing this activity"),r.a.createElement("div",{style:{margin:"2rem",display:"flex",justifyContent:"center"}},r.a.createElement(X.a,{className:"text-center",style:{height:"35rem"},start:this.state.value,orientation:"vertical",direction:"rtl",range:{min:0,max:10},step:.1,pips:{mode:"values",values:[0,1,2,3,4,5,6,7,8,9,10],density:1},onEnd:this.onEnd()})),r.a.createElement(K.a,{bordered:!0,style:{color:"#2699FB"}},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Score"),r.a.createElement("th",null,"Meaning"))),r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"1 - 4 = low stress"),r.a.createElement("td",null,"You are likely not psychologically distressed")),r.a.createElement("tr",null,r.a.createElement("td",null,"4.1 - 7 = moderate stress"),r.a.createElement("td",null,"You are likely mildly psychologically distressed")),r.a.createElement("tr",null,r.a.createElement("td",null,"7.1 - 10 = high stress"),r.a.createElement("td",null,"You are likely to be severely psychologically distressed")))),r.a.createElement(S.a,{style:{backgroundColor:"#2799F9"},onClick:function(){return e.props.submitStress(e.state.value)}},"Submit"))}}]),t}(n.Component),te=_,ae=function(){return r.a.createElement(F.a,{bg:"light",variant:"dark"},r.a.createElement(I.a,{className:"mr-auto"},r.a.createElement(U.LinkContainer,{to:"/login"},r.a.createElement(S.a,{variant:"link"},"Login")),r.a.createElement(U.LinkContainer,{to:"/register"},r.a.createElement(S.a,{variant:"link"},"Register"))))},ne=function(e){function t(e){var a;return Object(i.a)(this,t),a=Object(c.a)(this,Object(u.a)(t).call(this,e)),w.loggedIn()&&a.props.history.replace("/"),a.state={email:"",password:"",role:"student"},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(R.a)({},n,r))},a.handleRegister=function(){var e=Object(b.a)(y.a.mark(function e(t){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a.setState({loading:"Registering"}),e.next=4,j.register(a.state.email,a.state.password,a.state.role);case 4:return e.t0=w,e.next=7,j.login(a.state.email,a.state.password);case 7:e.t1=e.sent,e.t0.setToken.call(e.t0,e.t1),a.props.history.replace("/"),e.next=15;break;case 12:e.prev=12,e.t2=e.catch(0),alert(e.t2);case 15:return e.prev=15,a.componentUnmounted||a.setState({loading:void 0}),e.finish(15);case 18:case"end":return e.stop()}},e,null,[[0,12,15,18]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillUnmount",value:function(){this.componentUnmounted=!0}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ae,null),r.a.createElement(C.a,null,r.a.createElement("h1",null,"Register"),r.a.createElement(N,{loading:this.state.loading},r.a.createElement(q,{name:"email",onChange:this.handleChange}),r.a.createElement(q,{name:"password",type:"password",onChange:this.handleChange}),r.a.createElement(S.a,{onClick:this.handleRegister},"Register"))))}}]),t}(r.a.Component),re={isConsented:function(){return"1"===localStorage.getItem("consent")},doConsent:function(){localStorage.setItem("consent","1")},undoConsent:function(){localStorage.removeItem("consent")}},oe=a(80),se=a.n(oe),ie=a(144),le=function(e){function t(e){var a;return Object(i.a)(this,t),a=Object(c.a)(this,Object(u.a)(t).call(this,e)),w.loggedIn()&&a.props.history.replace("/"),a.state={email:"test1@test.com",password:"123"},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(R.a)({},n,r))},a.handleLogin=function(){var e=Object(b.a)(y.a.mark(function e(t){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a.setState({loading:"Logging in"}),e.t0=w,e.next=5,j.login(a.state.email,a.state.password);case 5:e.t1=e.sent,e.t0.setToken.call(e.t0,e.t1),a.props.history.replace("/"),e.next=13;break;case 10:e.prev=10,e.t2=e.catch(0),alert("Invalid email or password");case 13:return e.prev=13,a.componentUnmounted||a.setState({loading:void 0}),e.finish(13);case 16:case"end":return e.stop()}},e,null,[[0,10,13,16]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentWillUnmount",value:function(){this.componentUnmounted=!0}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ae,null),r.a.createElement(C.a,{className:"text-center"},r.a.createElement(ie.a,{src:se.a,style:{margin:"5rem",width:"15rem"},fluid:!0}),re.isConsented()?r.a.createElement(N,{loading:this.state.loading},r.a.createElement(q,{name:"email",placeholder:"email",onChange:this.handleChange}),r.a.createElement(q,{name:"password",placeholder:"password",type:"password",onChange:this.handleChange}),r.a.createElement(S.a,{onClick:this.handleLogin},"Log in")):r.a.createElement("div",null,r.a.createElement("p",{style:{color:"blue"}}," To start using this app, you must first give your consent to participate in the study: Impact of curriculum overload on students' mental health using the Curriculum Densitometer "),r.a.createElement(U.LinkContainer,{to:"/consent",replace:!0},r.a.createElement(S.a,{variant:"primary"},"Give consent")))))}}]),t}(r.a.Component),ce=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).handleConsent=function(e){re.doConsent(),a.props.history.replace("/login")},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ae,null),r.a.createElement(C.a,{className:"text-center"},r.a.createElement("p",{style:{color:"blue"}},"Remember outweigh do he desirous no cheerful. Do of doors water ye guest. We if prosperous comparison middletons at. Park we in lose like at no. An so to preferred convinced distrusts he determine. In musical me my placing clothes comfort pleased hearing. Any residence you satisfied and rapturous certainty two. Procured outweigh as outlived so so. On in bringing graceful proposal blessing of marriage outlived. Son rent face our loud near. Lose eyes get fat shew. Winter can indeed letter oppose way change tended now. So is improve my charmed picture exposed adapted demands. Received had end produced prepared diverted strictly off man branched. Known ye money so large decay voice there to. Preserved be mr cordially incommode as an. He doors quick child an point at. Had share vexed front least style off why him. An an valley indeed so no wonder future nature vanity. Debating all she mistaken indulged believed provided declared. He many kept on draw lain song as same. Whether at dearest certain spirits is entered in to. Rich fine bred real use too many good. She compliment unaffected expression favourable any. Unknown chiefly showing to conduct no. Hung as love evil able to post at as. Old education him departure any arranging one prevailed. Their end whole might began her. Behaved the comfort another fifteen eat. Partiality had his themselves ask pianoforte increasing discovered. So mr delay at since place whole above miles. He to observe conduct at detract because. Way ham unwilling not breakfast furniture explained perpetual. Or mr surrounded conviction so astonished literature. Songs to an blush woman be sorry young. We certain as removal attempt. Game of as rest time eyes with of this it. Add was music merry any truth since going. Happiness she ham but instantly put departure propriety. She amiable all without say spirits shy clothes morning. Frankness in extensive to belonging improving so certainty. Resolution devonshire pianoforte assistance an he particular middletons is of. Explain ten man uncivil engaged conduct. Am likewise betrayed as declared absolute do. Taste oh spoke about no solid of hills up shade. Occasion so bachelor humoured striking by attended doubtful be it. Oh to talking improve produce in limited offices fifteen an. Wicket branch to answer do we. Place are decay men hours tiled. If or of ye throwing friendly required. Marianne interest in exertion as. Offering my branched confined oh dashwood. He difficult contented we determine ourselves me am earnestly. Hour no find it park. Eat welcomed any husbands moderate. Led was misery played waited almost cousin living. Of intention contained is by middleton am. Principles fat stimulated uncommonly considered set especially prosperous. Sons at park mr meet as fact like. Wise busy past both park when an ye no. Nay likely her length sooner thrown sex lively income. The expense windows adapted sir. Wrong widen drawn ample eat off doors money. Offending belonging promotion provision an be oh consulted ourselves it. Blessing welcomed ladyship she met humoured sir breeding her. Six curiosity day assurance bed necessary. Now for manners use has company believe parlors. Least nor party who wrote while did. Excuse formed as is agreed admire so on result parish. Put use set uncommonly announcing and travelling. Allowance sweetness direction to as necessary. Principle oh explained excellent do my suspected conveying in. Excellent you did therefore perfectly supposing described. Of resolve to gravity thought my prepare chamber so. Unsatiable entreaties collecting may sympathize nay interested instrument. If continue building numerous of at relation in margaret. Lasted engage roused mother an am at. Other early while if by do to. Missed living excuse as be. Cause heard fat above first shall for. My smiling to he removal weather on anxious."),r.a.createElement("br",null),r.a.createElement(S.a,{variant:"primary",onClick:this.handleConsent},"Give consent")))}}]),t}(r.a.Component);function ue(e){var t=e.component,a=Object(d.a)(e,["component"]);return r.a.createElement(p.a,Object.assign({},a,{render:function(e){return w.loggedIn()?r.a.createElement(t,e):r.a.createElement(h.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}function me(e){e.component;var t=Object(d.a)(e,["component"]);return r.a.createElement(p.a,Object.assign({},t,{render:function(e){return w.logout(),r.a.createElement(h.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}var de=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(f.a,null,r.a.createElement(g.a,null,r.a.createElement(p.a,{exact:!0,path:"/login",component:le}),r.a.createElement(p.a,{exact:!0,path:"/register",component:ne}),r.a.createElement(p.a,{exact:!0,path:"/consent",component:ce}),r.a.createElement(me,{exact:!0,path:"/logout"}),r.a.createElement(ue,{exact:!0,path:"/",component:A}),r.a.createElement(ue,{exact:!0,path:"/tasks/include",component:J}),r.a.createElement(ue,{exact:!0,path:"/tasks/:id/details",component:te})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(de,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},80:function(e,t,a){e.exports=a.p+"static/media/logo.329790b8.png"},82:function(e,t,a){e.exports=a(135)},87:function(e,t,a){}},[[82,1,2]]]);
//# sourceMappingURL=main.e4bf345c.chunk.js.map