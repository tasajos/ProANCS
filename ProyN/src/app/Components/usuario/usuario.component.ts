import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Inter } from 'src/app/Interfaz/inter';
import { ActivatedRoute, Router } from '@angular/router';
import { ServService } from 'src/app/services/serv.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})


export class UsuarioComponent implements OnInit{
  loading:boolean = false;
  form:FormGroup;
  id: number;
  

  operacion: string = 'Agregar';

  constructor (private fb: FormBuilder, 
    private _snackBar: MatSnackBar,
    private _personalesService:ServService,
    private aRoute: ActivatedRoute,
    private router: Router,) {

    this.form = this.fb.group({
      nombre: ['',Validators.required],
      apellido: ['',Validators.required],
      tipo: ['',Validators.required],
      telefono: ['',Validators.required],
      //ubicacion: ['',Validators.required],
      ubicacion: [''], // initialize with empty string
      detalle: ['',Validators.required],
      pedido: ['',Validators.required],
      cantidad: ['',Validators.required],
      color: ['',Validators.required],
      precio: ['',Validators.required],
      
    })
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));
    
  } 
  
  ngOnInit (): void {
  
  }
  display: any;
  center: google.maps.LatLngLiteral = {
      lat: -17.3825,
      lng: -66.1682
  };
  zoom = 15;
  moveMap(event: google.maps.MapMouseEvent) {
    if (event.latLng != null) this.center = (event.latLng.toJSON());
}

//move(event: google.maps.MapMouseEvent) {
  //  if (event.latLng != null) this.display = event.latLng.toJSON();
//}

move(event: google.maps.MapMouseEvent) {
  if (event.latLng != null) {
    this.display = event.latLng.toJSON();
    const ubicacion = this.form.get('ubicacion');
    if (ubicacion != null) {
      ubicacion.setValue(JSON.stringify(this.display));
    }
  }
}
  agregarEditarPersonal() {
    /* const nombre = this.form.get('nombre')?.value; */

    // Armamos el objeto
    const personal: Inter = {
      nombre: this.form.value.nombre,
      apellido:this.form.value.apellido,
      telefono:this.form.value.telefono,
      ubicacion:this.form.value.ubicacion,
      tipo:this.form.value.tipo,
      detalle:this.form.value.detalle,

      pedido:this.form.value.pedido,
      cantidad:this.form.value.cantidad,
      color:this.form.value.color,
      precio:this.form.value.precio,
      
    }


  }

  agregarPersonal(){

   

    //armamos el objeto
    const personal: Inter = {
      nombre: this.form.value.nombre,
      apellido:this.form.value.apellido,
      telefono:this.form.value.telefono,
      ubicacion:this.form.value.ubicacion,
      tipo:this.form.value.tipo,
      detalle:this.form.value.detalle,
      pedido:this.form.value.pedido,
      cantidad:this.form.value.cantidad,
      color:this.form.value.color,
      precio:this.form.value.precio,
      
       

    }
    console.log(personal)
    // Enviamos objeto al backend

    this._personalesService.addPersonal(personal).subscribe(_data => {
      this.mensajeExito('registrada');
      this.router.navigate(['/listar']);
    })

         
  }
  mensajeExito(texto: string) {
    this._snackBar.open(`El Registro fue realizado ${texto} con exito`,'', {
      duration: 2000,
      horizontalPosition: 'right',
    });
  }


}



