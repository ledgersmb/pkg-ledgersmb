//>>built
define("dijit/_editor/selection",["dojo/dom","dojo/_base/lang","dojo/sniff","dojo/_base/window","../main"],function(e,t,r,a,i){var d={getType:function(){if(a.doc.getSelection){var e,t="text";try{e=a.global.getSelection()}catch(e){}if(e&&1==e.rangeCount){var r=e.getRangeAt(0);r.startContainer==r.endContainer&&r.endOffset-r.startOffset==1&&3!=r.startContainer.nodeType&&(t="control")}return t}return a.doc.selection.type.toLowerCase()},getSelectedText:function(){if(a.doc.getSelection){var e=a.global.getSelection();return e?e.toString():""}return"control"==i._editor.selection.getType()?null:a.doc.selection.createRange().text},getSelectedHtml:function(){if(a.doc.getSelection){var e=a.global.getSelection();if(e&&e.rangeCount){var t,r="";for(t=0;t<e.rangeCount;t++){var d=e.getRangeAt(t).cloneContents(),l=a.doc.createElement("div");l.appendChild(d),r+=l.innerHTML}return r}return null}return"control"==i._editor.selection.getType()?null:a.doc.selection.createRange().htmlText},getSelectedElement:function(){if("control"==i._editor.selection.getType()){if(a.doc.getSelection){var e=a.global.getSelection();return e.anchorNode.childNodes[e.anchorOffset]}var t=a.doc.selection.createRange();if(t&&t.item)return a.doc.selection.createRange().item(0)}return null},getParentElement:function(){if("control"==i._editor.selection.getType()){var e=this.getSelectedElement();if(e)return e.parentNode}else{if(!a.doc.getSelection){var t=a.doc.selection.createRange();return t.collapse(!0),t.parentElement()}var r=a.global.getSelection();if(r){for(var d=r.anchorNode;d&&1!=d.nodeType;)d=d.parentNode;return d}}return null},hasAncestorElement:function(e){return null!=this.getAncestorElement.apply(this,arguments)},getAncestorElement:function(e){var t=this.getSelectedElement()||this.getParentElement();return this.getParentOfType(t,arguments)},isTag:function(e,t){if(e&&e.tagName)for(var r=e.tagName.toLowerCase(),a=0;a<t.length;a++){var i=String(t[a]).toLowerCase();if(r==i)return i}return""},getParentOfType:function(e,t){for(;e;){if(this.isTag(e,t).length)return e;e=e.parentNode}return null},collapse:function(e){if(a.doc.getSelection){var t=a.global.getSelection();t.removeAllRanges?e?t.collapseToStart():t.collapseToEnd():t.collapse(e)}else{var r=a.doc.selection.createRange();r.collapse(e),r.select()}},remove:function(){var e=a.doc.selection;return a.doc.getSelection?(e=a.global.getSelection(),e.deleteFromDocument(),e):("none"!=e.type.toLowerCase()&&e.clear(),e)},selectElementChildren:function(t,i){var d,l=a.doc;if(t=e.byId(t),a.doc.getSelection){var o=a.global.getSelection();r("opera")?(d=o.rangeCount?o.getRangeAt(0):l.createRange(),d.setStart(t,0),d.setEnd(t,3==t.nodeType?t.length:t.childNodes.length),o.addRange(d)):o.selectAllChildren(t)}else if(d=t.ownerDocument.body.createTextRange(),d.moveToElementText(t),!i)try{d.select()}catch(e){}},selectElement:function(t,i){var d;t=e.byId(t);var l=t.ownerDocument,o=a.global;if(l.getSelection){var n=o.getSelection();d=l.createRange(),n.removeAllRanges&&(r("opera")&&n.getRangeAt(0)&&(d=n.getRangeAt(0)),d.selectNode(t),n.removeAllRanges(),n.addRange(d))}else try{var s=t.tagName?t.tagName.toLowerCase():"";d="img"===s||"table"===s?a.body(l).createControlRange():a.body(l).createRange(),d.addElement(t),i||d.select()}catch(e){this.selectElementChildren(t,i)}},inSelection:function(e){if(e){var t,r,i=a.doc;if(a.doc.getSelection){var d=a.global.getSelection();if(d&&d.rangeCount>0&&(r=d.getRangeAt(0)),r&&r.compareBoundaryPoints&&i.createRange)try{if(t=i.createRange(),t.setStart(e,0),1===r.compareBoundaryPoints(r.START_TO_END,t))return!0}catch(e){}}else{r=i.selection.createRange();try{t=e.ownerDocument.body.createControlRange(),t&&t.addElement(e)}catch(r){try{t=e.ownerDocument.body.createTextRange(),t.moveToElementText(e)}catch(e){}}if(r&&t&&1===r.compareEndPoints("EndToStart",t))return!0}}return!1}};return t.setObject("dijit._editor.selection",d),d});//# sourceMappingURL=selection.js.map