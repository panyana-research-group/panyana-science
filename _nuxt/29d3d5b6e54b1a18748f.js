(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{459:function(t,e,n){var content=n(468);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("378b1c3e",content,!0,{sourceMap:!1})},461:function(t,e,n){"use strict";function o(t){return function(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(e,"a",function(){return o})},463:function(t,e,n){"use strict";n.d(e,"a",function(){return l});n(462);var o=n(472),r=n.n(o),l={data:function(){return{baseHeaders:[{text:"Name",value:"name",width:"110px",align:"right"},{text:"Weight",value:"weight",width:"50px",align:"center",class:"px-0"}],scale:r.a.bezier(["lightyellow","orange","deeppink","darkred"]).scale(),pagination:{sortBy:"weight",rowsPerPage:-1},max:{}}},methods:{getStyle:function(t,e){switch(e){case"statValue":if(0===t)return{backgroundColor:"#949494",color:"#000000"};var n=this.scale.domain([0,this.max[this.slot]])(t).hex();return{backgroundColor:n,color:r.a.contrast(this.$vuetify.theme.primary,n)>4.5?this.$vuetify.theme.primary:this.$vuetify.theme.secondary};case"weight":var o=this.scale.domain([this.max.weightMin,this.max.weightMax])(t).hex();return{backgroundColor:o,color:r.a.contrast(this.$vuetify.theme.primary,o)>4.5?this.$vuetify.theme.primary:this.$vuetify.theme.secondary,textAlign:"center",borderRight:"5px solid black"}}},round:function(t,e){return Number(Math.round(t+"e"+e)+"e-"+e)}}}},465:function(t,e,n){var o=n(25),r=n(466)(!1);o(o.S,"Object",{values:function(t){return r(t)}})},466:function(t,e,n){var o=n(59),r=n(60),l=n(97).f;t.exports=function(t){return function(e){for(var n,c=r(e),h=o(c),m=h.length,i=0,d=[];m>i;)l.call(c,n=h[i++])&&d.push(t?[n,c[n]]:c[n]);return d}}},467:function(t,e,n){"use strict";var o=n(459);n.n(o).a},468:function(t,e,n){(t.exports=n(5)(!1)).push([t.i,"table.v-table thead th.column{padding:0 16px}",""])},469:function(t,e,n){"use strict";n(96),n(41),n(465);var o=n(461),r={name:"MaterialsChart",mixins:[n(463).a],props:{type:{type:String,default:""},typeOptions:{type:Array,default:function(){return[]}},headers:{type:Object,default:function(){}},embed:Boolean},head:function(){var t=this.type;return{title:"".concat(t," Materials"),meta:[{hid:"og:title",name:"og:title",content:"".concat(t," Material Boosts")},{hid:"og:description",name:"og:description",content:"Shows various materials effects on crafting ".concat(t.toLowerCase(),"s")}]}},data:function(){return{materials:[],slot:this.typeOptions[0].value||null}},mounted:function(){var t=this;this.$api.get("/materials/all").then(function(e){t.materials=e.data,t.materials.forEach(function(e){for(var n in t.max.weightMax?t.max.weightMax=Math.max(t.max.weightMax,e.weight):t.max.weightMax=e.weight,t.max.weightMin?t.max.weightMin=Math.min(t.max.weightMin,e.weight):t.max.weightMin=e.weight,e.boosts[t.type.toLowerCase()])t.max[n]?t.max[n]=Math.max(t.max[n],Math.max.apply(Math,Object(o.a)(Object.values(e.boosts[t.type.toLowerCase()][n])))):t.max[n]=Math.max.apply(Math,Object(o.a)(Object.values(e.boosts[t.type.toLowerCase()][n])))})}).catch(console.error)}},l=(n(467),n(40)),c=n(95),h=n.n(c),m=n(151),d=n(218),f=n(177),x=n(156),v=n(159),y=n(112),component=Object(l.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:"",wrap:"","justify-start":t.embed}},[n("v-flex",{attrs:{shrink:t.embed}},[n("v-card",{staticClass:"mx-auto",attrs:{color:"primary",width:t.embed?"550px":"650px",flat:t.embed}},[n("v-card-text",{staticClass:"headline text-xs-center secondary--text"},[t._v("\n        "+t._s(t.type)+" Material Boosts\n      ")]),t._v(" "),n("v-card-actions",[n("v-select",{staticClass:"secondary--text mx-auto",staticStyle:{"max-width":"200px"},attrs:{items:t.typeOptions,label:"Select an "+t.type.toLowerCase()+" component",color:"accent","hide-details":"",dark:""},model:{value:t.slot,callback:function(e){t.slot=e},expression:"slot"}})],1),t._v(" "),n("v-data-table",{staticClass:"pa-3",attrs:{id:"boostTable",headers:t.baseHeaders.concat(t.headers[t.slot]),items:t.materials,pagination:t.pagination,"hide-actions":"",dark:"","must-sort":""},on:{"update:pagination":function(e){t.pagination=e}},scopedSlots:t._u([{key:"items",fn:function(e){return[n("td",{staticClass:"text-xs-right",style:{color:e.item.color}},[t._v("\n            "+t._s(e.item.name)+"\n          ")]),t._v(" "),n("td",{style:t.getStyle(e.item.weight,"weight")},[t._v("\n            "+t._s(e.item.weight)+"\n          ")]),t._v(" "),t._l(e.item.boosts[t.type.toLowerCase()][t.slot],function(o,r){return n("td",{key:o+"_"+r,style:t.getStyle(o,"statValue"),attrs:{id:e.item.name+"_"+r}},[t._v("\n            "+t._s(t.round(100*o,2))+"%\n          ")])})]}}])})],1)],1)],1)},[],!1,null,null,null);e.a=component.exports;h()(component,{VCard:m.a,VCardActions:d.b,VCardText:d.d,VDataTable:f.a,VFlex:x.a,VLayout:v.a,VSelect:y.a})},522:function(t,e,n){"use strict";n.r(e);var o={name:"EngineMaterialsChart",layout:"embed",components:{"materials-chart":n(469).a},data:function(){return{options:[{text:"Mechanical Internals",value:"mech"},{text:"Combustion Internals",value:"comb"},{text:"Propeller",value:"prop"}],headers:{mech:[{text:"Power",value:"boosts.engine.mech.pwr"},{text:"Overheat",value:"boosts.engine.mech.oh"},{text:"Fuel Eff.",value:"boosts.engine.mech.fe"}],comb:[{text:"Power",value:"boosts.engine.comb.pwr"},{text:"Overheat",value:"boosts.engine.comb.oh"},{text:"Spin Up",value:"boosts.engine.comb.su"}],prop:[{text:"Spin Up",value:"boosts.engine.prop.su"},{text:"Fuel Efficiency",value:"boosts.engine.prop.fe"}]}}}},r=n(40),component=Object(r.a)(o,function(){var t=this.$createElement;return(this._self._c||t)("materials-chart",{attrs:{type:"Engine","type-options":this.options,headers:this.headers,embed:""}})},[],!1,null,null,null);e.default=component.exports}}]);