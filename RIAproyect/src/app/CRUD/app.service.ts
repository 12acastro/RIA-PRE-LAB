import { Injectable } from '@angular/core';
import { Clientes } from '../agregar-usuario/Clientes';
import { Ventas } from '../agregar-ventas/Ventas';
import { Productos } from '../agregar-producto/Productos';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
 // private datos: any = localStorage;

  constructor() { }
//CREA UN CLIENTE
  public createCliente(documento:string, nombre:string, apellido:string, fechaNac:string, direccion:string, telefono:string){
    
      let cant;
      if(localStorage.getItem("cantCliente")!=null){
        cant = parseInt(localStorage.getItem("cantCliente")!);
        cant++;
      }else{
        cant= 1;
      }
      
      localStorage.setItem("cantCliente", cant.toString());
      let cliente = new Clientes("cliente "+ cant, documento, nombre, apellido, fechaNac, direccion, telefono);
      localStorage.setItem('cliente ' + cant,JSON.stringify(cliente));

    
  }

  //CREA UN PRODUCTO
  public createProducto(nombre:string, descripcion:string, precio:number, imagen:string){
    let cant;
    if(localStorage.getItem("cantProducto")!=null){
      cant = parseInt(localStorage.getItem("cantProducto")!);
      cant++;
    }else{
      cant= 1;
    }
    localStorage.setItem("cantProducto", cant.toString());
    let producto = new Productos("producto "+ cant, nombre, descripcion, precio, imagen);
    localStorage.setItem('producto ' + cant,JSON.stringify(producto));
  }

  //CREA UNA VENTA
  public createVenta(Idcliente:string, Idproducto:string, fecha:string){
    let cant;
    if(localStorage.getItem("cantVenta")!=null){
      cant = parseInt(localStorage.getItem("cantVenta")!);
      cant++;
    }else{
      cant= 1;
    }
    if(fecha == ''){
      let date = new Date();
      fecha = (date.toISOString().split('T')[0]);
    }
    localStorage.setItem("cantVenta", cant.toString());
    let venta = new Ventas("venta "+ cant, Idcliente, Idproducto, fecha);
    localStorage.setItem('venta ' + cant,JSON.stringify(venta));
  }

  //LEE CUALQUIER COSA
  public getDataEspecifico(tipo:string): any[] {
    let lista: any = []; 
    let thisKey = " ";
    try{
      for (let n = 0;  n < localStorage.length; ++n) {
        thisKey = localStorage.key(n)!;
        if(thisKey.includes(tipo)!){
          let algo = JSON.parse(localStorage.getItem(thisKey)!);
          lista.push(algo);
        }
      }
    }catch(err){
      console.log(err);
    }
    return lista;
  }

  //BORRAR CUALQUIER COSA
  public deleteDataEspecifico(key:string){
    localStorage.removeItem(key);
  }
  
  //ACTUALIZA CLIENTE
  public updateCliente(key:string,documento:string, nombre:string, apellido:string, fechaNac:string, direccion:string, telefono:string){
    let cliente = new Clientes(key, documento, nombre, apellido, fechaNac, direccion, telefono);
    localStorage.setItem(key,JSON.stringify(cliente));
  }

  //ACTUALIZAR PRODUCTO
  public updateProducto(key:string,nombre:string, descripcion:string, precio:number, imagen:string){
    let producto = new Productos(key, nombre, descripcion, precio, imagen);
    localStorage.setItem(key,JSON.stringify(producto));
  }
}