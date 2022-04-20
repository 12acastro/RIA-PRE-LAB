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

  prueba():string {
    let algoN=new Clientes(" "," "," "," "," "," ");
    let thisKey =" ";
    let nuevo = " ";
    for (let n = 0;  n < localStorage.length; ++n) {
      thisKey = localStorage.key(n)!;
      if(thisKey.includes("cliente ")!){
              
       /* try{
          let algo = JSON.parse(localStorage.getItem(thisKey)!);
          algoN = JSON.parse(localStorage.getItem(thisKey)!);
          console.log(algoN.nombre);
          console.log(algo.documento);

          return algoN.documento;

          console.log(localStorage.getItem(thisKey!));
           console.log((valor['documento']!);
         }catch(e){
           return "no existe";
           console.log(e);
         }*/
      }
  
    }
    return "no existe";
  }
/*
 agregarVenta(fecha:string, cliente:Clientes,producto:Productos):void {
    let venta = new Ventas(fecha, cliente, producto);
    localStorage.setItem('cliente ' + producto,JSON.stringify(venta));
    alert('Venta agregada satisfactoriamente');
  }
  */ 
}
