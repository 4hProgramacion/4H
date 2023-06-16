import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from 'src/app/servicios/usuario.service';

@Component({
  selector: 'app-ejer3',
  templateUrl: './ejer3.component.html',
  styleUrls: ['./ejer3.component.css']
})
export class Ejer3Component {
  protected title: string='Empresa de Miguel';

protected Formulario: FormGroup;

constructor ( private formbuilder:FormBuilder, private servicio:UsuarioService){ 
  this.Formulario = this.formbuilder.group({
    password: ['',[
      Validators.required,
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]=$'),
      Validators.minLength(8),
    ]],
    confirmaPassword: ['',[ 
      Validators.required,
    ]],
    correo:['',[
      Validators.required,
      Validators.email,
    ]],
    nombre:['',[
      Validators.required,
      Validators.pattern('^[a-zA-Z]*$'),
    ]],
    apellido:[''],
    edad:['',[
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.min(18),
      Validators.max(120),
    ]],
    telefono:['',[
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]],
    direccion:[''],
    ciudad:[''],
    estado:[''],
    pais:[''],
    codigopostal:['',[
      Validators.required,
      Validators.pattern('^[0-9]*$'),
      Validators.minLength(5),
      Validators.maxLength(5),
    ]],
    fecha:[''],

  },
  {Validators: this.passwordsiguales ('password',('confirmaPassword'))}
  );
}
protected passwordsiguales(pass1: string, pass2: string){
  return (FormGroup: FormGroup)=> {
  const pass1Control = FormGroup.controls[pass1];
  const pass2Control = FormGroup.controls[pass2];
  if(pass1Control.value==pass2Control.value){
    FormGroup.controls['confirmaPassword'].setErrors(null);

  }else{
    FormGroup.controls['confirmaPassword'].setErrors({noSonIguales:true});
  }
  
}
}

public enviardatos(){
  console.log(this.Formulario.value);
  alert("datos enviados correctamente");
  this.servicio.RegistrarUsuario(this.Formulario.value).subscribe(
    (respuesta) => {
      console.log(respuesta);
    },
    (error)=>{
      console.log(error);
    }
  );
}
}