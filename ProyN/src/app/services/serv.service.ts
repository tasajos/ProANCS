import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Inter } from '../Interfaz/inter';

@Injectable({
  providedIn: 'root'
})
export class ServService {
  private Myappurl: string = environment.endpoint;
  //private Myappurl: string = "localhost/7105/";
  private Myapiurl: string = 'api/personal/';

  constructor(private http: HttpClient) {}
    getPersonal(): Observable<Inter[]> {

      //return this.http.get<Inter[]>(`${this.Myappurl}${this.Myapiurl}`);
      return this.http.get<Inter[]>(this.Myappurl+this.Myapiurl);
    }
    getidpersonal(id:number): Observable<Inter>{

      return this.http.get<Inter>(`${this.Myappurl}${this.Myapiurl}${id}`)

    }
   
    //addPersonal  (): Observable<Inter>{
    addPersonal  (personal: Inter): Observable<Inter>{

      return this.http.post<Inter>(`${this.Myappurl}${this.Myapiurl}`,personal);
      //return this.http.post<Mascota>(`${this.myAppUrl}${this.myApiUrl}`, mascota);
    // return this.http.post<Inter[]>(this.Myappurl+this.Myapiurl)personal);
    }
    deletePersonal(id:number): Observable<void>{
     return this.http.delete<void>(`${this.Myappurl}${this.Myapiurl}${id}`);
    }
   


      CodeError(code:string){
        switch(code){
          //el correo ya existe
          case 'auth/email-already-in-use':
            return 'El usuario ya existe'
            //contrase;a debil
          case 'auth/weak-password':
            return 'La contraseña es muy debil'
            //correo invalido
         case 'auth/invalid-email':
            return 'Correo Invalido'
          default:
            return 'Error desconocido'
    //Contraseña Incorrecta
            case 'auth/wrong-password':
              return 'Contraseña Incorrecta'
    
    
           //Usuario no Encontrado
              case 'auth/user-not-found':
                return 'Usuario no Encontrado'
        }
    }
   }

