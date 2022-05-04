import { Component, OnInit } from '@angular/core';
import { CrudService } from '../CRUD/app.service';
import { Clientes } from '../agregar-usuario/Clientes';
import { Productos } from '../agregar-producto/Productos';
import { Ventas } from '../agregar-ventas/Ventas';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-mostrar-ventas',
  templateUrl: './mostrar-ventas.component.html',
  styleUrls: ['./mostrar-ventas.component.scss']
})
export class MostrarVentasComponent implements OnInit {

private crud: CrudService = new CrudService();
colVentas:Ventas []= [];
cliente:Clientes;
producto:Productos;
venta:Ventas;

constructor() {
    this.venta = new Ventas("","","","");
    this.producto = new Productos("","","",0,"");
    this.cliente= new Clientes("","","","","","","");
    this.colVentas = this.crud.getDataEspecifico("venta");
  }
  
  obtenerCliente():void{
     if(this.venta.key!=""){
        let nuevo = this.crud.getDataEspecifico(this.venta.cliente)!;
        this.cliente = nuevo[0];
        let nuevo2 = this.crud.getDataEspecifico(this.venta.producto)!;
        this.producto = nuevo2[0];
     }
    
  }
 
  

  todoMayuscula(texto: string): string{
    return texto.toUpperCase();
  }
  
  ngOnInit(): void {
  }

}
