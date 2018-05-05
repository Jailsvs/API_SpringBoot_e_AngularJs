//Criacao modulo principal da app
var appCliente = angular.module("appCliente", ['ngRoute']); 


appCliente.config(function($routeProvider, $locationProvider) {
	  $routeProvider
	   .when('/clientes', {	templateUrl: 'view/cliente.html',
		   				   	controller: 'clienteController'}
	   )
	   .otherwise({redirectTo:'/'});
	  //$locationProvider.hashPrefix('');
	});