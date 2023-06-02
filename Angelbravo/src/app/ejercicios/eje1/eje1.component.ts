import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-eje1',
  templateUrl: './eje1.component.html',
  styleUrls: ['./eje1.component.css']
})
export class Eje1Component {
  protected title:string = 'Empresa de Angel de Jesus';
  protected email:string = '';
  protected password: string = '';
  protected usuarios=[
    {usr:"ernesto@l.com",psw:"1234", nombre:"Ernesto Vergara Ortiz"},
    {usr:"rubi@l.com",psw:"12345", nombre:"Rubi Ruiz Ramirez"},
    {usr:"murcia@l.com",psw:"123456", nombre:"Monica Murcia Liboro"},
  ];
  constructor(private rutas:Router){}

  validar(){
    for(let i=0; i<this.usuarios.length; i++){
      if(this.email==this.usuarios[i].usr && this.password==this.usuarios[i].psw){
        alert(this.usuarios[i].nombre+" Bienvenido al sistema " + this.title);
        this.rutas.navigate(['/Home']);
        return;
      }
    }
    
  }

}
