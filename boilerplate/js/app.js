(function () {

	angular.module('app', ['ui.router']);

	angular.module('app').config(['$stateProvider', '$urlRouterProvider', routeConfig]);

	function routeConfig($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/view');

		$stateProvider
			.state('view', {
				url: "/view",
				templateUrl: "views/view.html"
			});
	}

})();