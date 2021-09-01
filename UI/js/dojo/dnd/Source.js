//>>built
define("dojo/dnd/Source",["../_base/array","../_base/declare","../_base/kernel","../_base/lang","../dom-class","../dom-geometry","../mouse","../ready","../topic","./common","./Selector","./Manager"],function(e,r,a,t,i,d,l,o,n,s,f,m){a.isAsync||o(0,function(){var e=["dojo/dnd/AutoSource","dojo/dnd/Target"];require(e)});var v=r("dojo.dnd.Source",f,{isSource:!0,horizontal:!1,copyOnly:!1,selfCopy:!1,selfAccept:!0,skipForm:!1,withHandles:!1,autoSync:!1,delay:0,accept:["text"],generateText:!0,constructor:function(e,r){t.mixin(this,t.mixin({},r));var a=this.accept;if(a.length){this.accept={};for(var d=0;d<a.length;++d)this.accept[a[d]]=1}this.isDragging=!1,this.mouseDown=!1,this.targetAnchor=null,this.targetBox=null,this.before=!0,this._lastX=0,this._lastY=0,this.sourceState="",this.isSource&&i.add(this.node,"dojoDndSource"),this.targetState="",this.accept&&i.add(this.node,"dojoDndTarget"),this.horizontal&&i.add(this.node,"dojoDndHorizontal"),this.topics=[n.subscribe("/dnd/source/over",t.hitch(this,"onDndSourceOver")),n.subscribe("/dnd/start",t.hitch(this,"onDndStart")),n.subscribe("/dnd/drop",t.hitch(this,"onDndDrop")),n.subscribe("/dnd/cancel",t.hitch(this,"onDndCancel"))]},checkAcceptance:function(e,r){if(this==e)return!this.copyOnly||this.selfAccept;for(var a=0;a<r.length;++a){for(var t=e.getItem(r[a].id).type,i=!1,d=0;d<t.length;++d)if(t[d]in this.accept){i=!0;break}if(!i)return!1}return!0},copyState:function(e,r){return!!e||(arguments.length<2&&(r=this==m.manager().target),r?!!this.copyOnly&&this.selfCopy:this.copyOnly)},destroy:function(){v.superclass.destroy.call(this),e.forEach(this.topics,function(e){e.remove()}),this.targetAnchor=null},onMouseMove:function(e){if(!this.isDragging||"Disabled"!=this.targetState){v.superclass.onMouseMove.call(this,e);var r=m.manager();if(!this.isDragging&&this.mouseDown&&this.isSource&&(Math.abs(e.pageX-this._lastX)>this.delay||Math.abs(e.pageY-this._lastY)>this.delay)){var a=this.getSelectedNodes();a.length&&r.startDrag(this,a,this.copyState(s.getCopyKeyState(e),!0))}if(this.isDragging){var t=!1;this.current&&(this.targetBox&&this.targetAnchor==this.current||(this.targetBox=d.position(this.current,!0)),t=this.horizontal?e.pageX-this.targetBox.x<this.targetBox.w/2==d.isBodyLtr(this.current.ownerDocument):e.pageY-this.targetBox.y<this.targetBox.h/2),this.current==this.targetAnchor&&t==this.before||(this._markTargetAnchor(t),r.canDrop(!(this.current&&r.source==this&&this.current.id in this.selection)))}}},onMouseDown:function(e){this.mouseDown||!this._legalMouseDown(e)||this.skipForm&&s.isFormElement(e)||(this.mouseDown=!0,this._lastX=e.pageX,this._lastY=e.pageY,v.superclass.onMouseDown.call(this,e))},onMouseUp:function(e){this.mouseDown&&(this.mouseDown=!1,v.superclass.onMouseUp.call(this,e))},onDndSourceOver:function(e){if(this!==e)this.mouseDown=!1,this.targetAnchor&&this._unmarkTargetAnchor();else if(this.isDragging){var r=m.manager();r.canDrop(!("Disabled"==this.targetState||this.current&&r.source==this&&this.current.id in this.selection))}},onDndStart:function(e,r,a){this.autoSync&&this.sync(),this.isSource&&this._changeState("Source",this==e?a?"Copied":"Moved":"");var t=this.accept&&this.checkAcceptance(e,r);this._changeState("Target",t?"":"Disabled"),this==e&&m.manager().overSource(this),this.isDragging=!0},onDndDrop:function(e,r,a,t){this==t&&this.onDrop(e,r,a),this.onDndCancel()},onDndCancel:function(){this.targetAnchor&&(this._unmarkTargetAnchor(),this.targetAnchor=null),this.before=!0,this.isDragging=!1,this.mouseDown=!1,this._changeState("Source",""),this._changeState("Target","")},onDrop:function(e,r,a){this!=e?this.onDropExternal(e,r,a):this.onDropInternal(r,a)},onDropExternal:function(e,r,a){var t=this._normalizedCreator;this.creator?this._normalizedCreator=function(r,a){return t.call(this,e.getItem(r.id).data,a)}:this._normalizedCreator=a?function(r){var a=e.getItem(r.id),t=r.cloneNode(!0);return t.id=s.getUniqueId(),{node:t,data:a.data,type:a.type}}:function(r){var a=e.getItem(r.id);return e.delItem(r.id),{node:r,data:a.data,type:a.type}},this.selectNone(),a||this.creator||e.selectNone(),this.insertNodes(!0,r,this.before,this.current),!a&&this.creator&&e.deleteSelectedNodes(),this._normalizedCreator=t},onDropInternal:function(e,r){var a=this._normalizedCreator;if(!(this.current&&this.current.id in this.selection)){if(r)this.creator?this._normalizedCreator=function(e,r){return a.call(this,this.getItem(e.id).data,r)}:this._normalizedCreator=function(e){var r=this.getItem(e.id),a=e.cloneNode(!0);return a.id=s.getUniqueId(),{node:a,data:r.data,type:r.type}};else{if(!this.current)return;this._normalizedCreator=function(e){var r=this.getItem(e.id);return{node:e,data:r.data,type:r.type}}}this._removeSelection(),this.insertNodes(!0,e,this.before,this.current),this._normalizedCreator=a}},onDraggingOver:function(){},onDraggingOut:function(){},onOverEvent:function(){v.superclass.onOverEvent.call(this),m.manager().overSource(this),this.isDragging&&"Disabled"!=this.targetState&&this.onDraggingOver()},onOutEvent:function(){v.superclass.onOutEvent.call(this),m.manager().outSource(this),this.isDragging&&"Disabled"!=this.targetState&&this.onDraggingOut()},_markTargetAnchor:function(e){this.current==this.targetAnchor&&this.before==e||(this.targetAnchor&&this._removeItemClass(this.targetAnchor,this.before?"Before":"After"),this.targetAnchor=this.current,this.targetBox=null,this.before=e,this.targetAnchor&&this._addItemClass(this.targetAnchor,this.before?"Before":"After"))},_unmarkTargetAnchor:function(){this.targetAnchor&&(this._removeItemClass(this.targetAnchor,this.before?"Before":"After"),this.targetAnchor=null,this.targetBox=null,this.before=!0)},_markDndStatus:function(e){this._changeState("Source",e?"Copied":"Moved")},_legalMouseDown:function(e){if("touchstart"!=e.type&&!l.isLeft(e))return!1;if(!this.withHandles)return!0;for(var r=e.target;r&&r!==this.node;r=r.parentNode){if(i.contains(r,"dojoDndHandle"))return!0;if(i.contains(r,"dojoDndItem")||i.contains(r,"dojoDndIgnore"))break}return!1}});return v});//# sourceMappingURL=Source.js.map