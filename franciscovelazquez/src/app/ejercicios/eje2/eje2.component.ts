import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-ejercicio2',
  templateUrl: './ejercicio2.component.html',
  styleUrls: ['./ejercicio2.component.css']
})
export class Ejercicio2Component implements OnInit {
  protected usuarios:any[] = [];

  constructor(private servicio: UsuariosService){}

  public ngOnInit():void{
    this.servicio.getUsuarios().subscribe(
      (data) => {
        this.usuarios = data
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
