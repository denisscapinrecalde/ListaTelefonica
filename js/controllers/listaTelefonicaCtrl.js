angular.module("listaTelefonica").controller("listaTelefonicaCtrl", function ($scope, contatosAPI, operadorasAPI, serialGenerator){
	$scope.app = "Lista Telefonica";
	$scope.contatos = [];
	$scope.contato = {
		data: new Date().getTime()
	}
	var carregarContatos = function () {
		contatosAPI.getContatos().then(function(response) {
			$scope.contatos = response.data;
		}, function errorCallback(response) {
			$scope.message = 'Não foi possível carregar os contatos';
		});
	};
	$scope.apagarContatos = function(contatos){
		$scope.contatos = contatos.filter(function(contato) {
			if (!contato.selecionado) return contato;
		});
	};
	$scope.isContatoSelecionado = function (contatos) {
		return contatos.some(function(contato){
			return contato.selecionado;
		});
	}
	$scope.ordenarPor = function (campo) {
		$scope.criterioDeOrdenacao = campo;
		$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
	}
	carregarContatos();
});
