import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ejer1',
  templateUrl: './ejer1.component.html',
  styleUrls: ['./ejer1.component.css']
})

export class Ejer1Component {

  protected title: string = "Empresa de Gontran S.A"
  public correo: string = '';
  public password: string = '';
  protected usuarios= [
  {usr:"ernesto@l.com", psw:"1234",nombre:"Ernesto Vergara Ortiz"},
  {usr:"Gontran@l.com", psw:"12345",nombre:"Gontran Huesca Marquez"},
  {usr:"kevin@l.com", psw:"123456",nombre:"Kevin Uriel Amador Cancio"}]

  constructor(private rutas:Router) {}

  validar(){
    for(let i = 0; i < this.usuarios.length; i++){
      if(this.correo==this.usuarios[i].usr && this.password==this.usuarios[i].psw){
        alert(this.usuarios[i].nombre+" Bienvenido al sistema de " + this.title);
        this.rutas.navigate(['/Home']);
        return;
      }
  }
  alert("Usuario y contraseña incorrectos");
  }

  public acceso() : void {
    alert('correo: ' + this.correo + ' password ' + this.password)

  }

  ngOnInit(): void {

  }
}
