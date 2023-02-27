import { Component } from '@angular/core';
import { Inter } from 'src/app/Interfaz/inter';


const ELEMENT_DATA: Inter[] = [
  {nombre:"Carlos",apellido:"azcarraga",telefono:70776212,ubicacion:"mirador",tipo:"empleado"},
 
];


@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent {
  displayedColumns: string[] = ['nombre','apellido','telefono','ubicacion','tipo'];
  dataSource = ELEMENT_DATA;
}
