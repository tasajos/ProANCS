import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Inter } from 'src/app/Interfaz/inter';


const listPersonal: Inter[] = [
  {nombre:"Carlos",apellido:"azcarraga",telefono:70776212,ubicacion:"mirador",tipo:"empleado"},
  {nombre:"Andres",apellido:"perez",telefono:70776212,ubicacion:"mirador",tipo:"Administrador"},
  {nombre:"javier",apellido:"melgar",telefono:70776212,ubicacion:"mirador",tipo:"empleado"},
  {nombre:"Alejandro",apellido:"resinda",telefono:70776212,ubicacion:"mirador",tipo:"Administrador"},
];


@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})
export class ListarUsuarioComponent implements OnInit,AfterViewInit{

  ngAfterViewInit(): void{
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Items Por Pagina'
    

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  displayedColumns: string[] = ['nombre','apellido','telefono','ubicacion','tipo'];
  dataSource = new MatTableDataSource<Inter>(listPersonal);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
}
