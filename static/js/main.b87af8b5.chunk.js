(this.webpackJsonpcurrency_converter=this.webpackJsonpcurrency_converter||[]).push([[0],{30:function(e,t,n){e.exports=n(45)},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),i=n.n(c),l=n(8),s=n(12),o=n(22),u=n(23),E={START_LOADING:"START_LOADING",STOP_LOADING:"STOP_LOADING",SAVE_LIST_EXCHANGE_RATES:"SAVE_LIST_EXCHANGE_RATES",IS_SELECTED:"IS_SELECTED",UPDATE_SELECT_ASK:"UPDATE_SELECT_ASK",UPDATE_SELECT_BID:"UPDATE_SELECT_BID",UPDATE_INPUT_ASK:"UPDATE_INPUT_ASK",UPDATE_INPUT_BID:"UPDATE_INPUT_BID",SET_MAIN_CURRENCY:"SET_MAIN_CURRENCY"},m=function(){return function(e){e({type:E.START_LOADING}),fetch("https://api.exchangeratesapi.io/latest?base=USD").then((function(e){return e.json()})).then((function(t){var n,a=t.rates;e((n=a,{type:E.SAVE_LIST_EXCHANGE_RATES,payload:n}))})).catch((function(e){return console.log(e)})).finally((function(){return e({type:E.STOP_LOADING})}))}},_=function(e){return{type:E.IS_SELECTED,payload:e}},p=function(e){return{type:E.UPDATE_SELECT_ASK,payload:e}},d=function(e){return{type:E.UPDATE_SELECT_BID,payload:e}},f=function(e){return{type:E.UPDATE_INPUT_ASK,payload:e}},g=function(e){return{type:E.UPDATE_INPUT_BID,payload:e}},v=function(e){return{type:E.SET_MAIN_CURRENCY,payload:e}};function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(n,!0).forEach((function(t){Object(u.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N={isLoading:!1,listExchangeRates:null,selectAsk:null,selectBid:null,inputAsk:100,inputBid:100,mainCurrency:1};n(39);var T=Object(l.b)((function(e){return{listExchangeRates:e.listExchangeRates,mainCurrency:e.mainCurrency}}),(function(e){return{setMainCurrency:function(t){return e(v(t.target.value))},isSelected:function(t){return e(_(t))}}}))((function(e){var t=e.listExchangeRates,n=e.setMainCurrency,a=e.mainCurrency,c=e.isSelected;if(t){var i=t.map((function(e){return r.a.createElement("option",{selected:"USD"===e[0],value:e[1],key:e[0]},e[0])}));return r.a.createElement("div",{className:"page-currencies"},r.a.createElement("div",{className:"content"},"Main Currency",r.a.createElement("select",{className:"page-currencies__select",onChange:n},i),t.map((function(e){return r.a.createElement("div",{key:e[0],className:"page-currencies__list"},r.a.createElement("div",{className:"page-currencies__currency"},"".concat(e[0]," : ").concat((e[1]/a).toFixed(4))),r.a.createElement("span",{onClick:function(){return c(e[0])}},r.a.createElement("img",{src:"./images/star.jpg",alt:"star",width:"14"})))}))))}return"loading..."}));n(40);var y=Object(l.b)((function(e){return{listExchangeRates:e.listExchangeRates,selectAsk:e.selectAsk,selectBid:e.selectBid,inputAsk:e.inputAsk,inputBid:e.inputBid}}),(function(e){return{updateSelectAsk:function(t){return e(p(t))},updateSelectBid:function(t){return e(d(t))},updateInputAsk:function(t){return e(f(t))},updateInputBid:function(t){return e(g(t))}}}))((function(e){var t=e.listExchangeRates,n=e.updateSelectBid,a=e.updateInputBid,c=e.updateSelectAsk,i=e.updateInputAsk,l=e.inputBid,s=e.inputAsk;if(t){var o=t.map((function(e){return r.a.createElement("option",{value:e[1],key:e[0]},e[0])}));return r.a.createElement("div",{className:"page-converter"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"page-converter__converter"},r.a.createElement("div",{className:"page-converter__have"},r.a.createElement("div",{className:"page-converter__label"},"I HAVE"),r.a.createElement("input",{type:"text",onChange:function(e){return a(e.target.value)},value:l}),r.a.createElement("select",{name:"bid",className:"page-converter__select",onChange:function(e){return n(e.target.value)}},o)),r.a.createElement("div",{className:"page-converter__want"},r.a.createElement("div",{className:"page-converter__label"},"I'LL GET"),r.a.createElement("input",{type:"text",onChange:function(e){return i(e.target.value)},value:s}),r.a.createElement("select",{name:"ask",className:"page-converter__select",onChange:function(e){return c(e.target.value)}},o)))))}return"Loading......"})),S=n(24),k=n(25),I=n(28),D=n(26),b=n(29),O=n(9),C=n(10),P=(n(41),function(e){function t(){return Object(S.a)(this,t),Object(I.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){this.props.loadListExchangeRates()}},{key:"render",value:function(){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header__inner"},r.a.createElement("img",{src:"./images/logo.png",alt:"currency exchange",className:"header__logo"}),r.a.createElement("div",{className:"header__links"},r.a.createElement(O.a,null,r.a.createElement(C.b,{to:"/",className:"header__link"},"Currencies")),r.a.createElement(O.a,null,r.a.createElement(C.b,{to:"/converter",className:"header__link"},"Converter"))))))}}]),t}(a.Component));var B=Object(l.b)((function(e){return{}}),(function(e){return{loadListExchangeRates:function(){return e(m())}}}))(P),L=(n(43),function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"footer__bottom-part"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 2019 Finance Inc."),r.a.createElement("div",{className:"footer__misc"},r.a.createElement("div",{className:"footer__bottom-links links"},r.a.createElement("a",{href:"##",className:"links__link"},"Privacy policy"),r.a.createElement("a",{href:"##",className:"links__link"},"Terms of  use"),r.a.createElement("a",{href:"##",className:"links__link"},"Pricing")),r.a.createElement("div",{className:"footer__social social"},r.a.createElement("a",{href:"##",className:"social__link"},r.a.createElement("img",{src:"./images/tw.svg",alt:"Twitter"})),r.a.createElement("a",{href:"##",className:"social__link"},r.a.createElement("img",{src:"./images/ig.svg",alt:"Instagram"})),r.a.createElement("a",{href:"##",className:"social__link"},r.a.createElement("img",{src:"./images/fb.svg",alt:"Facebook"})))))))}),U=(n(44),Object(s.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0,n=t.payload;switch(t.type){case E.START_LOADING:return h({},e,{isLoading:!0});case E.STOP_LOADING:return h({},e,{isLoading:!1});case E.SAVE_LIST_EXCHANGE_RATES:return h({},e,{selectAsk:Object.entries(n)[0][1],selectBid:Object.entries(n)[0][1],listExchangeRates:Object.entries(n)});case E.IS_SELECTED:var a=e.listExchangeRates.slice(),r=!0,c=!1,i=void 0;try{for(var l,s=a[Symbol.iterator]();!(r=(l=s.next()).done);r=!0){var o=l.value;if(n===o[0]){var u=a.splice(a.indexOf(o),1);a.unshift(u[0])}}}catch(m){c=!0,i=m}finally{try{r||null==s.return||s.return()}finally{if(c)throw i}}return h({},e,{listExchangeRates:a});case E.UPDATE_SELECT_ASK:return h({},e,{selectAsk:n,inputAsk:(n/e.selectBid*e.inputBid).toFixed(4)});case E.UPDATE_SELECT_BID:return console.log("state.selectAsk ".concat(e.selectAsk)),console.log("payload ".concat(n)),console.log("state.inputBid ".concat(e.inputBid)),h({},e,{selectBid:n,inputAsk:(e.selectAsk/n*e.inputBid).toFixed(4)});case E.UPDATE_INPUT_ASK:return h({},e,{inputAsk:n,inputBid:(e.selectBid/e.selectAsk*n).toFixed(4)});case E.UPDATE_INPUT_BID:return h({},e,{inputBid:n,inputAsk:(e.selectAsk/e.selectBid*n).toFixed(4)});case E.SET_MAIN_CURRENCY:return h({},e,{mainCurrency:n});default:return e}}),Object(s.a)(o.a)));var R=function(){return r.a.createElement(l.a,{store:U},r.a.createElement("div",{className:"App"},r.a.createElement(B,null),r.a.createElement(O.c,null,r.a.createElement(O.a,{path:"/",exact:!0,component:T}),r.a.createElement(O.a,{path:"/converter",component:y})),r.a.createElement(L,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(C.a,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.b87af8b5.chunk.js.map