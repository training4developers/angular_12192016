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

		vm.editWidget = function(widgetId) {
			$state.go("edit", { widgetId: widgetId });
		};

		vm.returnToList = function() {
			$state.go("home");
		};
	}

	angular.module("WidgetApp.Controllers")
		.controller("widgetViewCtrl", controller);

})(angular);
