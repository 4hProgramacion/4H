import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ejer3',
  templateUrl: './ejer3.component.html',
  styleUrls: ['./ejer3.component.css']
})
export class Ejer3Component {
  protected title: string='Empresa de Miguel';

protected Formulario: FormGroup;

constructor ( private formbuilder:FormBuilder){ 
  this.Formulario = this.formbuilder.group({
    password: ['',[
      Validators.required,
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]=$'),
      Validators.minLength(8),
    ]],
    confirmapassword: ['',[ 
      Validators.required,
    ]],
    correo:['',[
      Validators.required,
      Validators.email,
    ]],
    nombre:['',[
      Validators.required,
    ]],
    apellido:[''],
    edad:[''],
    telefono:[''],
    direccion:[''],
    ciudad:[''],
    estado:[''],
    pais:[''],
    codigopostal:[''],
    fecha:[''],

  },
  {Validators: this.passwordsiguales}
  );
}
protected passwordsiguales(FormGroup: FormGroup){
  const pass = FormGroup.get('password')?.value || '';
  const confirmapass = FormGroup.get('confirmapassword')?.value || '';
  return pass === confirmapass ? null : {noSonIguales: true};
  
}
} 


