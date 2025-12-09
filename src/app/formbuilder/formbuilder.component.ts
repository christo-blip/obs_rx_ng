import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl} from '@angular/forms';
@Component({
  selector: 'app-formbuilder',
  imports: [],
  templateUrl: './formbuilder.component.html',
  styleUrl: './formbuilder.component.scss'
})
export class FormbuilderComponent {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.userForm = this.formBuilder.group({
      id:new FormControl(''),
      name: new FormControl(''),
      username: new FormControl(''),
    })
  }

}
