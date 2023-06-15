import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-ejer1',
  templateUrl: './ejer1.component.html',
  styleUrls: ['./ejer1.component.css']
})
export class Ejer1Component {
protected title:string = 'Empresa de William SA de CV';
protected useForm: FormGroup;

constructor(private rutas:Router, private auth: AuthService, construir: FormBuilder){
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
ngOnInit(): void {}
}