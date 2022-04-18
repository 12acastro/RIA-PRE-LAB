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
    let precio1=parseInt(precio);
    let producto = new Productos(nombre,descripcion,precio1,imagen);
    localStorage.setItem('producto ' + nombre,JSON.stringify(producto));
    alert('Producto agregado satisfactoriamente');
  }
}
