import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrincipalComponent } from './Components/principal/principal.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { ListarUsuarioComponent } from './Components/listar-usuario/listar-usuario.component';
import { EliminarUsuarioComponent } from './Components/eliminar-usuario/eliminar-usuario.component';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from './Shared/shared.module';
import { VerUsuarioComponent } from './Components/ver-usuario/ver-usuario.component';
import { IULOGINComponent } from './Components/iulogin/iulogin.component';
import { RecuperarComponent } from './Components/recuperar/recuperar.component';

//Angular modulo

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    UsuarioComponent,
    ListarUsuarioComponent,
    EliminarUsuarioComponent,
    VerUsuarioComponent,
    IULOGINComponent,
    RecuperarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
    

 
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
