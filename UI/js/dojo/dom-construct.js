//>>built
define("dojo/dom-construct",["exports","./_base/kernel","./sniff","./_base/window","./dom","./dom-attr"],function(e,t,n,r,o,i){function a(e,t){var n=t.parentNode;n&&n.insertBefore(e,t)}function s(e,t){var n=t.parentNode;n&&(n.lastChild==t?n.appendChild(e):n.insertBefore(e,t.nextSibling))}function c(e){if("innerHTML"in e)try{return void(e.innerHTML="")}catch(e){}for(var t;t=e.lastChild;)e.removeChild(t)}function u(e,t){e.firstChild&&c(e),t&&(n("ie")&&t.canHaveChildren&&"removeNode"in e?e.removeNode(!1):t.removeChild(e))}var d={option:["select"],tbody:["table"],thead:["table"],tfoot:["table"],tr:["table","tbody"],td:["table","tbody","tr"],th:["table","thead","tr"],legend:["fieldset"],caption:["table"],colgroup:["table"],col:["table","colgroup"],li:["ul"]},l=/<\s*([\w\:]+)/,f={},h=0,p="__"+t._scopeName+"ToDomId";for(var m in d)if(d.hasOwnProperty(m)){var g=d[m];g.pre="option"==m?'<select multiple="multiple">':"<"+g.join("><")+">",g.post="</"+g.reverse().join("></")+">"}var v;n("ie")<=8&&(v=function(e){e.__dojo_html5_tested="yes";var t=y("div",{innerHTML:"<nav>a</nav>",style:{visibility:"hidden"}},e.body);1!==t.childNodes.length&&"abbr article aside audio canvas details figcaption figure footer header hgroup mark meter nav output progress section summary time video".replace(/\b\w+\b/g,function(t){e.createElement(t)}),b(t)}),e.toDom=function(e,t){t=t||r.doc;var o=t[p];o||(t[p]=o=++h+"",f[o]=t.createElement("div")),n("ie")<=8&&!t.__dojo_html5_tested&&t.body&&v(t),e+="";var i,a,s,c,u=e.match(l),m=u?u[1].toLowerCase():"",g=f[o];if(u&&d[m])for(i=d[m],g.innerHTML=i.pre+e+i.post,a=i.length;a;--a)g=g.firstChild;else g.innerHTML=e;if(1==g.childNodes.length)return g.removeChild(g.firstChild);for(c=t.createDocumentFragment();s=g.firstChild;)c.appendChild(s);return c},e.place=function(t,n,r){if(n=o.byId(n),"string"==typeof t&&(t=/^\s*</.test(t)?e.toDom(t,n.ownerDocument):o.byId(t)),"number"==typeof r){var i=n.childNodes;!i.length||i.length<=r?n.appendChild(t):a(t,i[r<0?0:r])}else switch(r){case"before":a(t,n);break;case"after":s(t,n);break;case"replace":n.parentNode.replaceChild(t,n);break;case"only":e.empty(n),n.appendChild(t);break;case"first":if(n.firstChild){a(t,n.firstChild);break}default:n.appendChild(t)}return t};var y=e.create=function(t,n,a,s){var c=r.doc;return a&&(a=o.byId(a),c=a.ownerDocument),"string"==typeof t&&(t=c.createElement(t)),n&&i.set(t,n),a&&e.place(t,a,s),t};e.empty=function(e){c(o.byId(e))};var b=e.destroy=function(e){(e=o.byId(e))&&u(e,e.parentNode)}});//# sourceMappingURL=dom-construct.js.map