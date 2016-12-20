describe("app router", function() {

	"use strict";

	var stateSvc, rootScopeSvc;

	beforeEach(angular.mock.module("WidgetApp"));

	beforeEach(angular.mock.inject(function($state, $rootScope) {
		stateSvc = $state;
		rootScopeSvc = $rootScope;
	}));

	it("home state configuration", function() {

		var stateConfig = stateSvc.get("home");

		expect(stateConfig.name).toEqual("home");
		expect(stateConfig.url).toEqual("/");
		expect(stateConfig.template).toEqual("<app-home></app-home>");

	});

	it("create state configuration", function() {

		var stateConfig = stateSvc.get("create");

		expect(stateConfig.name).toEqual("create");
		expect(stateConfig.url).toEqual("/widgets/create");
		expect(stateConfig.template).toEqual("<widget-edit></widget-edit>");

	});

	it("view state configuration", function() {

		var stateConfig = stateSvc.get("view");

		expect(stateConfig.name).toEqual("view");
		expect(stateConfig.url).toEqual("/widgets/:widgetId");
		expect(stateConfig.template).toEqual("<widget-view></widget-view>");

	});

	it("edit state configuration", function() {

		var stateConfig = stateSvc.get("edit");

		expect(stateConfig.name).toEqual("edit");
		expect(stateConfig.url).toEqual("/widgets/:widgetId/edit");
		expect(stateConfig.template).toEqual("<widget-edit></widget-edit>");

	});

	it("home state url", function() {
		var stateUrl = stateSvc.href("home", { widgetId: 1 });
		expect(stateUrl).toBe("/");
	});

	it("create state url", function() {
		var stateUrl = stateSvc.href("create");
		expect(stateUrl).toBe("/widgets/create");
	});

	it("view state url", function() {
		var stateUrl = stateSvc.href("view", { widgetId: 1 });
		expect(stateUrl).toBe("/widgets/1");
	});

	it("edit state url", function() {
		var stateUrl = stateSvc.href("edit", { widgetId: 1 });
		expect(stateUrl).toBe("/widgets/1/edit");
	});

	describe("goto state", function() {

		it("change to home state", function(done) {

			stateSvc.go("home").then(function() {

				expect(stateSvc.current.name).toEqual("home");
				expect(stateSvc.current.url).toEqual("/");
				expect(stateSvc.current.template).toEqual("<app-home></app-home>");
				done();

			});

			rootScopeSvc.$digest();

		});

		it("change to widget create state", function(done) {

			stateSvc.go("create").then(function() {

				expect(stateSvc.current.name).toEqual("create");
				expect(stateSvc.current.url).toEqual("/widgets/create");
				expect(stateSvc.current.template).toEqual("<widget-edit></widget-edit>");
				done();

			});

			rootScopeSvc.$digest();

		});

		it("change to widget view state", function(done) {

			stateSvc.go("view", { widgetId: 1 }).then(function() {

				expect(stateSvc.current.name).toEqual("view");
				expect(stateSvc.current.url).toEqual("/widgets/:widgetId");
				expect(stateSvc.current.template).toEqual("<widget-view></widget-view>");
				done();

			});

			rootScopeSvc.$digest();

		});

		it("change to widget edit state", function(done) {

			stateSvc.go("edit", { widgetId: 1 }).then(function() {

				expect(stateSvc.current.name).toEqual("edit");
				expect(stateSvc.current.url).toEqual("/widgets/:widgetId/edit");
				expect(stateSvc.current.template).toEqual("<widget-edit></widget-edit>");
				done();

			});

			rootScopeSvc.$digest();

		});

	});

});
