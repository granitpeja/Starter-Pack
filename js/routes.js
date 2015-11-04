'use strict';

App.config(function($stateProvider, $urlRouterProvider) {

	// For any unmatched url, redirect to /state1
	$urlRouterProvider.otherwise("/login");

	// Now set up the states
	$stateProvider.state('app', {
		url: '/login',
		templateUrl: 'public/views/admin/login.html'
	});

	$stateProvider.state('home', {
		url: '/home',
		template: '<h1>hiniiii</h1>'
	});

});