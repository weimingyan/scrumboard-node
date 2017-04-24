/*
 *  p-loading - v1.2.0
 *  Loading mask plugin for jQuery.
 *  http://joseshiru.github.io/p-loading/
 *
 *  Made by Jose Zuniga
 *  Under MIT License
 */
!function(a){"use strict";a.fn.ploading=function(b){var c,d=this,e={},f={},g={};return e.definePluginSettings=function(){var d,e,f;f=function(a){a.hide()},e=function(a){a.show()},d={action:"show",containerHTML:"<div/>",containerAttrs:{},containerClass:"p-loading-container",spinnerHTML:"<div/>",spinnerAttrs:{},spinnerClass:"p-loading-spinner piano-spinner",onShowContainer:void 0,onHideContainer:void 0,onDestroyContainer:void 0,hideAnimation:f,showAnimation:e,destroyAfterHide:!1,idPrefix:"loader",pluginNameSpace:"p-loader",maskHolder:!0,maskColor:"rgba(0,0,0,0.6)",useAddOns:[]},c=a.extend(d,a.fn.ploading.defaults,b)},e.definePublicVariables=function(){"initialized"!==a.fn.ploading.state&&(a.fn.ploading.state="starting",a.fn.ploading.addOnManager={},a.fn.ploading.addOnManager.events={})},e.definePrivateActions=function(){g.buildPluginMarkup=function(){var b,e={};e.$container=function(){var b=c.containerHTML,e=a(b),f=Math.round((new Date).getTime()+100*Math.random()),g=c.idPrefix+f;return d.data(c.pluginNameSpace+"id",g),e.prop("id",g),e.attr(c.containerAttrs),e.addClass(c.containerClass),e},e.$spinner=function(){var b=c.spinnerHTML,d=a(b);return d.attr(c.spinnerAttrs),d.addClass(c.spinnerClass),d},(b=function(){var a=e.$container(),b=e.$spinner();a.append(b),a.hide(),d.prepend(a)})()},g.utils=function(b){var e={};return e.getPluginContainerId=function(){var a=d.data(c.pluginNameSpace+"id");return a},e.getPluginContainer=function(){var b=g.utils({action:"getPluginContainerId"}),c=a("#"+b);return c},e.setPluginState=function(){a.fn.ploading.state=b.state},e.getPluginState=function(){return a.fn.ploading.state},e[b.action]()},g.events=function(){var b=g.events,c={"pl:spinner:show":!0,"pl:spinner:hide":!0,"pl:spinner:destroy":!0},d=function(a){return a=a.indexOf(".")===-1?a:a.substring(0,a.indexOf(".")),!c[a]&&(console.error("The event "+a+" doesnt exist"),!0)};b.on=function(b,c){if(!d(b))return a(a.fn.ploading.addOnManager.events).on(b,c)},b.off=function(b,c,d){return a(a.fn.ploading.addOnManager.events).off(b,c,d)},b.trigger=function(b,c){if(!d(b))return a(a.fn.ploading.addOnManager.events).trigger(b,c)}},g.addOnInstaller=function(){var b,e={};e.getAddOns=function(){return a.fn.ploading.addOns},e.getParamsToSend=function(){var a={pluginPublicAction:f,pluginSettings:c,pluginPrivateAction:{utils:g.utils,events:g.events},$pluginElement:d};return a},e.applyAddOnData=function(b){c=a.extend(c,b.pluginSettings),c=a.extend(c,b.pluginPublicAction)},e.installAddOn=function(){var a,b=c.useAddOns.length>0;if(b){a=e.getAddOns();for(var d=0,f=c.useAddOns.length;d<f;d++){var g,h=c.useAddOns[d],i=a[h],j=!!i;j&&(g=e.getParamsToSend(),e.applyAddOnData(i(g)))}}},(b=function(){e.installAddOn()})()},g.changeMaskColor=function(){var b=g.utils({action:"getPluginContainerId"}),d=a("#"+b);d.css("background-color",c.maskColor)}},e.definePublicActions=function(){f.destroy=function(){var a=g.utils({action:"getPluginContainer"});a.remove(),d.removeData(c.pluginNameSpace+"id"),c.onDestroyContainer&&(c.onDestroyContainer(a),d.trigger("pl:spinner:destroy",[a]),g.events.trigger("pl:spinner:destroy"))},f.show=function(){var a=g.utils({action:"getPluginContainer"}),b=0!==a.length;b?c.showAnimation(a,d):(g.buildPluginMarkup(),a=g.utils({action:"getPluginContainer"})),c.showAnimation(a,d),c.maskHolder&&d.addClass("p-loading-element-mask"),c.onShowContainer&&c.onShowContainer(d,a),d.trigger("pl:spinner:show",[d,a]),g.events.trigger("pl:spinner:show")},f.hide=function(){var a=g.utils({action:"getPluginContainer"});c.hideAnimation(a,d),c.maskHolder&&d.removeClass("p-loading-element-mask"),c.onHideContainer&&c.onHideContainer(d,a),d.trigger("pl:spinner:hide",[d,a]),g.events.trigger("pl:spinner:hide"),c.destroyAfterHide&&f.destroy()}},e.runPlublicAction=function(){e.definePluginSettings(),g.events(),g.addOnInstaller(),f[c.action](),g.changeMaskColor(),g.utils({action:"setPluginState",state:"initialized"})},e.initialize=function(){e.definePluginSettings(),e.definePublicVariables(),e.definePrivateActions(),e.definePublicActions(),e.runPlublicAction()},e.initialize(),d},a.fn.ploading.addOns={}}(jQuery);