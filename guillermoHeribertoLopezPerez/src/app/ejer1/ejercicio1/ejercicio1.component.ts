import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component {
  protected title: string = "Empresa de Guillermo SA de CV";
  protected correo: string = '';
  protected password: string = '';

  protected usuarios = [
    { usr: "n@gmail.com", pwd: "123", nombre: "N" },
    { usr: "guiller@gmail.com", pwd: "guiller123", nombre: "Guillermo" },
    { usr: "not@gmail.com", pwd: "not123", nombre: "Not" }
  ];

  constructor(private rutas:Router ){}

  public acceso(): void {
    for (let i = 0; i < this.usuarios.length; i++) {
      if(this.correo == this.usuarios[i].usr && this.password == this.usuarios[i].pwd){
        alert(`${this.usuarios[i].nombre} Bienvenido al sistema: ${this.title}`);
        this.rutas.navigate(["/home"]);
        return;
      }
    }

    alert("El usuario o la contraseña no son correctos");
  }

  ngOnInit(): void {

  }
}
