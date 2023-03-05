import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Inter } from 'src/app/Interfaz/inter';
import { ServService } from 'src/app/services/serv.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})


export class ListarUsuarioComponent implements OnInit,AfterViewInit{

  displayedColumns: string[] = ['nombre','apellido','telefono','ubicacion','tipo','detalle','acciones'];
  dataSource = new MatTableDataSource<Inter>();
  loading:boolean =false;

  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor (private _personalService:ServService,
    private _snackBar: MatSnackBar,) {}


  ngAfterViewInit(): void{
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel = 'Items Por Pagina'
    this.dataSource.sort = this.sort;
    

  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase()
  }
  obtenerPersonal(){

    this._personalService.getPersonal().subscribe(data =>
      {
        this.loading =false;
       this.dataSource.data = data;
      }, _error => {
        this.loading =false;
        alert("Error" )
      })
      
  }

  ngOnInit(): void {
    this.obtenerPersonal();
  
  }
  eliminarPersonal(id:number){
    this.loading =true;
    this._personalService.deletePersonal(id).subscribe(() =>{
this.mensajeExito();
this.loading=false;
this.obtenerPersonal();
    })
    
    
  }
  mensajeExito(){
    this._snackBar.open(" eliminado",'',{
      duration:1000
  }
)}
}
