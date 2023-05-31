import { Component } from '@angular/core';

@Component({
  selector: 'app-eje2',
  templateUrl: './eje2.component.html',
  styleUrls: ['./eje2.component.css']
})
export class Eje2Component {
  protected usuarios:any[]=[];
  constructor (private servicio:UsuariosService){}
     public nfOnInit(): void{
      this.servicio.getUsuarios().subscribe(
        (data) => {
          this.usuarios = data;
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }