import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-eje3',
  templateUrl: './eje3.component.html',
  styleUrls: ['./eje3.component.css']
})
export class Eje3Component {
  protected title: string = "Empresa de Kevin Uriel SA de CV";
  passwordForm: FormGroup;
  constructor(private formbuilder:FormBuilder){
    this.passwordForm = formbuilder.group({
      password:['',
      Validators.required,
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
      Validators.minLength(8)
    ]
    });
  }

}
