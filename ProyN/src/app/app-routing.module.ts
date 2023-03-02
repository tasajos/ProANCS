import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Componentes
import { EliminarUsuarioComponent } from './Components/eliminar-usuario/eliminar-usuario.component';
import { ListarUsuarioComponent } from './Components/listar-usuario/listar-usuario.component';
import { PrincipalComponent } from './Components/principal/principal.component';
import { UsuarioComponent } from './Components/usuario/usuario.component';
import { VerUsuarioComponent } from './Components/ver-usuario/ver-usuario.component';

const routes: Routes = [
{path: '', redirectTo:'principal',pathMatch:'full'},
{path: 'principal',component:PrincipalComponent},
{path: 'eliminar',component:EliminarUsuarioComponent},
{path: 'listar',component:ListarUsuarioComponent},
{path: 'usuarios',component:UsuarioComponent},
{path: 'verusuarios/:id',component:VerUsuarioComponent},
{path: 'editarusuarios/:id',component:UsuarioComponent},
{path: '**', redirectTo: 'principal', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
