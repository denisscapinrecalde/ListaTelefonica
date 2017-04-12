angular.module("listaTelefonica").directive("uiPhone", function($filter){
  return{
    require: "ngModel",
    link: function(scope, element, attrs, ctrl){
      var _formatPhone = function(phone){
        phone = phone.replace(/[^0-9]+/g, "");
        if(phone.length > 5){
          phone = phone.substring(0,5) +
            "-" + phone.substring(5,9)
        }
        return phone;
      }

      element.bind("keyup", function(){
        ctrl.$setViewValue(_formatPhone(ctrl.$viewValue));
        ctrl.$render();
      });
    }
  };
});
