export class Clientes {
    key: string;
    documento:string="";
    nombre:string="";
    apellido:string="";
    fechaNac:string="";
    direccion:string="";
    telefono:string="";
    constructor(key:string, documento:string, nombre:string, apellido:string, fechaNac:string, direccion:string, telefono:string) {
      this.key = key;
      this.documento = documento;
      this.nombre = nombre;
      this.apellido = apellido;
      this.fechaNac = fechaNac;
      this.direccion = direccion;
      this.telefono = telefono;
    }
   
  }