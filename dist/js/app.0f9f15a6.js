(function(e){function t(t){for(var n,o,s=t[0],i=t[1],l=t[2],p=0,d=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);u&&u(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],n=!0,s=1;s<a.length;s++){var i=a[s];0!==r[i]&&(n=!1)}n&&(c.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},r={app:0},c=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/unseen/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=i;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"008d":function(e,t,a){"use strict";a("c2b7")},"044a":function(e,t,a){e.exports=a.p+"img/pawn_4.a281cce8.png"},"0470":function(e,t,a){"use strict";a("05e3")},"05ac":function(e,t,a){e.exports=a.p+"img/pawn_3.a337a850.png"},"05c8":function(e,t,a){},"05e3":function(e,t,a){},"0894":function(e,t,a){},"0cf1":function(e,t,a){},1:function(e,t){},"17d5":function(e,t,a){"use strict";a("7d09")},1813:function(e,t,a){},"1a45":function(e,t,a){},"2f61":function(e,t,a){},"2f79":function(e,t,a){e.exports=a.p+"img/pawn_0.ceb5bf40.png"},"326a":function(e,t,a){"use strict";a("1813")},"37f5":function(e,t,a){"use strict";a("4411")},4034:function(e,t,a){"use strict";a("4a18")},4353:function(e,t,a){e.exports=a.p+"img/pawn_mister_x.ff74ef9a.png"},"436e":function(e,t,a){e.exports=a.p+"img/pawn_2.cd6bc56b.png"},4411:function(e,t,a){},"4a18":function(e,t,a){},"505f":function(e,t,a){"use strict";a("610d")},5676:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23");function r(e,t){var a=Object(n["w"])("router-view");return Object(n["p"])(),Object(n["d"])(a)}a("326a");const c={};c.render=r;var o=c,s=(a("b0c0"),a("96cf"),a("1da1")),i=a("6c02"),l={class:"main-panel"};function u(e,t,a,r,c,o){var s=Object(n["w"])("Header"),i=Object(n["w"])("GameHistory"),u=Object(n["w"])("GameButtons"),p=Object(n["w"])("UserHamburgerMenu");return Object(n["p"])(),Object(n["d"])("div",l,[Object(n["g"])(s),Object(n["g"])(i,{games:c.games},null,8,["games"]),Object(n["g"])(u),Object(n["g"])(p)])}var p=Object(n["G"])("data-v-68c2bd50");Object(n["s"])("data-v-68c2bd50");var d={class:"header__main-panel"},b=Object(n["g"])("h1",null,"Unseen",-1);Object(n["q"])();var m=p((function(e,t,a,r,c,o){return Object(n["p"])(),Object(n["d"])("div",d,[b])})),g={name:"Header"};a("37f5");g.render=m,g.__scopeId="data-v-68c2bd50";var O=g,j=Object(n["G"])("data-v-7b9431da");Object(n["s"])("data-v-7b9431da");var f={class:"my-games__main-panel"},_={key:0};Object(n["q"])();var v=j((function(e,t,a,r,c,o){var s=Object(n["w"])("Game");return Object(n["p"])(),Object(n["d"])("div",f,[a.games&&a.games.length>0?(Object(n["p"])(),Object(n["d"])("span",_,"Active games")):Object(n["e"])("",!0),(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(a.games,(function(e){return Object(n["p"])(),Object(n["d"])(s,{key:e.game_id,game:e},null,8,["game"])})),128))])})),h=Object(n["G"])("data-v-d4ee0562");Object(n["s"])("data-v-d4ee0562");var y={class:"game__date-container"};Object(n["q"])();var w=h((function(e,t,a,r,c,o){return Object(n["p"])(),Object(n["d"])("div",{class:"game__main-panel",onClick:t[1]||(t[1]=function(){return o.redirectToGame&&o.redirectToGame.apply(o,arguments)})},[Object(n["g"])("div",{class:"name-container",id:a.game.game_id+"container"},[Object(n["g"])("h1",{id:a.game.game_id+"name",class:{overflows:c.overflows}},Object(n["z"])(a.game.game_id),11,["id"])],8,["id"]),Object(n["g"])("div",y,Object(n["z"])(a.game.date),1)])})),C={name:"Game",props:{game:{type:Object,required:!0}},data:function(){return{overflows:!1}},methods:{redirectToGame:function(){Object(i["d"])().push({name:"Game",params:{gameId:this.game.game_id}})}},mounted:function(){var e=document.getElementById(this.game.game_id+"name"),t=document.getElementById(this.game.game_id+"container");e&&(this.overflows=t.clientWidth<e.scrollWidth)}};a("ac36");C.render=w,C.__scopeId="data-v-d4ee0562";var k=C,P={name:"GameHistory",components:{Game:k},props:{games:{required:!0}}};a("c7ff");P.render=v,P.__scopeId="data-v-7b9431da";var G=P,M=Object(n["G"])("data-v-0e005901");Object(n["s"])("data-v-0e005901");var T={class:"manage-new-game__main-class"},x={class:"game-info__wrapper"},S=Object(n["g"])("div",{class:"back-arrow"},null,-1),E=Object(n["g"])("button",null,"Join",-1),q={class:"game-info__wrapper"},I=Object(n["g"])("div",{class:"back-arrow"},null,-1),U=Object(n["g"])("button",null,"Create",-1);Object(n["q"])();var A=M((function(e,t,a,r,c,o){return Object(n["p"])(),Object(n["d"])("div",T,[null===c.choice?(Object(n["p"])(),Object(n["d"])("button",{key:0,onClick:t[1]||(t[1]=function(e){return c.choice="join"})},"Join game")):Object(n["e"])("",!0),null===c.choice?(Object(n["p"])(),Object(n["d"])("button",{key:1,onClick:t[2]||(t[2]=function(e){return c.choice="create"})},"Create game")):Object(n["e"])("",!0),Object(n["E"])(Object(n["g"])("div",x,[Object(n["g"])("form",{onSubmit:t[5]||(t[5]=Object(n["F"])((function(){return o.joinGame&&o.joinGame.apply(o,arguments)}),["prevent"]))},[Object(n["g"])("div",{class:"back-arrow-wrapper",onClick:t[3]||(t[3]=function(e){return c.choice=null})},[S]),Object(n["E"])(Object(n["g"])("input",{placeholder:"Insert game name","onUpdate:modelValue":t[4]||(t[4]=function(e){return c.gameToJoin=e})},null,512),[[n["B"],c.gameToJoin]]),E],32)],512),[[n["C"],"join"===c.choice]]),Object(n["E"])(Object(n["g"])("div",q,[Object(n["g"])("form",{onSubmit:t[8]||(t[8]=Object(n["F"])((function(){return o.createGame&&o.createGame.apply(o,arguments)}),["prevent"]))},[Object(n["g"])("div",{class:"back-arrow-wrapper",onClick:t[6]||(t[6]=function(e){return c.choice=null})},[I]),Object(n["E"])(Object(n["g"])("input",{placeholder:"Insert game name","onUpdate:modelValue":t[7]||(t[7]=function(e){return c.gameToCreate=e})},null,512),[[n["B"],c.gameToCreate]]),U],32)],512),[[n["C"],"create"===c.choice]]),c.showPopup?(Object(n["p"])(),Object(n["d"])("div",{key:2,class:"game-buttons__popup-background",onClick:t[12]||(t[12]=function(e){return c.showPopup=!1})},[Object(n["g"])("div",{class:"game-buttons__popup",onClick:t[11]||(t[11]=Object(n["F"])((function(){}),["stop"]))},[Object(n["g"])("h1",null,Object(n["z"])(c.popupMessage),1),Object(n["g"])("div",null,[Object(n["g"])("button",{onClick:t[9]||(t[9]=function(e){return o.redirectToGame(c.popupGame)})},Object(n["z"])(c.popupConfirmButton),1),Object(n["g"])("button",{onClick:t[10]||(t[10]=function(e){return c.showPopup=!1})},"Cancel")])])])):Object(n["e"])("",!0)])})),B=1.1,L=100,X=5,N=5,H=["red","blue","green","pink","white"],z={taxi:12,bus:8,underground:4,double_turns:2,secret_moves:2,number_of_total_turns:24,mister_x_is_visible_turns:[3,8,13,18,23]},Y="https://papero.tk",R="https://papero.tk/user/get_info",J="https://papero.tk/server/unseen/games/all",D="https://papero.tk/server/unseen/games/status_by_id",F="https://papero.tk/auth/local",$="https://papero.tk/auth/logout",K=a("bc3a"),Q=a.n(K),V={name:"GameButtons",data:function(){return{router:Object(i["d"])(),choice:null,gameToJoin:null,gameToCreate:null,showPopup:!1,popupMessage:"",popupConfirmButton:"",popupGame:null}},methods:{joinGame:function(){var e=this;this.gameToJoin&&Q.a.get(D,{params:{game_id:this.gameToJoin}}).then((function(t){t.data?e.router.push({name:"Game",params:{gameId:e.gameToJoin}}):(e.popupMessage="This game does not exist",e.popupConfirmButton="Create it now",e.popupGame=e.gameToJoin,e.showPopup=!0)}))},createGame:function(){var e=this;this.gameToCreate&&Q.a.get(D,{params:{game_id:this.gameToCreate}}).then((function(t){t.data?(e.popupMessage="This game already exists",e.popupConfirmButton="Join it now",e.popupGame=e.gameToCreate,e.showPopup=!0):e.router.push({name:"Game",params:{gameId:e.gameToCreate}})}))},redirectToGame:function(e){this.router.push({name:"Game",params:{gameId:e}})}}};a("994e");V.render=A,V.__scopeId="data-v-0e005901";var W=V,Z=a("cf05"),ee=a.n(Z),te=a("a405"),ae=a.n(te),ne=Object(n["G"])("data-v-02141cc6");Object(n["s"])("data-v-02141cc6");var re={class:"user-hamburger-menu__menu"},ce={key:0,class:"logged-menu"},oe=Object(n["f"])("Username: "),se={key:1,class:"not-logged-menu"},ie=Object(n["g"])("p",null,"You are currently not logged in",-1),le=Object(n["g"])("img",{src:ae.a},null,-1);Object(n["q"])();var ue=ne((function(e,t,a,r,c,o){var s=Object(n["w"])("ChatContainer");return Object(n["p"])(),Object(n["d"])("div",{class:["user-hamburger-menu__main-panel",{hidden:!c.show}],onClick:t[7]||(t[7]=Object(n["F"])((function(){}),["stop"]))},[Object(n["g"])("div",re,[Object(n["g"])("img",{class:"home-button",src:ee.a,onClick:t[1]||(t[1]=function(){return o.redirectToHome&&o.redirectToHome.apply(o,arguments)})}),o.username?(Object(n["p"])(),Object(n["d"])("div",ce,[Object(n["g"])("div",null,[Object(n["g"])("p",null,[oe,Object(n["g"])("strong",null,Object(n["z"])(o.username),1)]),a.disableLogout?Object(n["e"])("",!0):(Object(n["p"])(),Object(n["d"])("button",{key:0,onClick:t[2]||(t[2]=function(){return o.logout&&o.logout.apply(o,arguments)})},"Logout"))]),o.logged?Object(n["e"])("",!0):(Object(n["p"])(),Object(n["d"])("button",{key:0,class:"procede-with-google",onClick:t[3]||(t[3]=function(){return o.redirectToGoogle&&o.redirectToGoogle.apply(o,arguments)})},"Activate sync with google"))])):(Object(n["p"])(),Object(n["d"])("div",se,[ie,Object(n["g"])("button",{class:"procede-with-google",onClick:t[4]||(t[4]=function(){return o.redirectToGoogle&&o.redirectToGoogle.apply(o,arguments)})},"Sign in now with google")])),a.showChat?(Object(n["p"])(),Object(n["d"])(s,{key:2,messages:a.messages,onSendMessage:t[5]||(t[5]=function(t){return e.$emit("send-message",t)})},null,8,["messages"])):Object(n["e"])("",!0)]),Object(n["g"])("div",{class:["user-hamburger-menu__icon",{rotated:c.show}],onClick:t[6]||(t[6]=function(e){return c.show=!c.show})},[le],2)],2)})),pe=a("5502"),de=Object(n["G"])("data-v-694a5be7");Object(n["s"])("data-v-694a5be7");var be={class:"chat__main-panel"},me={class:"chat__container",id:"chat-container"},ge=Object(n["g"])("button",null,"Send",-1);Object(n["q"])();var Oe=de((function(e,t,a,r,c,o){var s=Object(n["w"])("InfoMessage"),i=Object(n["w"])("RegularMessage");return Object(n["p"])(),Object(n["d"])("div",be,[Object(n["g"])("div",me,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(a.messages,(function(e,t){return Object(n["p"])(),Object(n["d"])("div",{class:"chat__message-container",key:t},[-1===e.localId?(Object(n["p"])(),Object(n["d"])(s,{key:0,message:e},null,8,["message"])):(Object(n["p"])(),Object(n["d"])(i,{key:1,message:e},null,8,["message"]))])})),128))]),Object(n["g"])("form",{class:"chat__input",onSubmit:t[2]||(t[2]=Object(n["F"])((function(){return o.sendMessage&&o.sendMessage.apply(o,arguments)}),["prevent"]))},[Object(n["E"])(Object(n["g"])("input",{placeholder:"Type a message","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.message=e})},null,512),[[n["B"],c.message]]),ge],32)])})),je=Object(n["G"])("data-v-0cd7bf87");Object(n["s"])("data-v-0cd7bf87");var fe={class:"regular-message__body"};Object(n["q"])();var _e=je((function(e,t,a,r,c,o){return Object(n["p"])(),Object(n["d"])("div",{class:["regular-message__main-panel",{"right-aligned":a.message.fromYou}]},[Object(n["g"])("strong",{class:"regular-message__username",style:{color:a.message.color}},Object(n["z"])(a.message.username),5),Object(n["g"])("p",fe,Object(n["z"])(a.message.body),1)],2)})),ve={name:"RegularMessage",props:{message:Object}};a("6f61");ve.render=_e,ve.__scopeId="data-v-0cd7bf87";var he=ve,ye=Object(n["G"])("data-v-75975d6c");Object(n["s"])("data-v-75975d6c");var we={class:"info-message__main-panel"},Ce={class:"info-message__body"};Object(n["q"])();var ke=ye((function(e,t,a,r,c,o){return Object(n["p"])(),Object(n["d"])("div",we,[Object(n["g"])("p",Ce,Object(n["z"])(a.message.body),1)])})),Pe={name:"InfoMessage",props:{message:Object}};a("ee0a");Pe.render=ke,Pe.__scopeId="data-v-75975d6c";var Ge=Pe,Me={name:"ChatContainer",components:{InfoMessage:Ge,RegularMessage:he},props:{messages:Array},data:function(){return{message:null}},methods:{sendMessage:function(){this.message&&""!==this.message&&(this.$emit("send-message",{message:this.message}),this.message="")}}};a("9593");Me.render=Oe,Me.__scopeId="data-v-694a5be7";var Te=Me,xe={name:"UserHamburgerMenu",components:{ChatContainer:Te},props:{showChat:Boolean,messages:Array,disableLogout:Boolean},data:function(){return{store:Object(pe["b"])(),show:!1}},computed:{logged:function(){return this.store.state.logged},username:function(){return this.store.state.username}},mounted:function(){var e=this;window.addEventListener("click",(function(){e.show=!1}))},methods:{redirectToHome:function(){window.location.href="/"},redirectToGoogle:function(){var e=window.location;window.location.href="/auth/google?from_location="+e},logout:function(){Q.a.get($),this.store.dispatch("setLogged",!1),this.store.dispatch("setUsername",null)}}};a("a190");xe.render=ue,xe.__scopeId="data-v-02141cc6";var Se=xe,Ee={name:"Home",components:{UserHamburgerMenu:Se,GameButtons:W,GameHistory:G,Header:O},data:function(){return{games:null,store:Object(pe["b"])()}},mounted:function(){var e=this;Q.a.get(J).then((function(t){e.games=t.data}))}};a("505f");Ee.render=u;var qe=Ee,Ie=Object(n["G"])("data-v-580d617e");Object(n["s"])("data-v-580d617e");var Ue={class:"game__main-panel"};Object(n["q"])();var Ae=Ie((function(e,t,a,r,c,o){var s=Object(n["w"])("UserHamburgerMenu"),i=Object(n["w"])("PregamePhase"),l=Object(n["w"])("GamePhase"),u=Object(n["w"])("PostGamePhase");return Object(n["p"])(),Object(n["d"])("div",Ue,[Object(n["g"])(s,{"show-chat":!0,messages:r.messages,"disable-logout":!0,onSendMessage:r.sendMessage},null,8,["messages","onSendMessage"]),0===r.status?(Object(n["p"])(),Object(n["d"])(i,{key:0,players:r.players,"current-player":r.currentPlayer,onJoingame:r.joinGame,onQuitgame:r.quitGame,onKickplayer:r.kickPlayer,onChangecolor:r.changeColor,onChangemisterx:r.changeMisterX,onStartgame:r.startGame},null,8,["players","current-player","onJoingame","onQuitgame","onKickplayer","onChangecolor","onChangemisterx","onStartgame"])):1===r.status?(Object(n["p"])(),Object(n["d"])(l,{key:1,players:r.players,"current-player":r.currentPlayer,game:r.game},null,8,["players","current-player","game"])):2===r.status?(Object(n["p"])(),Object(n["d"])(u,{key:2})):Object(n["e"])("",!0)])})),Be=(a("4160"),a("159b"),a("d3b7"),a("25f0"),Object(n["G"])("data-v-63b32642"));Object(n["s"])("data-v-63b32642");var Le={class:"pregame-phase__main-panel"},Xe=Object(n["g"])("header",{class:"pregame-phase__header"},"Unseen",-1),Ne={class:"pregame-phase__players"},He=Object(n["g"])("div",{class:"pregame-phase__players-table"},null,-1),ze={class:"pregame-phase__buttons"},Ye={class:"pregame-phase__information-panel"},Re=Object(n["g"])("label",{for:"pregame-phase__url"},"Copy the url and share it with your friends!",-1),Je=Object(n["g"])("br",null,null,-1),De={id:"pregame-phase__url",class:"pregame-phase__copy"},Fe=Object(n["f"])("Copy"),$e=Object(n["g"])("label",{for:"pregame-phase__tag"},"Or send them this tag!",-1),Ke=Object(n["g"])("br",null,null,-1),Qe={id:"pregame-phase__tag",class:"pregame-phase__copy"},Ve=Object(n["f"])("Copy"),We={class:"pregame-phase__admin-and-mister-x"},Ze=Object(n["f"])("The admin of this lobby is: ");Object(n["q"])();var et=Be((function(e,t,a,r,c,o){var s=Object(n["w"])("PlayerLabel"),i=Object(n["w"])("ChangeColorPopup"),l=Object(n["w"])("ChangeMisterXPopup"),u=Object(n["x"])("clipboard");return Object(n["p"])(),Object(n["d"])("div",Le,[Xe,Object(n["g"])("div",Ne,[He,(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(a.players,(function(r){return Object(n["p"])(),Object(n["d"])(s,{key:r.local_id,player:r,"current-player":a.currentPlayer,onKickplayer:t[1]||(t[1]=function(t){return e.$emit("kickplayer",t)})},null,8,["player","current-player"])})),128))]),Object(n["g"])("div",ze,[a.currentPlayer&&!a.currentPlayer.is_mister_x?(Object(n["p"])(),Object(n["d"])("button",{key:0,onClick:t[2]||(t[2]=function(e){return c.showChangeColorPopup=!0})},"Change your pawn")):Object(n["e"])("",!0),a.currentPlayer?Object(n["e"])("",!0):(Object(n["p"])(),Object(n["d"])("button",{key:1,class:"pregame-phase__buttons__join-game",onClick:t[3]||(t[3]=function(t){return e.$emit("joingame")})},"Join game")),a.currentPlayer&&a.currentPlayer.is_admin?(Object(n["p"])(),Object(n["d"])("button",{key:2,onClick:t[4]||(t[4]=function(){return o.startGame&&o.startGame.apply(o,arguments)})},"Start game")):Object(n["e"])("",!0),!a.currentPlayer||!a.currentPlayer.is_admin||1===a.players.length&&a.currentPlayer.is_mister_x?Object(n["e"])("",!0):(Object(n["p"])(),Object(n["d"])("button",{key:3,class:{"pregame-phase__buttons__change-mister-x":!o.misterXUsername,"pulse-mister-x":c.pulseMisterXButton},onClick:t[5]||(t[5]=function(e){return c.showChangeMisterXPopup=!0})},"Choose Mister X",2)),a.currentPlayer&&1!==a.players.length?(Object(n["p"])(),Object(n["d"])("button",{key:4,onClick:t[6]||(t[6]=function(t){return e.$emit("quitgame")})},"Quit game")):Object(n["e"])("",!0)]),Object(n["g"])("div",Ye,[Object(n["g"])("div",{class:"pregame-phase__copy-container",onMouseover:t[8]||(t[8]=function(e){return c.hoverUrl=!0}),onMouseleave:t[9]||(t[9]=function(e){return c.hoverUrl=!1})},[Re,Je,Object(n["g"])("p",De,Object(n["z"])(o.url.toString()),1),Object(n["E"])(Object(n["g"])("button",{class:{"copy-hover":c.hoverUrl},onClick:t[7]||(t[7]=function(){return o.onCopiedUrl&&o.onCopiedUrl.apply(o,arguments)})},[Fe,Object(n["g"])("span",{class:{copied:c.copiedUrl}},"Copied",2)],2),[[u,o.url,"copy"]])],32),Object(n["g"])("div",{class:"pregame-phase__copy-container",onMouseover:t[11]||(t[11]=function(e){return c.hoverTag=!0}),onMouseleave:t[12]||(t[12]=function(e){return c.hoverTag=!1})},[$e,Ke,Object(n["g"])("p",Qe,Object(n["z"])(o.id),1),Object(n["E"])(Object(n["g"])("button",{class:{"copy-hover":c.hoverTag},onClick:t[10]||(t[10]=function(){return o.onCopiedTag&&o.onCopiedTag.apply(o,arguments)})},[Ve,Object(n["g"])("span",{class:{copied:c.copiedTag}},"Copied",2)],2),[[u,o.id,"copy"]])],32),Object(n["g"])("div",We,[Object(n["g"])("p",null,[Ze,Object(n["g"])("strong",null,Object(n["z"])(o.adminUsername),1)])])]),c.showChangeColorPopup?(Object(n["p"])(),Object(n["d"])("div",{key:0,class:"pregame-phase__popup",onClick:t[14]||(t[14]=function(e){return c.showChangeColorPopup=!1})},[Object(n["g"])(i,{players:a.players,onChangecolor:t[13]||(t[13]=function(t){return e.$emit("changecolor",t)})},null,8,["players"])])):Object(n["e"])("",!0),c.showChangeMisterXPopup?(Object(n["p"])(),Object(n["d"])("div",{key:1,class:"pregame-phase__popup",onClick:t[16]||(t[16]=function(e){return c.showChangeMisterXPopup=!1})},[Object(n["g"])(l,{players:a.players,"current-player":a.currentPlayer,onChangemisterx:t[15]||(t[15]=function(t){return e.$emit("changemisterx",t)})},null,8,["players","current-player"])])):Object(n["e"])("",!0)])})),tt=Object(n["G"])("data-v-6759a06a");Object(n["s"])("data-v-6759a06a");var at={class:"player-label__info-labels"},nt={class:"player-label__username-label"},rt={key:0,class:"player-label__is-you-label"};Object(n["q"])();var ct=tt((function(e,t,r,c,o,s){return Object(n["p"])(),Object(n["d"])("div",{class:["player-label__main-panel",{"player-label__admin-player":r.player.is_admin}]},[Object(n["g"])("img",{src:r.player.is_mister_x?a("4353"):a("5a8c")("./pawn_"+r.player.color+".png"),class:{"kicked-player":o.fadeOut,"hover-animation":o.hoverPlayerAnimation},onClick:t[1]||(t[1]=function(){return s.kickPlayer&&s.kickPlayer.apply(s,arguments)})},null,10,["src"]),Object(n["g"])("div",at,[Object(n["g"])("strong",nt,Object(n["z"])(r.player.username),1),s.isYou?(Object(n["p"])(),Object(n["d"])("strong",rt,"You")):Object(n["e"])("",!0)])],2)})),ot={name:"PlayerLabel",props:{player:{type:Object,required:!0},currentPlayer:{required:!0}},data:function(){return{fadeOut:!1,hoverPlayerAnimation:!0}},methods:{kickPlayer:function(){var e=this;if(!this.isYou&&this.currentPlayer.is_admin){this.fadeOut=!0,this.hoverPlayerAnimation=!1;var t=function(e){return new Promise((function(t){return setTimeout(t,1e3*e)}))};t(2).then((function(){e.$emit("kickplayer",e.player.local_id)}))}}},computed:{isYou:function(){return!!this.currentPlayer&&this.currentPlayer.local_id===this.player.local_id}}};a("0470");ot.render=ct,ot.__scopeId="data-v-6759a06a";var st=ot,it=Object(n["G"])("data-v-33ce6ba8");Object(n["s"])("data-v-33ce6ba8");var lt={class:"change-popup__main-panel"},ut=Object(n["g"])("div",{class:"change-popup__table-panel"},null,-1),pt={class:"change-popup__available-pawns"};Object(n["q"])();var dt=it((function(e,t,r,c,o,s){return Object(n["p"])(),Object(n["d"])("div",lt,[ut,Object(n["g"])("div",pt,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(s.colorsAvailable,(function(t){return Object(n["p"])(),Object(n["d"])("img",{src:a("5a8c")("./pawn_"+t+".png"),key:t,onClick:function(a){return e.$emit("changecolor",t)}},null,8,["src","onClick"])})),128))])])})),bt=(a("caad"),{name:"ChangeColorPopup",props:{players:{type:Array,required:!0}},computed:{colorsAvailable:function(){for(var e=[],t=0;t<this.players.length;t++)e.push(this.players[t].color);for(var a=[],n=0;n<N;n++)e.includes(n)||a.push(n);return a}}});a("a583");bt.render=dt,bt.__scopeId="data-v-33ce6ba8";var mt=bt,gt=Object(n["G"])("data-v-2bc6cf26");Object(n["s"])("data-v-2bc6cf26");var Ot={class:"change-popup__main-panel"},jt=Object(n["g"])("div",{class:"change-popup__table-panel"},null,-1),ft={class:"change-popup__available-pawns"},_t={class:"player-label__info-labels"},vt={class:"player-label__username-label"},ht={key:0,class:"player-label__is-you-label"};Object(n["q"])();var yt=gt((function(e,t,r,c,o,s){return Object(n["p"])(),Object(n["d"])("div",Ot,[jt,Object(n["g"])("div",ft,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(r.players,(function(t){return Object(n["E"])((Object(n["p"])(),Object(n["d"])("div",{class:["change-popup__player-label",{"player-label__admin-player":t.is_admin}],key:t.local_id},[Object(n["g"])("img",{src:t.is_mister_x?a("4353"):a("5a8c")("./pawn_"+t.color+".png"),onClick:function(a){return e.$emit("changemisterx",t.local_id)}},null,8,["src","onClick"]),Object(n["g"])("div",_t,[Object(n["g"])("strong",vt,Object(n["z"])(t.username),1),t.local_id===r.currentPlayer.local_id?(Object(n["p"])(),Object(n["d"])("strong",ht,"You")):Object(n["e"])("",!0)])],2)),[[n["C"],!t.is_mister_x]])})),128))])])})),wt={name:"ChangeMisterXPopup",props:{players:{type:Array,required:!0},currentPlayer:{required:!0}}};a("4034");wt.render=yt,wt.__scopeId="data-v-2bc6cf26";var Ct=wt,kt={name:"PregamePhase",components:{ChangeMisterXPopup:Ct,ChangeColorPopup:mt,PlayerLabel:st},props:{players:{type:Array,required:!0},currentPlayer:{required:!0}},data:function(){return{showChangeColorPopup:!1,showChangeMisterXPopup:!1,hoverUrl:!1,hoverTag:!1,copiedUrl:!1,copiedTag:!1,pulseMisterXButton:!1}},methods:{onCopiedUrl:function(){var e=this;this.copiedUrl=!0;var t=function(e){return new Promise((function(t){return setTimeout(t,1e3*e)}))};t(1).then((function(){e.copiedUrl=!1}))},onCopiedTag:function(){var e=this;this.copiedTag=!0;var t=function(e){return new Promise((function(t){return setTimeout(t,1e3*e)}))};t(1).then((function(){e.copiedTag=!1}))},startGame:function(){var e=this;if(this.misterXUsername)this.$emit("startgame");else{this.pulseMisterXButton=!0;var t=function(e){return new Promise((function(t){return setTimeout(t,1e3*e)}))};t(1).then((function(){e.pulseMisterXButton=!1}))}}},computed:{url:function(){return window.location},id:function(){return Object(i["c"])().params.gameId},adminUsername:function(){for(var e=0;e<this.players.length;e++)if(this.players[e].is_admin)return this.players[e].username;return null},misterXUsername:function(){for(var e=0;e<this.players.length;e++)if(this.players[e].is_mister_x)return this.players[e].username;return null}}};a("17d5");kt.render=et,kt.__scopeId="data-v-63b32642";var Pt=kt,Gt=Object(n["G"])("data-v-2527c12a");Object(n["s"])("data-v-2527c12a");var Mt={class:"game-phase__main-panel"};Object(n["q"])();var Tt=Gt((function(e,t,a,r,c,o){var s=Object(n["w"])("MapManager"),i=Object(n["w"])("GameSideBarNormal"),l=Object(n["w"])("GameSideBarMisterX");return Object(n["p"])(),Object(n["d"])("div",Mt,[Object(n["g"])(s,{class:"game-phase__map-manager"}),a.currentPlayer.is_mister_x?(Object(n["p"])(),Object(n["d"])(l,{key:1,class:"game-phase__game-stats",players:a.players,"current-player":a.currentPlayer,game:a.game},null,8,["players","current-player","game"])):(Object(n["p"])(),Object(n["d"])(i,{key:0,class:"game-phase__game-stats",players:a.players,"current-player":a.currentPlayer,game:a.game},null,8,["players","current-player","game"]))])})),xt=Object(n["G"])("data-v-42da2f0e"),St=xt((function(e,t,a,r,c,o){return Object(n["p"])(),Object(n["d"])("div",{class:"map-manager__main-panel",onWheel:t[1]||(t[1]=Object(n["F"])((function(){return o.zoom&&o.zoom.apply(o,arguments)}),["prevent"])),onMousedown:t[2]||(t[2]=Object(n["F"])((function(){return o.mouseDown&&o.mouseDown.apply(o,arguments)}),["prevent"])),onMousemove:t[3]||(t[3]=Object(n["F"])((function(){return o.mouseMove&&o.mouseMove.apply(o,arguments)}),["prevent"])),onMouseup:t[4]||(t[4]=Object(n["F"])((function(){return o.mouseUp&&o.mouseUp.apply(o,arguments)}),["prevent"]))},[Object(n["g"])("img",{src:"/assets/map.jpeg",class:"map-manager__map",style:{width:o.imgPercentage+"%"}},null,4)],32)})),Et={name:"MapManager",data:function(){return{deltaY:0,dragging:!1}},methods:{verticalScroll:function(e,t){t.scrollTop+=e},horizontalScroll:function(e,t){t.scrollLeft+=e},keyPressed:function(e){var t=".map-manager__main-panel";switch(e.key.toString().toLowerCase()){case"w":this.verticalScroll(-X,document.querySelector(t));break;case"arrowup":this.verticalScroll(-X,document.querySelector(t));break;case"a":this.horizontalScroll(-X,document.querySelector(t));break;case"arrowleft":this.horizontalScroll(-X,document.querySelector(t));break;case"s":this.verticalScroll(X,document.querySelector(t));break;case"arrowdown":this.verticalScroll(X,document.querySelector(t));break;case"d":this.horizontalScroll(X,document.querySelector(t));break;case"arrowright":this.horizontalScroll(X,document.querySelector(t));break}},mouseDown:function(){this.dragging=!0},mouseMove:function(e){this.dragging&&(e.target.parentNode.style.cursor="move",e.target.parentNode.scrollLeft-=e.movementX,e.target.parentNode.scrollTop-=e.movementY)},mouseUp:function(e){this.dragging=!1,e.target.parentNode.style.cursor="auto"},zoom:function(e){var t=1;this.deltaY+e.deltaY<0?this.deltaY=0:(this.deltaY+=e.deltaY,t=Math.pow(B,e.deltaY/L));var a=document.querySelector(".map-manager__main-panel"),n=e.offsetX*(t-1)+a.scrollLeft*t,r=e.offsetY*(t-1)+a.scrollTop*t;a.scrollLeft=Math.round(n),a.scrollTop=Math.round(r)}},computed:{imgPercentage:function(){return 100*Math.pow(B,this.deltaY/L)}},mounted:function(){window.addEventListener("keydown",this.keyPressed)}};a("e59f");Et.render=St,Et.__scopeId="data-v-42da2f0e";var qt=Et,It=Object(n["G"])("data-v-11f1ca98");Object(n["s"])("data-v-11f1ca98");var Ut={class:"game-sidebar-normal__main-panel"},At={class:"game-sidebar-normal__players"},Bt={class:"game-sidebar-normal__transport-cards"},Lt={class:"game-sidebar-normal__transport-wrapper"},Xt={class:"game-sidebar-normal__transport-wrapper"},Nt={class:"game-sidebar-normal__transport-wrapper"},Ht={class:"game-sidebar-normal__misterx-table"};Object(n["q"])();var zt=It((function(e,t,a,r,c,o){var s=Object(n["w"])("PlayerLabel"),i=Object(n["w"])("TransportCard"),l=Object(n["w"])("MisterXTable");return Object(n["p"])(),Object(n["d"])("div",Ut,[Object(n["g"])("div",At,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(a.players,(function(e){return Object(n["p"])(),Object(n["d"])(s,{key:e.local_id,player:e,"is-playing":e.local_id===a.game.playingPlayer},null,8,["player","is-playing"])})),128))]),Object(n["g"])("div",Bt,[Object(n["g"])("div",Lt,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(o.remainingTaxis,(function(e){return Object(n["p"])(),Object(n["d"])(i,{key:e,src:"/assets/taxi_icon.png",color:"yellow"})})),128))]),Object(n["g"])("div",Xt,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(o.remainingBuses,(function(e){return Object(n["p"])(),Object(n["d"])(i,{key:e,src:"/assets/bus_icon.png",color:"blue"})})),128))]),Object(n["g"])("div",Nt,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(o.remainingUndergrounds,(function(e){return Object(n["p"])(),Object(n["d"])(i,{key:e,src:"/assets/underground_icon.svg",color:"red"})})),128))])]),Object(n["g"])("div",Ht,[Object(n["g"])(l)])])})),Yt=Object(n["G"])("data-v-622d1fb6");Object(n["s"])("data-v-622d1fb6");var Rt={class:"player-label__main-panel"},Jt={key:0,src:"/assets/misterx_icon.png"};Object(n["q"])();var Dt=Yt((function(e,t,a,r,c,o){return Object(n["p"])(),Object(n["d"])("div",Rt,[Object(n["g"])("div",{class:["player-label__player-information",{"player-label__playing-player":a.isPlaying}]},[Object(n["g"])("div",{class:"player-label__color-badge",style:{backgroundColor:o.playerColor}},null,4),Object(n["g"])("strong",null,Object(n["z"])(a.player.username),1),a.player.is_mister_x?(Object(n["p"])(),Object(n["d"])("img",Jt)):Object(n["e"])("",!0)],2)])})),Ft={name:"PlayerLabel",props:{player:{type:Object,required:!0},isPlaying:{type:Boolean,required:!0}},computed:{playerColor:function(){return N[this.player.color]}}};a("b5fc");Ft.render=Dt,Ft.__scopeId="data-v-622d1fb6";var $t=Ft,Kt=Object(n["G"])("data-v-343523c3"),Qt=Kt((function(e,t,a,r,c,o){return Object(n["p"])(),Object(n["d"])("div",{class:"transport-card__main-panel",style:{backgroundColor:a.color}},[Object(n["g"])("img",{class:"transport-card__image",src:a.src},null,8,["src"])],4)})),Vt={name:"TransportCard",props:{src:{type:String,required:!0},color:{type:String,required:!0}}};a("9be6");Vt.render=Qt,Vt.__scopeId="data-v-343523c3";var Wt=Vt,Zt=(a("2532"),Object(n["G"])("data-v-7d7830d9"));Object(n["s"])("data-v-7d7830d9");var ea=Object(n["g"])("div",{class:"mister-x-table__turn-transport"},null,-1);Object(n["q"])();var ta=Zt((function(e,t,a,r,c,o){return Object(n["p"])(),Object(n["d"])("div",{class:"mister-x-table__main-panel",style:{gridTemplateRows:"repeat("+c.gameConfig.number_of_total_turns/4+", 1fr)"}},[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(c.gameConfig.number_of_total_turns,(function(e){return Object(n["p"])(),Object(n["d"])("div",{class:"mister-x-table__turn__wrapper",key:e},[Object(n["g"])("div",{class:["mister-x-table__turn-number",{"mister-x-table__revelation-turn-number":c.gameConfig.mister_x_is_visible_turns.includes(e)}]},Object(n["z"])(e),3),ea])})),128))],4)})),aa={name:"MisterXTable",data:function(){return{gameConfig:z}}};a("9fc6");aa.render=ta,aa.__scopeId="data-v-7d7830d9";var na=aa,ra={name:"GameSideBarNormal",components:{MisterXTable:na,TransportCard:Wt,PlayerLabel:$t},props:{players:{type:Array,required:!0},currentPlayer:{required:!0},game:{type:Object,required:!0}},computed:{remainingTaxis:function(){return z.taxi-this.currentPlayer.used_taxi},remainingBuses:function(){return z.bus-this.currentPlayer.used_bus},remainingUndergrounds:function(){return z.underground-this.currentPlayer.used_underground}}};a("c86b");ra.render=zt,ra.__scopeId="data-v-11f1ca98";var ca=ra,oa=Object(n["G"])("data-v-6aebdd9a");Object(n["s"])("data-v-6aebdd9a");var sa={class:"game-sidebar-normal__main-panel"},ia={class:"game-sidebar-normal__players"},la={class:"game-sidebar-normal__transport-cards"},ua={class:"game-sidebar-normal__transport-wrapper"},pa={class:"game-sidebar-normal__transport-wrapper"},da={class:"game-sidebar-normal__misterx-table"};Object(n["q"])();var ba=oa((function(e,t,a,r,c,o){var s=Object(n["w"])("PlayerLabel"),i=Object(n["w"])("TransportCard"),l=Object(n["w"])("MisterXTable");return Object(n["p"])(),Object(n["d"])("div",sa,[Object(n["g"])("div",ia,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["v"])(a.game.players,(function(e){return Object(n["p"])(),Object(n["d"])(s,{key:e.local_id,player:e,"is-playing":e.local_id===a.game.playingPlayer},null,8,["player","is-playing"])})),128))]),Object(n["g"])("div",la,[Object(n["g"])("div",ua,[(Object(n["p"])(),Object(n["d"])(n["a"],null,Object(n["v"])(2,(function(e){return Object(n["g"])(i,{key:e,src:"/assets/2x_icon.png",color:"none"})})),64))]),Object(n["g"])("div",pa,[(Object(n["p"])(),Object(n["d"])(n["a"],null,Object(n["v"])(5,(function(e){return Object(n["g"])(i,{key:e,src:"/assets/secret_transport_icon.png",color:"black"})})),64))])]),Object(n["g"])("div",da,[Object(n["g"])(l)])])})),ma={name:"GameSideBarNormal",components:{MisterXTable:na,TransportCard:Wt,PlayerLabel:$t},props:{players:{type:Array,required:!0},currentPlayer:{required:!0},game:{type:Object,required:!0}}};a("97a4");ma.render=ba,ma.__scopeId="data-v-6aebdd9a";var ga=ma,Oa={name:"GamePhase",components:{GameSideBarNormal:ca,GameSideBarMisterX:ga,MapManager:qt},props:{players:{type:Array,required:!0},currentPlayer:{required:!0},game:{type:Object,required:!0}}};a("008d");Oa.render=Tt,Oa.__scopeId="data-v-2527c12a";var ja=Oa,fa=Object(n["G"])("data-v-20d2bdd2"),_a=fa((function(e,t,a,r,c,o){return Object(n["p"])(),Object(n["d"])("div",null," postgame ")})),va={name:"PostGamePhase"};va.render=_a,va.__scopeId="data-v-20d2bdd2";var ha=va,ya={CONNECT_TO_GAME:"connect-to-game",JOIN_GAME:"join-game",QUIT_GAME:"quit-game",KICK_PLAYER:"kick-from-game",LOBBY_MODIFIED:"lobby-modified",CHANGE_COLOR:"change-color",CHANGE_MISTER_X:"change-mister-x",CHAT:"chat",START_GAME:"start-game",MOVE:"move",MOVE_MISTER_X:"move-mister-x",END_GAME:"end-game"},wa=a("8055"),Ca=a.n(wa),ka=a("a1e9"),Pa={name:"Game",components:{PostGamePhase:ha,GamePhase:ja,PregamePhase:Pt,UserHamburgerMenu:Se},setup:function(){var e=Ca()(Y,{path:"/unseen/socket.io/"}),t=Object(i["c"])().params.gameId,a=Object(ka["j"])(void 0),n=Object(ka["j"])(void 0),r=Object(ka["j"])([]),c=Object(ka["j"])({}),o=Object(ka["j"])([]);function s(e){a.value=e.status,null!=e.your_local_id?e.players.forEach((function(t){t.local_id===e.your_local_id&&(n.value=t)})):n.value=null,r.value=e.players,c.value={playingPlayer:e.players_turn,isRevelation:e.is_revelation_turn,lastMisterXKnownPosition:e.last_known_position,misterXMoves:e.mister_x_moves}}function l(){e.emit(ya.JOIN_GAME)}function u(){e.emit(ya.QUIT_GAME)}function p(t){e.emit(ya.KICK_PLAYER,t)}function d(t){e.emit(ya.CHANGE_COLOR,t)}function b(){e.emit(ya.START_GAME)}function m(t){e.emit(ya.CHANGE_MISTER_X,t)}function g(t){var a=t;a._from=n.value.local_id,e.emit(ya.CHAT,a)}function O(e){var t={};t.localId=e._from,t.username=j(e._from),t.body=e.message,t.color=f(e._from),t.fromYou=e._from===n.value.local_id,o.value.push(t);var a=setInterval((function(){var e=document.getElementById("chat-container");e.scrollTop=e.scrollHeight,clearInterval(a)}),100)}function j(e){for(var t=0;t<r.value.length;t++)if(r.value[t].local_id===e)return r.value[t].username;return null}function f(e){for(var t=0;t<r.value.length;t++)if(r.value[t].local_id===e)return H[r.value[t].color];return null}return e.emit(ya.CONNECT_TO_GAME,{game_id:t}),e.on(ya.CONNECT_TO_GAME,(function(e){s(e)})),e.on(ya.LOBBY_MODIFIED,(function(e){s(e)})),e.on(ya.START_GAME,(function(e){s(e)})),e.on(ya.CHAT,(function(e){O(e)})),{status:a,currentPlayer:n,players:r,game:c,messages:o,joinGame:l,quitGame:u,kickPlayer:p,changeColor:d,changeMisterX:m,startGame:b,sendMessage:g}}};a("d3a3");Pa.render=Ae,Pa.__scopeId="data-v-580d617e";var Ga=Pa,Ma=Object(pe["a"])({state:{username:null,logged:!1},mutations:{SET_USERNAME:function(e,t){e.username=t},SET_LOGGED:function(e,t){e.logged=t}},actions:{setUsername:function(e,t){var a=e.commit;a("SET_USERNAME",t)},setLogged:function(e,t){var a=e.commit;a("SET_LOGGED",t)}}}),Ta=[{path:"/unseen",name:"Home",component:qe},{path:"/unseen/:gameId",name:"Game",component:Ga}],xa=Object(i["a"])({history:Object(i["b"])(),base:"unseen",routes:Ta});xa.beforeEach(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t,a,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:Q.a.get(R).then((function(e){e.data?(Ma.dispatch("setLogged",e.data.google_signed_in),Ma.dispatch("setUsername",e.data.username),n()):(Ma.dispatch("setLogged",!1),"Game"===t.name?Q.a.get(F).then((function(){n()})):n())}));case 1:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}());var Sa=xa,Ea=a("c479"),qa=a.n(Ea),Ia=Object(n["c"])(o);Ia.use(Sa),Ia.use(Ma),Ia.use(qa.a),Ia.mount("#app")},"5a8c":function(e,t,a){var n={"./pawn_0.png":"2f79","./pawn_1.png":"624c","./pawn_2.png":"436e","./pawn_3.png":"05ac","./pawn_4.png":"044a","./pawn_mister_x.png":"4353"};function r(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id="5a8c"},"610d":function(e,t,a){},"624c":function(e,t,a){e.exports=a.p+"img/pawn_1.a4e8246a.png"},"6f61":function(e,t,a){"use strict";a("c1a5")},"7d09":function(e,t,a){},"7f71":function(e,t,a){},"8bf2":function(e,t,a){},9593:function(e,t,a){"use strict";a("0cf1")},"97a4":function(e,t,a){"use strict";a("9815")},9815:function(e,t,a){},"994e":function(e,t,a){"use strict";a("2f61")},"9be6":function(e,t,a){"use strict";a("b99c")},"9fc6":function(e,t,a){"use strict";a("e25a")},a190:function(e,t,a){"use strict";a("1a45")},a405:function(e,t,a){e.exports=a.p+"img/hamburger_icon.dfd455a4.png"},a583:function(e,t,a){"use strict";a("5676")},ac36:function(e,t,a){"use strict";a("8bf2")},b5fc:function(e,t,a){"use strict";a("f8bf")},b99c:function(e,t,a){},c1a5:function(e,t,a){},c2b7:function(e,t,a){},c7ff:function(e,t,a){"use strict";a("e448")},c86b:function(e,t,a){"use strict";a("05c8")},cf05:function(e,t,a){e.exports=a.p+"img/logo.d2ad68a3.png"},d3a3:function(e,t,a){"use strict";a("7f71")},e25a:function(e,t,a){},e448:function(e,t,a){},e59f:function(e,t,a){"use strict";a("eb72")},eb72:function(e,t,a){},ee0a:function(e,t,a){"use strict";a("0894")},f8bf:function(e,t,a){}});
//# sourceMappingURL=app.0f9f15a6.js.map