//>>built
define("dijit/form/CurrencyTextBox",["dojo/currency","dojo/_base/declare","dojo/_base/lang","./NumberTextBox"],function(e,t,r,a){return t("dijit.form.CurrencyTextBox",a,{currency:"",baseClass:"dijitTextBox dijitCurrencyTextBox",_formatter:e.format,_parser:e.parse,_regExpGenerator:e.regexp,parse:function(e,t){var i=this.inherited(arguments);return isNaN(i)&&/\d+/.test(e)&&(i=r.hitch(r.delegate(this,{_parser:a.prototype._parser}),"inherited")(arguments)),i},_setConstraintsAttr:function(t){!t.currency&&this.currency&&(t.currency=this.currency),this.inherited(arguments,[e._mixInDefaults(r.mixin(t,{exponent:!1}))])}})});//# sourceMappingURL=CurrencyTextBox.js.map