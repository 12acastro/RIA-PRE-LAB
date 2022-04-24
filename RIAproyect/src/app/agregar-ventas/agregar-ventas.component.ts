import { Component, OnInit } from '@angular/core';
import { Productos } from '../agregar-producto/Productos';
import { Clientes } from '../agregar-usuario/Clientes';
import { Ventas } from './Ventas';
/*import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';*/


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

  constructor() { 
    this.clienteSelec = new Clientes ("","","","","","","");
    this.productoSelec = new Productos ("","","",0,"");
    let thisKey = " ";
    for (let n = 0;  n < localStorage.length; ++n) {
      thisKey = localStorage.key(n)!;
      if(thisKey.includes("cliente ")!){
        let algo = JSON.parse(localStorage.getItem(thisKey)!);
        this.colClientes.push(algo);
      }else{
        if(thisKey.includes("producto ")!){
          let algo2 = JSON.parse(localStorage.getItem(thisKey)!);
          this.colProductos.push(algo2);
        }
      }
    }
  }

  agregarVenta(idCliente:string,idProducto:string,fecha:string):void{
      let cantVenta;
      if(idCliente  != "" && idProducto  != ""){
        if(localStorage.getItem("cantVenta")!=null){
            cantVenta = parseInt(localStorage.getItem("cantVenta")!);
            cantVenta=cantVenta+1;
        }else{
          cantVenta = 1;
        }
        
        if(fecha == ''){
          let date = new Date();
          fecha = (date.toISOString().split('T')[0]);
        }
        localStorage.setItem("cantVenta", cantVenta.toString());
        let venta = new Ventas('venta '+cantVenta,fecha,idCliente,idProducto);
        localStorage.setItem('venta '+cantVenta,JSON.stringify(venta));

      }else{
        alert('Rellene todos los campos');
      }
  }

  todoMayuscula(texto: string): string{
  return texto.toUpperCase();
  }
  
  ngOnInit(): void {
  }
}