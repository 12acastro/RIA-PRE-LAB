import { Component, OnInit } from '@angular/core';
import { Productos } from './Productos';
@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.scss']
})
export class AgregarProductoComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
  }
  
  agregarProducto(nombre:string, descripcion:string, precio:string, imagen:string):void {
    if(nombre != "" && descripcion != "" && precio  != "" && imagen != ""){
      let precio1=parseInt(precio);
      let cantProducto;
        if(localStorage.getItem("cantProducto")!=null){
          cantProducto = parseInt(localStorage.getItem("cantProducto")!);
          cantProducto=cantProducto+1;
        }else{
          cantProducto = 1;
        }
        localStorage.setItem("cantProducto", cantProducto.toString())
        let producto = new Productos("producto "+cantProducto,nombre,descripcion,precio1,imagen);
        localStorage.setItem("producto " + cantProducto,JSON.stringify(producto));
        alert('Producto agregado satisfactoriamente');
     
    }else{
      alert('Rellene todos los campos');
    }
  }

}
