import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejer3',
  templateUrl: './ejer3.component.html',
  styleUrls: ['./ejer3.component.css']
})
export class Ejer3Component {
  [x: string]: any;
  protected title: string = "Fundacion Acevedo"
  protected Formulario: FormGroup;
  constructor(private FormBuilder: FormBuilder){
    this.Formulario = this.FormBuilder.group({
      password: ['', [
        Validators.required,
        Validators.pattern('^(?=*[a-zA-Z0-9]=$'),
        Validators.minLength(9)

      ]
      ],
      confirmaPasword: ['', [ 
        Validators.required,
      ]],
      correo: ['', [ 
        Validators.required,
        Validators.email
      ]],
      nombre: ['', [
        Validators.required,
      ]],
      apellido: [''],
      edad: [''],
      telefono: [''],
      direccion: [''],
      ciudad: [''],
      estado: [''],
      pais: [''],
      codigoPostal: [''],
      fecha: [''],
       
    }, 
    {Validators: this['passwordIguale'] })

  }
  protected passwordsIguale(formGroup: FormGroup) {
    const pass = formGroup.get('password')?.value || '';
    const confirmaPasword = formGroup.get('confirmaPassword')?.value || '';
    return pass === confirmaPasword ? null : {nosoniguales: true };
  }

}




