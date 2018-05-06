//Criacao de controller (nome, oq faz)
appCliente.controller("clienteController", function ($scope, $http){
	
	$scope.nome = "Jailson";
	$scope.sobreNome = "Volnei dos Santos";	
	$scope.clientes=[];
	$scope.cliente = {};  //Bind com o Form
	
	carregarClientes = function (){
		$http({
			  method: 'GET',
			  url: 'http://localhost:8080/clientes',
			  
			})
			.then(function successCallback(response) {
				$scope.clientes=response.data;
			}, function errorCallback(response) {
				console.log(response.data);
				console.log(response.status);
			  });
	};
	
	$scope.salvarCliente = function(){
		$http({
			  method: 'POST',
			  url: 'http://localhost:8080/clientes',
			  data: $scope.cliente
			})
			.then(function successCallback(response) {
				//$scope.clientes.push(response.data);
				$scope.cancelarAlteracaoCliente();
				carregarClientes();
			}, function errorCallback(response) {
				console.log(response.data);
				console.log(response.status);
			  });
	};
	
	$scope.excluirCliente = function(cliente){
		$http({
			  method: 'DELETE',
			  url: 'http://localhost:8080/cliente/'+cliente.id
			})
			.then(function successCallback(response) {
				//Buscar posicao do cliente no array
				/*for (i = 0; i<$scope.clientes.length; i++){
					if ($scope.clientes[i].id == cliente.id){
						$scope.clientes.splice(i, 1);
						break;
					}
				}*/
				$scope.clientes.splice($scope.clientes.indexOf(cliente), 1);
			}, function errorCallback(response) {
				console.log(response.data);
				console.log(response.status);
			  });
	};
	
	$scope.alterarCliente = function(cliente){
		$scope.cliente = angular.copy(cliente);
	};
	
	$scope.cancelarAlteracaoCliente = function(){
		$scope.cliente = {};
	};
	
	carregarClientes();
	
	
	
});