function DatosBase(valorDolar,isr,incrementoCfeAnual,costoMantenimientoAnual,tasaDescuentoAnual,tasaPrestamoAnual,tasaDepositosAnual){
  this.valorDolar = valorDolar;
  this.isr = isr;
  this.incrementoCfeAnual = incrementoCfeAnual;
  this.costoMantenimientoAnual = costoMantenimientoAnual;
  this.phiAnual = phiAnual;
  this.tasaDescuentoAnual = tasaDescuentoAnual;
  this.tasaPrestamoAnual = tasaPrestamoAnual;
  this.tasaDepositosAnual = tasaDepositosAnual;
}
DatosBase.prototype = {
  setValorDolar: function(valorDolar){
    this.valorDolar = valorDolar;
  },
  setIsr: function(isr){
    this.isr = isr;
  },
  setIncrementoCfeAnual: function(incrementoCfeAnual){
    this.incrementoCfeAnual = incrementoCfeAnual;
  },
  setCostoMantenimientoAnual: function(costoMantenimientoAnual){
    this.costoMantenimientoAnual = costoMantenimientoAnual;
  },
  getValorDolar: function(){
    return this.valorDolar;
  },
  getIsr: function(){
    return this.isr;
  },
  getIncrementeCfeAnual: function(){
    return this.incrementoCfeAnual;
  },
  getCostoMantenimientoAnual: function(){
    return this.costoMantenimientoAnual;
  },
  getPhiAnual: function(){
    return this.phiAnual;
  },
  getTasaDescuentoAnual: function(){
    return this.tasaDescuentoAnual;
  },
  getTasaPrestamoAnual: function(){
    return this.tasaPrestamoAnual;
  },
  getTasaDepositosAnual: function(){
    return this.tasaDepositosAnual;
  }
};
