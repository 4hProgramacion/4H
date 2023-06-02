import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-eje3',
  templateUrl: './eje3.component.html',
  styleUrls: ['./eje3.component.css']
})
export class Eje3Component {
  protected title: string = 'Empresa de Doraneli SA de CV';

  protected formulario!: FormGroup;
  passwordForm: FormGroup<any>;
  

  constructor(private formbuilder: FormBuilder) {
    this.passwordForm = this.formbuilder.group({
   password: ['', [
              Validators.required,
              Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]) [a-zA-Z0-9]+$'),
              Validators.minLength(8)
            ]],
      confirmaPasword: ['', [
        Validators.required,
      ]],
      correo: ['', [
        Validators.required,
        Validators.email,
      ]],
      nombre: ['',[
        Validators.required,
    ]],
      edad: [''],
      telefono: [''],
      direccion: [''],
      ciudad: [''],
      estado: [''],
      pais: [''],
      codigoPostal: [''],
      fecha: [''],
    },
      { validator: this.passwordIguale });
  }
  protected passwordIguale(formGroup: FormGroup) {
    const pass = formGroup.get('password')?.value || '';
    const confirmaPass = formGroup.get('confirmaPassword')?.value || '';
    return pass === confirmaPass ? null : { noSonIguales: true };
  }

}