//>>built
define("dojo/data/util/filter",["../../_base/lang"],function(e){var r={};return e.setObject("dojo.data.util.filter",r),r.patternToRegExp=function(e,r){for(var a="^",t=null,i=0;i<e.length;i++)switch(t=e.charAt(i)){case"\\":a+=t,i++,a+=e.charAt(i);break;case"*":a+=".*";break;case"?":a+=".";break;case"$":case"^":case"/":case"+":case".":case"|":case"(":case")":case"{":case"}":case"[":case"]":a+="\\";default:a+=t}return a+="$",r?new RegExp(a,"mi"):new RegExp(a,"m")},r});//# sourceMappingURL=filter.js.map