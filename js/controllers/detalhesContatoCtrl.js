angular.module("listaTelefonica").controller("detalhesContatoCtrl", function ($scope, $routeParams, contatosAPI){

  var detalhesContato = function () {
    contatosAPI.getContato($routeParams.id).then(function(response) {
      if(response.status==204){
        $scope.message = 'Contato não existe';
      }else{
        $scope.contato = response.data;
      }
    }, function errorCallback(response) {
      $scope.message = 'Não foi possível carregar o contato';
    });
  };

  detalhesContato();
});
