import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-eje3',
  templateUrl: './eje3.component.html',
  styleUrls: ['./eje3.component.css']
})
export class Eje3Component {
  protected title: string = "empresa de Ernesto SA de CV";
  protected formulario: FormGroup;

  constructor(private formbuilder: FormBuilder) {
    this.formulario = this.formbuilder.group({
      password: ['', [
          Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
          Validators.minLength(8)
      ]],
      confirmacionPassword:['',[
        Validators.required
      ]],
      correo:['',[
        Validators.email,
      ]],
      nombre:['', [
        Validators.required
      ]],
      edad:['', [
        Validators.required
      ]],
      telefono:['', [
        Validators.required
      ]],
      direccion:['',[
        Validators.required
      ]],
      ciudad:['',[
        Validators.required
      ]],
      estado:['',[
        Validators.required
      ]],
      pais:['',[
        Validators.required
      ]],
      codigoPostal:['',[
        Validators.required
      ]],
      fecha:['',[
        Validators.required
      ]],
    },
    { validate: this.confirmaPassword }
    );
  }

  protected confirmaPassword(formulario: FormGroup){
    const pass = formulario.get('password')?.value || '';
    const confirmaPass = formulario.get('confirmaPassword')?.value || '';
    return pass === confirmaPass ? null : { noSonIguales: true };
  }
}
