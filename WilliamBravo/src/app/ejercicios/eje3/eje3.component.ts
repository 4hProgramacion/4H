import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-eje3',
  templateUrl: './eje3.component.html',
  styleUrls: ['./eje3.component.css']
})
export class Eje3Component {
 protected title:string = "Empresa de william SA de CV";
 protected formulario:FormGroup;
 constructor(private formbuilder:FormBuilder){
  this.formulario = this.formbuilder.group({
    password:['',[
      Validators.required,
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]-$'),
      Validators.minLength(8)
    ]],
    confirmaPassword: ['',[
      Validators.required,
    ]],
    correo: ['',[
    Validators.required,
    Validators.email,
  ]],
  nombre: ['',[
 Validators.required,
]],
apellido: [''],
edad: [''],
telefono: [''],
ciudad: [''],
estado: [''],
pais: [''],
codigoPostal: [''],
fecha: [''],
  },
 
{Validators: this.passwordsiguales});
}
protected passwordsiguales(FormGroup:FormGroup) {
  const  pass = FormGroup.get('password')?.value || '';
  const  confirmapass = FormGroup.get('confirmapassword')?.value || '';
 return  pass === confirmapass ? null : { nosoniguales: true};
}
}
