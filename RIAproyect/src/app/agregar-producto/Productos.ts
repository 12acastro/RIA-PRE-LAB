export class Productos {
    key: string;
    nombre:string="";
    descripcion:string="";
    precio:number=0;
    imagen:string;

    constructor(key:string, nombre:string, descripcion:string, precio:number, imagen:string) {
      this.key=key;
      this.nombre = nombre;
      this.descripcion = descripcion;
      this.precio = precio;
      this.imagen = imagen;
    }
   
  }