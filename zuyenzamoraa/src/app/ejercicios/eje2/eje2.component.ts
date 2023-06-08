import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/auth.service';


@Component({
  selector: 'app-eje2',
  templateUrl: './eje2.component.html',
  styleUrls: ['./eje2.component.css']
})

export class Eje2Component implements OnInit {

  constructor(private UsuarioService: UsuarioService) {}
  public usuarios: any = [];
  ngOnInit(): void {
    this.UsuarioService.getUsuarios().subscribe (
      (res: any) => {
        this.usuarios = res;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }    
}
