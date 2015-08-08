
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
  validate: function(email,pass){
    if(email == "colpac64@gmail.com" && pass=="der"){
      return true;
    }
    else {
      return false;
    }
  }
};

angular.module('my-app').service('Usuario',Usuario);

angular.module('my-app').controller('UserController',['Usuario',function(usuario){
  this.usuario = new Usuario();
  this.validate = function(usuario){
    return usuario.validate(usuario.email,usuario.pass);
  };
}]);
