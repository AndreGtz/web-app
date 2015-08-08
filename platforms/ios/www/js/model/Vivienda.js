//constructor del objeto base Vivienda
function Vivienda(area,habitantes,zona){
  this.area = area || 0;
  this.habitantes = habitantes || 0;
  this.zona = new Zona(zona);
}
//establecer las propiedades compartidas
Vivienda.prototype = {
  setArea: function (area){
    this.area = area || 0;
  },
  setHabitantes: function (habitantes){
    this.habitantes = habitantes || 0;
  },
  setZona: function (zona){
    this.zona = new Zona(zona);
  },
  getArea: function (){
    return this.area;
  },
  getHabitantes: function (){
    return this.habitantes;
  },
  getZona: function (){
    return this.zona;
  },
  getPromedioDiarioKwh: function(){
    switch(this.zona.getId()){
      case 1:
        return (7/4*this.habitantes*0.6)*(1+this.area/2000);
      case 2:
        return (7/4*this.habitantes)*(1+this.area/2000);
      case 3:
        return (7/4*this.habitantes*1.7)*(1+this.area/2000);
      case 4:
        return (7/4*this.habitantes*2.5)*(1+this.area/2000);
      default:
        return (7/4*this.habitantes*0.6)*(1+this.area/2000);
    }
  }
};
