import { Productos } from "../agregar-producto/Productos";
import { Clientes } from "../agregar-usuario/Clientes";

export class Ventas{
    key:string;
    fecha:string;
    cliente:string;
    producto:string;
    constructor(key:string, fecha:string,cliente:string,producto:string){
        this.key=key;
        this.fecha = fecha;    
        this.cliente = cliente;
        this.producto = producto;
    }
}

