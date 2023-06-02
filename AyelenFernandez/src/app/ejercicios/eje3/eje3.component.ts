import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-eje3',
  templateUrl: './eje3.component.html',
  styleUrls: ['./eje3.component.css']
})
export class Eje3Component {
  protected formulario: FormGroup;
  constructor(private formbuilder: FormBuilder) {
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
      ]],

    },
      { Validators: this.passwordsIguales });
  }

  protected passwordsIguales(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value || '';
    const confirmpassword = formGroup.get('confirmpassword')?.value || '';
    return password === confirmpassword ? null : { noSonIgyales: true };
  }

}

