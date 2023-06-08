import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.component.html',
  styleUrls: ['./ejercicio3.component.css']
})
export class Ejercicio3Component {
  protected title: string = "Empresa de Guillermo SA de CV";
  protected passwordForm: FormGroup;

  constructor(private formbuilder: FormBuilder, private servicio: UsuariosService) {
    this.passwordForm = this.formbuilder.group({
      password: ['', [
          Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
          Validators.minLength(8)
      ]],

      confirmaPassword:['',[
        Validators.required
      ]],

      email:['',[
        Validators.required,
        Validators.email
      ]],

      nombre:['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]*$')
      ]],

      usuario:['', [
        Validators.required
      ]],

      edad:['', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.min(18),
        Validators.max(120)
      ]],

      telefono:['', [
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ]],

      direccion:['', [
        Validators.required
      ]],

      ciudad:['', [
        Validators.required
      ]],

      estado:['', [
        Validators.required
      ]],

      pais:['', [
        Validators.required
      ]],

      codigoPostal:['', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(5),
        Validators.maxLength(5)
      ]],

      fecha:['', [
        Validators.required
      ]],
    },
    { validate: this.passwordIguales('password', 'confirmaPassword') }
    );
  }

  protected passwordIguales(pass1: string, pass2: string){
    return (formGroup: FormGroup) => {
      const pass1Control = formGroup.controls[pass1];
      const pass2Control = formGroup.controls[pass2];

      if(pass1Control.value === pass2Control.value){
        formGroup.controls['confirmaPassword'].setErrors(null);
      } else {
        formGroup.controls['confirmaPassword'].setErrors({ noSonIguales: true });
      }
    }
  }

  public enviarDatos(){
    console.log(this.passwordForm.value);
    alert("Datos enviados Correctamente");

    this.servicio.RegistrarUsuario(this.passwordForm.value).subscribe(
      (response) => {
        console.log(response);
      }
    );
  }
}