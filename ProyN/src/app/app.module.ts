import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrincipalComponent } from './Components/principal/principal.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { ListarUsuarioComponent } from './Components/listar-usuario/listar-usuario.component';
import { EliminarUsuarioComponent } from './Components/eliminar-usuario/eliminar-usuario.component';

//Angular modulos
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    UsuarioComponent,
    ListarUsuarioComponent,
    EliminarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatListModule
   
 
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
