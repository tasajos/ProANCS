import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Inter } from 'src/app/Interfaz/inter';
import { ServService } from 'src/app/services/serv.service';

@Component({
  selector: 'app-ver-usuario',
  templateUrl: './ver-usuario.component.html',
  styleUrls: ['./ver-usuario.component.css']
})
export class VerUsuarioComponent implements OnInit{

id:number;
idpersonal! : Inter;
loading:boolean = false;

  constructor (private _verpesonalservice:ServService,
    private aRoute: ActivatedRoute) {

      this.id = +this.aRoute.snapshot.paramMap.get('id')!;
      
     }


  ngOnInit(): void {
    this.obtenerpersonal();
  }
obtenerpersonal(){
this._verpesonalservice.getidpersonal(this.id).subscribe(data => this.idpersonal =data);

}

}
