import { Productos } from "../agregar-producto/Productos";
import { Clientes } from "../agregar-usuario/Clientes";

export class Ventas{
    fecha:string;
    cliente:Clientes;
    producto:Productos;
    constructor(fecha:string,cliente:Clientes,producto:Productos){
        this.fecha = fecha;
        this.cliente = cliente;
        this.producto = producto;
    }
}

