//constructor del objeto base Zona
function Zona(id){
  this.id = id;
}
//establecer las propiedades compartidas
Zona.prototype = {
  setId: function (id){
    this.id = id || 0;
  },
  getId: function(){
    return this.id;
  },
  getZona: function(){
    switch (this.zona) {
      case 1:
        this.nombre = "Económica";
        break;
      case 2:
        this.nombre = "Media";
        break;
      case 3:
        this.nombre = "Residencial";
        break;
      case 4:
        this.nombre = "RP";
        break;
      default:
        this.nombre = "Económica";
    }
  }
};
