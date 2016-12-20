describe("home component", function() {

	"use strict";

	var mockScope, widgetsSvc, stateSvc, compileSvc;

	beforeEach(angular.mock.module("WidgetApp"));

	beforeEach(angular.mock.inject(function($compile, $rootScope, widgets, $state) {

		compileSvc = $compile;
		mockScope = $rootScope.$new();
		widgetsSvc = widgets;
		stateSvc = $state;

	}));

	beforeEach(function(done) {

		spyOn(widgetsSvc, "getAll").and.returnValue(new Promise(function(resolve) {

			setTimeout(function() {
				resolve({ data: [
					{ id: 1, name: "Test Widget", description: "Test Widget", color: "red", size: "tiny", quantity: 23 }
				]});
				done();
			}, 0);

		}));

	});

	it("display", function(done) {

		var template = "<app-home></app-home>";

		var linkingFn = compileSvc(template);
		var domElement = linkingFn(mockScope);

		mockScope.$digest();

		setTimeout(function() {
			mockScope.$digest();
			expect(domElement[0].querySelectorAll('tbody > tr').length).toBe(1);
			done();
		},0);

	});

});