import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-ejer1',
  templateUrl: './ejer1.component.html',
  styleUrls: ['./ejer1.component.css']
})
export class Ejer1Component {

  protected title:string = 'Fundacion Acevedo';
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
