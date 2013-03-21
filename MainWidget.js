// Main widget
// emits event on picker click
define([
	"require",
	"dojo/_base/declare",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dojo/text!./templates/MainWidget.html",
	"dijit/_WidgetsInTemplateMixin",
	//
	"dijit/TitlePane",
	"dijit/form/ValidationTextBox",
	"dijit/form/Button",
	"dijit/form/Form"
], function(_require, declare, _WidgetBase, _TemplatedMixin, template, _WidgetsInTemplateMixin) {

	return declare([
		_WidgetBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin
	], {

		onDisplayData1 : function() {
		},
		
		onDisplayData2 : function() {
		},

		_handleSubmit : function() {
			try {
				console.log(this.form.get("value"));				
			} finally {
				return false;
			}
		},

		_setData1Attr : {
			node : "externalData1TB",
			attribute : "value"
		},
		
		_setData2Attr : {
			node : "externalData2TB",
			attribute : "value"
		},
		
		contextRequire : _require,
		templateString : template,
		baseClass : "appMainWidget"

	});

});