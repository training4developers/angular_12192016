(function(angular) {

	"use strict";

	router.$inject = ["$stateProvider", "$urlRouterProvider", "$locationProvider"];

	function router($stateProvider, $urlRouterProvider, $locationProvider) {

		$urlRouterProvider.otherwise("/");
		$locationProvider.html5Mode(true);

		$stateProvider
			.state("home", {
				url: "/",
				template: "<app-home></app-home>"
			})
			.state("create", {
				url: "/widgets/create",
				template: "<widget-edit></widget-edit>"
			})
			.state("view", {
				url: "/widgets/:widgetId",
				template: "<widget-view></widget-view>"
			})
			.state("edit", {
				url: "/widgets/:widgetId/edit",
				template: "<widget-edit></widget-edit>"
			});

	}

	angular.module("WidgetApp").config(router)

})(angular);
