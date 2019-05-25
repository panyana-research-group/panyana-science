(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{460:function(t,e,r){"use strict";r.d(e,"a",function(){return l});var l={data:function(){return{rules:{required:function(t){return!!t||"Required!"},number:function(t){return!isNaN(t)||"Must be a number!"}}}}}},473:function(t,e,r){"use strict";var l={name:"BaseCalc",props:{name:{type:String,default:null},author:{type:String,default:null},form:{type:Boolean,default:null},loading:{type:Boolean,default:!1}},methods:{emit:function(){this.$emit("calc")}}},n=r(40),o=r(95),c=r.n(o),d=r(150),v=r(151),f=r(208),m=r(166),x=r(219),component=Object(n.a)(l,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",{attrs:{color:"info",elevation:"5"}},[r("v-toolbar",{attrs:{color:"primary",dense:"",card:""}},[r("v-toolbar-title",{staticClass:"secondary--text"},[t._v("\n      "+t._s(t.name||"")+"\n      "),t.author?r("span",{staticClass:"body-2 font-weight-regular"},[t._v("\n        by: "+t._s(t.author)+"\n      ")]):t._e()]),t._v(" "),r("v-spacer"),t._v(" "),t._t("buttons"),t._v(" "),r("v-btn",{attrs:{disabled:null!==t.form&&!t.form,loading:t.loading,small:"",color:"success"},on:{click:t.emit}},[t._v("\n      Calculate\n    ")])],2),t._v(" "),t._t("default")],2)},[],!1,null,null,null);e.a=component.exports;c()(component,{VBtn:d.a,VCard:v.a,VSpacer:f.e,VToolbar:m.a,VToolbarTitle:x.d})},519:function(t,e,r){"use strict";r.r(e);r(78);var l=r(473),n=r(460),o=r(474),c=r.n(o),d={name:"ResilienceCalc",components:{BaseCalc:l.a},mixins:[n.a],head:function(){return{title:"Repair Cost Calculator",meta:[{hid:"og:title",name:"og:title",content:"Repair Cost Calculator"},{hid:"og:description",name:"og:description",content:"Calculator for determining ship part repair costs"}]}},data:function(){return{form:!1,haveResult:!1,loading:!1,data:{res:null,casingMat:null,casingCost:null,casingQuality:null,useBaseRes:!1},result:{salvage:null,repair:null},materials:[],qualities:c.a.range(1,11)}},mounted:function(){var t=this;this.$api.get("/materials/all").then(function(e){e.data.forEach(function(e){t.materials.push({text:e.name,value:e})})})},methods:{calc:function(){var t=this;this.loading=!0,this.$api.post("/calcs/repaircost",this.data).then(function(e){t.loading=!1,t.haveResult=!0,t.result=e.data.data,t.$nextTick(function(){return t.$vuetify.goTo("#repairResultsHeader")})})},reset:function(){this.haveResult=!1,this.$refs.repairForm.reset()}}},v=r(40),f=r(95),m=r.n(f),x=r(150),h=r(151),y=r(218),_=r(169),C=r(153),R=r(156),k=r(170),V=r(159),w=r(112),$=r(217),B=r(174),component=Object(v.a)(d,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[r("v-flex",{attrs:{xs12:"",md12:"",lg6:""}},[r("base-calc",{attrs:{name:"Repair Cost",author:"Machine Maker",form:t.form,loading:t.loading},on:{calc:t.calc},scopedSlots:t._u([{key:"buttons",fn:function(){return[r("v-btn",{staticClass:"primary--text",attrs:{disabled:!t.form,color:"warning",small:""},on:{click:t.reset}},[t._v("\n          Reset\n        ")])]},proxy:!0}])},[t._v(" "),r("v-form",{ref:"repairForm",model:{value:t.form,callback:function(e){t.form=e},expression:"form"}},[r("v-container",{attrs:{"grid-list-md":"",fluid:""}},[r("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[r("v-flex",{attrs:{xs12:"","py-0":"","mb-2":""}},[t._v("\n              Calculates the repair tick of any ship part based on the parts resilience value and the casing cost (or the base resilience value, the material used for the casing and the casing cost).\n            ")]),t._v(" "),r("v-flex",{attrs:{xs12:"",md6:""}},[r("v-text-field",{attrs:{label:"Resilience",rules:[t.rules.required,t.rules.number],box:"",color:"primary"},model:{value:t.data.res,callback:function(e){t.$set(t.data,"res",e)},expression:"data.res"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",md6:""}},[r("v-tooltip",{attrs:{top:""}},[t._v("\n                The cost of crafting the casing component of the part\n                "),r("v-text-field",{attrs:{slot:"activator",label:"Casing Cost",rules:[t.rules.required,t.rules.number],box:"",color:"primary"},slot:"activator",model:{value:t.data.casingCost,callback:function(e){t.$set(t.data,"casingCost",e)},expression:"data.casingCost"}})],1)],1),t._v(" "),r("v-flex",{attrs:{xs12:""}},[r("v-layout",{attrs:{"justify-center":""}},[r("v-checkbox",{staticClass:"mt-0 pt-0",staticStyle:{"max-width":"200px"},attrs:{label:"Use base resilience?",color:"primary","hide-details":""},model:{value:t.data.useBaseRes,callback:function(e){t.$set(t.data,"useBaseRes",e)},expression:"data.useBaseRes"}})],1)],1),t._v(" "),r("v-flex",{attrs:{xs12:"",md6:""}},[r("v-select",{attrs:{items:t.materials,disabled:!t.data.useBaseRes,label:"Casing Material",rules:t.data.useBaseRes?[t.rules.required]:[]},model:{value:t.data.casingMat,callback:function(e){t.$set(t.data,"casingMat",e)},expression:"data.casingMat"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",md6:""}},[r("v-select",{attrs:{items:t.qualities,disabled:!t.data.useBaseRes,rules:t.data.useBaseRes?[t.rules.required]:[],label:"Casing Quality"},model:{value:t.data.casingQuality,callback:function(e){t.$set(t.data,"casingQuality",e)},expression:"data.casingQuality"}})],1)],1)],1)],1),t._v(" "),t.haveResult?r("v-container",{attrs:{"grid-list-md":""}},[r("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card",{attrs:{id:"repairResultsHeader",color:"primary"}},[r("v-card-text",{staticClass:"headline secondary--text text-xs-center"},[t._v("\n                Results\n              ")])],1)],1),t._v(" "),r("v-flex",{attrs:{xs12:"",sm6:""}},[r("v-text-field",{attrs:{outline:"",readonly:"","hide-details":"",label:"Salvage per tick"},model:{value:t.result.salvage,callback:function(e){t.$set(t.result,"salvage",e)},expression:"result.salvage"}})],1),t._v(" "),r("v-flex",{attrs:{xs12:"",sm6:""}},[r("v-text-field",{attrs:{outline:"",readonly:"","hide-details":"",label:"Repair per tick"},model:{value:t.result.repair,callback:function(e){t.$set(t.result,"repair",e)},expression:"result.repair"}})],1)],1)],1):t._e(),t._v(" "),t.haveResult?r("v-card-actions",{staticClass:"justify-center"},[r("v-btn",{staticClass:"primary--text",attrs:{color:"warning"},on:{click:function(e){t.haveResult=!1}}},[t._v("\n          Clear\n        ")])],1):t._e()],1)],1)],1)},[],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:x.a,VCard:h.a,VCardActions:y.b,VCardText:y.d,VCheckbox:_.a,VContainer:C.a,VFlex:R.a,VForm:k.a,VLayout:V.a,VSelect:w.a,VTextField:$.a,VTooltip:B.a})}}]);