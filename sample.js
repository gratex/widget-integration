define([
	"require",
	"dojo/ready",
	"dijit/registry",
	"dojo/parser",
	// 
	"./MainWidget",
	"./PickerWidget"
], function(_require, ready, registry, parser) {

	parser.parse(null, {
		contextRequire : _require
	});
	
	ready(function() {

		var mainWidget = registry.byId("main"); 
		var pickerWidget = registry.byId("picker"); 

		mainWidget.on("displayData1", function() {
			registry.byId("picker").displayData1();

		});
		mainWidget.on("displayData2", function() {
			registry.byId("picker").displayData2();
		});

		pickerWidget.on("selectedData1", function(data) {
			registry.byId("main").set("data1", data.location);
		});
		pickerWidget.on("selectedData2", function(data) {
			registry.byId("main").set("data2", data.amount);
		});

	});

});
