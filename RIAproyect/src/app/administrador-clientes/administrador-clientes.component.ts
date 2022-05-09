import { Component, OnInit } from '@angular/core';
import { Clientes } from '../agregar-usuario/Clientes';
import { CrudService } from '../CRUD/app.service';
import Swal from 'sweetalert2';
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
      Swal.fire(
        'Genial',
        'Usuario modificado satisfactoriamentte!',
        'success'
      )
      this.setColeccion();
    }else{
      Swal.fire(
        'Error',
        'Rellene todos los campos',
        'error'
      )
    }
  }
  
  setColeccion(){
    this.colClientes = this.crud.getDataEspecifico("cliente");
    this.cantCLientes =  this.colClientes.length;
    this.clienteSelec = new Clientes ("","","","","","","");
  }  

  clienteBorrar(key:string):void{
       if(key==""){
        Swal.fire(
          'Error',
          'Seleccione un cliente',
          'error'
        )
          return;
       }else{
          this.crud.deleteDataEspecifico(key);
          Swal.fire(
            'Error',
            'Cliente borrado correctamente',
            'success'
          )
          this.setColeccion();        
       }
      
  }

  setOpcion(op:string){
    this.opcion = op;
    if(op == "mostrarCliente"){
      this.setColeccion();
    } 
  }

  ngOnInit(): void {
  }

}
