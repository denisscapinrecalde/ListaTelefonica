angular.module("listaTelefonica").factory('contatosAPI', function ($http, config) {
	var _getContatos = function(){
		return $http.get(config.baseURL+"/contatos");
	};

	var _getContato = function(id){
		return $http.get(config.baseURL+"/contatos/"+id);
	};

	var _salvarContato = function(contato){
		return $http.post(config.baseURL+"/contatos", contato);
	}

	return {
		getContatos: _getContatos,
		getContato: _getContato,
		salvarContato: _salvarContato
	};

})
