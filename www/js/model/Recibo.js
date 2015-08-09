
function Recibo(){
  this.bimestral = true;
  this.primerEscalon = "";
  this.segundoEscalon = "";
  this.excedente = "";
  this.cargoFijo = "";
  this.dap = "";
  this.promedioDiarioKwh = "";
}

Recibo.prototype = {
  getSubTotal: function(){
    return this.primerEscalon+this.segundoEscalon+this.excedente+this.cargoFijo;
  },
  getIva: function(){
    return getSubTotal()*0.16;
  },
  getTotal: function(){
    return getSubTotal()+getIva()+this.dap;
  },
  getCostoKwhPagado: function(){
    var dias = this.bimestral?60:30;
    return getTotal()/dias/this.promedioDiarioKwh;
  },
  getConsumoKwhBimestral: function(){
    return this.PromedioDiarioKwh*60;
  }
};

angular.module('my-app').service('Recibo',Recibo);

angular.module('my-app').controller('ReciboController',['Recibo','$scope',function(recibo,$scope){
  var vm = this;
  vm.recibo = new Recibo();

}]);
