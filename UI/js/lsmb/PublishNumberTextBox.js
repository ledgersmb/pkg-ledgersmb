//>>built
define("lsmb/PublishNumberTextBox",["dojo/_base/declare","dojo/on","dojo/topic","dijit/form/NumberTextBox"],function(a,c,d,e){return a("lsmb/PublishNumberTextBox",e,{topic:"",publish:function(b){d.publish(this.topic,b)},postCreate:function(){var b=this;this.own(c(this,"change",function(a){b.publish(a)}))}})});
//# sourceMappingURL=PublishNumberTextBox.js.map