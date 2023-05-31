import { Component } from '@angular/core';

@Component({
  selector: 'app-eje1',
  templateUrl: './eje1.component.html',
  styleUrls: ['./eje1.component.css']
})
export class Eje1Component {
  public correo:string = '';
  public password:string = '';

  constructor(){}

  public acceso(): void {
    alert('Correo: ' + this.correo + ' Password: ' + this.password);
  }

  ngOnInit(): void {
  }
}