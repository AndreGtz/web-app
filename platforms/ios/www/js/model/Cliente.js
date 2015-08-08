function Cliente(nombre,calle,numInt,numExt,colonia,ciudad,estado,pais,
  codigoPostal,statusCliente,rfc,curp,actividadEconomica,representanteLegal,
  ahorroBuscado,descuento,factorPerdida,modulos){

  this.nombre = nombre||"";
  this.calle = calle||"";
  this.numInt = numInt||"";
  this.numExt = numExt||"";
  this.colonia = colonia||"";
  this.ciudad = ciudad||"";
  this.estado = estado||"";
  this.pais = pais||"";
  this.codigoPostal = codigoPostal||"";
  this.statusCliente = statusCliente||"";
  this.rfc = rfc||"";
  this.curp = curp||"";
  this.actividadEconomica = actividadEconomica||"";
  this.representanteLegal = representanteLegal||"";
  this.ahorroBuscado = ahorroBuscado||0.0;
  this.descuento = descuento||0.0;
  this.factorPerdida = factorPerdida||0.0;
  this.modulos = modulos||0.0;
}

Cliente.prototype = {
  getNombre: function(){
    return this.nombre;
  },
  getDireccion: function(){
    return this.calle+" ext."+this.numExt+" int."+this.numInt+", "+this.colonia+". c.p. "+this.codigoPostal+". "+this.pais+", "+this.estado+", "+this.pais;
  },
  getStatusCliente: function(){
    return this.statusCliente;
  },
  getRfc: function(){
    return this.rfc;
  },
  getCurp: function(){
    return this.curp;
  },
  getActividadEconomica: function(){
    return this.actividadEconomica;
  },
  getRepresentanteLegal: function(){
    return this.representanteLegal;
  },
  getAhorroBuscado: function(){
    return this.ahorroBuscado;
  },
  getDescuento: function(){
    return this.descuento;
  },
  getFactorPerdida: function(){
    return this.factorPerdida;
  },
  getModulos: function(){
    return this.modulos;
  }
};
