(function(angular) {

	"use strict";

	config.$inject = ["$httpProvider"];

	function config($httpProvider) {

		interceptor.$inject = ["$q"];

		function interceptor($q) {

			return {
				request: function(config) {

					angular.extend(config.headers, {
						Authorization: 'some key value'
					});

					return config;
				},
				requestError: function(rejection) {
					return $q.reject(rejection);
				},
				response: function(response) {

					console.log(response);

					return response;
				},
				responseError: function(rejection) {
					return $q.reject(rejection);
				}
 			}

		}

		$httpProvider.interceptors.push(interceptor);
	}

	angular.module("WidgetApp.Services").config(config);


})(angular);