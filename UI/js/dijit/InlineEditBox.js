//>>built
require({cache:{"url:dijit/templates/InlineEditBox.html":'<span data-dojo-attach-point="editNode" role="presentation" class="dijitReset dijitInline dijitOffScreen"\n\t><span data-dojo-attach-point="editorPlaceholder"></span\n\t><span data-dojo-attach-point="buttonContainer"\n\t\t><button data-dojo-type="./form/Button" data-dojo-props="label: \'${buttonSave}\', \'class\': \'saveButton\'"\n\t\t\tdata-dojo-attach-point="saveButton" data-dojo-attach-event="onClick:save"></button\n\t\t><button data-dojo-type="./form/Button"  data-dojo-props="label: \'${buttonCancel}\', \'class\': \'cancelButton\'"\n\t\t\tdata-dojo-attach-point="cancelButton" data-dojo-attach-event="onClick:cancel"></button\n\t></span\n></span>\n'}}),define("dijit/InlineEditBox",["require","dojo/_base/array","dojo/aspect","dojo/_base/declare","dojo/dom-attr","dojo/dom-class","dojo/dom-construct","dojo/dom-style","dojo/i18n","dojo/_base/kernel","dojo/keys","dojo/_base/lang","dojo/on","dojo/sniff","dojo/when","./a11yclick","./focus","./_Widget","./_TemplatedMixin","./_WidgetsInTemplateMixin","./_Container","./form/Button","./form/_TextBoxMixin","./form/TextBox","dojo/text!./templates/InlineEditBox.html","dojo/i18n!./nls/common"],function(e,r,a,t,i,d,l,o,n,s,f,m,v,u,h,y,w,M,c,g,p,k,b,F,I){var z=t("dijit._InlineEditor",[M,c,g],{templateString:I,contextRequire:e,postMixInProperties:function(){this.inherited(arguments),this.messages=n.getLocalization("dijit","common",this.lang),r.forEach(["buttonSave","buttonCancel"],function(e){this[e]||(this[e]=this.messages[e])},this)},buildRendering:function(){this.inherited(arguments);var a="string"==typeof this.editor?m.getObject(this.editor)||e(this.editor):this.editor,t=this.sourceStyle,i="line-height:"+t.lineHeight+";",d=o.getComputedStyle(this.domNode);r.forEach(["Weight","Family","Size","Style"],function(e){var r=t["font"+e];d["font"+e]!=r&&(i+="font-"+e+":"+t["font"+e]+";")},this),r.forEach(["marginTop","marginBottom","marginLeft","marginRight","position","left","top","right","bottom","float","clear","display"],function(e){this.domNode.style[e]=t[e]},this);var n=this.inlineEditBox.width;"100%"==n?(i+="width:100%;",this.domNode.style.display="block"):i+="width:"+n+(Number(n)==n?"px":"")+";";var s=m.delegate(this.inlineEditBox.editorParams,{style:i,dir:this.dir,lang:this.lang,textDir:this.textDir});this.editWidget=new a(s,this.editorPlaceholder),this.inlineEditBox.autoSave&&(this.saveButton.destroy(),this.cancelButton.destroy(),this.saveButton=this.cancelButton=null,l.destroy(this.buttonContainer))},postCreate:function(){this.inherited(arguments);var e=this.editWidget;this.inlineEditBox.autoSave?this.own(a.after(e,"onChange",m.hitch(this,"_onChange"),!0),v(e,"keydown",m.hitch(this,"_onKeyDown"))):"intermediateChanges"in e&&(e.set("intermediateChanges",!0),this.own(a.after(e,"onChange",m.hitch(this,"_onIntermediateChange"),!0)),this.saveButton.set("disabled",!0))},startup:function(){this.editWidget.startup(),this.inherited(arguments)},_onIntermediateChange:function(){this.saveButton.set("disabled",this.getValue()==this._resetValue||!this.enableSave())},destroy:function(){this.editWidget.destroy(!0),this.inherited(arguments)},getValue:function(){var e=this.editWidget;return String(e.get("displayedValue"in e||"_getDisplayedValueAttr"in e?"displayedValue":"value"))},_onKeyDown:function(e){if(this.inlineEditBox.autoSave&&this.inlineEditBox.editing){if(e.altKey||e.ctrlKey)return;e.keyCode==f.ESCAPE?(e.stopPropagation(),e.preventDefault(),this.cancel(!0)):e.keyCode==f.ENTER&&"INPUT"==e.target.tagName&&(e.stopPropagation(),e.preventDefault(),this._onChange())}},_onBlur:function(){this.inherited(arguments),this.inlineEditBox.autoSave&&this.inlineEditBox.editing&&(this.getValue()==this._resetValue?this.cancel(!1):this.enableSave()&&this.save(!1))},_onChange:function(){this.inlineEditBox.autoSave&&this.inlineEditBox.editing&&this.enableSave()&&w.focus(this.inlineEditBox.displayNode)},enableSave:function(){return!this.editWidget.isValid||this.editWidget.isValid()},focus:function(){this.editWidget.focus(),this.editWidget.focusNode&&(w._onFocusNode(this.editWidget.focusNode),"INPUT"==this.editWidget.focusNode.tagName&&this.defer(function(){b.selectInputText(this.editWidget.focusNode)}))}}),j=t("dijit.InlineEditBox"+(u("dojo-bidi")?"_NoBidi":""),M,{editing:!1,autoSave:!0,buttonSave:"",buttonCancel:"",renderAsHtml:!1,editor:F,editorWrapper:z,editorParams:{},disabled:!1,onChange:function(){},onCancel:function(){},width:"100%",value:"",noValueIndicator:u("ie")<=6?"<span style='font-family: wingdings; text-decoration: underline;'>&#160;&#160;&#160;&#160;&#x270d;&#160;&#160;&#160;&#160;</span>":"<span style='text-decoration: underline;'>&#160;&#160;&#160;&#160;&#x270d;&#160;&#160;&#160;&#160;</span>",constructor:function(){this.editorParams={}},postMixInProperties:function(){this.inherited(arguments),this.displayNode=this.srcNodeRef,this.own(v(this.displayNode,y,m.hitch(this,"_onClick")),v(this.displayNode,"mouseover, focus",m.hitch(this,"_onMouseOver")),v(this.displayNode,"mouseout, blur",m.hitch(this,"_onMouseOut"))),this.displayNode.setAttribute("role","button"),this.displayNode.getAttribute("tabIndex")||this.displayNode.setAttribute("tabIndex",0),this.value||"value"in this.params||(this.value=m.trim(this.renderAsHtml?this.displayNode.innerHTML:this.displayNode.innerText||this.displayNode.textContent||"")),this.value||(this.displayNode.innerHTML=this.noValueIndicator),d.add(this.displayNode,"dijitInlineEditBoxDisplayMode")},setDisabled:function(e){s.deprecated("dijit.InlineEditBox.setDisabled() is deprecated.  Use set('disabled', bool) instead.","","2.0"),this.set("disabled",e)},_setDisabledAttr:function(e){this.domNode.setAttribute("aria-disabled",e?"true":"false"),e?this.displayNode.removeAttribute("tabIndex"):this.displayNode.setAttribute("tabIndex",0),d.toggle(this.displayNode,"dijitInlineEditBoxDisplayModeDisabled",e),this._set("disabled",e)},_onMouseOver:function(){this.disabled||d.add(this.displayNode,"dijitInlineEditBoxDisplayModeHover")},_onMouseOut:function(){d.remove(this.displayNode,"dijitInlineEditBoxDisplayModeHover")},_onClick:function(e){this.disabled||(e&&(e.stopPropagation(),e.preventDefault()),this._onMouseOut(),this.defer("edit"))},edit:function(){if(!this.disabled&&!this.editing){if(this._set("editing",!0),this._savedTabIndex=i.get(this.displayNode,"tabIndex")||"0",!this.wrapperWidget){var e=l.create("span",null,this.domNode,"before"),r="string"==typeof this.editorWrapper?m.getObject(this.editorWrapper):this.editorWrapper;this.wrapperWidget=new r({value:this.value,buttonSave:this.buttonSave,buttonCancel:this.buttonCancel,dir:this.dir,lang:this.lang,tabIndex:this._savedTabIndex,editor:this.editor,inlineEditBox:this,sourceStyle:o.getComputedStyle(this.displayNode),save:m.hitch(this,"save"),cancel:m.hitch(this,"cancel"),textDir:this.textDir},e),this.wrapperWidget._started||this.wrapperWidget.startup(),this._started||this.startup()}var a=this.wrapperWidget;d.add(this.displayNode,"dijitOffScreen"),d.remove(a.domNode,"dijitOffScreen"),o.set(a.domNode,{visibility:"visible"}),i.set(this.displayNode,"tabIndex","-1");var t=a.editWidget,n=this;h(t.onLoadDeferred,m.hitch(a,function(){t.set("displayedValue"in t||"_setDisplayedValueAttr"in t?"displayedValue":"value",n.value),this.defer(function(){a.saveButton&&a.saveButton.set("disabled","intermediateChanges"in t),this.focus(),this._resetValue=this.getValue()})}))}},_onBlur:function(){this.inherited(arguments),this.editing},destroy:function(){this.wrapperWidget&&!this.wrapperWidget._destroyed&&(this.wrapperWidget.destroy(),delete this.wrapperWidget),this.inherited(arguments)},_showText:function(e){var r=this.wrapperWidget;o.set(r.domNode,{visibility:"hidden"}),d.add(r.domNode,"dijitOffScreen"),d.remove(this.displayNode,"dijitOffScreen"),i.set(this.displayNode,"tabIndex",this._savedTabIndex),e&&w.focus(this.displayNode)},save:function(e){if(!this.disabled&&this.editing){this._set("editing",!1);var r=this.wrapperWidget,a=r.getValue();this.set("value",a),this._showText(e)}},setValue:function(e){return s.deprecated("dijit.InlineEditBox.setValue() is deprecated.  Use set('value', ...) instead.","","2.0"),this.set("value",e)},_setValueAttr:function(e){e=m.trim(e);var r=this.renderAsHtml?e:e.replace(/&/gm,"&amp;").replace(/</gm,"&lt;").replace(/>/gm,"&gt;").replace(/"/gm,"&quot;").replace(/\n/g,"<br>");this.editorParams&&"password"===this.editorParams.type?this.displayNode.innerHTML="********":this.displayNode.innerHTML=r||this.noValueIndicator,this._set("value",e),this._started&&this.defer(function(){this.onChange(e)})},getValue:function(){return s.deprecated("dijit.InlineEditBox.getValue() is deprecated.  Use get('value') instead.","","2.0"),this.get("value")},cancel:function(e){!this.disabled&&this.editing&&(this._set("editing",!1),this.defer("onCancel"),this._showText(e))}});return u("dojo-bidi")&&(j=t("dijit.InlineEditBox",j,{_setValueAttr:function(){this.inherited(arguments),this.applyTextDir(this.displayNode)}})),j._InlineEditor=z,j});//# sourceMappingURL=InlineEditBox.js.map