import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';
import { SeleccionComponent } from './seleccion/seleccion.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { AgregarVentasComponent } from './agregar-ventas/agregar-ventas.component';

@NgModule({
  declarations: [
    AppComponent,
    AgregarUsuarioComponent,
    SeleccionComponent,
    AgregarProductoComponent,
    AgregarVentasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
