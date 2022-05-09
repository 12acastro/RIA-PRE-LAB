import {AfterViewInit, Component, ElementRef, ViewChild, OnInit, Injectable,} from '@angular/core';
import { isEmpty } from 'rxjs';
/*import { Component, OnInit } from '@angular/core';*/
import { Clientes } from './Clientes';
import { CrudService } from '../CRUD/app.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.scss']
})


export class AgregarUsuarioComponent implements OnInit {
  constructor() { }
  private crud:CrudService=new CrudService();
  ngOnInit(): void {
    
  }

   agregarCliente(documento:string, nombre:string, apellido:string, fechaNac:string, direccion:string, telefono:string):void {
    if(documento != "" && nombre != "" && apellido  != "" && fechaNac != "" && direccion != ""){
      this.crud.createCliente(documento , nombre, apellido , fechaNac, direccion, telefono);
      Swal.fire(
        'Genial',
        'Usuario agregado satisfactoriamentte!',
        'success'
      )
    }else{
      Swal.fire(
        'Error',
        'Rellene todos los campos si quiere registrar un usuario',
        'error'
      )
    }
  }
 
}
