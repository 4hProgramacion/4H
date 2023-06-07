import { Component,OnInit } from '@angular/core';
import { UsuarioLostService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-eje2',
  templateUrl: './eje2.component.html',
  styleUrls: ['./eje2.component.css']
})
export class Eje2Component implements OnInit{
constructor(private servicio:UsuarioLostService) {}
public usuarios: any = [];
ngOnInit(): void {
  this.servicio.getUsuarios().subscribe(
    (data) => {
      this.usuarios = data;
    },
    console => {
      console.log('Error');
    }
    
  )
}

}


