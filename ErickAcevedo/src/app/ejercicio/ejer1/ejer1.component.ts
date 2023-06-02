import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-ejer1',
  templateUrl: './ejer1.component.html',
  styleUrls: ['./ejer1.component.css']
})
export class Ejer1Component {

  protected title:string = 'Fundacion Acevedo';
  protected email:string = '';
  protected password:string = '';
  protected usuario= [
                      {usr:"ErickJoestar@l.com", psw:"1718",nombre:"Erick Acevedo Ramón"},
                      {usr:"DaniHO@l.com", psw:"1234",nombre:"Daniel Omar"},
                      {usr:"Tilin@l.com", psw:"4321",nombre:"Tilin"},
                    ]
constructor(private rutas:Router) {}
  validar(){
    for(let i=0;i<this.usuario.length;i++){
    if(this.email==this.usuario[i].usr && this.password==this.usuario[i].psw){
    alert(this.usuario[i].nombre+ "welcome to the velvet room :) " + this.title);
    this.rutas.navigate(['/home']);
    return;
  }
  }
    alert("la verdad escoje y parece que no escogiste bien :(")
  }
  }
