import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Route, Router, RouterLink } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-ejer1',
  templateUrl: './ejer1.component.html',
  styleUrls: ['./ejer1.component.css']
})
export class Eje1Component {
  protected title: string = "Empresa de Gael SA de CV";

  protected useForm: FormGroup;

  constructor(private rutas:Router, private auth: AuthService, construir: FormBuilder){
    this.useForm = construir.group({
      
      usuario:['', [Validators.required]],
      password:['', Validators.required]
    
    });
  }

  public validar(){
    this.auth.login(this.useForm.value).subscribe({
      
      next: (respuesta) => {
        localStorage.setItem('login', JSON.stringify(respuesta));
        this.rutas.navigate(['/Home']);
      },
      error: (error) => {
        console.log(error);
      }

    });
  }
}