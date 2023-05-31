import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ex1',
  templateUrl: './ex1.component.html',
  styleUrls: ['./ex1.component.css']
})
export class Ex1Component {
  form= new FormGroup(
    {
      nom: new FormControl('',Validators.required),
      prenom: new FormControl('',Validators.required),
      age: new FormControl('',[Validators.required, Validators.min(18), Validators.max(54)]),


    }
  )
  get f(){
    return this.form.controls;
    }
}
