//>>built
define("dijit/form/_ToggleButtonMixin",["dojo/_base/declare","dojo/dom-attr"],function(e,t){return e("dijit.form._ToggleButtonMixin",null,{checked:!1,_aria_attr:"aria-pressed",_onClick:function(e){var t=this.checked;this._set("checked",!t);var r=this.inherited(arguments);return this.set("checked",r?this.checked:t),r},_setCheckedAttr:function(e,r){this._set("checked",e);var a=this.focusNode||this.domNode;this._created&&t.get(a,"checked")!=!!e&&t.set(a,"checked",!!e),a.setAttribute(this._aria_attr,String(e)),this._handleOnChange(e,r)},postCreate:function(){this.inherited(arguments);var e=this.focusNode||this.domNode;this.checked&&e.setAttribute("checked","checked"),void 0===this._resetValue&&(this._lastValueReported=this._resetValue=this.checked)},reset:function(){this._hasBeenBlurred=!1,this.set("checked",this.params.checked||!1)}})});//# sourceMappingURL=_ToggleButtonMixin.js.map