(function(e){function t(t){for(var a,i,s=t[0],o=t[1],l=t[2],u=0,b=[];u<s.length;u++)i=s[u],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&b.push(c[i][0]),c[i]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);d&&d(t);while(b.length)b.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,s=1;s<n.length;s++){var o=n[s];0!==c[o]&&(a=!1)}a&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},c={app:0},r=[];function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/Faqelize/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var d=o;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},1530:function(e,t,n){"use strict";n("7977")},"182e":function(e,t,n){},2:function(e,t){},3:function(e,t){},4:function(e,t){},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23");function c(e,t){var n=Object(a["C"])("router-view");return Object(a["v"])(),Object(a["e"])(n)}n("d395");const r={};r.render=c;var i=r,s=n("6c02");n("ac1f"),n("841c"),n("d81d");Object(a["y"])("data-v-74b228da");var o={key:0,class:"loading_holder"},l={key:1,class:"setup_database_holder"},d=["innerHTML"],u={href:"#",target:"_blank"},b={key:2,class:"password_holder"},p={class:"title"},f={class:"right_panel"},O={class:"leftside"},h={key:0,class:"search_holder"},_={class:"menu"},j={class:"areas"},g={key:0,class:"area"},v={key:1,class:"area"},y=["placeholder"],A=Object(a["h"])("i",{class:"bi bi-x"},null,-1),S=[A],E={key:2,class:"area"},m={class:"rightside"};function N(e,t,n,c,r,i){var s=Object(a["C"])("loader"),A=Object(a["C"])("i18nSelect"),N=Object(a["C"])("results");return Object(a["v"])(),Object(a["g"])("div",null,[r.loading&&!r.database_not_found?(Object(a["v"])(),Object(a["g"])("div",o,[Object(a["j"])(s)])):Object(a["f"])("",!0),r.loading&&r.database_not_found?(Object(a["v"])(),Object(a["g"])("div",l,[Object(a["h"])("h2",null,Object(a["E"])(e.$t("DATABASE_NOT_FOUND")),1),Object(a["h"])("p",{innerHTML:e.$t("DATABASE_SETUP")},null,8,d),Object(a["h"])("a",u,Object(a["E"])(e.$t("DATABASE_MORE_INFO")),1)])):Object(a["f"])("",!0),r.loading||r.password_applied?Object(a["f"])("",!0):(Object(a["v"])(),Object(a["g"])("div",b,[Object(a["h"])("div",p,Object(a["E"])(e.$t("ENTER_PASSWORD")),1),Object(a["J"])(Object(a["h"])("input",{type:"password",name:"password","onUpdate:modelValue":t[0]||(t[0]=function(e){return r.password=e}),onKeyup:t[1]||(t[1]=Object(a["K"])((function(){return i.checkPassword&&i.checkPassword.apply(i,arguments)}),["enter"])),autocomplete:"off","data-password-autocomplete":"off"},null,544),[[a["H"],r.password]])])),Object(a["h"])("div",f,[!r.loading&&r.password_applied&&r.database_is_encrypted?(Object(a["v"])(),Object(a["g"])("button",{key:0,class:"logout",onClick:t[2]||(t[2]=function(){return i.logout&&i.logout.apply(i,arguments)})},Object(a["E"])(e.$t("LOGOUT")),1)):Object(a["f"])("",!0),Object(a["j"])(A)]),Object(a["h"])("div",{class:Object(a["q"])({sideholder:!0,showrs:r.showrs})},[Object(a["h"])("div",O,[!r.loading&&r.password_applied?(Object(a["v"])(),Object(a["g"])("div",h,[Object(a["h"])("div",_,[Object(a["h"])("div",{class:Object(a["q"])({menu_item:!0,selected:"all"==r.selected_area}),onClick:t[3]||(t[3]=function(e){return i.change_area("all")})},Object(a["E"])(e.$t("ALL_DATABASE")),3),Object(a["h"])("div",{class:Object(a["q"])({menu_item:!0,selected:"searchbar"==r.selected_area}),onClick:t[4]||(t[4]=function(e){return i.change_area("searchbar")})},Object(a["E"])(e.$t("SEARCHBAR")),3),Object(a["h"])("div",{class:Object(a["q"])({menu_item:!0,selected:"pinned"==r.selected_area}),onClick:t[5]||(t[5]=function(e){return i.change_area("pinned")})},Object(a["E"])(e.$t("PINNED")),3)]),Object(a["h"])("div",j,["all"==r.selected_area?(Object(a["v"])(),Object(a["g"])("div",g,[Object(a["j"])(N,{list:r.database,nothing_text:e.$t("DATABASE_IS_EMPTY"),onPin:i.pin},null,8,["list","nothing_text","onPin"])])):Object(a["f"])("",!0),"searchbar"==r.selected_area?(Object(a["v"])(),Object(a["g"])("div",v,[Object(a["J"])(Object(a["h"])("input",{type:"text",placeholder:e.$t("SEARCH"),onKeyup:t[6]||(t[6]=function(){return i.search&&i.search.apply(i,arguments)}),"onUpdate:modelValue":t[7]||(t[7]=function(e){return r.search_query=e})},null,40,y),[[a["H"],r.search_query]]),""!=r.search_query?(Object(a["v"])(),Object(a["g"])("button",{key:0,class:"clear",onClick:t[8]||(t[8]=function(){return i.clearSearchQuery&&i.clearSearchQuery.apply(i,arguments)})},S)):Object(a["f"])("",!0),Object(a["j"])(N,{display_ids:r.results.map((function(e){return e.id})),list:r.database,nothing_text:r.search_query?e.$t("NO_RESULTS"):"",onPin:i.pin},null,8,["display_ids","list","nothing_text","onPin"])])):Object(a["f"])("",!0),"pinned"==r.selected_area?(Object(a["v"])(),Object(a["g"])("div",E,[Object(a["j"])(N,{display_ids:r.pinned_ids,list:r.database,nothing_text:e.$t("NO_PINNED"),onPin:i.pin},null,8,["display_ids","list","nothing_text","onPin"])])):Object(a["f"])("",!0)])])):Object(a["f"])("",!0)]),Object(a["h"])("div",m,[Object(a["j"])(N,{display_ids:r.pinned_ids,list:r.database,nothing_text:e.$t("NO_PINNED"),onPin:i.pin},null,8,["display_ids","list","nothing_text","onPin"])])],2)])}Object(a["w"])();var w=n("b85c"),T=n("1da1"),D=(n("96cf"),n("7db0"),n("caad"),n("2532"),n("4de4"),n("bc3a")),k=n.n(D);n("b0c0");Object(a["y"])("data-v-1777b90b");var P={class:"language_picker"},L=["value"],I={class:"label"};function x(e,t,n,c,r,i){return Object(a["v"])(),Object(a["g"])("div",P,[Object(a["J"])(Object(a["h"])("select",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return r.lang=e}),onChange:t[1]||(t[1]=function(){return i.changeLanguage&&i.changeLanguage.apply(i,arguments)})},[(Object(a["v"])(!0),Object(a["g"])(a["a"],null,Object(a["B"])(r.langs,(function(e){return Object(a["v"])(),Object(a["g"])("option",{value:e.code,key:"locale-"+e.code},Object(a["E"])(e.name),9,L)})),128))],544),[[a["G"],r.lang]]),Object(a["h"])("div",I,Object(a["E"])(e.$t("SELECT_LANG")),1)])}Object(a["w"])();var R="faqelize_".concat(document.location.hostname,"_locale"),B={data:function(){return{lang:"en",langs:[],localeNames:{en:"English",fr:"Français",de:"Deutsch",es:"Español",it:"Italiano",pt:"Português",ru:"Русский",zh:"中文",ja:"日本語",ko:"한국어",ar:"العربية",tr:"Türkçe",vi:"Tiếng Việt"}}},mounted:function(){var e,t=this.$i18n.availableLocales,n=Object(w["a"])(t);try{for(n.s();!(e=n.n()).done;){var a=e.value;this.langs.push({code:a,name:this.localeNames[a]||a})}}catch(r){n.e(r)}finally{n.f()}var c=localStorage.getItem(R);this.lang=c||this.$i18n.locale||this.$i18n.fallbackLocale,this.changeLanguage()},methods:{changeLanguage:function(){this.$i18n.locale=this.lang,localStorage.setItem(R,this.lang)}}};n("1530");B.render=x,B.__scopeId="data-v-1777b90b";var C=B;Object(a["y"])("data-v-655da9da");var q={class:"results"},$={key:0,class:"no_results"},U=["onClick"],M=Object(a["h"])("br",null,null,-1);function F(e,t,n,c,r,i){return Object(a["v"])(),Object(a["g"])("div",q,[0==r.local_list.length?(Object(a["v"])(),Object(a["g"])("div",$,Object(a["E"])(n.nothing_text),1)):Object(a["f"])("",!0),(Object(a["v"])(!0),Object(a["g"])(a["a"],null,Object(a["B"])(r.local_list,(function(e){return Object(a["v"])(),Object(a["g"])("div",{class:"result",key:"result"+e.id},[Object(a["h"])("button",{class:Object(a["q"])({pin:!0,pinned:e.pinned}),onClick:function(t){return i.pin(e)}},[Object(a["h"])("i",{class:Object(a["q"])(["bi",e.pinned?"bi-star-fill":"bi-star"])},null,2)],10,U),Object(a["h"])("b",null,Object(a["E"])(e.q),1),M,Object(a["i"])(" "+Object(a["E"])(e.a),1)])})),128))])}Object(a["w"])();var H={props:["display_ids","list","nothing_text"],data:function(){return{local_list:[]}},methods:{pin:function(e){this.$emit("pin",{id:e.id,pinned:!e.pinned})},updateList:function(){var e=this;this.display_ids?this.local_list=this.display_ids.map((function(t){return e.list.find((function(e){return e.id==t}))})):this.local_list=this.list}},mounted:function(){this.updateList()},watch:{list:function(){this.updateList()},display_ids:function(){this.updateList()}}};n("f676");H.render=F,H.__scopeId="data-v-655da9da";var G=H;Object(a["y"])("data-v-7b389391");var J={class:"dot-falling"};function z(e,t){return Object(a["v"])(),Object(a["g"])("div",J)}Object(a["w"])();n("76bb");const V={};V.render=z,V.__scopeId="data-v-7b389391";var W,Q=V,K=n("1c46"),Y=n("7f7f"),X="faqelize_".concat(document.location.hostname,"_password"),Z="faqelize_".concat(document.location.hostname,"_pinned");function ee(e,t){try{var n="aes256",a=te(t),c=K.createDecipher(n,a),r=c.update(e[1],"hex","utf8")+c.final("utf8");return JSON.parse(r)}catch(i){return!1}}function te(e){return 32==e.length?e:K.createHash("sha256").update(e).digest("base64").substr(0,32)}var ne={components:{i18nSelect:C,results:G,loader:Q},data:function(){return{showrs:!1,results:[],database:[],search_query:"",password:"",loading:!0,password_applied:!1,database_is_encrypted:!1,database_not_found:!1,selected_area:"all",pinned_ids:[]}},methods:{load:function(){var e=this;return Object(T["a"])(regeneratorRuntime.mark((function t(){var n,a,c,r,i,s,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=localStorage.getItem(X),n&&(e.password=n),e.loading=!0,t.next=5,e.fetchDB();case 5:if(a=t.sent,!a.error){t.next=11;break}return console.error("Can't fetch database",a.error),"INVALID_PASSWORD"==a.error&&e.logout(),"DATABASE_NOT_FOUND"==a.error&&(e.database_not_found=!0),t.abrupt("return");case 11:if(e.loading=!1,e.password_applied=!0,e.database_is_encrypted=a.encrypted,a.encrypted&&localStorage.setItem(X,te(e.password)),!a.value[0].id)for(c in a.value)a.value[c].id=c;e.database=a.value,W=new Y.default({fields:["q"],storeFields:["q","a"]}),W.addAll(a.value),r=localStorage.getItem(Z),r||(localStorage.setItem(Z,JSON.stringify([])),r="[]"),e.pinned_ids=JSON.parse(r),i=Object(w["a"])(e.pinned_ids);try{for(o=function(){var t=s.value,n=e.database.find((function(e){return e.id==t}));n&&(n.pinned=!0)},i.s();!(s=i.n()).done;)o()}catch(l){i.e(l)}finally{i.f()}case 24:case"end":return t.stop()}}),t)})))()},search:function(){var e=W.search(this.search_query);this.results=e},fetchDB:function(){var e=this;return Object(T["a"])(regeneratorRuntime.mark((function t(){var n,a,c,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=[],a=!1,c=!1,t.prev=3,t.next=6,k.a.get(c?"database.json":"database_encrypted.json");case 6:r=t.sent,t.next=12;break;case 9:return t.prev=9,t.t0=t["catch"](3),t.abrupt("return",{error:"DATABASE_NOT_FOUND"});case 12:if(n=r.data,!n){t.next=19;break}if("encrypted"!=n[0]){t.next=19;break}if(a=!0,n=ee(n,e.password),n){t.next=19;break}return t.abrupt("return",{error:"INVALID_PASSWORD",encrypted:a});case 19:return t.abrupt("return",{value:n,encrypted:a});case 20:case"end":return t.stop()}}),t,null,[[3,9]])})))()},checkPassword:function(e){13==e.keyCode&&this.load()},logout:function(){this.loading=!1,this.password_applied=!1,localStorage.removeItem(X),this.password="",this.search_query="",this.results=[]},change_area:function(e){this.selected_area=e},pin:function(e){var t=e.id,n=e.pinned;if(this.database[t].pinned=n,n){if(this.pinned_ids.includes(t))return;this.pinned_ids.push(t)}else this.pinned_ids=this.pinned_ids.filter((function(e){return e!=t}));this.$forceUpdate(),console.log(this.pinned_ids),localStorage.setItem(Z,JSON.stringify(this.pinned_ids))},clearSearchQuery:function(){this.search_query="",this.search()}},mounted:function(){this.load()}};n("959e");ne.render=N,ne.__scopeId="data-v-74b228da";var ae=ne,ce=[{path:"/",name:"Main",component:ae}],re=Object(s["a"])({history:Object(s["b"])("/Faqelize/"),routes:ce}),ie=re,se=n("ab42"),oe=(n("cd74"),Object(se["a"])({locale:"en",messages:{en:n("b7d15"),ru:n("cd5e")}})),le=Object(a["d"])(i);le.use(ie),le.use(oe),le.mount("#app")},"5e14":function(e,t,n){},6:function(e,t){},7:function(e,t){},"76bb":function(e,t,n){"use strict";n("a7d1")},7977:function(e,t,n){},8:function(e,t){},9:function(e,t){},"959e":function(e,t,n){"use strict";n("182e")},a7d1:function(e,t,n){},b7d15:function(e,t){e.exports={ENTER_PASSWORD:"Enter the password",LOADING:"Loading",LOGOUT:"Logout",SEARCH:"Search...",NO_RESULTS:"No results ¯\\_(ツ)_/¯",SELECT_LANG:"Interface language",DATABASE_NOT_FOUND:"Q/A Database not found",DATABASE_SETUP:"Create <b>database.json</b> in <b>/public</b> directory.",DATABASE_MORE_INFO:"More info",DATABASE_IS_EMPTY:"Database is empty",ALL_DATABASE:"All data",SEARCHBAR:"Search",PINNED:"Pinned",NO_PINNED:"There are no pinned items."}},bd7a:function(e,t,n){},cd5e:function(e,t){e.exports={ENTER_PASSWORD:"Введите пароль",LOADING:"Загрузка",LOGOUT:"Выход",SEARCH:"Поиск...",NO_RESULTS:"Нет результатов ¯\\_(ツ)_/¯",SELECT_LANG:"Язык интерфейса",DATABASE_NOT_FOUND:"Файл с данными на найден",DATABASE_SETUP:"Создайте <b>database.json</b> в папке <b>/public</b>.",DATABASE_MORE_INFO:"Подробнее",DATABASE_IS_EMPTY:"База данных пуста",ALL_DATABASE:"Все данные",SEARCHBAR:"Поиск",PINNED:"Закрепленные",NO_PINNED:"Нет закрепленных результатов."}},d395:function(e,t,n){"use strict";n("5e14")},f676:function(e,t,n){"use strict";n("bd7a")}});
//# sourceMappingURL=app.e84500d8.js.map