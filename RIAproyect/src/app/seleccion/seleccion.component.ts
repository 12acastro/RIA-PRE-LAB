import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seleccion',
  templateUrl: './seleccion.component.html',
  styleUrls: ['./seleccion.component.scss']
})
export class SeleccionComponent implements OnInit {
  eleccion:number;

  constructor() { 
    this.eleccion=0;
    /*
    0 pantalla inicio
    1 agregar clientes
    2 agregar productos
    3 agregar ventas
    */

  }
  setEleccion (numero:number) : void {
    this.eleccion=numero;
    return;
  }
  
 /* getEleccion (): number {
    return this.eleccion;
  }*/

  ngOnInit(): void {
  }

}
