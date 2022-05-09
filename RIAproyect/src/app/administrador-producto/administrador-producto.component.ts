import { Component, OnInit } from '@angular/core';
import { Productos } from '../agregar-producto/Productos';
import { CrudService } from '../CRUD/app.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-administrador-producto',
  templateUrl: './administrador-producto.component.html',
  styleUrls: ['./administrador-producto.component.scss']
})
export class AdministradorProductoComponent implements OnInit {

  colProductos: Productos[] = [];
  productoSelec: Productos;
  cantProductos:number;
  opcion:string
  
  private crud:CrudService = new CrudService();

  constructor() { 
    this.opcion= "mostrarProducto";
    this.cantProductos = 0;
    this.productoSelec = new Productos ("","","",0,"");
    this.colProductos = this.crud.getDataEspecifico("producto");
    this.cantProductos =  this.colProductos.length;
  }
    
    modificarProducto(key:string, nombre:string, descripcion:string, precio:string,imagen:string):void{
      if(nombre != "" && descripcion != "" && precio  != ""){
        if(imagen == ""){
          imagen = this.productoSelec.imagen;
        }
          this.crud.updateProducto(key,nombre, descripcion,parseInt(precio),imagen);
          Swal.fire(
            'Genial',
            'Producto modificado satisfactoriamentte!',
            'success'
          )
          this.setColeccion();
      }else{
        Swal.fire(
          'Error',
          'Rellene todos los campos',
          'error'
        )
      }
    }
    
    setOpcion(op:string){
      this.opcion = op;
      if(op == "mostrarProducto"){
        this.setColeccion();
      }
    }

    setColeccion(){
      this.colProductos = this.crud.getDataEspecifico("producto");
      this.cantProductos =  this.colProductos.length;
      this.productoSelec = new Productos ("","","",0,"");
    }

    productoBorrar(key:string){
      this.crud.deleteDataEspecifico(key);
      this.setColeccion();
    }
  
  ngOnInit(): void {
  }

}
