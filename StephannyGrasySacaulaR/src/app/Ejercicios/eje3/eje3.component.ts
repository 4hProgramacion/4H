import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-eje3',
  templateUrl: './eje3.component.html',
  styleUrls: ['./eje3.component.css']
})
export class Eje3Component {
  protected title: string = "Empresa de Stephanny Grasy 7N";
  protected formulario: FormGroup;

  constructor(private formbuilder: FormBuilder){
    this.formulario = this.formbuilder.group({
      password:['',[
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.maxLength(8)
      ]],
      email:['',[
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]=$'),
        Validators.minLength(8)
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
      ]],


    },

    {Validators: this.passwordsIguales}

    );

  

  }

  protected passwordsIguales(formGroup: FormGroup){
    const pass= formGroup.get('password')?.value || '';
    const confirmaPass = formGroup.get('confirmaPassword')?.value || '';
    return pass === confirmaPass? null : {noSonIguales: true};
  }





}
