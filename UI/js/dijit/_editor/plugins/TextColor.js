//>>built
define("dijit/_editor/plugins/TextColor",["require","dojo/colors","dojo/_base/declare","dojo/_base/lang","../_Plugin","../../form/DropDownButton"],function(e,t,r,a,i,d){var l=r("dijit._editor.plugins.TextColor",i,{buttonClass:d,colorPicker:"dijit/ColorPalette",useDefaultCommand:!1,_initButton:function(){this.command=this.name,this.inherited(arguments);var t=this;this.button.loadDropDown=function(r){function a(e){t.button.dropDown=new e({dir:t.editor.dir,ownerDocument:t.editor.ownerDocument,value:t.value,onChange:function(e){t.editor.execCommand(t.command,e)},onExecute:function(){t.editor.execCommand(t.command,this.get("value"))}}),r()}"string"==typeof t.colorPicker?e([t.colorPicker],a):a(t.colorPicker)}},updateState:function(){var e=this.editor,r=this.command;if(e&&e.isLoaded&&r.length){if(this.button){var a=this.get("disabled");if(this.button.set("disabled",a),a)return;var i;try{i=e.queryCommandValue(r)||""}catch(e){i=""}}""==i&&(i="#000000"),"transparent"==i&&(i="#ffffff"),"string"==typeof i?i.indexOf("rgb")>-1&&(i=t.fromRgb(i).toHex()):(i=(255&i)<<16|65280&i|(16711680&i)>>>16,i=i.toString(16),i="#000000".slice(0,7-i.length)+i),this.value=i;var d=this.button.dropDown;d&&d.get&&i!==d.get("value")&&d.set("value",i,!1)}}});return i.registry.foreColor=function(e){return new l(e)},i.registry.hiliteColor=function(e){return new l(e)},l});//# sourceMappingURL=TextColor.js.map