import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-eje3',
  templateUrl: './eje3.component.html',
  styleUrls: ['./eje3.component.css']
})
export class Eje3Component {
  protected title: string = "Empresa de Angel SA de CV";
  passwordForm: FormGroup;
  constructor(private formbuilder: FormBuilder){
    password: ['',[
      Validators.required,
      Validators.pattern('^(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]=$'),
    ]
  ];
  }
}
