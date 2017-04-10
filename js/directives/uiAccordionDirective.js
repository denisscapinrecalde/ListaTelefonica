angular.module("listaTelefonica").directive("uiAccordion", function(){
  return{
    templateUrl:"view/accordion.html",
    transclude: true,
    scope:{
      title: "@title"
    }
  };
});
