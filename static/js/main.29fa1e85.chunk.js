(this["webpackJsonpburgur-app"]=this["webpackJsonpburgur-app"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,n){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2US69",BreadTop:"BurgerIngredient_BreadTop__3Y4-R",Seeds1:"BurgerIngredient_Seeds1__J6vUJ",Seeds2:"BurgerIngredient_Seeds2__2Ylex",Meat:"BurgerIngredient_Meat__3flwI",Cheese:"BurgerIngredient_Cheese__3rOTJ",Salad:"BurgerIngredient_Salad__KLnhy",Bacon:"BurgerIngredient_Bacon__1KK6n"}},,,,function(e,t,n){e.exports={SideDrawer:"SideDrawer_SideDrawer__3kXLK",Open:"SideDrawer_Open__1tCv1",Close:"SideDrawer_Close__9j7x-",Logo:"SideDrawer_Logo__3voUv"}},,function(e,t,n){e.exports={BuildControl:"BuildControl_BuildControl__O8649",Label:"BuildControl_Label__TQkTk",Less:"BuildControl_Less__3Ttg8",More:"BuildControl_More__1MY7B"}},function(e,t,n){e.exports={Input:"Input_Input__3r5Ke",Label:"Input_Label__1qyHr",InputElement:"Input_InputElement__2m88K",Invalid:"Input_Invalid__16Mis"}},,,,function(e,t,n){e.exports={Toolbar:"Toolbar_Toolbar__ApScI",Logo:"Toolbar_Logo__3Lk47",DesktopOnly:"Toolbar_DesktopOnly__LuPaL"}},,,function(e,t,n){e.exports={NavigationItem:"NavigationItem_NavigationItem__2SpXc",active:"NavigationItem_active__2v2td"}},,,function(e,t,n){e.exports={BuildControls:"BuildControls_BuildControls__1YmbS",OrderButton:"BuildControls_OrderButton___M-Du",enable:"BuildControls_enable__9xLsD"}},function(e,t,n){e.exports={Button:"Button_Button__3gFiX",Success:"Button_Success__2Rka1",Danger:"Button_Danger__2ogZq"}},,,,,,,,,,,,,function(e,t,n){e.exports={Content:"Layout_Content__2WLOk"}},function(e,t,n){e.exports=n.p+"static/media/burger-logo.b8503d26.png"},function(e,t,n){e.exports={Logo:"Logo_Logo__1N0xH"}},function(e,t,n){e.exports={NavigationItems:"NavigationItems_NavigationItems__1fnFX"}},,function(e,t,n){e.exports={DrawerToggle:"DrawerToggle_DrawerToggle__m405X"}},function(e,t,n){e.exports={Backdrop:"Backdrop_Backdrop__3j6VK"}},function(e,t,n){e.exports={Burger:"Burger_Burger__10T8F"}},function(e,t,n){e.exports={Modal:"Modal_Modal__1-5dN"}},function(e,t,n){e.exports={Loader:"Spinner_Loader__1twK-",load2:"Spinner_load2__2gkgc"}},function(e,t,n){e.exports={CheckoutSummary:"CheckoutSummary_CheckoutSummary__3PsXi"}},function(e,t,n){e.exports={ContactData:"ContactData_ContactData__20AK_"}},function(e,t,n){e.exports={Order:"Order_Order__3kYZJ"}},function(e,t,n){e.exports={Auth:"Auth_Auth__1Zul_"}},,function(e,t,n){e.exports=n(90)},,,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(24),i=n.n(o),c=n(17),l=n(7),u=n(19),s=n(46),d=(n(71),n(2)),p=n(3),h=n(5),m=n(4),g=n(6),f=n(18),b=n(47),v=n.n(b),E=n(27),O=n.n(E),y=n(48),_=n.n(y),j=n(49),C=n.n(j),S=function(e){return a.a.createElement("div",{className:C.a.Logo},a.a.createElement("img",{src:_.a,alt:"MyBurger"}))},k=n(50),I=n.n(k),w=n(30),T=n.n(w),D=function(e){return a.a.createElement("li",{className:T.a.NavigationItem},a.a.createElement(c.b,{to:e.link,exact:e.exact,activeClassName:T.a.active},e.children))},N=function(e){return a.a.createElement("ul",{className:I.a.NavigationItems},a.a.createElement(D,{link:"/",exact:!0},"Burger Builder"),e.isAuthenticated?a.a.createElement(D,{link:"/orders"},"Orders"):null,e.isAuthenticated?a.a.createElement(D,{link:"/logout"},"Logout"):a.a.createElement(D,{link:"/auth"},"Authenticate"))},A=n(52),P=n.n(A),B=function(e){return a.a.createElement("div",{className:P.a.DrawerToggle,onClick:e.clicked},a.a.createElement("div",null),a.a.createElement("div",null),a.a.createElement("div",null))},R=function(e){return a.a.createElement("header",{className:O.a.Toolbar},a.a.createElement(B,{clicked:e.drawerToggleClicked}),a.a.createElement("div",{className:O.a.Logo},a.a.createElement(S,null)),a.a.createElement("nav",{className:O.a.DesktopOnly},a.a.createElement(N,{isAuthenticated:e.isAuth})))},L=n(53),H=n.n(L),x=function(e){return e.show?a.a.createElement("div",{className:H.a.Backdrop,onClick:e.clicked}):null},U=n(20),F=n.n(U),M=function(e){var t=[F.a.SideDrawer,F.a.Close];return e.open&&(t=[F.a.SideDrawer,F.a.Open]),a.a.createElement(r.Fragment,null,a.a.createElement(x,{show:e.open,clicked:e.closed}),a.a.createElement("div",{className:t.join(" ")},a.a.createElement("div",{className:F.a.Logo},a.a.createElement(S,null)),a.a.createElement("nav",null,a.a.createElement(N,{isAuthenticated:e.isAuth}))))},G=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={showSideDrawer:!1},n.sideDrawerClosedHander=function(){n.setState({showSideDrawer:!1})},n.sideDrawerToggleHandler=function(){n.setState((function(e){return{showSideDrawer:!e.showSideDrawer}}))},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return a.a.createElement(r.Fragment,null,a.a.createElement(R,{isAuth:this.props.isAuthenticated,drawerToggleClicked:this.sideDrawerToggleHandler}),a.a.createElement(M,{isAuth:this.props.isAuthenticated,open:this.state.showSideDrawer,closed:this.sideDrawerClosedHander}),a.a.createElement("main",{className:v.a.Content},this.props.children))}}]),t}(r.Component),V=Object(l.b)((function(e){return{isAuthenticated:null!==e.auth.token}}))(G),q=n(8),z=n(61),K=n(54),Y=n.n(K),J=n(16),W=n.n(J),X=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=a.a.createElement("div",{className:W.a.BreadBottom});break;case"bread-top":e=a.a.createElement("div",{className:W.a.BreadTop},a.a.createElement("div",{className:W.a.Seeds1}),a.a.createElement("div",{className:W.a.Seeds2}));break;case"meat":e=a.a.createElement("div",{className:W.a.Meat});break;case"cheese":e=a.a.createElement("div",{className:W.a.Cheese});break;case"bacon":e=a.a.createElement("div",{className:W.a.Bacon});break;case"salad":e=a.a.createElement("div",{className:W.a.Salad});break;default:e=null}return e}}]),t}(r.Component),Z=function(e){console.log(e);var t=Object.keys(e.ingredients).map((function(t){return Object(z.a)(Array(e.ingredients[t])).map((function(e,n){return a.a.createElement(X,{key:t+n,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=a.a.createElement("p",null,"Please start adding ingredients!")),a.a.createElement("div",{className:Y.a.Burger},a.a.createElement(X,{type:"bread-top"}),t,a.a.createElement(X,{type:"bread-bottom"}))},$=n(33),Q=n.n($),ee=n(22),te=n.n(ee),ne=function(e){return a.a.createElement("div",{className:te.a.BuildControl},a.a.createElement("div",{className:te.a.Label},e.label),a.a.createElement("button",{className:te.a.Less,onClick:e.removed,disabled:e.disabled},"Less"),a.a.createElement("button",{className:te.a.More,onClick:e.added},"More"))},re=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],ae=function(e){return a.a.createElement("div",{className:Q.a.BuildControls},a.a.createElement("p",null,"Current Price: ",a.a.createElement("strong",null,e.price.toFixed(2))),re.map((function(t){return a.a.createElement(ne,{key:t.label,label:t.label,added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)},disabled:e.disabled[t.type]})})),a.a.createElement("button",{className:Q.a.OrderButton,disabled:!e.purchasable,onClick:e.ordered},e.isAuth?"ORDER NOW":"SIGN UP TO ORDER"))},oe=n(55),ie=n.n(oe),ce=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return a.a.createElement(r.Fragment,null,a.a.createElement(x,{show:this.props.show,clicked:this.props.modalClosed}),a.a.createElement("div",{className:ie.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(r.Component),le=n(34),ue=n.n(le),se=function(e){return a.a.createElement("button",{disabled:e.disabled,className:[ue.a.Button,ue.a[e.btnType]].join(" "),onClick:e.clicked},e.children)},de=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=Object.keys(this.props.ingredients).map((function(t){return a.a.createElement("li",{key:t},a.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.props.ingredients[t])}));return a.a.createElement(r.Fragment,null,a.a.createElement("h3",null,"Your Order"),a.a.createElement("p",null,"A delicious burger with the following ingredients:"),a.a.createElement("ul",null,t),a.a.createElement("p",null,a.a.createElement("strong",null,"Total Price: ",this.props.price)),a.a.createElement("p",null,"Continue to checkout?"),a.a.createElement(se,{btnType:"Danger",clicked:this.props.purchaseCancelled},"CANCEL"),a.a.createElement(se,{btnType:"Success",clicked:this.props.purchaseContinued},"CONTINUE"))}}]),t}(r.Component),pe=n(56),he=n.n(pe),me=function(){return a.a.createElement("div",{className:he.a.Loader})},ge=function(e,t){return function(n){function o(){var e,t;Object(d.a)(this,o);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=Object(h.a)(this,(e=Object(m.a)(o)).call.apply(e,[this].concat(r)))).state={error:null},t.errorConfirmedHandler=function(){t.setState({error:null})},t}return Object(g.a)(o,n),Object(p.a)(o,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use((function(t){return e.setState({error:null}),t})),this.resInterceptor=t.interceptors.response.use((function(e){return e}),(function(t){e.setState({error:t})}))}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return a.a.createElement(r.Fragment,null,a.a.createElement(ce,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),a.a.createElement(e,this.props))}}]),o}(r.Component)},fe=n(26),be=n.n(fe),ve=be.a.create({baseURL:"https://react-my-burgur-5b6b9.firebaseio.com/"});function Ee(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Oe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ee(Object(n),!0).forEach((function(t){Object(q.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ee(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ye=function(e,t){return{type:"AUTH_SUCCESS",idToken:e,userId:t}},_e=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("userId"),{type:"AUTH_LOGOUT"}},je=function(e){return function(t){setTimeout((function(){t(_e())}),1e3*e)}},Ce=function(e){return{type:"SET_AUTH_REDIRECT_PATH",path:e}};function Se(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var ke=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={purchasing:!1},n.purchaseHandler=function(){n.props.isAuthenticated?n.setState({purchasing:!0}):(n.props.onSetAuthRedirectPath("/checkout"),n.props.history.push("/auth"))},n.purchaseCancelHandler=function(){n.setState({purchasing:!1})},n.purchaseContinueHandler=function(){n.props.onInitPurchase(),n.props.history.push("/checkout")},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props),this.props.onInitIngredients()}},{key:"updatePurchaseState",value:function(e){return Object.keys(e).map((function(t){return e[t]})).reduce((function(e,t){return e+t}),0)>0}},{key:"render",value:function(){var e=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Se(Object(n),!0).forEach((function(t){Object(q.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Se(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},this.props.ings);for(var t in e)e[t]=e[t]<=0;var n=null,o=this.props.error?a.a.createElement("p",null,"Ingredients can't be loaded!"):a.a.createElement(me,null);return this.props.ings&&(o=a.a.createElement(r.Fragment,null,a.a.createElement(Z,{ingredients:this.props.ings}),a.a.createElement(ae,{ingredientAdded:this.props.onIngredientAdded,ingredientRemoved:this.props.onIngredientRemoved,disabled:e,purchasable:this.updatePurchaseState(this.props.ings),ordered:this.purchaseHandler,isAuth:this.props.isAuthenticated,price:this.props.price})),n=a.a.createElement(de,{ingredients:this.props.ings,price:this.props.price,purchaseCancelled:this.purchaseCancelHandler,purchaseContinued:this.purchaseContinueHandler})),a.a.createElement(r.Fragment,null,a.a.createElement(ce,{show:this.state.purchasing,modalClosed:this.purchaseCancelHandler},n),o)}}]),t}(r.Component),Ie=Object(l.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,error:e.burgerBuilder.error,isAuthenticated:null!==e.auth.token}}),(function(e){return{onIngredientAdded:function(t){return e({type:"ADD_INGREDIENT",ingredientName:t})},onIngredientRemoved:function(t){return e({type:"REMOVE_INGREDIENT",ingredientName:t})},onInitIngredients:function(){return e((function(e){ve.get("https://react-my-burgur-5b6b9.firebaseio.com/ingredients.json").then((function(t){e({type:"SET_INGREDIENTS",ingredients:t.data})})).catch((function(t){e({type:"FETCH_INGREDIENTS_FAILED"})}))}))},onInitPurchase:function(){return e({type:"PURCHASE_INIT"})},onSetAuthRedirectPath:function(t){return e(Ce(t))}}}))(ge(ke,ve)),we=n(57),Te=n.n(we),De=function(e){return a.a.createElement("div",{className:Te.a.CheckoutSummary},a.a.createElement("h1",null,"We hope it tastes well!"),a.a.createElement("div",{style:{width:"100%",margin:"auto"}},a.a.createElement(Z,{ingredients:e.ingredients})),a.a.createElement(se,{btnType:"Danger",clicked:e.checkoutCancelled},"CANCEL"),a.a.createElement(se,{btnType:"Success",clicked:e.checkoutContinued},"CONTINUE"))},Ne=n(58),Ae=n.n(Ne),Pe=n(23),Be=n.n(Pe),Re=function(e){var t=null,n=[Be.a.InputElement];switch(e.invalid&&e.shouldValidate&&e.touched&&n.push(Be.a.Invalid),e.elementType){case"input":t=a.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"textarea":t=a.a.createElement("textarea",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=a.a.createElement("select",{className:n.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map((function(e){return a.a.createElement("option",{key:e.value,value:e.value},e.displayValue)})));break;default:t=a.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return a.a.createElement("div",{className:Be.a.Input},a.a.createElement("label",{className:Be.a.Label},e.label),t)};function Le(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function He(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Le(Object(n),!0).forEach((function(t){Object(q.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Le(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var xe=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={orderForm:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"Your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"Street"},value:"",validation:{required:!0},valid:!1,touched:!1},zipCode:{elementType:"input",elementConfig:{type:"text",placeholder:"ZIP Code"},value:"",validation:{required:!0,minLength:5,maxLength:5,isNumeric:!0},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"Country"},value:"",validation:{required:!0},valid:!1,touched:!1},email:{elementType:"input",elementConfig:{type:"email",placeholder:"Your E-Mail"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"cheapest",displayValue:"Cheapest"}]},value:"fastest",validation:{},valid:!0}},formIsValid:!1},n.orderHandler=function(e){e.preventDefault();var t={};for(var r in n.state.orderForm)t[r]=n.state.orderForm[r].value;var a={ingredients:n.props.ings,price:n.props.price,orderData:t,userId:n.props.userId};n.props.onOrderBurger(a,n.props.token)},n.inputChangedHandler=function(e,t){var r=He({},n.state.orderForm),a=He({},r[t]);a.value=e.target.value,a.valid=n.checkValidity(a.value,a.validation),a.touched=!0,r[t]=a;var o=!0;for(var i in r)o=r[i].valid&&o;n.setState({orderForm:r,formIsValid:o})},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"checkValidity",value:function(e,t){var n=!0;if(!t)return!0;if(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),t.isEmail){n=/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&n}if(t.isNumeric){n=/^\d+$/.test(e)&&n}return n}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.orderForm)t.push({id:n,config:this.state.orderForm[n]});var r=a.a.createElement("form",{onSubmit:this.orderHandler},t.map((function(t){return a.a.createElement(Re,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}})})),a.a.createElement(se,{btnType:"Success",disabled:!this.state.formIsValid},"ORDER"));return this.props.loading&&(r=a.a.createElement(me,null)),a.a.createElement("div",{className:Ae.a.ContactData},a.a.createElement("h4",null,"Enter your Contact Data"),r)}}]),t}(r.Component),Ue=Object(l.b)((function(e){return{ings:e.burgerBuilder.ingredients,price:e.burgerBuilder.totalPrice,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onOrderBurger:function(t,n){return e(function(e,t){return function(n){n({type:"PURCHASE_BURGER_START"}),ve.post("/orders.json?auth="+t,e).then((function(t){console.log(t.data),n(function(e,t){return{type:"PURCHASE_BURGER_SUCCESS",orderId:e,orderData:t}}(t.data.name,e))})).catch((function(e){n(function(e){return{type:"PURCHASE_BURGER_FAIL",error:e}}(e))}))}}(t,n))}}}))(ge(xe,ve)),Fe=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).checkoutCancelledHandler=function(){n.props.history.goBack()},n.checkoutContinuedHandler=function(){n.props.history.replace("/checkout/contact-data")},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=a.a.createElement(f.a,{to:"/"});if(this.props.ings){var t=this.props.purchased?a.a.createElement(f.a,{to:"/"}):null;e=a.a.createElement("div",null,t,a.a.createElement(De,{ingredients:this.props.ings,checkoutCancelled:this.checkoutCancelledHandler,checkoutContinued:this.checkoutContinuedHandler}),a.a.createElement(f.b,{path:this.props.match.path+"/contact-data",component:Ue}))}return e}}]),t}(r.Component),Me=Object(l.b)((function(e){return{ings:e.burgerBuilder.ingredients,purchased:e.order.purchased}}))(Fe),Ge=n(59),Ve=n.n(Ge),qe=function(e){var t=[];for(var n in e.ingredients)t.push({name:n,amount:e.ingredients[n]});var r=t.map((function(e){return a.a.createElement("span",{style:{textTransform:"capitalize",display:"inline-block",margin:"0 8px",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name," (",e.amount,")")}));return a.a.createElement("div",{className:Ve.a.Order},a.a.createElement("p",null,"Ingredients: ",r),a.a.createElement("p",null,"Price: ",a.a.createElement("strong",null,"USD ",e.price.toFixed(2))))},ze=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=a.a.createElement(me,null);return this.props.loading||(e=this.props.orders.map((function(e){return a.a.createElement(qe,{key:e.id,ingredients:e.ingredients,price:e.price})}))),a.a.createElement("div",null,e)}}]),t}(r.Component),Ke=Object(l.b)((function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.auth.token,userId:e.auth.userId}}),(function(e){return{onFetchOrders:function(t,n){return e(function(e,t){return function(n){n({type:"FETCH_ORDERS_START"});var r="?auth="+e+'&orderBy="userId"&equalTo="'+t+'"';ve.get("/orders.json"+r).then((function(e){var t=[];for(var r in e.data)t.push(Oe({},e.data[r],{id:r}));n({type:"FETCH_ORDERS_SUCCESS",orders:t})})).catch((function(e){n({type:"FETCH_ORDERS_FAIL",error:e})}))}}(t,n))}}}))(ge(ze,ve)),Ye=n(60),Je=n.n(Ye);function We(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Xe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?We(Object(n),!0).forEach((function(t){Object(q.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):We(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var Ze=function(e){function t(){var e,n;Object(d.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(a)))).state={controls:{email:{elementType:"input",elementConfig:{type:"email",placeholder:"Mail Address"},value:"",validation:{required:!0,isEmail:!0},valid:!1,touched:!1},password:{elementType:"input",elementConfig:{type:"password",placeholder:"Password"},value:"",validation:{required:!0,minLength:6},valid:!1,touched:!1}},isSignup:!0},n.inputChangedHandler=function(e,t){var r=Xe({},n.state.controls,Object(q.a)({},t,Xe({},n.state.controls[t],{value:e.target.value,valid:n.checkValidity(e.target.value,n.state.controls[t].validation),touched:!0})));n.setState({controls:r})},n.submitHandler=function(e){e.preventDefault(),n.props.onAuth(n.state.controls.email.value,n.state.controls.password.value,n.state.isSignup)},n.switchAuthModeHandler=function(){n.setState((function(e){return{isSignup:!e.isSignup}}))},n}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.buildingBurger||"/"===this.props.authRedirectPath||this.props.onSetAuthRedirectPath()}},{key:"checkValidity",value:function(e,t){var n=!0;return!t||(t.required&&(n=""!==e.trim()&&n),t.minLength&&(n=e.length>=t.minLength&&n),t.maxLength&&(n=e.length<=t.maxLength&&n),n)}},{key:"render",value:function(){var e=this,t=[];for(var n in this.state.controls)t.push({id:n,config:this.state.controls[n]});var r=t.map((function(t){return a.a.createElement(Re,{key:t.id,elementType:t.config.elementType,elementConfig:t.config.elementConfig,value:t.config.value,invalid:!t.config.valid,shouldValidate:t.config.validation,touched:t.config.touched,changed:function(n){return e.inputChangedHandler(n,t.id)}})}));this.props.loading&&(r=a.a.createElement(me,null));var o=null;this.props.error&&(o=a.a.createElement("p",null,this.props.error.message));var i=null;return this.props.isAuthenticated&&(i=a.a.createElement(f.a,{to:this.props.authRedirectPath})),a.a.createElement("div",{className:Je.a.Auth},i,o,a.a.createElement("form",{onSubmit:this.submitHandler},r,a.a.createElement(se,{btnType:"Success"},"SUBMIT")),a.a.createElement(se,{clicked:this.switchAuthModeHandler,btnType:"Danger"},"SWITCH TO ",this.state.isSignup?"SIGNIN":"SIGNUP"))}}]),t}(r.Component),$e=Object(l.b)((function(e){return{loading:e.auth.loading,error:e.auth.error,isAuthenticated:null!==e.auth.token,buildingBurger:e.burgerBuilder.building,authRedirectPath:e.auth.authRedirectPath}}),(function(e){return{onAuth:function(t,n,r){return e(function(e,t,n){return function(r){r({type:"AUTH_START"});var a={email:e,password:t,returnSecureToken:!0},o="https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyANPm2dE_Gri-Jg8x10hwFN8kyU9f2v5Kc";n||(o="https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyANPm2dE_Gri-Jg8x10hwFN8kyU9f2v5Kc"),be.a.post(o,a).then((function(e){console.log(e);var t=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",t),localStorage.setItem("userId",e.data.expiresIn),r(ye(e.data.idToken,e.data.localId)),r(je(e.data.expiresIn))})).catch((function(e){r({type:"AUTH_FAIL",error:e.response.data.error})}))}}(t,n,r))},onSetAuthRedirectPath:function(){return e(Ce("/"))}}}))(Ze),Qe=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return a.a.createElement(f.a,{to:"/"})}}]),t}(r.Component),et=Object(l.b)(null,(function(e){return{onLogout:function(){return e(_e())}}}))(Qe),tt=function(e){function t(){return Object(d.a)(this,t),Object(h.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(g.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){var e=a.a.createElement(f.d,null,a.a.createElement(f.b,{path:"/auth",component:$e}),a.a.createElement(f.b,{path:"/",exact:!0,component:Ie}),a.a.createElement(f.a,{to:"/"}));return this.props.isAuthenticated&&(e=a.a.createElement(f.d,null,a.a.createElement(f.b,{path:"/checkout",component:Me}),a.a.createElement(f.b,{path:"/orders",component:Ke}),a.a.createElement(f.b,{path:"/logout",component:et}),a.a.createElement(f.b,{path:"/",exact:!0,component:Ie}))),a.a.createElement("div",null,a.a.createElement(V,null,e))}}]),t}(r.Component),nt=Object(f.g)(Object(l.b)((function(e){return{isAuthenticated:null!==e.auth.token}}),(function(e){return{onTryAutoSignup:function(){return e((function(e){var t=localStorage.getItem("token");if(t){var n=new Date(localStorage.getItem("expirationDate"));if(n<=new Date)e(_e());else{var r=localStorage.getItem("userId");e(ye(t,r)),e(je((n.getTime()-(new Date).getTime())/1e3))}}else e(_e())}))}}}))(tt));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function rt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var at=function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?rt(Object(n),!0).forEach((function(t){Object(q.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):rt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{},t)},ot={ingredients:null,totalPrice:4,error:!1},it={salad:.5,cheese:.4,meat:1.3,bacon:.7},ct=function(e,t){var n=Object(q.a)({},t.ingredientName,e.ingredients[t.ingredientName]+1),r={ingredients:at(e.ingredients,n),totalPrice:e.totalPrice+it[t.ingredientName],building:!0};return at(e,r)},lt=function(e,t){var n=Object(q.a)({},t.ingredientName,e.ingredients[t.ingredientName]-1),r={ingredients:at(e.ingredients,n),totalPrice:e.totalPrice+it[t.ingredientName],building:!0};return at(e,r)},ut=function(e,t){return at(e,{ingredients:{salad:t.ingredients.salad,bacon:t.ingredients.bacon,cheese:t.ingredients.cheese,meat:t.ingredients.meat},totalPrice:4,error:!1,building:!1})},st=function(e,t){return at(e,{error:!0})},dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ot,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_INGREDIENT":return ct(e,t);case"REMOVE_INGREDIENT":return lt(e,t);case"SET_INGREDIENTS":return ut(e,t);case"FETCH_INGREDIENTS_FAILED":return st(e);default:return e}},pt={orders:[],loading:!1,purchased:!1},ht=function(e,t){return at(e,{purchased:!1})},mt=function(e,t){return at(e,{loading:!1})},gt=function(e,t){var n=at(t.orderData,{id:t.orderId});return at(e,{loading:!1,purchased:!0,orders:e.orders.concat(n)})},ft=function(e,t){return at(e,{loading:!1})},bt=function(e,t){return at(e,{loading:!0})},vt=function(e,t){return at(e,{orders:t.orders,loading:!1})},Et=function(e,t){return at(e,{loading:!1})},Ot=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PURCHASE_INIT":return ht(e);case"PURCHASE_BURGER_START":return mt(e);case"PURCHASE_BURGER_SUCCESS":return gt(e,t);case"PURCHASE_BURGER_FAIL":return ft(e);case"FETCH_ORDERS_START":return bt(e);case"FETCH_ORDERS_SUCCESS":return vt(e,t);case"FETCH_ORDERS_FAIL":return Et(e);default:return e}},yt={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},_t=function(e,t){return at(e,{error:null,loading:!0})},jt=function(e,t){return at(e,{token:t.idToken,userId:t.userId,error:null,loading:!1})},Ct=function(e,t){return at(e,{error:t.error,loading:!1})},St=function(e,t){return at(e,{token:null,userId:null})},kt=function(e,t){return at(e,{authRedirectPath:t.path})},It=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:yt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"AUTH_START":return _t(e);case"AUTH_SUCCESS":return jt(e,t);case"AUTH_FAIL":return Ct(e,t);case"AUTH_LOGOUT":return St(e);case"SET_AUTH_REDIRECT_PATH":return kt(e,t);default:return e}},wt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,Tt=Object(u.c)({burgerBuilder:dt,order:Ot,auth:It}),Dt=Object(u.e)(Tt,wt(Object(u.a)(s.a))),Nt=a.a.createElement(l.a,{store:Dt},a.a.createElement(c.a,null,a.a.createElement(nt,null)));i.a.render(Nt,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[62,1,2]]]);
//# sourceMappingURL=main.29fa1e85.chunk.js.map