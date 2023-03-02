import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Inter } from 'src/app/Interfaz/inter';
import { ActivatedRoute, Router } from '@angular/router';
import { ServService } from 'src/app/services/serv.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})


export class UsuarioComponent implements OnInit{

  form:FormGroup;
  id: number;

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
      ubicacion: ['',Validators.required],
    })
    this.id = Number(this.aRoute.snapshot.paramMap.get('id'));

    
  }
  
   
  ngOnInit (): void {
  
  }

  agregarEditarPersonal() {
    /* const nombre = this.form.get('nombre')?.value; */

    // Armamos el objeto
    const personal: Inter = {
      nombre: this.form.value.nombre,
      apellido:this.form.value.apellido,
      telefono:this.form.value.telefono,
      ubicacion:this.form.value.ubicacion,
      tipo:this.form.value.tipo
    }


  }

  agregarPersonal(){

    const nombre=this.form.value.nombre;

    //armamos el objeto
    const personal: Inter ={
      nombre: this.form.value.nombre,
      apellido:this.form.value.apellido,
      telefono:this.form.value.telefono,
      ubicacion:this.form.value.ubicacion,
      tipo:this.form.value.tipo
       

    }
    // Enviamos objeto al backend

    this._personalesService.addPersonal(personal).subscribe(data => {
      this.router.navigate(['/listar'])

console.log(data)

    })

    //this._personalesService.addPersonal(personal).subscribe(data => 
     
      
      
  }

}



