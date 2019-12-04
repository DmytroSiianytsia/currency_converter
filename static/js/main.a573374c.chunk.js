(this.webpackJsonpcurrency_converter=this.webpackJsonpcurrency_converter||[]).push([[0],{30:function(e,t,a){e.exports=a(45)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(13),i=a.n(c),s=a(8),l=a(12),o=a(22),u=a(23),E={START_LOADING:"START_LOADING",STOP_LOADING:"STOP_LOADING",SAVE_LIST_EXCHANGE_RATES:"SAVE_LIST_EXCHANGE_RATES",IS_SELECTED:"IS_SELECTED",UPDATE_SELECT_ASK:"UPDATE_SELECT_ASK",UPDATE_SELECT_BID:"UPDATE_SELECT_BID",UPDATE_INPUT_ASK:"UPDATE_INPUT_ASK",UPDATE_INPUT_BID:"UPDATE_INPUT_BID",SET_MAIN_CURRENCY:"SET_MAIN_CURRENCY"},m=function(){return function(e){e({type:E.START_LOADING}),fetch("https://api.exchangeratesapi.io/latest?base=USD").then((function(e){return e.json()})).then((function(t){var a,n=t.rates;e((a=n,{type:E.SAVE_LIST_EXCHANGE_RATES,payload:a}))})).catch((function(e){return console.log(e)})).finally((function(){return e({type:E.STOP_LOADING})}))}},_=function(e){return{type:E.IS_SELECTED,payload:e}},p=function(e){return{type:E.UPDATE_SELECT_ASK,payload:e}},d=function(e){return{type:E.UPDATE_SELECT_BID,payload:e}},f=function(e){return{type:E.UPDATE_INPUT_ASK,payload:e}},v=function(e){return{type:E.UPDATE_INPUT_BID,payload:e}},g=function(e){return{type:E.SET_MAIN_CURRENCY,payload:e}};function A(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function N(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?A(a,!0).forEach((function(t){Object(u.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var h={isLoading:!1,listExchangeRates:null,selectAsk:null,selectBid:null,inputAsk:100,inputBid:100,mainCurrency:1};a(39);var T=Object(s.b)((function(e){return{listExchangeRates:e.listExchangeRates,mainCurrency:e.mainCurrency}}),(function(e){return{setMainCurrency:function(t){return e(g(t.target.value))},isSelected:function(t){return e(_(t))}}}))((function(e){var t=e.listExchangeRates,a=e.setMainCurrency,n=e.mainCurrency,c=e.isSelected;if(t){var i=t.map((function(e){return r.a.createElement("option",{selected:"USD"===e[0],value:e[1],key:e[0]},e[0])}));return r.a.createElement("div",{className:"page-currencies"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"page-currencies__main-currency"},"Main Currency",r.a.createElement("select",{className:"page-currencies__select",onChange:a},i)),r.a.createElement("div",{className:"page-currencies__list-container"},t.map((function(e){return r.a.createElement("div",{key:e[0],className:"page-currencies__list"},r.a.createElement("div",{className:"page-currencies__currency"},"".concat(e[0]," : ").concat((e[1]/n).toFixed(2))),r.a.createElement("span",{onClick:function(){return c(e[0])}},r.a.createElement("img",{src:"./images/star.jpg",alt:"star",className:"page-currencies__star"})))})))))}return"loading..."}));a(40);var y=Object(s.b)((function(e){return{listExchangeRates:e.listExchangeRates,selectAsk:e.selectAsk,selectBid:e.selectBid,inputAsk:e.inputAsk,inputBid:e.inputBid}}),(function(e){return{updateSelectAsk:function(t){return e(p(t))},updateSelectBid:function(t){return e(d(t))},updateInputAsk:function(t){return e(f(t))},updateInputBid:function(t){return e(v(t))}}}))((function(e){var t=e.listExchangeRates,a=e.updateSelectBid,n=e.updateInputBid,c=e.updateSelectAsk,i=e.updateInputAsk,s=e.selectAsk,l=e.selectBid,o=e.inputBid,u=e.inputAsk;if(t){var E=t.map((function(e){return r.a.createElement("option",{value:e[1],key:e[0]},e[0])}));return r.a.createElement("div",{className:"page-converter"},r.a.createElement("div",{className:"content"},r.a.createElement("h1",{className:"page-converter__title"},"CONVERTER"),r.a.createElement("div",{className:"page-converter__converter"},r.a.createElement("div",{className:"page-converter__have"},r.a.createElement("div",{className:"page-converter__label"},"I HAVE"),r.a.createElement("input",{className:"page-converter__input",type:"text",onChange:function(e){return n(e.target.value)},value:o}),r.a.createElement("select",{name:"bid",className:"page-converter__select",onChange:function(e){return a(e.target.value)},value:l},E)),r.a.createElement("div",{className:"page-converter__want"},r.a.createElement("div",{className:"page-converter__label"},"I'LL GET"),r.a.createElement("input",{className:"page-converter__input",type:"text",onChange:function(e){return i(e.target.value)},value:u}),r.a.createElement("select",{name:"ask",className:"page-converter__select",onChange:function(e){return c(e.target.value)},value:s},E)))))}return"Loading......"})),S=a(24),k=a(25),I=a(28),D=a(26),C=a(29),O=a(9),b=a(10),P=(a(41),function(e){function t(){return Object(S.a)(this,t),Object(I.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(C.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){this.props.loadListExchangeRates()}},{key:"render",value:function(){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"header__inner"},r.a.createElement("img",{src:"./images/logo.png",alt:"currency exchange",className:"header__logo"}),r.a.createElement("div",{className:"header__links"},r.a.createElement(O.a,null,r.a.createElement(b.b,{to:"/",className:"header__link"},"Currencies")),r.a.createElement(O.a,null,r.a.createElement(b.b,{to:"/converter",className:"header__link"},"Converter"))))))}}]),t}(n.Component));var L=Object(s.b)((function(e){return{}}),(function(e){return{loadListExchangeRates:function(){return e(m())}}}))(P),B=(a(43),function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"footer__bottom-part"},r.a.createElement("p",{className:"footer__copyright"},"\xa9 2019 Finance Inc."),r.a.createElement("div",{className:"footer__misc"},r.a.createElement("div",{className:"footer__bottom-links links"},r.a.createElement("a",{href:"##",className:"links__link"},"Privacy policy"),r.a.createElement("a",{href:"##",className:"links__link"},"Terms of  use"),r.a.createElement("a",{href:"##",className:"links__link"},"Pricing")),r.a.createElement("div",{className:"footer__social social"},r.a.createElement("a",{href:"##",className:"social__link"},r.a.createElement("img",{src:"./images/tw.svg",alt:"Twitter"})),r.a.createElement("a",{href:"##",className:"social__link"},r.a.createElement("img",{src:"./images/ig.svg",alt:"Instagram"})),r.a.createElement("a",{href:"##",className:"social__link"},r.a.createElement("img",{src:"./images/fb.svg",alt:"Facebook"})))))))}),R=(a(44),Object(l.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0,a=t.payload;switch(t.type){case E.START_LOADING:return N({},e,{isLoading:!0});case E.STOP_LOADING:return N({},e,{isLoading:!1});case E.SAVE_LIST_EXCHANGE_RATES:var n=Object.entries(a);return N({},e,{selectAsk:n[0][1],selectBid:n[0][1],listExchangeRates:n});case E.IS_SELECTED:var r=e.listExchangeRates.slice(),c=!0,i=!1,s=void 0;try{for(var l,o=r[Symbol.iterator]();!(c=(l=o.next()).done);c=!0){var u=l.value;if(a===u[0]){var m=r.splice(r.indexOf(u),1);r.unshift(m[0])}}}catch(_){i=!0,s=_}finally{try{c||null==o.return||o.return()}finally{if(i)throw s}}return N({},e,{listExchangeRates:r});case E.UPDATE_SELECT_ASK:return N({},e,{selectAsk:a,inputAsk:(a/e.selectBid*e.inputBid).toFixed(2)});case E.UPDATE_SELECT_BID:return N({},e,{selectBid:a,inputAsk:(e.selectAsk/a*e.inputBid).toFixed(2)});case E.UPDATE_INPUT_ASK:return N({},e,{inputAsk:a,inputBid:(e.selectBid/e.selectAsk*a).toFixed(2)});case E.UPDATE_INPUT_BID:return N({},e,{inputBid:a,inputAsk:(e.selectAsk/e.selectBid*a).toFixed(2)});case E.SET_MAIN_CURRENCY:return N({},e,{mainCurrency:a});default:return e}}),Object(l.a)(o.a)));var U=function(){return r.a.createElement(s.a,{store:R},r.a.createElement("div",{className:"App"},r.a.createElement(L,null),r.a.createElement(O.c,null,r.a.createElement(O.a,{path:"/",exact:!0,component:T}),r.a.createElement(O.a,{path:"/converter",component:y})),r.a.createElement(B,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(b.a,null,r.a.createElement(U,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.a573374c.chunk.js.map