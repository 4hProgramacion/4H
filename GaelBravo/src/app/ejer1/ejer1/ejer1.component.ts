import { Component } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-ejer1',
  templateUrl: './ejer1.component.html',
  styleUrls: ['./ejer1.component.css']
})
export class Eje1Component {
  protected title: string = "Empresa de Gael SA de CV";

  protected email: string = "";
  protected password: string = "";
  protected usuarios = [
                        {usr:"gaelbravo@gmail.com",psw:"123456",nombre:"Gael Ignacio Bravo Muños"},
                        {usr:"rubi@gmail.com",psw:"123",nombre:"Rubi Ruiz Ramiez"},
                        {usr:"murcia@gmail.com",psw:"1234",nombre:"Monica Murcia Liborio"}
                      ];

  constructor(private rutas: Router){}

  public validar() : void{
    for(let i = 0; i <this.usuarios.length; i++){
      if(this.email == this.usuarios[i].usr && this.password == this.usuarios[i].psw){
        alert("Bienvenido al sistema " + this.title);
        this.rutas.navigate(["/Home"]);
        return;
      }
        
      return alert("El usuario o la contraseña no son correctas");
    }
  }
}