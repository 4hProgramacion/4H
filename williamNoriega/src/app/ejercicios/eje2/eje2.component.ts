import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-eje2',
  templateUrl: './eje2.component.html',
  styleUrls: ['./eje2.component.css']
})
export class Eje2Component {
  constructor(private UsuarioServices: UsuariosService){}
  public usuarios: any = [];
  ngOnInit(): void {
    this.UsuarioServices.getUsuarios().subscribe(
      (res) => {
        this.usuarios = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
