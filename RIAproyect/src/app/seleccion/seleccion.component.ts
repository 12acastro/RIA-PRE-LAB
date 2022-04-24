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
   //controla que no se abra agregar ventas si no hay productos o clientes 
    if(numero==3){
      let cantProducto=0;
      let cantCliente=0;
      let thisKey ="";
      for (let n = 0;  n < localStorage.length; ++n) {
        thisKey = localStorage.key(n)!;
        if(thisKey.includes("cliente ")!){
            cantCliente++;
        }else{
          if(thisKey.includes("producto ")!){
            cantProducto++;
            }
          }
      }
      if(cantCliente == 0 || cantProducto == 0){
        if(cantCliente == 0 && cantProducto == 0){
          alert ("Debe dar de alta al menos un Producto y un Cliente")
        }else{if(cantCliente == 0){
                  alert ("Debe dar de alta al menos un Cliente");
                }else{
                  alert ("Debe dar de alta al menos un Producto")
                }
              }
      
      return;
      }
    }
    this.eleccion=numero;
    return;
  }
 
  ngOnInit(): void {
  }

}
