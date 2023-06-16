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
      edad: ['',[ 
      Validators.pattern('^[0-9]'),
      Validators.min(18),
      Validators.max(100),
    ]],
      telefono: [''],
      direccion: [''],
      ciudad: [''],
      estado: [''],
      pais: [''],
      codigoPostal: [''],
      fecha: [''],
       
    }, 
    {Validators: this.passwordIguales ('password, confirmaPassword')});

  }
  protected passwordsIguales( pass1: string, pass2: string){
    return(formGroup: FormGroup) => {
      const pass1control = formGroup.controls[pass1];
      const pass2control = formGroup.controls[pass2];
      if(pass1control.value === pass2control.value)
      this.Formulario.controls['confirmaPassword'].setErrors(null);
      else{
        this.Formulario.controls['confirmaPassword'].setErrors({noEsIgual: true})
  }   

  (error: any) => {
    console.log(error);
    alert(error.error.message+" "+error.error.error);
  }

}
}
