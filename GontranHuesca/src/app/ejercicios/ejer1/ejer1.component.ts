import { Component } from '@angular/core';

@Component({
  selector: 'app-ejer1',
  templateUrl: './ejer1.component.html',
  styleUrls: ['./ejer1.component.css']
})

export class Ejer1Component {

  public correo: string = '';
  public password: string = '';

  constructor() {}

  public acceso() : void {
    alert('correo: ' + this.correo + ' password ' + this.password)

  }

  ngOnInit(): void {

  }
}
