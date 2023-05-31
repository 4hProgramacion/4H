import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejer3',
  templateUrl: './ejer3.component.html',
  styleUrls: ['./ejer3.component.css']
})

export class Eje3Component {
  protected title: string = "Empresa de Gael SA de CV";
  passwordForm: FormGroup;
  constructor(private formbuilder: FormBuilder){
    this.passwordForm = this.formbuilder.group({
      password: ['',[
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
      ]],
      confirmaPassword: ['', [
        Validators.required,
      ]],
      correo: ['', [
        Validators.required,
        Validators.email,
      ]],
      nombre: ['', [
        Validators.required,
      ]]
    },
    { Validators: this.passwordIguales });
  }

  protected passwordIguales(formGroup: FormGroup){
    const pass = formGroup.get('password')?.value || '';
    const confirmaPassword = formGroup.get('confirmaPassword')?.value || '';

    return pass === confirmaPassword ? null : { noSonIguales: true };
  }
}