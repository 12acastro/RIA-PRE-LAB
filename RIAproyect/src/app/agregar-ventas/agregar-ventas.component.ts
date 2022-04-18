import { Component, OnInit } from '@angular/core';
import { Productos } from '../agregar-producto/Productos';
import { Clientes } from '../agregar-usuario/Clientes';
import { Ventas } from './Ventas';

@Component({
  selector: 'app-agregar-ventas',
  templateUrl: './agregar-ventas.component.html',
  styleUrls: ['./agregar-ventas.component.scss']
})
export class AgregarVentasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
/*
 agregarVenta(fecha:string, cliente:Clientes,producto:Productos):void {
    let venta = new Ventas(fecha, cliente, producto);
    localStorage.setItem('cliente ' + producto,JSON.stringify(venta));
    alert('Venta agregada satisfactoriamente');
  }
  */ 
}
