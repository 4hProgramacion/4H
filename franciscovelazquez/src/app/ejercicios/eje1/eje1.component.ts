import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eje1',
  templateUrl: './eje1.component.html',
  styleUrls: ['./eje1.component.css']
})
export class Eje1Component {
  protected title:string ='empresa de Francisco SA de CV';
  protected email:string ='';
  protected password:string ='';
  protected usuarios = [
    {usr:"francisco@l.com", psw:"1234", nombre:"Francisco"},
    {usr:"felipe@l.com", psw:"12345", nombre:"Felipe"},
    {usr:"rubi@l.com", psw:"123456", nombre:"Rubi"}
  ];
  constructor(private rutas:Router){}

  validar(){
    for(let i = 0; i < this.usuarios.length; i ++) {
      if(this.email == this.usuarios[i].usr && this.password == this.usuarios[i].psw){
        alert(this.usuarios[i].nombre+" Bienvenidos al sistema " + this.title);
        this.rutas.navigate(['/Home']);
        return;0
      }
    }
    alert("El usuario y la contraseña son incorrectos");
  }

}
