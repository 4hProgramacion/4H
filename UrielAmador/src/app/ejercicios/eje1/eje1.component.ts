import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eje1',
  templateUrl: './eje1.component.html',
  styleUrls: ['./eje1.component.css']
})
export class Eje1Component {
  protected title:string ="Empresa de Kevin Uriel SA de CV"
  protected email:string ="";
  protected password:string ="";
  protected usuarios=[
    {usr:"uriel123@gmail.com", psw:"uriel123", nombre:"Kevin Uriel"},
    {usr:"ernesto@l.com", psw:"1234", nombre:"Ernesto"},
    {usr:"rubi@l.com", psw:"12345", nombre:"Rubi"}
  ];
  constructor(private rutas:Router){ }


  validar(){
    for(let i=0; i<this.usuarios.length; i++){
      if(this.email==this.usuarios[i].usr && this.password==this.usuarios[i].psw){
        alert(this.usuarios[i].nombre + " Sea bienvenido al sistema de la "+ this.title);
        this.rutas.navigate(['/Home'])

        return;
      }
      alert("Usuario y contraseña incorrecta");

    }
    
  }

}
