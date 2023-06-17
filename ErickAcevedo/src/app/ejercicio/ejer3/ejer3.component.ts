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
  constructor(private FormBuilder: FormBuilder, private servicio:UsuariosServicesService) {
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
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      nombre: ['', [
        Validators.required,
      ]],
      apellido: ['', [Validators.required,]],
      edad: ['', [
        Validators.pattern('^[0-9]'),
        Validators.min(18),
        Validators.max(100),
      ]],
      telefono: ['', [
        Validators.pattern('^[0-9]'),
      ]],
      direccion: ['', [Validators.required,]],
      ciudad: ['', [Validators.required,]],
      estado: ['', [Validators.required,]],
      pais: ['', [Validators.required,]],
      codigoPostal: ['', [
        Validators.pattern('^[0-9]'),
      ]],
      fecha: ['',[Validators.required,]],
    },
      { Validators: this.passwordIguales('password, confirmaPassword') });

  }
  protected passwordsIguales(pass1: string, pass2: string) {
    return (formGroup: FormGroup) => {
      const pass1control = formGroup.controls[pass1];
      const pass2control = formGroup.controls[pass2];
      if (pass1control.value === pass2control.value)
        this.Formulario.controls['confirmaPassword'].setErrors(null);
      else {
        this.Formulario.controls['confirmaPassword'].setErrors({ noSonIgual: true })
      }   

  public enviarDatos() {
    console.log(this.formulario.value);
    alert("Datos enviados correctamente");
    (respuesta)=>{
      console.log(resouesta);
    },
    (error)=>{
      console.log(error);
  }
}

}
}
