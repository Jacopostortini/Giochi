(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["userHamburgerMenu"],{"0894":function(e,t,s){},"236d":function(e,t,s){"use strict";s("6eb3")},"5d86":function(e,t,s){"use strict";s.r(t);var n=s("7a23"),a=s("cf05"),o=s.n(a),c=Object(n["L"])("data-v-bb425a5c");Object(n["v"])("data-v-bb425a5c");var r={class:"user-hamburger-menu__menu"},i={key:0,class:"logged-menu"},u=Object(n["g"])("Username: "),g={key:1,class:"not-logged-menu"},l=Object(n["h"])("p",null,"You are currently not logged in",-1),b={key:0,class:"notification-badge"};Object(n["t"])();var d=c((function(e,t,s,a,c,d){var m=Object(n["A"])("ChatContainer");return Object(n["s"])(),Object(n["e"])("div",{class:["user-hamburger-menu__main-panel",{hidden:!s.show}],onClick:t[7]||(t[7]=Object(n["K"])((function(){}),["stop"]))},[Object(n["h"])("div",r,[Object(n["h"])("img",{class:"home-button",src:o.a,onClick:t[1]||(t[1]=function(){return d.redirectToHome&&d.redirectToHome.apply(d,arguments)})}),d.username?(Object(n["s"])(),Object(n["e"])("div",i,[Object(n["h"])("div",null,[Object(n["h"])("p",null,[u,Object(n["h"])("strong",null,Object(n["D"])(decodeURIComponent(d.username)),1)]),s.disableLogout?Object(n["f"])("",!0):(Object(n["s"])(),Object(n["e"])("button",{key:0,onClick:t[2]||(t[2]=function(){return d.logout&&d.logout.apply(d,arguments)})},"Logout"))]),d.logged?Object(n["f"])("",!0):(Object(n["s"])(),Object(n["e"])("button",{key:0,class:"procede-with-google",onClick:t[3]||(t[3]=function(){return d.redirectToGoogle&&d.redirectToGoogle.apply(d,arguments)})},"Activate sync with google"))])):(Object(n["s"])(),Object(n["e"])("div",g,[l,Object(n["h"])("button",{class:"procede-with-google",onClick:t[4]||(t[4]=function(){return d.redirectToGoogle&&d.redirectToGoogle.apply(d,arguments)})},"Sign in now with google")])),s.showChat?(Object(n["s"])(),Object(n["e"])(m,{key:2,messages:s.messages,onSendMessage:t[5]||(t[5]=function(t){return e.$emit("send-message",t)})},null,8,["messages"])):Object(n["f"])("",!0)]),Object(n["h"])("div",{class:["user-hamburger-menu__icon",{rotated:s.show}],onClick:t[6]||(t[6]=function(){return d.toggleMenu&&d.toggleMenu.apply(d,arguments)})},[Object(n["h"])("img",{src:s.src},null,8,["src"]),s.showChat&&!s.show&&s.unreadMessages?(Object(n["s"])(),Object(n["e"])("div",b)):Object(n["f"])("",!0)],2)],2)})),m=s("5502"),j=s("e6fd"),O=s("bc3a"),h=s.n(O),f=Object(n["L"])("data-v-516314a5");Object(n["v"])("data-v-516314a5");var p={class:"chat__container",id:"chat-container"},v=Object(n["h"])("button",null,"Send",-1);Object(n["t"])();var _=f((function(e,t,s,a,o,c){var r=Object(n["A"])("InfoMessage"),i=Object(n["A"])("RegularMessage");return Object(n["s"])(),Object(n["e"])("div",{class:"chat__main-panel",onKeydown:t[3]||(t[3]=Object(n["K"])((function(){}),["stop"]))},[Object(n["h"])("div",p,[(Object(n["s"])(!0),Object(n["e"])(n["a"],null,Object(n["z"])(s.messages,(function(e,t){return Object(n["s"])(),Object(n["e"])("div",{class:"chat__message-container",key:t},[-1===e.localId?(Object(n["s"])(),Object(n["e"])(r,{key:0,message:e},null,8,["message"])):(Object(n["s"])(),Object(n["e"])(i,{key:1,message:e},null,8,["message"]))])})),128))]),Object(n["h"])("form",{class:"chat__input",onSubmit:t[2]||(t[2]=Object(n["K"])((function(){return c.sendMessage&&c.sendMessage.apply(c,arguments)}),["prevent"]))},[Object(n["J"])(Object(n["h"])("input",{placeholder:"Type a message","onUpdate:modelValue":t[1]||(t[1]=function(e){return o.message=e})},null,512),[[n["F"],o.message]]),v],32)],32)})),w=Object(n["L"])("data-v-0cd7bf87");Object(n["v"])("data-v-0cd7bf87");var y={class:"regular-message__body"};Object(n["t"])();var k=w((function(e,t,s,a,o,c){return Object(n["s"])(),Object(n["e"])("div",{class:["regular-message__main-panel",{"right-aligned":s.message.fromYou}]},[Object(n["h"])("strong",{class:"regular-message__username",style:{color:s.message.color}},Object(n["D"])(s.message.username),5),Object(n["h"])("p",y,Object(n["D"])(s.message.body),1)],2)})),M={name:"RegularMessage",props:{message:Object}};s("6f61");M.render=k,M.__scopeId="data-v-0cd7bf87";var C=M,I=Object(n["L"])("data-v-75975d6c");Object(n["v"])("data-v-75975d6c");var L={class:"info-message__main-panel"},T={class:"info-message__body"};Object(n["t"])();var A=I((function(e,t,s,a,o,c){return Object(n["s"])(),Object(n["e"])("div",L,[Object(n["h"])("p",T,Object(n["D"])(s.message.body),1)])})),G={name:"InfoMessage",props:{message:Object}};s("ee0a");G.render=A,G.__scopeId="data-v-75975d6c";var H=G,U={name:"ChatContainer",components:{InfoMessage:H,RegularMessage:C},props:{messages:Array},data:function(){return{message:null}},methods:{sendMessage:function(){this.message&&""!==this.message&&(this.$emit("send-message",{message:this.message}),this.message="")}}};s("236d");U.render=_,U.__scopeId="data-v-516314a5";var $=U,B={name:"UserHamburgerMenu",components:{ChatContainer:$},props:{showChat:Boolean,messages:Array,disableLogout:Boolean,unreadMessages:Boolean,src:{required:!0},show:Boolean},data:function(){return{store:Object(m["b"])()}},computed:{logged:function(){return this.store.state.logged},username:function(){return this.store.state.username}},mounted:function(){var e=this;window.addEventListener("click",(function(){e.$emit("toggle-show",!1)}))},methods:{toggleMenu:function(){this.$emit("toggle-show",!this.show),this.$emit("chat-opened")},redirectToHome:function(){window.location.href="/"},redirectToGoogle:function(){var e=window.location;window.location.href="/auth/google?from_location="+e},logout:function(){h.a.get(j["h"]),this.store.dispatch("setLogged",!1),this.store.dispatch("setUsername",null)}}};s("a398");B.render=d,B.__scopeId="data-v-bb425a5c";t["default"]=B},"6eb3":function(e,t,s){},"6f61":function(e,t,s){"use strict";s("c1a5")},8533:function(e,t,s){},a398:function(e,t,s){"use strict";s("8533")},c1a5:function(e,t,s){},cf05:function(e,t,s){e.exports=s.p+"img/logo.d2ad68a3.png"},ee0a:function(e,t,s){"use strict";s("0894")}}]);
//# sourceMappingURL=userHamburgerMenu.593fc095.js.map