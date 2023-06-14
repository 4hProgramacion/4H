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
        Validators.pattern('^[a-zA-A]*$'),
      ]],
      apellido: ['',[
        Validators.required,
      ]],
      edad: ['', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]],
      telefono: ['', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
      ]],
      direccion: ['',[
        Validators.required,
      ]],
      ciudad: ['',[
        Validators.required,
      ]],
      estado: ['', [
        Validators.required,
      ]],
      pais: ['',[
        Validators.required,
      ]],
      codigoPostal:['', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.minLength(5),
        Validators.maxLength(5),
      ]],
      fecha: ['',[
        Validators.required,
      ]],


    },

    {Validators: this.passwordsIguales}

    );

  

  }

  protected passwordsIguales(formGroup: FormGroup){
    const pass= formGroup.get('password')?.value || '';
    const confirmaPass = formGroup.get('confirmaPassword')?.value || '';
    return pass === confirmaPass? this.formulario.controls['confirmaPassword'].setErrors(null) : 
    this.formulario.controls['confirmaPassword'].setErrors({noSonIguales: true});

  }



  public enviarDatos(){
    console.log(this.formulario.value);
    
  }





}
