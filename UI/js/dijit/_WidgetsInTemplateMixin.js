//>>built
define("dijit/_WidgetsInTemplateMixin",["dojo/_base/array","dojo/aspect","dojo/_base/declare","dojo/_base/lang","dojo/parser"],function(e,r,t,a,i){return t("dijit._WidgetsInTemplateMixin",null,{_earlyTemplatedStartup:!1,contextRequire:null,_beforeFillContent:function(){if(/dojoType|data-dojo-type/i.test(this.domNode.innerHTML)){var e=this.domNode;if(this.containerNode&&!this.searchContainerNode&&(this.containerNode.stopParser=!0),i.parse(e,{noStart:!this._earlyTemplatedStartup,template:!0,inherited:{dir:this.dir,lang:this.lang,textDir:this.textDir},propsThis:this,contextRequire:this.contextRequire,scope:"dojo"}).then(a.hitch(this,function(e){this._startupWidgets=e;for(var r=0;r<e.length;r++)this._processTemplateNode(e[r],function(e,r){return e[r]},function(e,r,t){return r in e?e.connect(e,r,t):e.on(r,t,!0)});this.containerNode&&this.containerNode.stopParser&&delete this.containerNode.stopParser})),!this._startupWidgets)throw new Error(this.declaredClass+": parser returned unfilled promise (probably waiting for module auto-load), unsupported by _WidgetsInTemplateMixin.   Must pre-load all supporting widgets before instantiation.")}},_processTemplateNode:function(e,r,t){return!(!r(e,"dojoType")&&!r(e,"data-dojo-type"))||this.inherited(arguments)},startup:function(){e.forEach(this._startupWidgets,function(e){e&&!e._started&&e.startup&&e.startup()}),this._startupWidgets=null,this.inherited(arguments)}})});//# sourceMappingURL=_WidgetsInTemplateMixin.js.map