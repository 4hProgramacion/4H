import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.component.html',
  styleUrls: ['./ejercicio3.component.css']
})
export class Ejercicio3Component {
  protected title: string = "Empresa de Guillermo SA de CV";
  protected passwordForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.passwordForm = this.fb.group({
      password: ['', [
          Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
          Validators.minLength(8)
      ]],

      confirmacionPassword:['',[
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
        Validators.pattern('^[0-9]*$')
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

      lastName:['', [
        Validators.required
      ]],
    },
    { validate: this.confirmaPassword }
    );
  }

  protected confirmaPassword(passwordForm: FormGroup){
    const pass = passwordForm.get('password')?.value || '';
    const confirmaPass = passwordForm.get('confirmaPassword')?.value || '';
    return pass === confirmaPass ? null : { noSonIguales: true };
  }

  public enviarDatos(){
    console.log(this.passwordForm.value);
  }
}