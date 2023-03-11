import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Inter } from 'src/app/Interfaz/inter';
import { ServService } from 'src/app/services/serv.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.css']
})


export class ListarUsuarioComponent implements OnInit,AfterViewInit{

  displayedColumns: string[] = ['nombre','apellido','telefono','ubicacion','tipo','detalle','pedido','cantidad','color','precio','acciones'];
  dataSource = new MatTableDataSource<Inter>();
  loading:boolean =false;
  data: any[] = [];
  
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('table') table: any;

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
      duration:3000
  }
)}
exportToExcel(): void {
  const data = this.dataSource.filteredData.map(row => {
    return {
      nombre: row.nombre,
      apellido: row.apellido,
      telefono: row.telefono,
      ubicacion: row.ubicacion,
      tipo: row.tipo,
      detalle: row.detalle,
      pedido: row.pedido,
      cantidad: row.cantidad,
      color: row.color,
      precio: row.precio,
      
    };
  });
  const worksheet = XLSX.utils.json_to_sheet(data);
  const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
  const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  const dataBlob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
  const fileName = 'tabla.xlsx';
  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(dataBlob);
  downloadLink.download = fileName;
  downloadLink.click();
}
}

