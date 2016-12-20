describe("widget view controller", function() {

	var mockScope, widgetViewCtrl;

	beforeEach(angular.mock.module("WidgetApp"));

	beforeEach(angular.mock.inject(function($controller, $rootScope) {

		mockScope = $rootScope.$new();

		widgetViewCtrl = $controller("widgetViewCtrl", {
			$scope: mockScope
		});

	}));

	it("demo test", function() {

		expect(true).toBe(true);

	});

});
