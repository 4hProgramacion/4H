import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-eje1',
  templateUrl: './eje1.component.html',
  styleUrls: ['./eje1.component.css']
})
export class Eje1Component {
  protected title:string = 'Empresa de Stephanny Grasy 7N';
  protected email:string = '';
  protected password:string = '';
  protected usuarios = [
                          {usr:"pizza@l.com", psw: "1234", nombre: "Glen osier"},
                          {usr:"paydequeso@l.com", psw:"12345", nombre: "Astrid Gomez"},
                          {usr: "aguadehorchata@l.com", psw: "123456", nombre: "Feliponcho"}
                        ];

constructor(private rutas: Router){ }
  validar(){
    for(let i=0; i<this.usuarios.length; i++){

      if(this.email==this.usuarios[i].usr && this.password == this.usuarios[i].psw){
        alert(this.usuarios[i].nombre + " bienvenido al sistema ʕ·ᴥ·ʔ -" + this.title);
        this.rutas.navigate(["/Home"]);
        
        return;
      
      }
    }

    alert("El usuario y la contraseña no son correctos ᶘᵒᴥᵒᶅ");

  }

}
