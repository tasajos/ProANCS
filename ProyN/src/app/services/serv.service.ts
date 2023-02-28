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
  private Myapiurl: string = 'api/personal/';

  constructor(private http: HttpClient) {}
    getPersonal(): Observable<Inter[]> {

      //return this.http.get<Inter[]>(`${this.Myappurl}${this.Myapiurl}`);
      return this.http.get<Inter[]>(this.Myappurl+this.Myapiurl);
    }
   }

