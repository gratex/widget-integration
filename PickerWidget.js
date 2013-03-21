// Picker widget (v2)
// emits two distinct events (one per selection mode)
define([
	"require",
	"dojo/_base/declare",
	"dijit/_WidgetBase",
	"dijit/_TemplatedMixin",
	"dojo/text!./templates/PickerWidget.html",
	"dijit/_WidgetsInTemplateMixin",
	"dojo/_base/lang",
	"dojo/topic",
	"__mocks/data1",
	"__mocks/data2",
	"dgrid/OnDemandGrid",
	"dgrid/extensions/DijitRegistry",
	"dgrid/Selection",
	"dojo/date/locale",
	//
	"dijit/layout/ContentPane",
	"dijit/layout/TabContainer"
], function(_require, declare, _WidgetBase, _TemplatedMixin, template, _WidgetsInTemplateMixin, lang, topic, //
data1MockStore, data2MockStore, OnDemandGrid, DijitRegistry, Selection, locale) {

	var CustomGrid = declare([
		OnDemandGrid,
		DijitRegistry,
		Selection
	]);

	return declare([
		_WidgetBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin
	], {

		contextRequire : _require,
		templateString : template,
		baseClass : "appPickerWidget",

		grid1 : null,
		grid2 : null,
		selectedData : null,
		_selectedMode : null,

		onSelectedData1 : function(/*data*/) {
		},
		onSelectedData2 : function(/*data*/) {
		},

		displayData1 : function() {
			this.grid1.clearSelection();
			this.tabs.selectChild(this.data1Tab);
			this._selectedMode = "Data1";
		},

		displayData2 : function() {
			this.grid2.clearSelection();
			this.tabs.selectChild(this.data2Tab);
			this._selectedMode = "Data2";
		},

		getSelected : function() {
			return this.selectedData;
		},

		_handleSelect : function(e) {
			if (this._selectedMode) {
				this._set("selectedData", e.rows[0].data);
				this["onSelected" + this._selectedMode](this.getSelected());
			}
		},

		_handleDeselect : function() {
			this.selectedData = null;
		},

		buildRendering : function() {
			this.inherited(arguments);
			// grid1
			this.grid1 = new CustomGrid({
				columns : {
					location : "Location"
				},
				store : data1MockStore,
				selectionMode : "single"
			}, this.gridNode1);
			this.grid1.on("dgrid-select", lang.hitch(this, "_handleSelect"));
			
			// grid2
			this.grid2 = new CustomGrid({
				columns : [
					{
						field : "amount",
						label : "Amount"
					},
					{
						field : "date",
						label : "Date",
						formatter : locale.format
					}
				],
				store : data2MockStore,
				selectionMode : "single"
			}, this.gridNode2);
			this.grid2.on("dgrid-select", lang.hitch(this, "_handleSelect"));
		}

	});

});
