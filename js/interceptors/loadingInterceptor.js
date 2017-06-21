angular.module("listaTelefonica").factory("loadingInterceptor" , function($q, $rootScope, $timeout) {
  return {
    request: function(config){
      var url = config.url;
      if(url.indexOf("contatos") === -1) return config;
      $rootScope.loading = true;
      return config;
    },
    requestError: function(rejection){
      return $q.reject(rejection);
    },
    response: function(response){
      if($rootScope.loading === true){
        $timeout (function(){
          $rootScope.loading = false;
        }, 500);
      }
      return response;
    },
    responseError: function(rejection) {
      return $q.reject(rejection);
    }
  };
});
