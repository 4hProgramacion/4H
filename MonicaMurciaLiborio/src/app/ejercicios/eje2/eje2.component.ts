import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-eje2',
  templateUrl: './eje2.component.html',
  styleUrls: ['./eje2.component.css']
})
export class Eje2Component {
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