//>>built
require({cache:{"url:dijit/form/templates/CheckBox.html":'<div class="dijit dijitReset dijitInline" role="presentation"\n\t><input\n\t \t${!nameAttrSetting} type="${type}" role="${type}" aria-checked="false" ${checkedAttrSetting}\n\t\tclass="dijitReset dijitCheckBoxInput"\n\t\tdata-dojo-attach-point="focusNode"\n\t \tdata-dojo-attach-event="ondijitclick:_onClick"\n/></div>\n'}}),define("dijit/form/CheckBox",["require","dojo/_base/declare","dojo/dom-attr","dojo/has","dojo/query","dojo/ready","./ToggleButton","./_CheckBoxMixin","dojo/text!./templates/CheckBox.html","dojo/NodeList-dom","../a11yclick"],function(e,t,r,a,i,d,l,o,n){return a("dijit-legacy-requires")&&d(0,function(){e(["dijit/form/RadioButton"])}),t("dijit.form.CheckBox",[l,o],{templateString:n,baseClass:"dijitCheckBox",_setValueAttr:function(e,t){"string"==typeof e&&(this.inherited(arguments),e=!0),this._created&&this.set("checked",e,t)},_getValueAttr:function(){return this.checked&&this._get("value")},_setIconClassAttr:null,_setNameAttr:"focusNode",postMixInProperties:function(){this.inherited(arguments),this.checkedAttrSetting=""},_fillContent:function(){},_onFocus:function(){this.id&&i("label[for='"+this.id+"']").addClass("dijitFocusedLabel"),this.inherited(arguments)},_onBlur:function(){this.id&&i("label[for='"+this.id+"']").removeClass("dijitFocusedLabel"),this.inherited(arguments)}})});//# sourceMappingURL=CheckBox.js.map