
function Usuario(){
  this.email = "";
  this.pass = "";
}

Usuario.prototype = {
  getEmail: function(){
    return this.email;
  },
  setPass: function(pass){
    this.pass = pass;
  },
  setEmail: function(email){
    this.email = email;
  },
  validate: function(){
    if(this.email == "colpac64@gmail.com" && this.pass=="der"){
      return true;
    }
    else {
      return false;
    }
  }
};



angular.module('my-app').service('Usuario',Usuario);

angular.module('my-app').controller('UserController',['Usuario','$scope',function(usuario,$scope){
  var vm = this;
  vm.usuario = new Usuario();
  vm.login = function(){

    if(vm.usuario.validate()||true){
      $scope.myNavigator.pushPage('Menu.html');
    }
  };
}]);
