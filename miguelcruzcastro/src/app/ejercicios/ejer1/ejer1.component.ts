import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-ejer1',
  templateUrl: './ejer1.component.html',
  styleUrls: ['./ejer1.component.css']
})
export class Ejer1Component {

  protected title: string = 'Empresa de Miguel SA de CV' ;

  protected useForm : FormGroup
  
  constructor(private rutas:Router,private auth: AuthService, construir: FormBuilder){
    this.useForm = construir.group({
      usuario:['',Validators.required],
      password:['',Validators.required]
    });

  }
  validar(){
    this.auth.login(this.useForm.value).subscribe({
      next: function
    })
    }
      alert("El usuario o la contraseña es incorrecta :C");
  }
}