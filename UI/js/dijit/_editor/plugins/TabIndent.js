//>>built
define("dijit/_editor/plugins/TabIndent",["dojo/_base/declare","dojo/_base/kernel","../_Plugin","../../form/ToggleButton"],function(e,t,r,a){t.experimental("dijit._editor.plugins.TabIndent");var i=e("dijit._editor.plugins.TabIndent",r,{useDefaultCommand:!1,buttonClass:a,command:"tabIndent",_initButton:function(){this.inherited(arguments);var e=this.editor;this.own(this.button.on("change",function(t){e.set("isTabIndent",t)})),this.updateState()},updateState:function(){var e=this.get("disabled");this.button.set("disabled",e),e||this.button.set("checked",this.editor.isTabIndent,!1)}});return r.registry.tabIndent=function(){return new i({command:"tabIndent"})},i});//# sourceMappingURL=TabIndent.js.map