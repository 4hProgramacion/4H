import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {UsuarioService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-eje3',
  templateUrl: './eje3.component.html',
  styleUrls: ['./eje3.component.css']
})
export class Eje3Component {
  protected formulario: FormGroup;
  constructor(private formbuilder: FormBuilder, private servicio: UsuarioService) {
    this.formulario = this.formbuilder.group({
      password: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]=$'),
        Validators.minLength(8),
      ]],
      confirmpassword: ['', [
        Validators.required,
      ]],
      correo: ['', [
        Validators.required,
        Validators.email,
      ]],
      nombre: ['', [
        Validators.required,
        Validators.pattern('?=.*[a-zA-Z0]*$')
      ]],
      edad: ['', [
        Validators.required,
        Validators.pattern('?=.*[0-9]*$'),
        Validators.min(18),
        Validators.max(99)
      ]],
      telefono: ['', [
        Validators.required,
        Validators.pattern('?=.*[0-9]*$')
      ]],
      direccion: ['', [Validators.required
      ]],
      ciudad: ['', [Validators.required
      ]],
      estado: ['', [Validators.required
      ]],
      pais: ['', [Validators.required
      ]],
      codigoPostal: ['', [
        Validators.required,
        Validators.pattern('?=.*[0-9]*$'),
        Validators.minLength(5),
        Validators.maxLength(5)
      ]],
      fecha: ['', [Validators.required
      ]]

    },
      { validators: this.passwordsIguales ('password', 'confirmPassword')});
  }

  protected passwordsIguales(pass1: string, pass2: string) {
    return (formgroup: FormGroup)=>{
      const pass1Control = formgroup.controls[pass1];
      const pass2Control = formgroup.controls[pass2];
      if (pass1Control.value === pass2Control.value){
        formgroup.controls['confirmPassword'].setErrors (null);
      }else  {
        formgroup.controls['confirmPassword'].setErrors ({noSonIguales:true});

      }
    }
  }

  public enviarDatos(){
    console.log(this.formulario.value);
    alert("Datos enviados correctamente");
    this.servicio.ResgistrarUsuario(this.formulario.value).suscribe(
      (respuesta) => {
        console.log(respuesta);
      },
      (error)=> {
        console.log(error);
      }
    );
  }

}

