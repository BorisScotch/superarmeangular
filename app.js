var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function ($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})
	.when('/novedades', {
		templateUrl: 'pages/novedades.html',
		controller: 'novedadesController'
	})
	.when('/contactanos', {
		templateUrl: 'pages/contactanos.html',
		controller: 'contactanosController'
	})
	.when('/participa', {
		templateUrl: 'pages/participa.html',
		controller: 'participaController'
	})
	.when('/galeriadefotos', {
		templateUrl: 'pages/galeriadefotos.html',
		controller: 'galeriadefotosController'
	})
	.when('/misionyvision', {
		templateUrl: 'pages/misionyvision.html',
		controller: 'misionyvisionController'
	})
	.when('/equipo', {
		templateUrl: 'pages/equipo.html',
		controller: 'equipoController'
	})
	.when('/historia', {
		templateUrl: 'pages/historia.html',
		controller: 'historiaController'
	})
	.when('/testimonios', {
		templateUrl: 'pages/testimonios.html',
		controller: 'testimoniosController'
	})
	.when('/emprendedores', {
		templateUrl: 'pages/emprendedores.html',
		controller: 'emprendedoresController'
	})
	.when('/capacitaciones', {
		templateUrl: 'pages/capacitaciones.html',
		controller: 'capacitacionesController'
	})
	.when('/asesoramientos', {
		templateUrl: 'pages/asesoramientos.html',
		controller: 'asesoramientosController'
	})
	 // use the HTML5 History API
        
});


myApp.controller('mainController', 
	['$scope', '$log',  function($scope, $log){
}]);

myApp.controller('novedadesController', 
	['$scope', '$log',  function($scope, $log){
}]);

myApp.controller('contactanosController', 
	['$scope', '$log',  function($scope, $log){
}]);

myApp.controller('participaController', 
	['$scope', '$log',  function($scope, $log){
}]);
myApp.controller('galeriadefotosController', 
	['$scope', '$log',  function($scope, $log){
}]);
myApp.controller('misionyvisionController', 
	['$scope', '$log',  function($scope, $log){
}]);
myApp.controller('equipoController', 
	['$scope', '$log',  function($scope, $log){
}]);
myApp.controller('historiaController', 
	['$scope', '$log',  function($scope, $log){
}]);
myApp.controller('testimoniosController', 
	['$scope', '$log',  function($scope, $log){
}]);
myApp.controller('emprendedoresController', 
	['$scope', '$log',  function($scope, $log){
}]);
myApp.controller('capacitacionesController', 
	['$scope', '$log',  function($scope, $log){
}]);
myApp.controller('asesoramientosController', 
	['$scope', '$log',  function($scope, $log){
}]);
