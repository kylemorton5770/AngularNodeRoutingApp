// inject ngRoute for all our routing needs
angular.module('routerRoutes', ['ngRoute'])
// configure our routes
.config(function($routeProvider, $locationProvider) {

	//apply routes to the routeProvider object
	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'views/home.html',
			controller : 'homeController',
			controllerAs: 'home'
		})

		// route for the about page
		.when('/about', {
			templateUrl : 'views/about.html',
			controller : 'aboutController',
			controllerAs: 'about'
		})
		// route for the contact page
		.when('/contact', {
			templateUrl : 'views/contact.html',
			controller : 'contactController',
			controllerAs: 'contact'
		});
		
	// set our app up to have pretty URLS
	$locationProvider.html5Mode(true);
});