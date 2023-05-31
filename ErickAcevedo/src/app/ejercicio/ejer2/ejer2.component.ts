import { Component } from '@angular/core';

@Component({
  selector: 'app-ejer2',
  templateUrl: './ejer2.component.html',
  styleUrls: ['./ejer2.component.css']
})
export class Ejer2Component {
  constructor(private servicio:usuarioservice){
    public ngOnInit():void {
      this.servicio.getUsuarios().subscribe(data) => {
        console.log(data);
      },
      (error) => -{
        console.log(error);
      }
    }
  }

}
