export class Productos {
    nombre:string="";
    descripcion:string="";
    precio:number=0;
    imagen:string;
    constructor(nombre:string, descripcion:string, precio:number, imagen:string) {
     this.nombre = nombre;
     this.descripcion = descripcion;
     this.precio = precio;
     this.imagen = imagen;
    }
   
  }