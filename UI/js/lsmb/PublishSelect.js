//>>built
define("lsmb/PublishSelect",["dojo/_base/declare","dojo/on","dojo/topic","dijit/form/Select"],function(e,t,r,a){return e("lsmb/PublishSelect",[a],{topic:"",publish:function(e){r.publish(this.topic,e)},postCreate:function(){var e=this;this.inherited(arguments),this.own(t(this,"change",function(t){e.publish(t)}))}})});//# sourceMappingURL=PublishSelect.js.map