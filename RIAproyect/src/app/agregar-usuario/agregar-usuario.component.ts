import {AfterViewInit, Component, ElementRef, ViewChild, OnInit, Injectable,} from '@angular/core';
import { isEmpty } from 'rxjs';
/*import { Component, OnInit } from '@angular/core';*/
import { Clientes } from './Clientes';
import { CrudService } from '../CRUD/app.service';
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
      alert('Cliente agregado satisfactoriamente');
    }else{
      alert('Rellene todos los campos')
    }
  }
 
}
/*
 for (let n = 0;  n < localStorage.length; ++n) {
      thisKey = localStorage.key(n)!;
      if(thisKey.includes("cliente ")!){
        let algo = JSON.parse(localStorage.getItem(thisKey)!);
        this.colClientes.push(algo);
      }
    }
*/