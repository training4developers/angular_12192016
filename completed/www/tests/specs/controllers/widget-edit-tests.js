describe("widget edit controller", function() {

	var mockScope, widgetEditCtrl;

	beforeEach(angular.mock.module("WidgetApp"));

	beforeEach(angular.mock.inject(function($controller, $rootScope) {

		mockScope = $rootScope.$new();

		widgetEditCtrl = $controller("widgetEditCtrl", {
			$scope: mockScope
		});

	}));

	it("demo test", function() {

		expect(true).toBe(true);

	});

});
