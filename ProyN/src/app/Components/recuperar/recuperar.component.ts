import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServService } from 'src/app/services/serv.service';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent implements OnInit{

  recuperarUsuario: FormGroup;
  loading:boolean =false;
  
  
    constructor (private fb: FormBuilder,
      private afAuth: AngularFireAuth,
      
      private router: Router,
      private FirebaseError: ServService){
  
        this.recuperarUsuario = this.fb.group({
  
  correo: ['', Validators.required]
  
        })
      }
  
  
    ngOnInit(): void {
    
    }
    recuperar(){
      const email = this.recuperarUsuario.value.correo;
      this.loading = true;
      this.afAuth.sendPasswordResetEmail(email).then(() =>{
  
        alert('Se envio el correo de recuperacion');
        this.router.navigate(['/login']);
        
      })
      .catch((error)=> {
        this.loading = false;
        alert(this.FirebaseError.CodeError(error.code))
      }
      )
    }
  }
  