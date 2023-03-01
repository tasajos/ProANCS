import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Inter } from 'src/app/Interfaz/inter';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})


export class UsuarioComponent implements OnInit{

  form:FormGroup

  constructor (private fb: FormBuilder) {
    this.form = this.fb.group({
      nombre: ['',Validators.required],
      apellido: ['',Validators.required],
      tipo: ['',Validators.required],
      telefono: ['',Validators.required],
      ubicacion: ['',Validators.required],
    })

  }
  
   
  ngOnInit (): void {
  
  }
  agregarPersonal(){

    const personal: Inter ={
      nombre: this.form.value.nombre,
      apellido:this.form.value.apellido,
      telefono:this.form.value.telefono,
      ubicacion:this.form.value.ubicacion,
      tipo:this.form.value.tipo
       

    }
    console.log(personal)
  }

}



