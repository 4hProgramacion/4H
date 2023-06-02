import { Component } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-ejer1',
  templateUrl: './ejer1.component.html',
  styleUrls: ['./ejer1.component.css']
})
export class Ejer1Component {

  protected title: string = 'Empresa de Miguel SA de CV' ;
  protected email: string = '';
  protected password: string = '';
  protected usuarios = [
                                    {usr: "Miguel@l.com",psw:"12345", nombre: "Miguel de Jesus"},
                                    {usr:"Rubi@l.com",psw:"12345", nombre: "Rubi Ruiz"},
                                    {usr:"Murcia@l.com",psw:"12345", nombre: "Murcia"}
  
                                  ];
  constructor(private rutas:Router){}
  validar(){
    for(let i = 0; i <this.usuarios.length; i++){
      if(this.email==this.usuarios[i].usr && this.password==this.usuarios[i].psw){
        alert(this.usuarios[i].nombre+" Bienvenido al sistema de la"+ this.title);
        this.rutas.navigate(["/Home"]);
        return;
      }
    }
      alert("El usuario o la contraseña es incorrecta :C");
  }
}