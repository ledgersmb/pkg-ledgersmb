//>>built
define("lsmb/PublishNumberTextBox",["dojo/_base/declare","dojo/on","dojo/topic","dijit/form/NumberTextBox"],function(e,t,r,a){return e("lsmb/PublishNumberTextBox",a,{topic:"",publish:function(e){r.publish(this.topic,e)},postCreate:function(){var e=this;this.own(t(this,"change",function(t){e.publish(t)}))}})});//# sourceMappingURL=PublishNumberTextBox.js.map