import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServService {
  Myappurl: string = environment.endpoint
  Myapiurl: string = 'api/personal/'

  constructor(private http: HttpClient) {}
    getPersonal(): Observable<any> {

      return this.http.get(`${this.Myappurl}${this.Myapiurl}`);
    }
   }

