// 已将 validate remote 返回值'true'改为 '1'
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){t.extend(t.fn,{validate:function(e){if(!this.length)return void(e&&e.debug&&window.console&&console.warn("Nothing selected, can't validate, returning nothing."));var i=t.data(this[0],"validator");return i?i:(this.attr("novalidate","novalidate"),i=new t.validator(e,this[0]),t.data(this[0],"validator",i),i.settings.onsubmit&&(this.validateDelegate(":submit","click",function(e){i.settings.submitHandler&&(i.submitButton=e.target),t(e.target).hasClass("cancel")&&(i.cancelSubmit=!0),void 0!==t(e.target).attr("formnovalidate")&&(i.cancelSubmit=!0)}),this.submit(function(e){function s(){var s,r;return i.settings.submitHandler?(i.submitButton&&(s=t("<input type='hidden'/>").attr("name",i.submitButton.name).val(t(i.submitButton).val()).appendTo(i.currentForm)),r=i.settings.submitHandler.call(i,i.currentForm,e),i.submitButton&&s.remove(),void 0!==r?r:!1):!0}return i.settings.debug&&e.preventDefault(),i.cancelSubmit?(i.cancelSubmit=!1,s()):i.form()?i.pendingRequest?(i.formSubmitted=!0,!1):s():(i.focusInvalid(),!1)})),i)},valid:function(){var e,i;return t(this[0]).is("form")?e=this.validate().form():(e=!0,i=t(this[0].form).validate(),this.each(function(){e=i.element(this)&&e})),e},removeAttrs:function(e){var i={},s=this;return t.each(e.split(/\s/),function(t,e){i[e]=s.attr(e),s.removeAttr(e)}),i},rules:function(e,i){var s,r,n,a,o,u,l=this[0];if(e)switch(s=t.data(l.form,"validator").settings,r=s.rules,n=t.validator.staticRules(l),e){case"add":t.extend(n,t.validator.normalizeRule(i)),delete n.messages,r[l.name]=n,i.messages&&(s.messages[l.name]=t.extend(s.messages[l.name],i.messages));break;case"remove":return i?(u={},t.each(i.split(/\s/),function(e,i){u[i]=n[i],delete n[i],"required"===i&&t(l).removeAttr("aria-required")}),u):(delete r[l.name],n)}return a=t.validator.normalizeRules(t.extend({},t.validator.classRules(l),t.validator.attributeRules(l),t.validator.dataRules(l),t.validator.staticRules(l)),l),a.required&&(o=a.required,delete a.required,a=t.extend({required:o},a),t(l).attr("aria-required","true")),a.remote&&(o=a.remote,delete a.remote,a=t.extend(a,{remote:o})),a}}),t.extend(t.expr[":"],{blank:function(e){return!t.trim(""+t(e).val())},filled:function(e){return!!t.trim(""+t(e).val())},unchecked:function(e){return!t(e).prop("checked")}}),t.validator=function(e,i){this.settings=t.extend(!0,{},t.validator.defaults,e),this.currentForm=i,this.init()},t.validator.format=function(e,i){return 1===arguments.length?function(){var i=t.makeArray(arguments);return i.unshift(e),t.validator.format.apply(this,i)}:(arguments.length>2&&i.constructor!==Array&&(i=t.makeArray(arguments).slice(1)),i.constructor!==Array&&(i=[i]),t.each(i,function(t,i){e=e.replace(new RegExp("\\{"+t+"\\}","g"),function(){return i})}),e)},t.extend(t.validator,{defaults:{messages:{},groups:{},rules:{},errorClass:"error",validClass:"valid",errorElement:"label",focusCleanup:!1,focusInvalid:!0,errorContainer:t([]),errorLabelContainer:t([]),onsubmit:!0,ignore:":hidden",ignoreTitle:!1,onfocusin:function(t){this.lastActive=t,this.settings.focusCleanup&&(this.settings.unhighlight&&this.settings.unhighlight.call(this,t,this.settings.errorClass,this.settings.validClass),this.hideThese(this.errorsFor(t)))},onfocusout:function(t){this.checkable(t)||!(t.name in this.submitted)&&this.optional(t)||this.element(t)},onkeyup:function(t,e){(9!==e.which||""!==this.elementValue(t))&&(t.name in this.submitted||t===this.lastElement)&&this.element(t)},onclick:function(t){t.name in this.submitted?this.element(t):t.parentNode.name in this.submitted&&this.element(t.parentNode)},highlight:function(e,i,s){"radio"===e.type?this.findByName(e.name).addClass(i).removeClass(s):t(e).addClass(i).removeClass(s)},unhighlight:function(e,i,s){"radio"===e.type?this.findByName(e.name).removeClass(i).addClass(s):t(e).removeClass(i).addClass(s)}},setDefaults:function(e){t.extend(t.validator.defaults,e)},messages:{required:"This field is required.",remote:"Please fix this field.",email:"Please enter a valid email address.",url:"Please enter a valid URL.",date:"Please enter a valid date.",dateISO:"Please enter a valid date ( ISO ).",number:"Please enter a valid number.",digits:"Please enter only digits.",creditcard:"Please enter a valid credit card number.",equalTo:"Please enter the same value again.",maxlength:t.validator.format("Please enter no more than {0} characters."),minlength:t.validator.format("Please enter at least {0} characters."),rangelength:t.validator.format("Please enter a value between {0} and {1} characters long."),range:t.validator.format("Please enter a value between {0} and {1}."),max:t.validator.format("Please enter a value less than or equal to {0}."),min:t.validator.format("Please enter a value greater than or equal to {0}.")},autoCreateRanges:!1,prototype:{init:function(){function e(e){var i=t.data(this[0].form,"validator"),s="on"+e.type.replace(/^validate/,""),r=i.settings;r[s]&&!this.is(r.ignore)&&r[s].call(i,this[0],e)}this.labelContainer=t(this.settings.errorLabelContainer),this.errorContext=this.labelContainer.length&&this.labelContainer||t(this.currentForm),this.containers=t(this.settings.errorContainer).add(this.settings.errorLabelContainer),this.submitted={},this.valueCache={},this.pendingRequest=0,this.pending={},this.invalid={},this.reset();var i,s=this.groups={};t.each(this.settings.groups,function(e,i){"string"==typeof i&&(i=i.split(/\s/)),t.each(i,function(t,i){s[i]=e})}),i=this.settings.rules,t.each(i,function(e,s){i[e]=t.validator.normalizeRule(s)}),t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox']","focusin focusout keyup",e).validateDelegate("select, option, [type='radio'], [type='checkbox']","click",e),this.settings.invalidHandler&&t(this.currentForm).bind("invalid-form.validate",this.settings.invalidHandler),t(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required","true")},form:function(){return this.checkForm(),t.extend(this.submitted,this.errorMap),this.invalid=t.extend({},this.errorMap),this.valid()||t(this.currentForm).triggerHandler("invalid-form",[this]),this.showErrors(),this.valid()},checkForm:function(){this.prepareForm();for(var t=0,e=this.currentElements=this.elements();e[t];t++)this.check(e[t]);return this.valid()},element:function(e){var i=this.clean(e),s=this.validationTargetFor(i),r=!0;return this.lastElement=s,void 0===s?delete this.invalid[i.name]:(this.prepareElement(s),this.currentElements=t(s),r=this.check(s)!==!1,r?delete this.invalid[s.name]:this.invalid[s.name]=!0),t(e).attr("aria-invalid",!r),this.numberOfInvalids()||(this.toHide=this.toHide.add(this.containers)),this.showErrors(),r},showErrors:function(e){if(e){t.extend(this.errorMap,e),this.errorList=[];for(var i in e)this.errorList.push({message:e[i],element:this.findByName(i)[0]});this.successList=t.grep(this.successList,function(t){return!(t.name in e)})}this.settings.showErrors?this.settings.showErrors.call(this,this.errorMap,this.errorList):this.defaultShowErrors()},resetForm:function(){t.fn.resetForm&&t(this.currentForm).resetForm(),this.submitted={},this.lastElement=null,this.prepareForm(),this.hideErrors(),this.elements().removeClass(this.settings.errorClass).removeData("previousValue").removeAttr("aria-invalid")},numberOfInvalids:function(){return this.objectLength(this.invalid)},objectLength:function(t){var e,i=0;for(e in t)i++;return i},hideErrors:function(){this.hideThese(this.toHide)},hideThese:function(t){t.not(this.containers).text(""),this.addWrapper(t).hide()},valid:function(){return 0===this.size()},size:function(){return this.errorList.length},focusInvalid:function(){if(this.settings.focusInvalid)try{t(this.findLastActive()||this.errorList.length&&this.errorList[0].element||[]).filter(":visible").focus().trigger("focusin")}catch(e){}},findLastActive:function(){var e=this.lastActive;return e&&1===t.grep(this.errorList,function(t){return t.element.name===e.name}).length&&e},elements:function(){var e=this,i={};return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled], [readonly]").not(this.settings.ignore).filter(function(){return!this.name&&e.settings.debug&&window.console&&console.error("%o has no name assigned",this),this.name in i||!e.objectLength(t(this).rules())?!1:(i[this.name]=!0,!0)})},clean:function(e){return t(e)[0]},errors:function(){var e=this.settings.errorClass.split(" ").join(".");return t(this.settings.errorElement+"."+e,this.errorContext)},reset:function(){this.successList=[],this.errorList=[],this.errorMap={},this.toShow=t([]),this.toHide=t([]),this.currentElements=t([])},prepareForm:function(){this.reset(),this.toHide=this.errors().add(this.containers)},prepareElement:function(t){this.reset(),this.toHide=this.errorsFor(t)},elementValue:function(e){var i,s=t(e),r=e.type;return"radio"===r||"checkbox"===r?t("input[name='"+e.name+"']:checked").val():"number"===r&&"undefined"!=typeof e.validity?e.validity.badInput?!1:s.val():(i=s.val(),"string"==typeof i?i.replace(/\r/g,""):i)},check:function(e){e=this.validationTargetFor(this.clean(e));var i,s,r,n=t(e).rules(),a=t.map(n,function(t,e){return e}).length,o=!1,u=this.elementValue(e);for(s in n){r={method:s,parameters:n[s]};try{if(i=t.validator.methods[s].call(this,u,e,r.parameters),"dependency-mismatch"===i&&1===a){o=!0;continue}if(o=!1,"pending"===i)return void(this.toHide=this.toHide.not(this.errorsFor(e)));if(!i)return this.formatAndAdd(e,r),!1}catch(l){throw this.settings.debug&&window.console&&console.log("Exception occurred when checking element "+e.id+", check the '"+r.method+"' method.",l),l}}if(!o)return this.objectLength(n)&&this.successList.push(e),!0},customDataMessage:function(e,i){return t(e).data("msg"+i.charAt(0).toUpperCase()+i.substring(1).toLowerCase())||t(e).data("msg")},customMessage:function(t,e){var i=this.settings.messages[t];return i&&(i.constructor===String?i:i[e])},findDefined:function(){for(var t=0;t<arguments.length;t++)if(void 0!==arguments[t])return arguments[t];return void 0},defaultMessage:function(e,i){return this.findDefined(this.customMessage(e.name,i),this.customDataMessage(e,i),!this.settings.ignoreTitle&&e.title||void 0,t.validator.messages[i],"<strong>Warning: No message defined for "+e.name+"</strong>")},formatAndAdd:function(e,i){var s=this.defaultMessage(e,i.method),r=/\$?\{(\d+)\}/g;"function"==typeof s?s=s.call(this,i.parameters,e):r.test(s)&&(s=t.validator.format(s.replace(r,"{$1}"),i.parameters)),this.errorList.push({message:s,element:e,method:i.method}),this.errorMap[e.name]=s,this.submitted[e.name]=s},addWrapper:function(t){return this.settings.wrapper&&(t=t.add(t.parent(this.settings.wrapper))),t},defaultShowErrors:function(){var t,e,i;for(t=0;this.errorList[t];t++)i=this.errorList[t],this.settings.highlight&&this.settings.highlight.call(this,i.element,this.settings.errorClass,this.settings.validClass),this.showLabel(i.element,i.message);if(this.errorList.length&&(this.toShow=this.toShow.add(this.containers)),this.settings.success)for(t=0;this.successList[t];t++)this.showLabel(this.successList[t]);if(this.settings.unhighlight)for(t=0,e=this.validElements();e[t];t++)this.settings.unhighlight.call(this,e[t],this.settings.errorClass,this.settings.validClass);this.toHide=this.toHide.not(this.toShow),this.hideErrors(),this.addWrapper(this.toShow).show()},validElements:function(){return this.currentElements.not(this.invalidElements())},invalidElements:function(){return t(this.errorList).map(function(){return this.element})},showLabel:function(e,i){var s,r,n,a=this.errorsFor(e),o=this.idOrName(e),u=t(e).attr("aria-describedby");a.length?(a.removeClass(this.settings.validClass).addClass(this.settings.errorClass),a.html(i)):(a=t("<"+this.settings.errorElement+">").attr("id",o+"-error").addClass(this.settings.errorClass).html(i||""),s=a,this.settings.wrapper&&(s=a.hide().show().wrap("<"+this.settings.wrapper+"/>").parent()),this.labelContainer.length?this.labelContainer.append(s):this.settings.errorPlacement?this.settings.errorPlacement(s,t(e)):s.insertAfter(e),a.is("label")?a.attr("for",o):0===a.parents("label[for='"+o+"']").length&&(n=a.attr("id").replace(/(:|\.|\[|\])/g,"\\$1"),u?u.match(new RegExp("\\b"+n+"\\b"))||(u+=" "+n):u=n,t(e).attr("aria-describedby",u),r=this.groups[e.name],r&&t.each(this.groups,function(e,i){i===r&&t("[name='"+e+"']",this.currentForm).attr("aria-describedby",a.attr("id"))}))),!i&&this.settings.success&&(a.text(""),"string"==typeof this.settings.success?a.addClass(this.settings.success):this.settings.success(a,e)),this.toShow=this.toShow.add(a)},errorsFor:function(e){var i=this.idOrName(e),s=t(e).attr("aria-describedby"),r="label[for='"+i+"'], label[for='"+i+"'] *";return s&&(r=r+", #"+s.replace(/\s+/g,", #")),this.errors().filter(r)},idOrName:function(t){return this.groups[t.name]||(this.checkable(t)?t.name:t.id||t.name)},validationTargetFor:function(e){return this.checkable(e)&&(e=this.findByName(e.name)),t(e).not(this.settings.ignore)[0]},checkable:function(t){return/radio|checkbox/i.test(t.type)},findByName:function(e){return t(this.currentForm).find("[name='"+e+"']")},getLength:function(e,i){switch(i.nodeName.toLowerCase()){case"select":return t("option:selected",i).length;case"input":if(this.checkable(i))return this.findByName(i.name).filter(":checked").length}return e.length},depend:function(t,e){return this.dependTypes[typeof t]?this.dependTypes[typeof t](t,e):!0},dependTypes:{"boolean":function(t){return t},string:function(e,i){return!!t(e,i.form).length},"function":function(t,e){return t(e)}},optional:function(e){var i=this.elementValue(e);return!t.validator.methods.required.call(this,i,e)&&"dependency-mismatch"},startRequest:function(t){this.pending[t.name]||(this.pendingRequest++,this.pending[t.name]=!0)},stopRequest:function(e,i){this.pendingRequest--,this.pendingRequest<0&&(this.pendingRequest=0),delete this.pending[e.name],i&&0===this.pendingRequest&&this.formSubmitted&&this.form()?(t(this.currentForm).submit(),this.formSubmitted=!1):!i&&0===this.pendingRequest&&this.formSubmitted&&(t(this.currentForm).triggerHandler("invalid-form",[this]),this.formSubmitted=!1)},previousValue:function(e){return t.data(e,"previousValue")||t.data(e,"previousValue",{old:null,valid:!0,message:this.defaultMessage(e,"remote")})}},classRuleSettings:{required:{required:!0},email:{email:!0},url:{url:!0},date:{date:!0},dateISO:{dateISO:!0},number:{number:!0},digits:{digits:!0},creditcard:{creditcard:!0}},addClassRules:function(e,i){e.constructor===String?this.classRuleSettings[e]=i:t.extend(this.classRuleSettings,e)},classRules:function(e){var i={},s=t(e).attr("class");return s&&t.each(s.split(" "),function(){this in t.validator.classRuleSettings&&t.extend(i,t.validator.classRuleSettings[this])}),i},attributeRules:function(e){var i,s,r={},n=t(e),a=e.getAttribute("type");for(i in t.validator.methods)"required"===i?(s=e.getAttribute(i),""===s&&(s=!0),s=!!s):s=n.attr(i),/min|max/.test(i)&&(null===a||/number|range|text/.test(a))&&(s=Number(s)),s||0===s?r[i]=s:a===i&&"range"!==a&&(r[i]=!0);return r.maxlength&&/-1|2147483647|524288/.test(r.maxlength)&&delete r.maxlength,r},dataRules:function(e){var i,s,r={},n=t(e);for(i in t.validator.methods)s=n.data("rule"+i.charAt(0).toUpperCase()+i.substring(1).toLowerCase()),void 0!==s&&(r[i]=s);return r},staticRules:function(e){var i={},s=t.data(e.form,"validator");return s.settings.rules&&(i=t.validator.normalizeRule(s.settings.rules[e.name])||{}),i},normalizeRules:function(e,i){return t.each(e,function(s,r){if(r===!1)return void delete e[s];if(r.param||r.depends){var n=!0;switch(typeof r.depends){case"string":n=!!t(r.depends,i.form).length;break;case"function":n=r.depends.call(i,i)}n?e[s]=void 0!==r.param?r.param:!0:delete e[s]}}),t.each(e,function(s,r){e[s]=t.isFunction(r)?r(i):r}),t.each(["minlength","maxlength"],function(){e[this]&&(e[this]=Number(e[this]))}),t.each(["rangelength","range"],function(){var i;e[this]&&(t.isArray(e[this])?e[this]=[Number(e[this][0]),Number(e[this][1])]:"string"==typeof e[this]&&(i=e[this].replace(/[\[\]]/g,"").split(/[\s,]+/),e[this]=[Number(i[0]),Number(i[1])]))}),t.validator.autoCreateRanges&&(null!=e.min&&null!=e.max&&(e.range=[e.min,e.max],delete e.min,delete e.max),null!=e.minlength&&null!=e.maxlength&&(e.rangelength=[e.minlength,e.maxlength],delete e.minlength,delete e.maxlength)),e},normalizeRule:function(e){if("string"==typeof e){var i={};t.each(e.split(/\s/),function(){i[this]=!0}),e=i}return e},addMethod:function(e,i,s){t.validator.methods[e]=i,t.validator.messages[e]=void 0!==s?s:t.validator.messages[e],i.length<3&&t.validator.addClassRules(e,t.validator.normalizeRule(e))},methods:{required:function(e,i,s){if(!this.depend(s,i))return"dependency-mismatch";if("select"===i.nodeName.toLowerCase()){var r=t(i).val();return r&&r.length>0}return this.checkable(i)?this.getLength(e,i)>0:t.trim(e).length>0},email:function(t,e){return this.optional(e)||/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(t)},url:function(t,e){return this.optional(e)||/^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)},date:function(t,e){return this.optional(e)||!/Invalid|NaN/.test(new Date(t).toString())},dateISO:function(t,e){return this.optional(e)||/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(t)},number:function(t,e){return this.optional(e)||/^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)},digits:function(t,e){return this.optional(e)||/^\d+$/.test(t)},creditcard:function(t,e){if(this.optional(e))return"dependency-mismatch";if(/[^0-9 \-]+/.test(t))return!1;var i,s,r=0,n=0,a=!1;if(t=t.replace(/\D/g,""),t.length<13||t.length>19)return!1;for(i=t.length-1;i>=0;i--)s=t.charAt(i),n=parseInt(s,10),a&&(n*=2)>9&&(n-=9),r+=n,a=!a;return r%10===0},minlength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(e,i);return this.optional(i)||r>=s},maxlength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(e,i);return this.optional(i)||s>=r},rangelength:function(e,i,s){var r=t.isArray(e)?e.length:this.getLength(e,i);return this.optional(i)||r>=s[0]&&r<=s[1]},min:function(t,e,i){return this.optional(e)||t>=i},max:function(t,e,i){return this.optional(e)||i>=t},range:function(t,e,i){return this.optional(e)||t>=i[0]&&t<=i[1]},equalTo:function(e,i,s){var r=t(s);return this.settings.onfocusout&&r.unbind(".validate-equalTo").bind("blur.validate-equalTo",function(){t(i).valid()}),e===r.val()},remote:function(e,i,s){if(this.optional(i))return"dependency-mismatch";var r,n,a=this.previousValue(i);return this.settings.messages[i.name]||(this.settings.messages[i.name]={}),a.originalMessage=this.settings.messages[i.name].remote,this.settings.messages[i.name].remote=a.message,s="string"==typeof s&&{url:s}||s,a.old===e?a.valid:(a.old=e,r=this,this.startRequest(i),n={},n[i.name]=e,t.ajax(t.extend(!0,{url:s,mode:"abort",port:"validate"+i.name,dataType:"json",data:n,context:r.currentForm,success:function(s){var n,o,u,l=1==s.status || '1'==s.status;r.settings.messages[i.name].remote=a.originalMessage,l?(u=r.formSubmitted,r.prepareElement(i),r.formSubmitted=u,r.successList.push(i),delete r.invalid[i.name],r.showErrors()):(n={},o=s.msg||r.defaultMessage(i,"remote"),n[i.name]=a.message=t.isFunction(o)?o(e):o,r.invalid[i.name]=!0,r.showErrors(n)),a.valid=l,r.stopRequest(i,l)}},s)),"pending")}}}),t.format=function(){throw"$.format has been deprecated. Please use $.validator.format instead."};var e,i={};t.ajaxPrefilter?t.ajaxPrefilter(function(t,e,s){var r=t.port;"abort"===t.mode&&(i[r]&&i[r].abort(),i[r]=s)}):(e=t.ajax,t.ajax=function(s){var r=("mode"in s?s:t.ajaxSettings).mode,n=("port"in s?s:t.ajaxSettings).port;return"abort"===r?(i[n]&&i[n].abort(),i[n]=e.apply(this,arguments),i[n]):e.apply(this,arguments)}),t.extend(t.fn,{validateDelegate:function(e,i,s){return this.bind(i,function(i){var r=t(i.target);return r.is(e)?s.apply(r,arguments):void 0})}})}),jQuery.validator.addMethod("phone",function(t,e){var i=/^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0-9]|17[0-9])\d{8}$/;return this.optional(e)||i.test(t)},"手机格式不正确");

// domain
var passportDomain = {
    domain: function(url) {
        var durl = /http:\/\/([^\/]+)\//i;
        var hosts = url.match(durl);
        hosts = hosts[1];
        d_arr = hosts.split('.');
        hosts = d_arr[d_arr.length - 2] + '.' + d_arr[d_arr.length - 1];
        return hosts;
    },
    domain_pre: function(url) {
        var durl = /http:\/\/([^\/]+)\//i;
        var hosts = url.match(durl);
        hosts = hosts[1];
        d_arr = hosts.split('.');
        return d_arr[0];
    },
    domain_arr: function(url) {
        var durl = /http:\/\/([^\/]+)\//i;
        var hosts = url.match(durl);
        hosts = hosts[1];
        d_arr = hosts.split('.');
        return d_arr;
    },
    currentUrl: window.location.href
};
var passportHostArr = passportDomain.domain_arr(window.location.href);
var passportBaseUrl = passportHostArr[1] + '.' + passportHostArr[2];
var passportUrl = "http://localhost:8080";
var passportWwwUrl = "http://www." + passportUrl;
var passportSafeCodeUrl = passportUrl + "/check/getVerifyCode";
var passportUrlFix = passportBaseUrl;

var PASSPORT = PASSPORT || {};
/**
 * Cookie相关操作
 * @namespace Cookie
 * @name JK.Cookie
 * @static
 */
PASSPORT.Cookie = {
    /**
     * 获取Cookie内容
     * @name JK.Cookie.get
     * @function
     * @grammar JK.Cookie.get(name)
     * @param {String} name Cookie键名
     *
     * @return {String} Cookie值
     */
    cokpre:'sso_',
    get: function( name ) {
    var nameEQ = this.cokpre+name + '=';
    var ca = document.cookie.split(';');
    for ( var i=0;i < ca.length; i++ ) {
        var c = ca[ i ];
        while ( c.charAt(0) == ' ' ) c = c.substring( 1 , c.length );
        if ( c.indexOf( nameEQ ) == 0 ) {
        var ret;
        try{
            ret = unescape( c.substring( nameEQ.length , c.length ) );
        } catch(e) {
            ret = unescape( c.substring( nameEQ.length , c.length ) );
        }
        return ret;
        }
    }
    return null;
    },
    /**
     * 设置Cookie内容
     * @name JK.Cookie.set
     * @function
     * @grammar JK.Cookie.set(name , value[ , days , path , domain , secure])
     * @param {String} name Cookie键名
     * @param {String} value Cookie键值
     * @param {Int} days Cookie有效期天数
     * @param {String} path Cookie有效路径
     * @param {String} domain Cookie有效域
     * @param {Boolean} secure 是否安全Cookie
     * @remark 兼容了编码为GBK时的Cookie读取失败的问题 2014-10-11 caojiangtao
     */
    set : function( name , value , days , path , domain , secure ) {
    var expires;
    if ( typeof days =="number" ) {
        if(days>0){
            var date = new Date();
            date.setTime( date.getTime() + ( days * 24 * 60 * 60 * 1000 ) );
            expires = date.toGMTString();
        }
    } else if ( typeof days =="String" ) {
        expires = days;
    } else {
        expires = false;
    }
    document.cookie = this.cokpre+name + '=' + escape( value ) +
        (expires ? (';expires=' + expires)  : '') +
        (path ? (';path=' + path) : '') +
        (domain ? (';domain=' + domain) : '') +
        (secure ? ';secure' : '');
    },
    /**
     * 删除Cookie内容
     * @name JK.Cookie.del
     * @function
     * @grammar JK.Cookie.del(name[ , path , domain , secure])
     * @param {String} name 要删除的Cookie键名
     * @param {String} path Cookie有效路径
     * @param {String} domain Cookie有效域
     * @param {Boolean} secure 是否安全Cookie
     */
    del : function( name , path , domain , secure ) {
        PASSPORT.Cookie.set( name , '' , -1 , path , domain , secure );
    }
};

// param
var passportHint = {
    uname: {
        required: '请输入账号'
    },
    pwd: {
        required: '请输入密码',
        rules: '只能包含英文、数字和符号',
        rangelength: '密码长度在6-32个字符之间',
        repeat: '两次密码不一致',
    },
    email: {
        required: '请输入邮箱',
        rules: '邮箱格式不正确',
    },
    phone: {
        required: '请输入手机号码',
        rules: '手机格式不正确',
        remote: '手机已使用',
    },
    accounts: {
        required: '请输入用户名',
    },
    mobile: {
        required: '请输入动态码',
    },
    verify: {
        required: '请输入验证码',
        remote: '验证码不正确',
    },
    treaty: {
        required: '请同意用户协议',
    }
};
var passportReg = {
    pwd: /^.*[A-Za-z0-9_\.-]+.*$/,
    email: /^[A-Z_a-z0-9-\.]+@([A-Z_a-z0-9-]+\.)+[a-z0-9A-Z]{2,4}$/,
    phone: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0-9]|17[0-9])\d{8}$/,
};

PASSPORT.getImgcode = function(elem) {
    var timenow = new Date().getTime();
    console.log(passportSafeCodeUrl)
    elem.attr("src", passportSafeCodeUrl + '?' + timenow);
};
PASSPORT.msgBox = function(status, msg, show_time, callBack) {
    var msg = msg ? msg : '亲爱的VIP，这是来自极客学院小雪的 Hello~';
    var id = "warning";
    var show_time = parseInt(show_time) ? parseInt(show_time) : 1500;
    switch (status) {
        case 1:
            var color_class = "waring-success";
            break;
        case 0:
            var color_class = "waring-failure";
            break;
        case 2:
        default:
            var color_class = "waring-sub";
            break;
    }
    var html;
    html = '<div class="web-dia-tip ' + color_class + '" id="' + id + '" >';
    html += msg;
    html += '</div>';
    $('body').append(html);

    var _W = $('#' + id).width() / 2;
    $('#' + id).css("marginLeft", -_W);
    $('#' + id).animate({
        top: "0px",
        opacity: 1
    }, 300, function() {
        $('#' + id).delay(show_time).animate({
            top: "-50px",
            opacity: 0
        }, 500, function() {
            $('#' + id).remove();
            if (typeof(callBack) == 'function') {
                callBack();
            }
        });
    });

};
PASSPORT.tabs = function(elem, fn) {
    var $elem = elem;
    $elem.find('.tabs li').each(function(i) {
        $(this).click(function() {
            $(this).addClass('active').siblings().removeClass('active');
            $elem.find('.tabbed>.tab-group:eq(' + i + ')').show().siblings().hide();
            if (fn) fn();
        });
    });
};

PASSPORT.toStateClass = function(stateclass) {
    if (!(stateclass instanceof Array)) throw new TypeError('input 状态参数类型错误');
    var str = '';
    for (var i = 0; i < stateclass.length; i++) {
        if (!stateclass[i]) continue;
        str += stateclass[i] + ' ';
    }
    if (str.length) {
        return str.slice(0, -1);
    }
};
// 给 input 添加状态 class
PASSPORT.addInputState = function(elem, stateclass) {
    var elemState = elem.hasClass(stateclass);
    // 如果 class 存在则返回
    if(elemState.length) return;
    elem.addClass(stateclass);
};
PASSPORT.toHintClass = function(hint, state) {
    var str = '';
    for (var i = 0; i < state.length; i++) {
        if (!state[i]) continue;
        str += ('.' + hint) + ('.' + state[i]) + ',';
    }
    return str.slice(0, -1);
};
// 删除 input 状态样式
PASSPORT.removeInputState = function(elem, inputclass) {
    elem.removeClass(inputclass);
};
PASSPORT.createHint = function(o, inner) {
    if (arguments.length > 1) {
        var $html = '<'+ o.tag + ' class="' + o.hint + ' ' + o.state + '"><' + inner + '>' + o.text + '</' + inner + '></' + o.tag + '>';
    } else {
        // 返回提示
        var $html = $('<'+ o.tag + ' class="' + o.hint + ' ' + o.state + '"></' + o.tag + '>');
        $html.html(o.text);
    }
    return $html;
};
PASSPORT.insetHint = function(elem, hint, hintclass /*,target*/) {
    if (arguments.length > 3) {
        // 判断自定义文本插入目标是否设置
        if (arguments[3]) {
            var targetHint = arguments[3].find(hintclass);
            // 删除提示
            this.removeHint(elem, hintclass, arguments[3]);
            arguments[3].append(hint);
        } else {
            // 删除提示
            this.removeHint(elem, hintclass);
            elem.parent().append(hint);
        }
    } else {
        // 删除提示
        this.removeHint(elem, hintclass);
        // 默认位置插入提示
        elem.parent().append(hint);
    }
};
PASSPORT.removeHint = function(elem, hintclass /*,target*/) {
    if (arguments.length > 2) {
        if (arguments[2]) {
            arguments[2].find(hintclass).remove();
        } else {
            elem.siblings(hintclass).remove();
        }
    } else {
        elem.siblings(hintclass).remove();
    }
};

//阻止冒泡事件
PASSPORT.stopEventBubble = function() {
    function getEvent() {
        if (window.event) {
            return window.event;
        }
        func = getEvent.caller;
        while (func != null) {
            var arg0 = func.arguments[0];
            if (arg0) {
                if ((arg0.constructor == Event || arg0.constructor == MouseEvent || arg0.constructor == KeyboardEvent) || (typeof(arg0) == "object" && arg0.preventDefault && arg0.stopPropagation)) {
                    return arg0;
                }
            }
            func = func.caller;
        }
        return null;
    }
    var e = getEvent();
    if (window.event) {
        e.cancelBubble = true; //阻止冒泡
    } else if (e.preventDefault) {
        e.stopPropagation(); //阻止冒泡
    }
};

PASSPORT.getCookie = function(name /*,elem*/) {
    var getCookie = PASSPORT.Cookie.get(name);
    if (getCookie && arguments.length > 1) {
        $(arguments[1]).val(getCookie).removeClass('placeholder');
    }
    return getCookie;
};
PASSPORT.setCookie = function(name, val, day) {
    PASSPORT.Cookie.del(name, '/', '.' + passportDomain.domain(window.location.href), '');
    PASSPORT.Cookie.set(name, val, day, '/', '.' + passportDomain.domain(window.location.href), '');
};

// 插件
(function($) {
    // 密码强度
    $.fn.passportPasswordStrong = function(elem) {
        var passwordSafe = {
            safe: function(val) {
                if (val == '') return 0;
                var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
                var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
                var enoughRegex = new RegExp("(?=.{6,}).*", "g");
                if (enoughRegex.test(val) == false) {
                    return 1;
                } else if (strongRegex.test(val)) {
                    return 3;
                } else if (mediumRegex.test(val)) {
                    return 2;
                } else {
                    return 1;
                }
                return false;
            },
            state: function(elem, level, stateclass) {
                var $elem = elem;
                var stateClass = stateclass[0] + ' ' + stateclass[1] + ' ' + stateclass[2];
                switch (level) {
                    case 1:
                        $elem.removeClass(stateClass).addClass(stateclass[0]);
                        break;
                    case 2:
                        $elem.removeClass(stateClass).addClass(stateclass[1]);
                        break;
                    case 3:
                        $elem.removeClass(stateClass).addClass(stateclass[2]);
                        break;
                    case 0:
                        $elem.removeClass(stateClass);
                        break;
                }
            }
        };
        var $this = $(this);
        $this.bind('keyup', function() {
            var val = $.trim($this.val());
            var level = passwordSafe.safe(val);
            passwordSafe.state(elem, level, ['safely-danger', 'safely-general', 'safely-safe']);
        });
    };
    // placeholder
    $.fn.passportPlaceholder = function(holderclass) {
        var isIE9 = navigator.userAgent.indexOf('MSIE 9.0') > -1;
        var $this = $(this);
        if (isIE9) {
            $this.each(function() {
                var $this = $(this);
                var holder = $this.attr('placeholder');
                var holderHtml = '<div class="js-placeholder">' + holder + '</div>';
                $this.addClass(holderclass).attr('autocomplete', 'off').before(holderHtml);

                if ($this.val()) {
                    $this.removeClass(holderclass).siblings('.js-placeholder').hide();
                }

                $this.bind('focus', function() {
                    $(this).removeClass(holderclass).siblings('.js-placeholder').hide();
                });
                $this.bind('blur', function() {
                    var $this = $(this);
                    if (!$this.val()) $this.addClass(holderclass).siblings('.js-placeholder').show();
                });
            });
        } else {
            $this.each(function() {
                var $this = $(this);
                $this.removeClass('placeholder').attr({'autocomplete': 'off'});
            });
        }

        return this;
    };
    $.fn.passportSetBtnTimer = function(options) {
        "use strict";
        var settings = $.extend({
            'time': 60,
            'timewhich': null,
            'timetext': null,
            'timerstart': null,
            'timerend': null,
            'callback': null
        }, options);

        var self = this,
            oldv = self.text(),
            lock = 0,
            timer;

        if (settings.timerstart) settings.timerstart(this);
        this.attr("disabled", "disabled");
        // 设置手机号码不可修改
        this.parents('.passport-form').find('input[name="phone"]').attr({'readonly': 'readonly'});

        var text = settings.timetext ? settings.timetext : 's后重新获取';
        var tick = function() {
            settings.time--;
            if (settings.timewhich) {
                settings.timewhich.text(settings.time + text);
            } else {
                self.text(settings.time + text);
            }
            if (settings.time < 1) {
                if (settings.timerend) {
                    settings.timerend(self);
                    self.parents('.passport-form').find('input[name="phone"]').removeAttr('readonly');
                    window.clearInterval(timer);
                } else {
                    self.removeAttr("disabled");
                    self.parents('.passport-form').find('input[name="phone"]').removeAttr('readonly');
                    window.clearInterval(timer);
                    self.text('重新发送');
                }
                if (settings.callback) settings.callback();
            }
        };
        if (lock == 0) {
            settings.time++;
            tick();
            lock == 1;
        }
        return this.each(function() {
            timer = window.setInterval(tick, 1000);
        });
    }
})(jQuery);