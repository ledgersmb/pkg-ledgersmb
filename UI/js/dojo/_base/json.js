//>>built
define("dojo/_base/json",["./kernel","../json"],function(dojo,json){return dojo.fromJson=function(js){return eval("("+js+")")},dojo._escapeString=json.stringify,dojo.toJsonIndentStr="\t",dojo.toJson=function(e,t){return json.stringify(e,function(e,t){if(t){var n=t.__json__||t.json;if("function"==typeof n)return n.call(t)}return t},t&&dojo.toJsonIndentStr)},dojo});//# sourceMappingURL=json.js.map