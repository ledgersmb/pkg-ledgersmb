//>>built
require({cache:{"url:lsmb/parts/templates/DropDownTextarea.html":'<div class="dijit dijitReset dijitInline dijitLeft dijitValidationTextBox dijitComboBox"\n        id="widget_${id}"\n        role="combobox"\n        aria-haspopup="true" aria-expanded="false"\n        data-dojo-attach-point="_popupStateNode"\n        ><div class=\'dijitReset dijitRight dijitButtonNode dijitArrowButton dijitDownArrowButton dijitArrowButtonContainer\'\n                data-dojo-attach-point="_buttonNode" role="presentation"\n                ><input class="dijitReset dijitInputField dijitArrowButtonInner" value="&#9660; " type="text" tabIndex="-1" readonly="readonly" role="button presentation" aria-hidden="true"\n                        ${_buttonInputDisabled}\n        /></div\n        ><div class=\'dijitReset dijitValidationContainer\'\n                ><input class="dijitReset dijitInputField dijitValidationIcon dijitValidationInner" value="&#935; " type="text" tabIndex="-1" readonly="readonly" role="presentation"\n        /></div\n        ><div class="dijitReset dijitInputContainer"\n              ><textarea class="dijitReset dijitInputInner"\n                         ${!nameAttrSetting}\n                         rows="1"\n                         autocomplete="off" style="${innerStyle}"\n                         data-dojo-attach-point="textbox,focusNode,containerNode"\n                         role="textbox"\n        ></textarea></div\n></div>\n'}}),define("lsmb/parts/PartDescription",["dijit/form/ComboBox","dijit/form/TextBox","dijit/_HasDropDown","dijit/form/_AutoCompleterMixin","dijit/form/_ComboBoxMenu","dojo/_base/declare","dojo/topic","dojo/keys","lsmb/parts/PartStore","dojo/text!./templates/DropDownTextarea.html"],function(e,t,r,a,i,d,o,l,n,s){return d("lsmb/parts/PartsDescription",[t,r,a],{channel:null,height:null,store:n,queryExpr:"*${0}*",autoComplete:!1,innerStyle:"",highlightMatch:"all",searchAttr:"description",labelAttr:"label",templateString:s,dropDownClass:i,autoSizing:!0,startup:function(){var e=this;this.inherited(arguments),this.channel&&(this.own(o.subscribe(this.channel,function(t){e.set("value",t[e.searchAttr])})),this.on("change",function(t){e.item&&o.publish(e.channel,e.item)})),this._autoSize()},_autoSize:function(){this.autoSizing&&(this.textbox.style.height="1em",this.textbox.scrollTop=0,this.textbox.style.height=this.textbox.scrollHeight+"px")},_onInput:function(){this.inherited(arguments),this._autoSize()},_onKey:function(e){e.keyCode!==l.SPACE&&e.keyCode!==l.ENTER&&this.inherited(arguments),this._autoSize()},set:function(){this.inherited(arguments),this._autoSize()}})});//# sourceMappingURL=PartDescription.js.map