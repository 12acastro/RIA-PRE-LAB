import {AfterViewInit, Component, ElementRef, ViewChild, OnInit, Injectable,} from '@angular/core';
import { isEmpty } from 'rxjs';
/*import { Component, OnInit } from '@angular/core';*/
import { Clientes } from './Clientes';
@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.scss']
})


export class AgregarUsuarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

   agregarCliente(documento:string, nombre:string, apellido:string, fechaNac:string, direccion:string, telefono:string):void {
    if(documento != "" && nombre != "" && apellido  != "" && fechaNac != "" && direccion != ""){
      let cliente = new Clientes(documento, nombre,apellido,fechaNac,direccion,telefono);
      localStorage.setItem('cliente ' + documento,JSON.stringify(cliente));
      alert('Cliente agregado satisfactoriamente');
    }else{
      alert('Rellene todos los campos')
    }
  }
 
}
