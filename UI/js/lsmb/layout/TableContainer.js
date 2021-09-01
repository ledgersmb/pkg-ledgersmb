//>>built
define("lsmb/layout/TableContainer",["dojo/_base/kernel","dojo/_base/lang","dojo/_base/declare","dojo/dom-class","dojo/dom-construct","dojo/_base/array","dojo/dom-prop","dojo/dom-style","dijit/_WidgetBase","dijit/layout/_LayoutWidget"],function(e,t,r,a,i,d,o,l,n,s){var f=r("lsmb.layout.TableContainer",s,{cols:1,labelWidth:"100",showLabels:!0,orientation:"horiz",spacing:1,customClass:"",postCreate:function(){this.inherited(arguments),this._children=[],this.connect(this,"set",function(e,t){!t||"orientation"!=e&&"customClass"!=e&&"cols"!=e||this.layout()})},startup:function(){if(!this._started&&(this.inherited(arguments),!this._initialized)){var e=this.getChildren();e.length<1||(this._initialized=!0,a.add(this.domNode,"dijitTableLayout"),d.forEach(e,function(e){e.started||e._started||e.startup()}),this.layout(),this.resize())}},resize:function(){d.forEach(this.getChildren(),function(e){"function"==typeof e.resize&&e.resize()})},layout:function(){function e(e,t,r){if(""!=s.customClass){var i=s.customClass+"-"+(t||e.tagName.toLowerCase());a.add(e,i),arguments.length>2&&a.add(e,i+"-"+r)}}if(this._initialized){var r=this.getChildren(),n={},s=this;d.forEach(this._children,t.hitch(this,function(e){n[e.id]=e})),d.forEach(r,t.hitch(this,function(e,t){n[e.id]||this._children.push(e)}));var f=i.create("table",{width:"100%",class:"tableContainer-table tableContainer-table-"+this.orientation,cellspacing:this.spacing},this.domNode),m=i.create("tbody");f.appendChild(m),e(f,"table",this.orientation);var u=(Math.floor(100/this.cols),i.create("tr",{},m)),h=this.showLabels&&"horiz"!=this.orientation?i.create("tr",{},m):u,v=this.cols*(this.showLabels?2:1),y=0;d.forEach(this._children,t.hitch(this,function(t,r){var a=t.colspan||1;a>1&&(a=this.showLabels?Math.min(v-1,2*a-1):Math.min(v,a)),y+a-1+(this.showLabels?1:0)>=v&&(y=0,u=i.create("tr",{},m),h="horiz"==this.orientation?u:i.create("tr",{},m));var d;if(this.showLabels)if(d=i.create("td",{class:"tableContainer-labelCell"},u),t.spanLabel)o.set(d,"vert"==this.orientation?"rowspan":"colspan",2);else{e(d,"labelCell");var n={for:t.get("id")},s=i.create("label",n,d);(Number(this.labelWidth)>-1||String(this.labelWidth).indexOf("%")>-1)&&l.set(d,"width",String(this.labelWidth).indexOf("%")<0?this.labelWidth+"px":this.labelWidth),s.innerHTML=t.get("label")||t.get("title")}var f;f=t.spanLabel&&d?d:i.create("td",{class:"tableContainer-valueCell"},h),a>1&&o.set(f,"colspan",a),e(f,"valueCell",r),f.appendChild(t.domNode),y+=a+(this.showLabels?1:0)})),this.table&&this.table.parentNode.removeChild(this.table),d.forEach(r,function(e){"function"==typeof e.layout&&e.layout()}),this.table=f,this.resize()}},destroyDescendants:function(e){d.forEach(this._children,function(t){t.destroyRecursive(e)})},_setSpacingAttr:function(e){this.spacing=e,this.table&&(this.table.cellspacing=Number(e))}});return f.ChildWidgetProperties={label:"",title:"",spanLabel:!1,colspan:1},t.extend(n,f.ChildWidgetProperties),f});//# sourceMappingURL=TableContainer.js.map