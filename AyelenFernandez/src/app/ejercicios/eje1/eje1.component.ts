import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-eje1',
  templateUrl: './eje1.component.html',
  styleUrls: ['./eje1.component.css']
})
export class Eje1Component {

  protected title:string = 'Empresa de Ayelen SA de CV';

protected useForm = FormGroup;

  constructor(private rutas: Router, private auth:AuthService, construir: FormBuilder )

    this.useForm = construir.group({
      usuario:['', Validators.required],
      password:['', Validators.required]
    });
  
  validar(){
    this.auth.login(useForm.value).subscribe(
      (data) => {
          localStorage.setItem('login',JSON.stringify(data));
      },
      (error) => {
          console.log(error);
      });
    
    }
    
  
}
