import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-eje2',
  templateUrl: './eje2.component.html',
  styleUrls: ['./eje2.component.css']
})
export class Eje2Component implements OnInit {

  constructor(private UsuariosServicios: UsuariosService) {}
  public usuarios: any = [];
  ngOnInit(): void {
    this.UsuariosServicios.getUsuarios().subscribe(
      (res: any) => {
        this.usuarios = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
