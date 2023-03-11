import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Componentes
import { EliminarUsuarioComponent } from './Components/eliminar-usuario/eliminar-usuario.component';
import { IULOGINComponent } from './Components/iulogin/iulogin.component';
import { ListarUsuarioComponent } from './Components/listar-usuario/listar-usuario.component';
import { PrincipalComponent } from './Components/principal/principal.component';
import { RecuperarComponent } from './Components/recuperar/recuperar.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { VerUsuarioComponent } from './Components/ver-usuario/ver-usuario.component';

const routes: Routes = [
//{path: '', redirectTo:'principal',pathMatch:'full'},
{path: '', redirectTo:'uilogin',pathMatch:'full'},
{path: 'principal',component:PrincipalComponent},
{path: 'eliminar',component:EliminarUsuarioComponent},
{path: 'listar',component:ListarUsuarioComponent},
{path: 'usuarios',component:UsuarioComponent},
{path: 'verusuarios/:id',component:VerUsuarioComponent},
{path: 'editarusuarios/:id',component:UsuarioComponent},
{path: 'uilogin',component:IULOGINComponent},
{path: 'recuperar',component:RecuperarComponent},
//{path: '**', redirectTo: 'principal', pathMatch:'full'},
{path: '**', redirectTo: 'uilogin', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
