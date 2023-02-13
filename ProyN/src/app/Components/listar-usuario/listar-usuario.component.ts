import { Component } from '@angular/core';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Carlos', weight: 'prueba', symbol: 'H'},
  {position: 2, name: 'Andres', weight: 'prueba', symbol: 'He'},
  {position: 3, name: 'Javier', weight: 'prueba', symbol: 'Li'},
  {position: 4, name: 'Marcelo', weight: 'prueba', symbol: 'Be'},
  {position: 5, name: 'Pablo', weight: 'prueba', symbol: 'B'},
  {position: 6, name: 'luis', weight: 'prueba', symbol: 'C'},
  {position: 7, name: 'Rene', weight: 'prueba', symbol: 'N'},
  {position: 8, name: 'paolo', weight: 'prueba', symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 'prueba', symbol: 'F'},
  {position: 10, name: 'Neon', weight: 'prueba', symbol: 'Ne'},
];


@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
