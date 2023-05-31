import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eje1',
  templateUrl: './eje1.component.html',
  styleUrls: ['./eje1.component.css']
})
export class Eje1Component { 

  protected title: string ="empresa de Ernesto SA de CV";
  protected email:string ="";
  protected password:string =""; 
  protected usuario =[
                       {usr:"ernesto@l.com", psw:"1234",nombre:"Ernesto Vergara Ortiz"},
                       {usr:"maria@l.com", psw:"12345",nombre:"Maria Murillo Alvarafo"},
                       {usr:"kevin@l.com", psw:"123456",nombre:"Kevin Martinez Venancio"}
                     ];
 constructor(private  rutas:Router){
  
 }

  
  validar(){
   for(let i = 0; i < this.usuario.length; i++){
    if(this.email==this.usuario[i].usr && this.password==this.usuario[i].psw){
      alert(this.usuario[i].nombre+" Bienvenido al sistema de " + this.title);
      this.rutas.navigate(["/Home"]);

      return;
    }
  }
  alert("Usuario y contraseña incorrectos");
}
}