angular.module("listaTelefonica").controller("novoContatoCtrl", function ($scope, contatosAPI, operadorasAPI, serialGenerator, $location, operadoras){
	$scope.operadoras = operadoras.data;

	$scope.adicionarContato = function (contato) {
		var serial = serialGenerator.generate();
		contato.serial = serial;
		contatosAPI.salvarContato(contato).then(function (response) {
			delete $scope.contato;
			$scope.contatoForm.$setPristine();
			$location.path("/contatos")
		});
	};
});
