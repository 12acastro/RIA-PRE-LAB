export class Clientes {
    documento:string="";
    nombre:string="";
    apellido:string="";
    fechaNac:string="";
    direccion:string="";
    telefono:string="";
    constructor(documento:string, nombre:string, apellido:string, fechaNac:string, direccion:string, telefono:string) {
     this.documento = documento;
     this.nombre = nombre;
     this.apellido = apellido;
     this.fechaNac = fechaNac;
     this.direccion = direccion;
     this.telefono = telefono;
    }
   
  }