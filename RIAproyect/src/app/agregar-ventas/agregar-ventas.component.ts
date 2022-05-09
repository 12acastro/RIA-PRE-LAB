import { Component, OnInit } from '@angular/core';
import { Productos } from '../agregar-producto/Productos';
import { Clientes } from '../agregar-usuario/Clientes';
import { Ventas } from './Ventas';
import { CrudService } from '../CRUD/app.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-agregar-ventas',
  templateUrl: './agregar-ventas.component.html',
  styleUrls: ['./agregar-ventas.component.scss']
})
export class AgregarVentasComponent implements OnInit {
  colClientes: Clientes[] = [];
  colProductos: Productos [] = [];
  clienteSelec: Clientes;
  productoSelec: Productos;
  private crud: CrudService = new CrudService();


  constructor() { 
    this.clienteSelec = new Clientes ("","","","","","","");
    this.productoSelec = new Productos ("","","",0,"");
    this.colProductos = this.crud.getDataEspecifico("producto");
    this.colClientes = this.crud.getDataEspecifico("cliente");
  }


  agregarVenta(idCliente:string,idProducto:string,fecha:string):void{
    if(idCliente  != "" && idProducto  != ""){
      this.crud.createVenta(idCliente,idProducto,fecha);
      Swal.fire(
        'Genial',
        'Producto agregado correctamente',
        'success'
      )
    }else{
      Swal.fire(
        'Error',
        'Seleccione cliente y producto',
        'error'
      )
    }
  }

  todoMayuscula(texto: string): string{
  return texto.toUpperCase();
  }
  
  ngOnInit(): void {
  }
}