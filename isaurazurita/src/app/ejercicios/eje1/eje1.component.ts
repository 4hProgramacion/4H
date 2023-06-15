import { Component } from '@angular/core';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-eje1',
  templateUrl: './eje1.component.html',
  styleUrls: ['./eje1.component.css']
})
export class Eje1Component {

  protected title: string = 'Empresa de isaura SA de CV';
  protected email: string = '';
  protected password: string = '';
  protected usuarios= [ {usr:"isaura@l.com",psw: "1234", nombre:"Isaura Zurita Guerrero"},
                       {usr:"rubi@l.com",psw:"12345", nombre:"Rubi Ruíz Ramirez"},
                       {usr:"murcia@l.com",psw:"123456", nombre:"Monica Murcia Ligorio"}];

constructor(private rutas:Router){ }
  validar(){
  for(let i=0; i<this.usuarios.length; i++){
if(this.email==this.usuarios[i].usr && this.password==this.usuarios[i].psw){
    alert(this.usuarios[i].nombre+" Bienvenido al sistema :) " + this.title);
    this.rutas.navigate(["/Home"]);
    return;
  }
    alert("El usuario y contraseña no son correctos :(");
  }
}
}
