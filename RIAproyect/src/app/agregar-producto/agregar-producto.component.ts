import { Component, OnInit } from '@angular/core';
import { Productos } from './Productos';
import Swal from 'sweetalert2';
import { CrudService } from '../CRUD/app.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.scss']
})
export class AgregarProductoComponent implements OnInit {
  private crud: CrudService = new CrudService();
  resetear:boolean = false;

  

  constructor() { }

  ngOnInit(): void {
  }
  
  reset():void{
    this.resetear = false;
  }
  agregarProducto(nombre:string, descripcion:string, precio:string, imagen:string):void {
    if(nombre != "" && descripcion != "" && precio  != "" && imagen != ""){
      this.crud.createProducto(nombre, descripcion, parseInt(precio), imagen);
      console.log(nombre, descripcion, parseInt(precio), imagen);
        Swal.fire(
          'Genial',
          'Producto agregado correctamente',
          'success'
        )
      this.resetear=true;
            
    }else{
      Swal.fire(
        'Error',
        'Rellene todos los campos',
        'error'
      )
    }

  }

}
