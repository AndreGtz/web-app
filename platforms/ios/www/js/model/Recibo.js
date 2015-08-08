function Recibo(bimestral,primerEscalon,segundoEscalon,excedente,cargoFijo,dap,promedioDiarioKwh){
  this.bimestral = bimestral||false;
  this.primerEscalon = primerEscalon||0;
  this.segundoEscalon = segundoEscalon||0;
  this.excedente = excedente||0;
  this.cargoFijo = cargoFijo||0;
  this.dap = dap||0;
  this.promedioDiarioKwh = promedioDiarioKwh||0;
}

Recibo.prototype = {
  setBimestral: function(bimestral){
    this.bimestral= bimestral;
  },
  setPrimerEscalon: function(primerEscalon){
    this.primerEscalon = primerEscalon;
  },
  setSegundoEscalon: function(segundoEscalon){
    this.segundoEscalon = segundoEscalon;
  },
  setExcedente: function(excedente){
    this.excedente = excedente;
  },
  setCargoFijo: function(cargoFijo){
    this.cargoFijo = cargoFijo;
  },
  setDap: function(dap){
    this.dap = dap;
  },
  setPromedioDiarioKwh: function(promedioDiarioKwh){
    this.promedioDiarioKwh = promedioDiarioKwh;
  },
  isBimestral: function(){
    return this.bimestral;
  },
  getPrimerEscalon: function(){
    return this.primerEscalon;
  },
  getSegundoEscalon: function(){
    return this.segundoEscalon;
  },
  getExcedente: function(){
    return this.excedente;
  },
  getCargoFijo: function(){
    return this.cargoFijo;
  },
  getDap: function(){
    return this.dap;
  },
  getPromedioDiarioKwh: function(){
    return this.promedioDiarioKwh;
  },
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
    var dias = isBimestral()?60:30;
    return getTotal()/dias/this.promedioDiarioKwh;
  },
  getConsumoKwhBimestral: function(){
    return getPromedioDiarioKwh()*60;
  }
};
