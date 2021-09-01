//>>built
define("dijit/_editor/plugins/EnterKeyHandling",["dojo/_base/declare","dojo/dom-construct","dojo/keys","dojo/_base/lang","dojo/on","dojo/sniff","dojo/_base/window","dojo/window","../_Plugin","../RichText","../range"],function(e,t,r,a,i,d,l,o,n,s,f){return e("dijit._editor.plugins.EnterKeyHandling",n,{blockNodeForEnter:"BR",constructor:function(e){e&&("blockNodeForEnter"in e&&(e.blockNodeForEnter=e.blockNodeForEnter.toUpperCase()),a.mixin(this,e))},setEditor:function(e){if(this.editor!==e)if(this.editor=e,"BR"==this.blockNodeForEnter)this.editor.customUndo=!0,e.onLoadDeferred.then(a.hitch(this,function(t){return this.own(i(e.document,"keydown",a.hitch(this,function(e){if(e.keyCode==r.ENTER){var t=a.mixin({},e);t.shiftKey=!0,this.handleEnterKey(t)||(e.stopPropagation(),e.preventDefault())}}))),d("ie")>=9&&d("ie")<=10&&this.own(i(e.document,"paste",a.hitch(this,function(e){setTimeout(a.hitch(this,function(){var e=this.editor.document.selection.createRange();e.move("character",-1),e.select(),e.move("character",1),e.select()}),0)}))),t}));else if(this.blockNodeForEnter){var t=a.hitch(this,"handleEnterKey");e.addKeyHandler(13,0,0,t),e.addKeyHandler(13,0,1,t),this.own(this.editor.on("KeyPressed",a.hitch(this,"onKeyPressed")))}},onKeyPressed:function(){if(this._checkListLater){if(this.editor.selection.isCollapsed()){var e=this.editor.selection.getAncestorElement("LI");if(e){d("mozilla")&&"LI"==e.parentNode.parentNode.nodeName&&(e=e.parentNode.parentNode);var t=e.firstChild;if(t&&1==t.nodeType&&("UL"==t.nodeName||"OL"==t.nodeName)){e.insertBefore(t.ownerDocument.createTextNode(" "),t);var r=f.create(this.editor.window);r.setStart(e.firstChild,0);var a=f.getSelection(this.editor.window,!0);a.removeAllRanges(),a.addRange(r)}}else{s.prototype.execCommand.call(this.editor,"formatblock",this.blockNodeForEnter);var i=this.editor.selection.getAncestorElement(this.blockNodeForEnter);if(i){if(i.innerHTML=this.bogusHtmlContent,d("ie")<=9){var l=this.editor.document.selection.createRange();l.move("character",-1),l.select()}}else console.error("onKeyPressed: Cannot find the new block node")}}this._checkListLater=!1}this._pressedEnterInBlock&&(this._pressedEnterInBlock.previousSibling&&this.removeTrailingBr(this._pressedEnterInBlock.previousSibling),delete this._pressedEnterInBlock)},bogusHtmlContent:"&#160;",blockNodes:/^(?:P|H1|H2|H3|H4|H5|H6|LI)$/,handleEnterKey:function(e){var r,a,i,l,n,m,u,v,h,y=this.editor.document;if(e.shiftKey){var w=this.editor.selection.getParentElement(),c=f.getAncestor(w,this.blockNodes);if(c){if("LI"==c.tagName)return!0;if(r=f.getSelection(this.editor.window),a=r.getRangeAt(0),a.collapsed||(a.deleteContents(),r=f.getSelection(this.editor.window),a=r.getRangeAt(0)),f.atBeginningOfContainer(c,a.startContainer,a.startOffset))u=y.createElement("br"),i=f.create(this.editor.window),c.insertBefore(u,c.firstChild),i.setStartAfter(u),r.removeAllRanges(),r.addRange(i);else{if(!f.atEndOfContainer(c,a.startContainer,a.startOffset))return!(v=a.startContainer)||3!=v.nodeType||(h=v.nodeValue,l=y.createTextNode(h.substring(0,a.startOffset)),n=y.createTextNode(h.substring(a.startOffset)),m=y.createElement("br"),""==n.nodeValue&&d("webkit")&&(n=y.createTextNode(" ")),t.place(l,v,"after"),t.place(m,l,"after"),t.place(n,m,"after"),t.destroy(v),i=f.create(this.editor.window),i.setStart(n,0),r.removeAllRanges(),r.addRange(i),!1);i=f.create(this.editor.window),u=y.createElement("br"),c.appendChild(u),c.appendChild(y.createTextNode(" ")),i.setStart(c.lastChild,0),r.removeAllRanges(),r.addRange(i)}}else if(r=f.getSelection(this.editor.window),r.rangeCount){if((a=r.getRangeAt(0))&&a.startContainer)if(a.collapsed||(a.deleteContents(),r=f.getSelection(this.editor.window),a=r.getRangeAt(0)),(v=a.startContainer)&&3==v.nodeType){var M=a.startOffset;v.length<M&&(z=this._adjustNodeAndOffset(v,M),v=z.node,M=z.offset),h=v.nodeValue,l=y.createTextNode(h.substring(0,M)),n=y.createTextNode(h.substring(M)),m=y.createElement("br"),n.length||(n=y.createTextNode(" ")),l.length?t.place(l,v,"after"):l=v,t.place(m,l,"after"),t.place(n,m,"after"),t.destroy(v),i=f.create(this.editor.window),i.setStart(n,0),i.setEnd(n,n.length),r.removeAllRanges(),r.addRange(i),this.editor.selection.collapse(!0)}else{var p;a.startOffset>=0&&(p=v.childNodes[a.startOffset]);var m=y.createElement("br"),n=y.createTextNode(" ");p?(t.place(m,p,"before"),t.place(n,m,"after")):(v.appendChild(m),v.appendChild(n)),i=f.create(this.editor.window),i.setStart(n,0),i.setEnd(n,n.length),r.removeAllRanges(),r.addRange(i),this.editor.selection.collapse(!0)}}else s.prototype.execCommand.call(this.editor,"inserthtml","<br>");return!1}var g=!0;r=f.getSelection(this.editor.window),a=r.getRangeAt(0),a.collapsed||(a.deleteContents(),r=f.getSelection(this.editor.window),a=r.getRangeAt(0));var k=f.getBlockAncestor(a.endContainer,null,this.editor.editNode),b=k.blockNode;if(this._checkListLater=b&&("LI"==b.nodeName||"LI"==b.parentNode.nodeName))return d("mozilla")&&(this._pressedEnterInBlock=b),/^(\s|&nbsp;|&#160;|\xA0|<span\b[^>]*\bclass=['"]Apple-style-span['"][^>]*>(\s|&nbsp;|&#160;|\xA0)<\/span>)?(<br>)?$/.test(b.innerHTML)&&(b.innerHTML="",d("webkit")&&(i=f.create(this.editor.window),i.setStart(b,0),r.removeAllRanges(),r.addRange(i)),this._checkListLater=!1),!0;if(!k.blockNode||k.blockNode===this.editor.editNode){try{s.prototype.execCommand.call(this.editor,"formatblock",this.blockNodeForEnter)}catch(e){}if(k={blockNode:this.editor.selection.getAncestorElement(this.blockNodeForEnter),blockContainer:this.editor.editNode},k.blockNode){if(k.blockNode!=this.editor.editNode&&!(k.blockNode.textContent||k.blockNode.innerHTML).replace(/^\s+|\s+$/g,"").length)return this.removeTrailingBr(k.blockNode),!1}else k.blockNode=this.editor.editNode;r=f.getSelection(this.editor.window),a=r.getRangeAt(0)}var F=y.createElement(this.blockNodeForEnter);F.innerHTML=this.bogusHtmlContent,this.removeTrailingBr(k.blockNode);var I=a.endOffset,j=a.endContainer;if(j.length<I){var z=this._adjustNodeAndOffset(j,I);j=z.node,I=z.offset}if(f.atEndOfContainer(k.blockNode,j,I))k.blockNode===k.blockContainer?k.blockNode.appendChild(F):t.place(F,k.blockNode,"after"),g=!1,i=f.create(this.editor.window),i.setStart(F,0),r.removeAllRanges(),r.addRange(i),this.editor.height&&o.scrollIntoView(F);else if(f.atBeginningOfContainer(k.blockNode,a.startContainer,a.startOffset))t.place(F,k.blockNode,k.blockNode===k.blockContainer?"first":"before"),F.nextSibling&&this.editor.height&&(i=f.create(this.editor.window),i.setStart(F.nextSibling,0),r.removeAllRanges(),r.addRange(i),o.scrollIntoView(F.nextSibling)),g=!1;else{k.blockNode===k.blockContainer?k.blockNode.appendChild(F):t.place(F,k.blockNode,"after"),g=!1,k.blockNode.style&&F.style&&k.blockNode.style.cssText&&(F.style.cssText=k.blockNode.style.cssText),v=a.startContainer;var A;if(v&&3==v.nodeType){var E,q;I=a.endOffset,v.length<I&&(z=this._adjustNodeAndOffset(v,I),v=z.node,I=z.offset),h=v.nodeValue,l=y.createTextNode(h.substring(0,I)),n=y.createTextNode(h.substring(I,h.length)),t.place(l,v,"before"),t.place(n,v,"after"),t.destroy(v);for(var G=l.parentNode;G!==k.blockNode;){var _=G.tagName,P=y.createElement(_);for(G.style&&P.style&&G.style.cssText&&(P.style.cssText=G.style.cssText),"FONT"===G.tagName&&(G.color&&(P.color=G.color),G.face&&(P.face=G.face),G.size&&(P.size=G.size)),E=n;E;)q=E.nextSibling,P.appendChild(E),E=q;t.place(P,G,"after"),l=G,n=P,G=G.parentNode}for(E=n,(1==E.nodeType||3==E.nodeType&&E.nodeValue)&&(F.innerHTML=""),A=E;E;)q=E.nextSibling,F.appendChild(E),E=q}i=f.create(this.editor.window);var T,S=A;if("BR"!==this.blockNodeForEnter){for(;S;)T=S,q=S.firstChild,S=q;T&&T.parentNode?(F=T.parentNode,i.setStart(F,0),r.removeAllRanges(),r.addRange(i),this.editor.height&&o.scrollIntoView(F),d("mozilla")&&(this._pressedEnterInBlock=k.blockNode)):g=!0}else i.setStart(F,0),r.removeAllRanges(),r.addRange(i),this.editor.height&&o.scrollIntoView(F),d("mozilla")&&(this._pressedEnterInBlock=k.blockNode)}return g},_adjustNodeAndOffset:function(e,t){for(;e.length<t&&e.nextSibling&&3==e.nextSibling.nodeType;)t-=e.length,e=e.nextSibling;return{node:e,offset:t}},removeTrailingBr:function(e){var r=/P|DIV|LI/i.test(e.tagName)?e:this.editor.selection.getParentOfType(e,["P","DIV","LI"]);r&&(r.lastChild&&(r.childNodes.length>1&&3==r.lastChild.nodeType&&/^[\s\xAD]*$/.test(r.lastChild.nodeValue)||"BR"==r.lastChild.tagName)&&t.destroy(r.lastChild),r.childNodes.length||(r.innerHTML=this.bogusHtmlContent))}})});//# sourceMappingURL=EnterKeyHandling.js.map