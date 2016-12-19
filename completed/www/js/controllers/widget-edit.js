(function(angular) {

	"use strict";

	controller.$inject = ["widgets", "$state"];

	function controller(widgets, $state) {

		var vm = this;

		vm.$onInit = function() {
		
			widgets.get($state.params.widgetId).then(function(results) {
				vm.widget = results.data;
			});

		};

		vm.colors = [
			{ value: "red", label: "Red" },
			{ value: "blue", label: "Blue" },
			{ value: "green", label: "Green" },
			{ value: "yellow", label: "Yellow" },
			{ value: "orange", label: "Orange" },
			{ value: "purple", label: "Purple" }
		];

		vm.sizes = [
			{ value: "tiny", label: "Tiny" },
			{ value: "small", label: "Small" },
			{ value: "medium", label: "Medium" },
			{ value: "large", label: "Large" },
			{ value: "huge", label: "Huge" }
		];

		vm.saveWidget = function(widget) {
			($state.params.widgetId ? widgets.update(widget) : widgets.insert(widget)).then(function() {
				$state.go("home");
			});
		};

		vm.deleteWidget = function(widgetId) {
			if (confirm("Are you sure you want to delete the widget?")) {
				widgets.delete(widgetId).then(function() {
					$state.go("home");
				});
			}
		};

		vm.returnToList = function() {
			$state.go("home");
		};
	}

	angular.module("WidgetApp.Controllers")
		.controller("widgetEditCtrl", controller);

})(angular);
