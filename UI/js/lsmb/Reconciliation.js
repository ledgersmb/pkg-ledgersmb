//>>built
define("lsmb/Reconciliation",["dojo/_base/declare","dojo/topic","dojo/query","lsmb/Form","dijit/_Container","dojo/NodeList-dom","dojo/domReady!"],function(e,t,r,a,i){return e("lsmb/Reconciliation",[a,i],{update:function(e,t){r(t+" tbody tr.record").style("display",e?"":"none")},postCreate:function(){var e=this;this.inherited(arguments),t.subscribe("ui/reconciliation/report/b_cleared_table",function(t){e.update(t,"#cleared-table")}),t.subscribe("ui/reconciliation/report/b_mismatch_table",function(t){e.update(t,"#mismatch-table")}),t.subscribe("ui/reconciliation/report/b_outstanding_table",function(t){e.update(t,"#outstanding-table")})}})});//# sourceMappingURL=Reconciliation.js.map