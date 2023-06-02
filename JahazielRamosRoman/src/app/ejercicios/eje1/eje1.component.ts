import { Component } from '@angular/core';

@Component({
  selector: 'app-eje1',
  templateUrl: './eje1.component.html',
  styleUrls: ['./eje1.component.css']
})
export class Eje1Component {
  protected title:string ='Empresa de Jahaziel Ramos SA de CV';
  protected email:string ='';
  protected password:string ='';


  validar(){
    if(this.email=='jahaziel@gmail.com' && this.password=="1234"){
      alert("Bienvenido a mi sistema de la " + this.title)
    }
    else{
      alert("EL usuario y la contraseña no son los correctos");
    }
  }

}
