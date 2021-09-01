//>>built
require({cache:{"url:dijit/templates/Tooltip.html":'<div class="dijitTooltip dijitTooltipLeft" id="dojoTooltip" data-dojo-attach-event="mouseenter:onMouseEnter,mouseleave:onMouseLeave"\n\t><div class="dijitTooltipConnector" data-dojo-attach-point="connectorNode"></div\n\t><div class="dijitTooltipContainer dijitTooltipContents" data-dojo-attach-point="containerNode" role=\'alert\'></div\n></div>\n'}}),define("dijit/Tooltip",["dojo/_base/array","dojo/_base/declare","dojo/_base/fx","dojo/dom","dojo/dom-class","dojo/dom-geometry","dojo/dom-style","dojo/_base/lang","dojo/mouse","dojo/on","dojo/sniff","./_base/manager","./place","./_Widget","./_TemplatedMixin","./BackgroundIframe","dojo/text!./templates/Tooltip.html","./main"],function(e,r,a,t,i,d,l,o,n,s,f,m,v,u,h,y,w,M){function c(){}var p=r("dijit._MasterTooltip",[u,h],{duration:m.defaultDuration,templateString:w,postCreate:function(){this.ownerDocumentBody.appendChild(this.domNode),this.bgIframe=new y(this.domNode),this.fadeIn=a.fadeIn({node:this.domNode,duration:this.duration,onEnd:o.hitch(this,"_onShow")}),this.fadeOut=a.fadeOut({node:this.domNode,duration:this.duration,onEnd:o.hitch(this,"_onHide")})},show:function(e,r,a,t,i,d,n){if(!this.aroundNode||this.aroundNode!==r||this.containerNode.innerHTML!=e){if("playing"==this.fadeOut.status())return void(this._onDeck=arguments);this.containerNode.innerHTML=e,i&&this.set("textDir",i),this.containerNode.align=t?"right":"left";var s=v.around(this.domNode,r,a&&a.length?a:I.defaultPosition,!t,o.hitch(this,"orient")),f=s.aroundNodePos;"M"==s.corner.charAt(0)&&"M"==s.aroundCorner.charAt(0)?(this.connectorNode.style.top=f.y+(f.h-this.connectorNode.offsetHeight>>1)-s.y+"px",this.connectorNode.style.left=""):"M"==s.corner.charAt(1)&&"M"==s.aroundCorner.charAt(1)?this.connectorNode.style.left=f.x+(f.w-this.connectorNode.offsetWidth>>1)-s.x+"px":(this.connectorNode.style.left="",this.connectorNode.style.top=""),l.set(this.domNode,"opacity",0),this.fadeIn.play(),this.isShowingNow=!0,this.aroundNode=r,this.onMouseEnter=d||c,this.onMouseLeave=n||c}},orient:function(e,r,a,t,i){this.connectorNode.style.top="";var l=t.h,o=t.w;e.className="dijitTooltip "+{"MR-ML":"dijitTooltipRight","ML-MR":"dijitTooltipLeft","TM-BM":"dijitTooltipAbove","BM-TM":"dijitTooltipBelow","BL-TL":"dijitTooltipBelow dijitTooltipABLeft","TL-BL":"dijitTooltipAbove dijitTooltipABLeft","BR-TR":"dijitTooltipBelow dijitTooltipABRight","TR-BR":"dijitTooltipAbove dijitTooltipABRight","BR-BL":"dijitTooltipRight","BL-BR":"dijitTooltipLeft"}[r+"-"+a],this.domNode.style.width="auto";var n=d.position(this.domNode);(f("ie")||f("trident"))&&(n.w+=2);var s=Math.min(Math.max(o,1),n.w);if(d.setMarginBox(this.domNode,{w:s}),"B"==a.charAt(0)&&"B"==r.charAt(0)){var m=d.position(e),v=this.connectorNode.offsetHeight;if(m.h>l){var u=l-(i.h+v>>1);this.connectorNode.style.top=u+"px",this.connectorNode.style.bottom=""}else this.connectorNode.style.bottom=Math.min(Math.max(i.h/2-v/2,0),m.h-v)+"px",this.connectorNode.style.top=""}else this.connectorNode.style.top="",this.connectorNode.style.bottom="";return Math.max(0,n.w-o)},_onShow:function(){f("ie")&&(this.domNode.style.filter="")},hide:function(e){this._onDeck&&this._onDeck[1]==e?this._onDeck=null:this.aroundNode===e&&(this.fadeIn.stop(),this.isShowingNow=!1,this.aroundNode=null,this.fadeOut.play()),this.onMouseEnter=this.onMouseLeave=c},_onHide:function(){this.domNode.style.cssText="",this.containerNode.innerHTML="",this._onDeck&&(this.show.apply(this,this._onDeck),this._onDeck=null)}});f("dojo-bidi")&&p.extend({_setAutoTextDir:function(r){this.applyTextDir(r),e.forEach(r.children,function(e){this._setAutoTextDir(e)},this)},_setTextDirAttr:function(e){this._set("textDir",e),"auto"==e?this._setAutoTextDir(this.containerNode):this.containerNode.dir=this.textDir}}),M.showTooltip=function(r,a,t,i,d,l,o){return t&&(t=e.map(t,function(e){return{after:"after-centered",before:"before-centered"}[e]||e})),I._masterTT||(M._masterTT=I._masterTT=new p),I._masterTT.show(r,a,t,i,d,l,o)},M.hideTooltip=function(e){return I._masterTT&&I._masterTT.hide(e)};var g="DORMANT",k="SHOW TIMER",b="SHOWING",F="HIDE TIMER",I=r("dijit.Tooltip",u,{label:"",showDelay:400,hideDelay:400,connectId:[],position:[],selector:"",_setConnectIdAttr:function(r){e.forEach(this._connections||[],function(r){e.forEach(r,function(e){e.remove()})},this),this._connectIds=e.filter(o.isArrayLike(r)?r:r?[r]:[],function(e){return t.byId(e,this.ownerDocument)},this),this._connections=e.map(this._connectIds,function(e){var r=t.byId(e,this.ownerDocument),a=this.selector,i=a?function(e){return s.selector(a,e)}:function(e){return e},d=this;return[s(r,i(n.enter),function(){d._onHover(this)}),s(r,i("focusin"),function(){d._onHover(this)}),s(r,i(n.leave),o.hitch(d,"_onUnHover")),s(r,i("focusout"),o.hitch(d,"set","state",g))]},this),this._set("connectId",r)},addTarget:function(r){var a=r.id||r;-1==e.indexOf(this._connectIds,a)&&this.set("connectId",this._connectIds.concat(a))},removeTarget:function(r){var a=r.id||r,t=e.indexOf(this._connectIds,a);t>=0&&(this._connectIds.splice(t,1),this.set("connectId",this._connectIds))},buildRendering:function(){this.inherited(arguments),i.add(this.domNode,"dijitTooltipData")},startup:function(){this.inherited(arguments);var r=this.connectId;e.forEach(o.isArrayLike(r)?r:[r],this.addTarget,this)},getContent:function(e){return this.label||this.domNode.innerHTML},state:g,_setStateAttr:function(e){if(!(this.state==e||e==k&&this.state==b||e==F&&this.state==g)){switch(this._hideTimer&&(this._hideTimer.remove(),delete this._hideTimer),this._showTimer&&(this._showTimer.remove(),delete this._showTimer),e){case g:this._connectNode&&(I.hide(this._connectNode),delete this._connectNode,this.onHide());break;case k:this.state!=b&&(this._showTimer=this.defer(function(){this.set("state",b)},this.showDelay));break;case b:var r=this.getContent(this._connectNode);if(!r)return void this.set("state",g);I.show(r,this._connectNode,this.position,!this.isLeftToRight(),this.textDir,o.hitch(this,"set","state",b),o.hitch(this,"set","state",F)),this.onShow(this._connectNode,this.position);break;case F:this._hideTimer=this.defer(function(){this.set("state",g)},this.hideDelay)}this._set("state",e)}},_onHover:function(e){this._connectNode&&e!=this._connectNode&&this.set("state",g),this._connectNode=e,this.set("state",k)},_onUnHover:function(e){this.set("state",F)},open:function(e){this.set("state",g),this._connectNode=e,this.set("state",b)},close:function(){this.set("state",g)},onShow:function(){},onHide:function(){},destroy:function(){this.set("state",g),e.forEach(this._connections||[],function(r){e.forEach(r,function(e){e.remove()})},this),this.inherited(arguments)}});return I._MasterTooltip=p,I.show=M.showTooltip,I.hide=M.hideTooltip,I.defaultPosition=["after-centered","before-centered"],I});//# sourceMappingURL=Tooltip.js.map