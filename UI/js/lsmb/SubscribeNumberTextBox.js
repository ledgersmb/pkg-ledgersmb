//>>built
define("lsmb/SubscribeNumberTextBox",["dojo/_base/declare","dojo/on","dojo/topic","dijit/form/NumberTextBox"],function(b,e,c,d){return b("lsmb/SubscribeNumberTextBox",d,{topic:"",update:function(a){this.set("value",a)},postCreate:function(){var a=this;this.inherited(arguments);this.own(c.subscribe(a.topic,function(b){a.update(b)}))}})});
//# sourceMappingURL=SubscribeNumberTextBox.js.map