import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-ejercicio1',
  templateUrl: './ejercicio1.component.html',
  styleUrls: ['./ejercicio1.component.css']
})
export class Ejercicio1Component {
  protected title: string = "Empresa de Guillermo SA de CV";

  protected useForm: FormGroup;

  constructor(private rutas:Router, private auth: AuthService, private construir: FormBuilder){
    this.useForm = construir.group({
      usuario:['', [Validators.required]],
      password:['', Validators.required]
    });
  }

  public acceso(){
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

  ngOnInit(): void {

  }
}
