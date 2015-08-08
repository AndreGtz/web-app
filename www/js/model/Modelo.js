//constructor del objeto base Modelo
function Modelo(rendimiento,insolacionLocal,potenciaNominal,superficie,paneles,precioUnitario,nombre,versionModelo,status,descuento){
  this.rendimiento = rendimiento || 0;
  this.insolacionLocal = insolacionLocal || 0;
  this.potenciaNominal = potenciaNominal || 0;
  this.superficie = superficie || 0;
  this.paneles = paneles || 0;
  this.precioUnitario = precioUnitario || 0;
  this.nombre = nombre || "";
  this.versionModelo = versionModelo || 0;
  this.descuento = descuento;
}
//establecer las propiedades compartidas
Modelo.prototype = {
  setRendimiento: function (rendimiento){
    this.rendimiento = rendimiento || 0;
  },
  setInsolacionLocal: function (insolacionLocal){
    this.insolacionLocal = insolacionLocal || 0;
  },
  setPotenciaNominal: function (potenciaNominal){
    this.potenciaNominal = potenciaNominal || 0;
  },
  setSuperficie: function (superficie){
    this.superficie = superficie || 0;
  },
  setPaneles: function (paneles){
    this.paneles = paneles || 0;
  },
  setPrecioUnitario: function (precioUnitario){
    this.precioUnitario = precioUnitario || 0;
  },
  setNombre: function (nombre){
    this.nombre = nombre || "";
  },
  setVersionModelo: function (versionModelo){
    this.versionModelo = versionModelo || 0;
  },
  setDescuento: function (descuento){
    this.descuento = descuento || 0;
  },
  getRendimiento: function (){
    return this.rendimiento;
  },
  getInsolacionLocal: function (){
    return this.insolacionLocal;
  },
  getPotenciaNominal: function (){
    return this.potenciaNominal;
  },
  getSuperficie: function (){
    return this.superficie;
  },
  getPaneles: function (){
    return this.paneles;
  },
  getPrecioUnitario: function (){
    return this.precioUnitario;
  },
  getNombre: function (){
    return this.nombre;
  },
  getVersionModelo: function (){
    return this.versionModelo;
  },
  getDescuento: function (){
    return this.descuento;
  },
  getCantidadModulos: function (objeto,cliente){//Recibo o Vivienda,cliente
    return (objeto.getPromedioDiarioKwh()/this.rendimiento)*cliente.getAhorroBuscado();
  },
  getHuella: function(){
    return getCantidadModulos()*getSuperficie();
  },
  getProduccionDiaria: function(){
    return getCantidadModulos()*getRendimiento();
  },
  getProduccionMensual: function(){
    return getProduccionDiaria()*30;
  },
  getProduccionAnual: function(){
    return getProduccionDiaria*365;
  },
  getAhorroCo2Anual: function(){
    return getProduccionDiaria()*1000/616.67;
  },
  getPrecioVentaTotal: function(){
    return getPrecioUnitario()*getCantidadModulos()*(1-this.descuento);
  },
  getKwhPerUSD: function(usd){//valor del USD dollar en MXN
    return getPrecioVentaTotal()/usd/getProduccionAnual();
  },
  getPrecioBase: function(){
    return getPrecioUnitario()*0.84;
  },
  getIva: function(){
    return getPrecioUnitario()*0.16;
  },
  getTotalBimestral: function(){
    return getProduccionMensual()*2;
  }
};
