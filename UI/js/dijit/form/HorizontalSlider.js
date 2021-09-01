//>>built
require({cache:{"url:dijit/form/templates/HorizontalSlider.html":'<table class="dijit dijitReset dijitSlider dijitSliderH" cellspacing="0" cellpadding="0" border="0" rules="none" data-dojo-attach-event="onkeydown:_onKeyDown, onkeyup:_onKeyUp"\n\trole="presentation"\n\t><tr class="dijitReset"\n\t\t><td class="dijitReset" colspan="2"></td\n\t\t><td data-dojo-attach-point="topDecoration" class="dijitReset dijitSliderDecoration dijitSliderDecorationT dijitSliderDecorationH"></td\n\t\t><td class="dijitReset" colspan="2"></td\n\t></tr\n\t><tr class="dijitReset"\n\t\t><td class="dijitReset dijitSliderButtonContainer dijitSliderButtonContainerH"\n\t\t\t><div class="dijitSliderDecrementIconH" style="display:none" data-dojo-attach-point="decrementButton"><span class="dijitSliderButtonInner">-</span></div\n\t\t></td\n\t\t><td class="dijitReset"\n\t\t\t><div class="dijitSliderBar dijitSliderBumper dijitSliderBumperH dijitSliderLeftBumper" data-dojo-attach-event="press:_onClkDecBumper"></div\n\t\t></td\n\t\t><td class="dijitReset"\n\t\t\t><input data-dojo-attach-point="valueNode" type="hidden" ${!nameAttrSetting}\n\t\t\t/><div class="dijitReset dijitSliderBarContainerH" role="presentation" data-dojo-attach-point="sliderBarContainer"\n\t\t\t\t><div role="presentation" data-dojo-attach-point="progressBar" class="dijitSliderBar dijitSliderBarH dijitSliderProgressBar dijitSliderProgressBarH" data-dojo-attach-event="press:_onBarClick"\n\t\t\t\t\t><div class="dijitSliderMoveable dijitSliderMoveableH"\n\t\t\t\t\t\t><div data-dojo-attach-point="sliderHandle,focusNode" class="dijitSliderImageHandle dijitSliderImageHandleH" data-dojo-attach-event="press:_onHandleClick" role="slider"></div\n\t\t\t\t\t></div\n\t\t\t\t></div\n\t\t\t\t><div role="presentation" data-dojo-attach-point="remainingBar" class="dijitSliderBar dijitSliderBarH dijitSliderRemainingBar dijitSliderRemainingBarH" data-dojo-attach-event="press:_onBarClick"></div\n\t\t\t></div\n\t\t></td\n\t\t><td class="dijitReset"\n\t\t\t><div class="dijitSliderBar dijitSliderBumper dijitSliderBumperH dijitSliderRightBumper" data-dojo-attach-event="press:_onClkIncBumper"></div\n\t\t></td\n\t\t><td class="dijitReset dijitSliderButtonContainer dijitSliderButtonContainerH"\n\t\t\t><div class="dijitSliderIncrementIconH" style="display:none" data-dojo-attach-point="incrementButton"><span class="dijitSliderButtonInner">+</span></div\n\t\t></td\n\t></tr\n\t><tr class="dijitReset"\n\t\t><td class="dijitReset" colspan="2"></td\n\t\t><td data-dojo-attach-point="containerNode,bottomDecoration" class="dijitReset dijitSliderDecoration dijitSliderDecorationB dijitSliderDecorationH"></td\n\t\t><td class="dijitReset" colspan="2"></td\n\t></tr\n></table>\n'}}),define("dijit/form/HorizontalSlider",["dojo/_base/array","dojo/_base/declare","dojo/dnd/move","dojo/_base/fx","dojo/dom-geometry","dojo/dom-style","dojo/keys","dojo/_base/lang","dojo/sniff","dojo/dnd/Moveable","dojo/dnd/Mover","dojo/query","dojo/mouse","dojo/on","../_base/manager","../focus","../typematic","./Button","./_FormValueWidget","../_Container","dojo/text!./templates/HorizontalSlider.html"],function(e,t,r,a,i,d,l,o,n,s,f,m,u,v,h,y,w,c,M,p,g){var b=t("dijit.form._SliderMover",f,{onMouseMove:function(e){var t=this.widget,r=t._abspos;r||(r=t._abspos=i.position(t.sliderBarContainer,!0),t._setPixelValue_=o.hitch(t,"_setPixelValue"),t._isReversed_=t._isReversed());var a=e[t._mousePixelCoord]-r[t._startingPixelCoord];t._setPixelValue_(t._isReversed_?r[t._pixelCount]-a:a,r[t._pixelCount],!1)},destroy:function(e){f.prototype.destroy.apply(this,arguments);var t=this.widget;t._abspos=null,t._setValueAttr(t.value,!0)}}),k=t("dijit.form.HorizontalSlider",[M,p],{templateString:g,value:0,showButtons:!0,minimum:0,maximum:100,discreteValues:1/0,pageIncrement:2,clickSelect:!0,slideDuration:h.defaultDuration,_setIdAttr:"",_setNameAttr:"valueNode",baseClass:"dijitSlider",cssStateNodes:{incrementButton:"dijitSliderIncrementButton",decrementButton:"dijitSliderDecrementButton",focusNode:"dijitSliderThumb"},_mousePixelCoord:"pageX",_pixelCount:"w",_startingPixelCoord:"x",_handleOffsetCoord:"left",_progressPixelSize:"width",_onKeyUp:function(e){this.disabled||this.readOnly||e.altKey||e.ctrlKey||e.metaKey||this._setValueAttr(this.value,!0)},_onKeyDown:function(e){if(!(this.disabled||this.readOnly||e.altKey||e.ctrlKey||e.metaKey)){switch(e.keyCode){case l.HOME:this._setValueAttr(this.minimum,!1);break;case l.END:this._setValueAttr(this.maximum,!1);break;case this._descending||this.isLeftToRight()?l.RIGHT_ARROW:l.LEFT_ARROW:case!1===this._descending?l.DOWN_ARROW:l.UP_ARROW:case!1===this._descending?l.PAGE_DOWN:l.PAGE_UP:this.increment(e);break;case this._descending||this.isLeftToRight()?l.LEFT_ARROW:l.RIGHT_ARROW:case!1===this._descending?l.UP_ARROW:l.DOWN_ARROW:case!1===this._descending?l.PAGE_UP:l.PAGE_DOWN:this.decrement(e);break;default:return}e.stopPropagation(),e.preventDefault()}},_onHandleClick:function(e){this.disabled||this.readOnly||(n("ie")||y.focus(this.sliderHandle),e.stopPropagation(),e.preventDefault())},_isReversed:function(){return!this.isLeftToRight()},_onBarClick:function(e){if(!this.disabled&&!this.readOnly&&this.clickSelect){y.focus(this.sliderHandle),e.stopPropagation(),e.preventDefault();var t=i.position(this.sliderBarContainer,!0),r=e[this._mousePixelCoord]-t[this._startingPixelCoord];this._setPixelValue(this._isReversed()?t[this._pixelCount]-r:r,t[this._pixelCount],!0),this._movable.onMouseDown(e)}},_setPixelValue:function(e,t,r){if(!this.disabled&&!this.readOnly){var a=this.discreteValues;(a<=1||a==1/0)&&(a=t),a--;var i=t/a,d=Math.round(e/i);this._setValueAttr(Math.max(Math.min((this.maximum-this.minimum)*d/a+this.minimum,this.maximum),this.minimum),r)}},_setValueAttr:function(e,t){this._set("value",e),this.valueNode.value=e,this.focusNode.setAttribute("aria-valuenow",e),this.inherited(arguments);var r=this.maximum>this.minimum?(e-this.minimum)/(this.maximum-this.minimum):0,i=!1===this._descending?this.remainingBar:this.progressBar,d=!1===this._descending?this.progressBar:this.remainingBar;if(this._inProgressAnim&&"stopped"!=this._inProgressAnim.status&&this._inProgressAnim.stop(!0),t&&this.slideDuration>0&&i.style[this._progressPixelSize]){var l=this,o={},n=parseFloat(i.style[this._progressPixelSize]),s=this.slideDuration*(r-n/100);if(0==s)return;s<0&&(s=0-s),o[this._progressPixelSize]={start:n,end:100*r,units:"%"},this._inProgressAnim=a.animateProperty({node:i,duration:s,onAnimate:function(e){d.style[l._progressPixelSize]=100-parseFloat(e[l._progressPixelSize])+"%"},onEnd:function(){delete l._inProgressAnim},properties:o}),this._inProgressAnim.play()}else i.style[this._progressPixelSize]=100*r+"%",d.style[this._progressPixelSize]=100*(1-r)+"%"},_bumpValue:function(e,t){if(!(this.disabled||this.readOnly||this.maximum<=this.minimum)){var r=d.getComputedStyle(this.sliderBarContainer),a=i.getContentBox(this.sliderBarContainer,r),l=this.discreteValues;(l<=1||l==1/0)&&(l=a[this._pixelCount]),l--;var o=Math.round((this.value-this.minimum)*l/(this.maximum-this.minimum))+e;o<0&&(o=0),o>l&&(o=l),o=o*(this.maximum-this.minimum)/l+this.minimum,this._setValueAttr(o,t)}},_onClkBumper:function(e){this.disabled||this.readOnly||!this.clickSelect||this._setValueAttr(e,!0)},_onClkIncBumper:function(){this._onClkBumper(!1===this._descending?this.minimum:this.maximum)},_onClkDecBumper:function(){this._onClkBumper(!1===this._descending?this.maximum:this.minimum)},decrement:function(e){this._bumpValue(e.keyCode==l.PAGE_DOWN?-this.pageIncrement:-1)},increment:function(e){this._bumpValue(e.keyCode==l.PAGE_UP?this.pageIncrement:1)},_mouseWheeled:function(e){this.focused&&(e.stopPropagation(),e.preventDefault(),this._bumpValue(e.wheelDelta<0?-1:1,!0))},startup:function(){this._started||(e.forEach(this.getChildren(),function(e){this[e.container]!=this.containerNode&&this[e.container].appendChild(e.domNode)},this),this.inherited(arguments))},_typematicCallback:function(e,t,r){-1==e?this._setValueAttr(this.value,!0):this[t==(this._descending?this.incrementButton:this.decrementButton)?"decrement":"increment"](r)},buildRendering:function(){this.inherited(arguments),this.showButtons&&(this.incrementButton.style.display="",this.decrementButton.style.display="");var e=m('label[for="'+this.id+'"]');e.length&&(e[0].id||(e[0].id=this.id+"_label"),this.focusNode.setAttribute("aria-labelledby",e[0].id)),this.focusNode.setAttribute("aria-valuemin",this.minimum),this.focusNode.setAttribute("aria-valuemax",this.maximum)},postCreate:function(){this.inherited(arguments),this.showButtons&&this.own(w.addMouseListener(this.decrementButton,this,"_typematicCallback",25,500),w.addMouseListener(this.incrementButton,this,"_typematicCallback",25,500)),this.own(v(this.domNode,u.wheel,o.hitch(this,"_mouseWheeled")));var e=t(b,{widget:this});this._movable=new s(this.sliderHandle,{mover:e}),this._layoutHackIE7()},destroy:function(){this._movable.destroy(),this._inProgressAnim&&"stopped"!=this._inProgressAnim.status&&this._inProgressAnim.stop(!0),this.inherited(arguments)}});return k._Mover=b,k});//# sourceMappingURL=HorizontalSlider.js.map