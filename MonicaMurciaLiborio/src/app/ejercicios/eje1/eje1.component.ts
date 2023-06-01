import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eje1',
  templateUrl: './eje1.component.html',
  styleUrls: ['./eje1.component.css']
})
export class Eje1Component {
  public title: string = 'Empresa de Monica SA de CV';
  public correo: string = '';
  public password: string = '';
  
  protected usuarios = [
    { usr: "monica@l.com", psw: "1234", nombre: "Monica Murcia Liborio" },
    { usr: "rubi@l.com", psw: "12345", nombre: "Rubi Ruiz Ramiez" },
    { usr: "william@l.com", psw: "123456", nombre: "William de Jesús Noriega Damián" }
  ];
  
  constructor(private rutas: Router) { }
  
  public acceso(): void {
    for (let i = 0; i < this.usuarios.length; i++) {
      if (this.correo == this.usuarios[i].usr && this.password == this.usuarios[i].psw) {
        alert("Bienvenido al sistema " + this.title);
        this.rutas.navigate(["/Home"]);
        return;
      }
      alert("El usuario o la contraseña no son correctas");
    }
  }
}
