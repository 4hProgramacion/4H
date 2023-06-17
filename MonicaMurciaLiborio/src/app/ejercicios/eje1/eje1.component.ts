import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-eje1',
  templateUrl: './eje1.component.html',
  styleUrls: ['./eje1.component.css']
})
export class Eje1Component {
  public title: string = 'Empresa de Monica SA de CV';
  protected useForm: FormGroup;

  constructor(private rutas:Router, private auth: AuthService, construir: FormBuilder){
    this.useForm = construir.group({
      usuario:['', [Validators.required]],
      password:['', Validators.required]
    });
  }
  public accesar(){
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
