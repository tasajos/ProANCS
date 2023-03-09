import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServService } from 'src/app/services/serv.service';

@Component({
  selector: 'app-iulogin',
  templateUrl: './iulogin.component.html',
  styleUrls: ['./iulogin.component.css']
})
export class IULOGINComponent implements OnInit{

  loginUsuario : FormGroup;
  loading:boolean =false;
  
  constructor (private fb: FormBuilder,
    private afAuth: AngularFireAuth,
       private router: Router,
    private FirebaseError: ServService,
    )
        {
          this.loginUsuario = this.fb.group({

            email:['', Validators.required],
            password:['', Validators.required],
          })
    }
  ngOnInit(): void {
    
  }

  loginS (){
    const email = this.loginUsuario.value.email;
    const password = this.loginUsuario.value.password;
    this.loading=true;

    this.afAuth.signInWithEmailAndPassword(email,password).then ((user) => {

      console.log(user);
      this.router.navigate (['/principal']);
    }).catch ((error) => {
      this.loading=false;
      alert(this.FirebaseError.CodeError(error.code))
      console.log(error);
    })
    
     

    console.log(email,password)
  }

  
}

