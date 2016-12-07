/*
jQWidgets v2.6.1 (2013-Jan-18)
Copyright (c) 2011-2013 jQWidgets.
License: http://jqwidgets.com/license/
*/

try{(function(g,b){b.jqwidgets=b.jqwidgets||{};b.jqwidgets.knockout=function(w){var x=this;var y={},v=w.name;y.init=function(D,E,A,C){var z=b.utils.unwrapObservable(E());var G=b.toJS(z);if(w.reset){w.reset()}if(g.data(D)[v]==undefined){var B=[];g(D)[v]();widget=g.data(D)[v].instance;g.each(w,function(H,I){if(widget.hasOwnProperty(H)&&G.hasOwnProperty(H)){if(!widget.koupdating){widget.koupdatingFromObservable=true;if(b.toJSON(G[H])!=b.toJSON(widget[H])){w.setProperty(widget,H,widget[H],G[H])}B[H]=H;widget.koupdatingFromObservable=false}}});var F={};g.each(G,function(H,I){if(B[H]==undefined){F[H]=G[H]}});widget.host[v](F)}widget=g.data(D)[v].instance;widget.koupdatingFromObservable=false;widget.koupdating=false;if(w.events){g.each(w.events,function(){var H=this;g(D).bind(H+"."+D.id,function(I){widget=g.data(D)[v].instance;if(!widget.koupdatingFromObservable){widget.koupdating=true;var K=E();var J=w.getProperty(widget,I,H,z);if(J!=undefined){if(K.hasOwnProperty(J.name)&&g.isFunction(K[J.name])){if(b.isObservable(K[J.name])&&K[J.name].push){E(J.value)}else{K[J.name](J.value)}}else{if(K[J.name]){E(J.value)}}}widget.koupdating=false}})})}};y.update=function(D,E,B,C,A){var z=b.utils.unwrapObservable(E());var F=b.toJS(z);widget=g.data(D)[v].instance;if(widget.koupdating){return}g.each(w,function(G,H){if(widget.hasOwnProperty(G)&&F.hasOwnProperty(G)){if(!widget.koupdating){widget.koupdatingFromObservable=true;if(b.toJSON(F[G])!=b.toJSON(widget[G])){w.setProperty(widget,G,widget[G],F[G])}widget.koupdatingFromObservable=false}}})};b.bindingHandlers[w.name]=y};var r=new b.jqwidgets.knockout({name:"jqxGauge",disabled:false,min:0,max:220,value:0,reset:function(){this.value=0;this.max=220;this.min=0;this.disabled=false},getProperty:function(w,x,v){},setProperty:function(v,w,x,y){if(w=="disabled"){v.host.jqxGauge({disabled:y})}if(w=="min"){v.host.jqxGauge({min:y})}if(w=="max"){v.host.jqxGauge({max:y})}if(w=="value"){v.host.jqxGauge({value:y})}}});var d=new b.jqwidgets.knockout({name:"jqxLinearGauge",disabled:false,min:0,max:220,value:0,reset:function(){this.value=0;this.max=220;this.min=0;this.disabled=false},getProperty:function(w,x,v){},setProperty:function(v,w,x,y){if(w=="disabled"){v.host.jqxLinearGauge({disabled:y})}if(w=="min"){v.host.jqxLinearGauge({min:y})}if(w=="max"){v.host.jqxLinearGauge({max:y})}if(w=="value"){v.host.jqxLinearGauge({value:y})}}});var q=new b.jqwidgets.knockout({name:"jqxSlider",disabled:false,min:0,max:10,value:0,reset:function(){this.value=0;this.max=10;this.min=0;this.disabled=false},events:["change"],getProperty:function(w,x,v){if(v=="change"){return{name:"value",value:x.args.value}}},setProperty:function(v,w,x,y){if(w=="disabled"){v.host.jqxSlider({disabled:y})}if(w=="min"){v.host.jqxSlider({min:parseFloat(y)})}if(w=="max"){v.host.jqxSlider({max:parseFloat(y)})}if(w=="value"){v.host.jqxSlider({value:parseFloat(y)})}}});var m=new b.jqwidgets.knockout({name:"jqxScrollBar",disabled:false,min:0,max:10,value:0,reset:function(){this.value=0;this.max=10;this.min=0;this.disabled=false},events:["valuechanged"],getProperty:function(w,x,v){if(v=="valuechanged"){return{name:"value",value:parseInt(x.currentValue)}}},setProperty:function(v,w,x,y){if(w=="disabled"){v.host.jqxScrollBar({disabled:y})}if(w=="min"){v.host.jqxScrollBar({min:parseFloat(y)})}if(w=="max"){v.host.jqxScrollBar({max:parseFloat(y)})}if(w=="value"){v.host.jqxScrollBar({value:parseFloat(y)})}}});var a=new b.jqwidgets.knockout({name:"jqxProgressBar",disabled:false,value:0,reset:function(){this.value=0;this.disabled=false},events:["valuechanged"],getProperty:function(w,x,v){if(v=="valuechanged"){return{name:"value",value:parseInt(x.currentValue)}}},setProperty:function(v,w,x,y){if(w=="disabled"){v.host.jqxProgressBar({disabled:y})}if(w=="value"){v.host.jqxProgressBar({value:parseFloat(y)})}}});var e=new b.jqwidgets.knockout({name:"jqxButton",disabled:false,reset:function(){this.disabled=false},getProperty:function(w,x,v){},setProperty:function(v,w,x,y){if(w=="disabled"){v.host.jqxButton({disabled:y})}}});var f=new b.jqwidgets.knockout({name:"jqxCheckBox",checked:false,disabled:false,reset:function(){this.checked=false;this.disabled=false},events:["change"],getProperty:function(w,x,v){if(v=="change"){return{name:"checked",value:x.args.checked}}},setProperty:function(v,w,x,y){if(w=="disabled"){v.host.jqxCheckBox({disabled:y})}if(w=="checked"){if(x!=y){v.host.jqxCheckBox({checked:y})}}}});var s=new b.jqwidgets.knockout({name:"jqxRadioButton",checked:false,disabled:false,reset:function(){this.checked=false;this.disabled=false},events:["change"],getProperty:function(w,x,v){if(v=="change"){return{name:"checked",value:x.args.checked}}},setProperty:function(v,w,x,y){if(w=="disabled"){v.host.jqxRadioButton({disabled:y})}if(w=="checked"){if(x!=y){v.host.jqxRadioButton({checked:y})}}}});var l=new b.jqwidgets.knockout({name:"jqxDateTimeInput",value:null,disabled:false,reset:function(){this.value=null;this.disabled=false},events:["valuechanged"],getProperty:function(w,x,v){if(v=="valuechanged"){return{name:"value",value:x.args.date}}},setProperty:function(v,w,x,y){if(w=="value"){v.setDate(y)}if(w=="disabled"){v.host.jqxDateTimeInput({disabled:y})}}});var u=new b.jqwidgets.knockout({name:"jqxCalendar",value:null,disabled:false,reset:function(){this.value=null;this.disabled=false},events:["valuechanged"],getProperty:function(w,x,v){if(v=="valuechanged"){return{name:"value",value:x.args.date}}},setProperty:function(v,w,x,y){if(w=="value"){v.setDate(y)}if(w=="disabled"){v.host.jqxCalendar({disabled:y})}}});var n=new b.jqwidgets.knockout({name:"jqxNumberInput",value:null,events:["valuechanged"],disabled:false,reset:function(){this.value=null;this.disabled=false},getProperty:function(w,x,v){if(v=="valuechanged"){return{name:"value",value:w.val()}}},setProperty:function(v,w,x,y){if(w=="value"){v.host.jqxNumberInput("val",y)}if(w=="disabled"){v.host.jqxNumberInput({disabled:y})}}});var i=new b.jqwidgets.knockout({name:"jqxMaskedInput",value:null,events:["valuechanged"],disabled:false,reset:function(){this.value=null;this.disabled=false},getProperty:function(w,x,v){if(v=="valuechanged"){return{name:"value",value:w.val()}}},setProperty:function(v,w,x,y){if(w=="value"){v.host.jqxMaskedInput("val",y)}if(w=="disabled"){v.host.jqxMaskedInput({disabled:y})}}});var c=new b.jqwidgets.knockout({name:"jqxListBox",source:null,disabled:false,selectedIndex:-1,reset:function(){this.disabled=false;this.selectedIndex=-1;this.source=null},events:["change"],getProperty:function(w,x,v){if(v=="change"){this.selectedIndex=w.selectedIndex;return{name:"selectedIndex",value:w.selectedIndex}}},setProperty:function(v,w,y,z){if(w=="source"){v.source=z;v.refresh()}if(w=="disabled"){v.disabled=z;v._renderItems()}if(w=="selectedIndex"){var x=v.disabled;v.disabled=false;v.selectIndex(z);v.disabled=x;if(x){v._renderItems()}}}});var o=new b.jqwidgets.knockout({name:"jqxDropDownList",source:null,disabled:false,selectedIndex:-1,reset:function(){this.disabled=false;this.selectedIndex=-1;this.source=null},events:["change"],getProperty:function(w,x,v){if(v=="change"){this.selectedIndex=w.selectedIndex;return{name:"selectedIndex",value:w.selectedIndex}}},setProperty:function(v,w,x,y){if(w=="source"){if(this.source!=y){this.source=y;v.host.jqxDropDownList({source:y})}}if(w=="disabled"){if(y!=this.disabled){this.disabled=y;v.host.jqxDropDownList({disabled:y})}}if(w=="selectedIndex"){if(y!=this.selectedIndex){this.selectedIndex=y;v.host.jqxDropDownList({selectedIndex:y})}}}});var h=new b.jqwidgets.knockout({name:"jqxComboBox",source:null,disabled:false,selectedIndex:-1,reset:function(){this.disabled=false;this.selectedIndex=-1;this.source=null},events:["change"],getProperty:function(w,x,v){if(v=="change"){this.selectedIndex=w.selectedIndex;return{name:"selectedIndex",value:w.selectedIndex}}},setProperty:function(v,w,x,y){if(w=="source"){if(this.source!=y){this.source=y;v.host.jqxComboBox({source:y})}}if(w=="disabled"){if(y!=this.disabled){this.disabled=y;v.host.jqxComboBox({disabled:y})}}if(w=="selectedIndex"){if(y!=this.selectedIndex){this.selectedIndex=y;v.host.jqxComboBox({selectedIndex:y})}}}});var t=new b.jqwidgets.knockout({name:"jqxTree",source:null,disabled:false,reset:function(){this.disabled=false;this.source=null},getProperty:function(w,x,v){},setProperty:function(v,w,x,y){if(w=="source"){if(this.source!=y){this.source=y;v.host.jqxTree({source:y})}}if(w=="disabled"){if(y!=this.disabled){this.disabled=y;v.host.jqxTree({disabled:y})}}}});var k=new b.jqwidgets.knockout({name:"jqxMenu",source:null,disabled:false,reset:function(){this.disabled=false;this.source=null},getProperty:function(w,x,v){},setProperty:function(v,w,x,y){if(w=="source"){if(this.source!=y){this.source=y;v.host.jqxMenu({source:y})}}if(w=="disabled"){if(y!=this.disabled){this.disabled=y;v.host.jqxMenu({disabled:y})}}}});var p=new b.jqwidgets.knockout({name:"jqxChart",source:null,disabled:false,reset:function(){this.disabled=false;this.source=null},getProperty:function(w,x,v){},setProperty:function(v,w,x,y){if(w=="source"){if(y!=this.source){this.source=y;var z=v.host.jqxChart("enableAnimations");v.host.jqxChart({enableAnimations:false});v.host.jqxChart({source:y});setTimeout(function(){v.host.jqxChart({enableAnimations:z})},1000)}}if(w=="disabled"){if(y!=this.disabled){this.disabled=y;v.host.jqxChart({disabled:y})}}}});var j=new b.jqwidgets.knockout({name:"jqxGrid",source:null,disabled:false,selectedRowIndex:-1,reset:function(){this.disabled=false;this.source=null;this.selectedRowIndex=-1},events:["cellvaluechanged","cellselect","rowselect"],getProperty:function(y,w,A,z){if(A=="cellvaluechanged"){var x=y.host.jqxGrid("getrowid",w.args.rowindex);var E=y.host.jqxGrid("getrowdata",x);var v=z.source;if(v!=undefined){var D={};var C=false;var B=false;g.each(v()[x],function(F,G){D[F]=G;if(b.isObservable(G)&&!b.isComputed(G)){C=true;G(E[F])}if(b.isObservable(G)&&b.isComputed(G)){B=true}});if(!C){D=E;v.replace(v()[x],D)}else{v.replace(v()[x],D)}if(B){y.host.jqxGrid("updaterow",x,b.toJS(v)[x])}return{name:"source",value:v}}}},setProperty:function(y,F,E,w){if(F=="selectedRowIndex"){y.host.jqxGrid("selectrow",w)}if(F=="source"){if(this.source==null||w==null){if(this.source!=w){this.source=w;var v={localdata:w,datatype:"local"};var D=new g.jqx.dataAdapter(v);y.host.jqxGrid({source:D})}}else{var v={localdata:w,datatype:"local"};var D=new g.jqx.dataAdapter(v);D.dataBind();if(!E.records||!D.records){return}var G=Math.max(E.records.length,D.records.length);var C=Math.abs(E.records.length-D.records.length);if(C>1){y.host.jqxGrid("beginupdate")}for(var A=0;A<G;A++){var B=D.records[A];if(B==undefined){var x=y.host.jqxGrid("getrowid",A);y.host.jqxGrid("deleterow",x)}else{var z=E.records[A]!=undefined;if(z){if(b.toJSON(B)!=b.toJSON(E.records[A])){if(E.records[A].uid!=undefined){B.uid=E.records[A].uid;if(b.toJSON(B)==b.toJSON(E.records[A])){continue}}var x=y.host.jqxGrid("getrowid",A);y.host.jqxGrid("updaterow",x,B)}}else{y.host.jqxGrid("addrow",null,B)}}}if(C>1){y.host.jqxGrid("endupdate")}}}if(F=="disabled"){if(w!=this.disabled){this.disabled=w;y.host.jqxGrid({disabled:w})}}}})}(jQuery,ko))}catch(error){};