//constructor del objeto base Contrato
function Contrato(fechaPago,tiempoInstalacion,fechaEntrega,fechaProduccion,anticipo,saldo,ahorroIsr){
  this.fechaPago = fechaPago || new Date();
  this.tiempoInstalacion = tiempoInstalacion || 0;
  this.fechaEntrega = fechaEntrega || new Date();
  this.fechaProduccion = fechaProduccion || new Date();
  this.anticipo = anticipo || 0;
  this.saldo = saldo || 0;
  this.ahorroIsr = ahorroIsr || false;
}
//establecer las propiedades compartidas
Contrato.prototype = {
  setFechaPago: function (fechaPago){
    this.fechaPago = fechaPago || new Date();
  },
  setTiempoInstalacion: function (tiempoInstalacion){
    this.tiempoInstalacion = tiempoInstalacion || 0;
  },
  setFechaEntrega: function (fechaEntrega){
    this.fechaEntrega = fechaEntrega || new Date();
  },
  setFechaProduccion: function (fechaProduccion){
    this.fechaProduccion = fechaProduccion || new Date();
  },
  setAnticipo: function (anticipo){
    this.anticipo = anticipo || 0;
  },
  setSaldo: function (saldo){
    this.saldo = saldo || 0;
  },
  setAhorroIsr: function (ahorroIsr){
    this.ahorroIsr = ahorroIsr || false;
  },
  getFechaPago: function (){
    return this.fechaPago;
  },
  getTiempoInstalacion: function (){
    return this.tiempoInstalacion;
  },
  getFechaEntrega: function (){
    return this.fechaEntrega;
  },
  getFechaProduccion: function (){
    return this.fechaProduccion;
  },
  getAnticipo: function (){
    return this.anticipo;
  },
  getSaldo: function (){
    return this.saldo;
  },
  isAhorroIsr: function (){
    return this.ahorroIsr;
  }
};
