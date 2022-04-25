import { Component, OnInit } from '@angular/core';
import { Clientes } from '../agregar-usuario/Clientes';
import { SeleccionComponent } from '../seleccion/seleccion.component';
@Component({
  selector: 'app-administrador-clientes',
  templateUrl: './administrador-clientes.component.html',
  styleUrls: ['./administrador-clientes.component.scss']
})
export class AdministradorClientesComponent implements OnInit {
  colClientes: Clientes[] = [];
  clienteSelec: Clientes;
  cantCLientes:number;
  opcion:number;
 

  constructor() { 
    this.opcion=0;
    this.cantCLientes = 0;
    this.clienteSelec = new Clientes ("","","","","","","");
    let thisKey = " ";
    for (let n = 0;  n < localStorage.length; ++n) {
      thisKey = localStorage.key(n)!;
      if(thisKey.includes("cliente ")!){
        let algo = JSON.parse(localStorage.getItem(thisKey)!);
        this.colClientes.push(algo);
        this.cantCLientes ++;
      }
    }
  }
  setColeccion(){
    this.colClientes=[];
    this.cantCLientes=0;
    let thisKey = " ";
    for (let n = 0;  n < localStorage.length; ++n) {
      thisKey = localStorage.key(n)!;
      if(thisKey.includes("cliente ")!){
        let algo = JSON.parse(localStorage.getItem(thisKey)!);
        this.colClientes.push(algo);
        this.cantCLientes ++;
      }
    }
  }
  
  clienteBorrar(key:string):void{
       if(key==""){
          alert ("Seleccione un Cliente");
          return;
       }else{
        localStorage.removeItem(key);
        alert ("Borrado Correctamente");
        this.clienteSelec = new Clientes ("","","","","","","");
        this.setColeccion();        
       }
      
  }

  setOpcion(op:number){
    this.opcion = op;
  }

  ngOnInit(): void {
  }

}
