//>>built
define("dojo/io/iframe",["../_base/config","../_base/json","../_base/kernel","../_base/lang","../_base/xhr","../sniff","../_base/window","../dom","../dom-construct","../query","require","../aspect","../request/iframe"],function(e,r,a,t,i,d,l,o,n,s,f,m,v){a.deprecated("dojo/io/iframe","Use dojo/request/iframe.","2.0");var u=v._iframeName;u=u.substring(0,u.lastIndexOf("_"));var h=t.delegate(v,{create:function(){return h._frame=v.create.apply(v,arguments)},get:null,post:null,send:function(t){var d,l=i._ioSetArgs(t,function(e){d&&d.cancel()},function(e){var t=null,i=e.ioArgs;try{var l=i.handleAs;"xml"===l||"html"===l?t=d.response.data:(t=d.response.text,"json"===l?t=r.fromJson(t):"javascript"===l&&(t=a.eval(t)))}catch(e){t=e}return t},function(e,r){return r.ioArgs._hasError=!0,e}),n=l.ioArgs,s="GET",f=o.byId(t.form);t.method&&"POST"===t.method.toUpperCase()&&f&&(s="POST");var u={method:s,handleAs:"json"===t.handleAs||"javascript"===t.handleAs?"text":t.handleAs,form:t.form,query:f?null:t.content,data:f?t.content:null,timeout:t.timeout,ioArgs:n};if(u.method&&(u.method=u.method.toUpperCase()),e.ioPublish&&a.publish&&!1!==n.args.ioPublish)var h=m.after(v,"_notifyStart",function(e){e.options.ioArgs===n&&(h.remove(),i._ioNotifyStart(l))},!0);return d=v(n.url,u,!0),n._callNext=d._callNext,d.then(function(){l.resolve(l)}).otherwise(function(e){l.ioArgs.error=e,l.reject(e)}),l},_iframeOnload:l.global[u+"_onload"]});return t.setObject("dojo.io.iframe",h),h});//# sourceMappingURL=iframe.js.map