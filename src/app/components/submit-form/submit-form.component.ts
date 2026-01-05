import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms'
import { StorageService } from '../../service/storage.service';

@Component({
  selector: 'app-submit-form',
  imports: [ReactiveFormsModule],
  templateUrl: './submit-form.component.html',
  styleUrl: './submit-form.component.scss'
})
export class SubmitFormComponent {
  form: FormGroup;

  constructor(private fb:FormBuilder, private storage: StorageService){
    this.form = this.fb.group({
      componentName: [''],
      code: [''],
      image: ['']
    });
  }

  onImageSelect(event: any) {  const file = event.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      this.form.patchValue({ image: reader.result });
    };
    reader.readAsDataURL(file);
  }

  submit() {
    const { componentName, code, image} = this.form.value;
    this.storage.save(componentName, {code, image});

    this.form.reset();
    alert('Saved successfully')
  }

}
