(function(angular) {

	"use strict";

	controller.$inject = ["widgets", "$state"];

	function controller(widgets, $state) {

		var vm = this;
		
		vm.$onInit = function() {		
		
			widgets.getAll().then(function(results) {
				vm.widgets = results.data;
			});

		};

		vm.editWidget = function(widgetId) {
			$state.go("edit", { widgetId: widgetId });
		};

		vm.viewWidget = function(widgetId) {
			$state.go("view", { widgetId: widgetId });
		}

		vm.createWidget = function() {
			$state.go("create");
		}

	}

	angular.module("WidgetApp.Controllers")
		.controller("homeCtrl", controller);

})(angular);
