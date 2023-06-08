import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eje1',
  templateUrl: './eje1.component.html',
  styleUrls: ['./eje1.component.css']
})
export class Eje1Component {
  protected title: string = "Empresa de Vidal SA de CV";
  protected correo: string = '';
  protected password: string = '';
  protected usuarios = [
    { usr: "vidal@l.com", pwd: "1234", nombre: "Luis Vidal Hernandez" },
    { usr: "poncho@l.com", pwd: "12345", nombre: "Evgeny Nolasco" },
    { usr: "memo@l.com", pwd: "123456", nombre: "Memo Lopez" }
  ];
  constructor(private rutas: Router ){}
  public login(): void {
    for (let i = 0; i < this.usuarios.length; i++) {
      if(this.correo == this.usuarios[i].usr && this.password == this.usuarios[i].pwd){
        alert(`${this.usuarios[i].nombre} Bienvenido al sistema: ${this.title}`);
        this.rutas.navigate(["/home"]);
        return;
      }
    }
    alert("El usuario o la contraseña no son correctos");
  }
}
