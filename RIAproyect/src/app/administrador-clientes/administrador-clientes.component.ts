import { Component, OnInit } from '@angular/core';
import { Clientes } from '../agregar-usuario/Clientes';
import { SeleccionComponent } from '../seleccion/seleccion.component';
import { CrudService } from '../CRUD/app.service';
@Component({
  selector: 'app-administrador-clientes',
  templateUrl: './administrador-clientes.component.html',
  styleUrls: ['./administrador-clientes.component.scss']
})
export class AdministradorClientesComponent implements OnInit {
  colClientes: Clientes[] = [];
  clienteSelec: Clientes;
  cantCLientes:number;
  opcion:string;
 
  private crud:CrudService = new CrudService();
 
  constructor () {
    this.opcion= "mostrarCliente";
    this.cantCLientes = 0;
    this.clienteSelec = new Clientes ("","","","","","","");
    this.colClientes = this.crud.getDataEspecifico("cliente");
    this.cantCLientes =  this.colClientes.length;
  }

  modificarCliente(key:string, documento:string, nombre:string, apellido:string, fechaNac:string, direccion:string, telefono:string):void{
    if(documento != "" && nombre != "" && apellido  != "" && fechaNac != "" && direccion != ""){
      this.crud.updateCliente(key,documento, nombre, apellido, fechaNac, direccion, telefono);
      alert('Cliente modificado satisfactoriamente');
      this.setColeccion();
    }else{
      alert('Rellene todos los campos')
    }
  }
  
  setColeccion(){
    this.colClientes = this.crud.getDataEspecifico("cliente");
    this.cantCLientes =  this.colClientes.length;
    this.clienteSelec = new Clientes ("","","","","","","");
    this.cantCLientes =  this.colClientes.length;
  }

  clienteBorrar(key:string):void{
       if(key==""){
          alert ("Seleccione un Cliente");
          return;
       }else{
          this.crud.deleteDataEspecifico(key);
          alert ("Borrado Correctamente");
          this.setColeccion();        
       }
      
  }

  setOpcion(op:string){
    this.opcion = op;
  }

  ngOnInit(): void {
  }

}
