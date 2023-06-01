import { Component } from '@angular/core';

@Component({
  selector: 'app-ejer2',
  templateUrl: './ejer2.component.html',
  styleUrls: ['./ejer2.component.css']
})
export class Ejer2Component {
  protected usuarios:any[]=[];
  constructor(private servicio:UsuariosService) { }
    public ngOnInit():void {
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


