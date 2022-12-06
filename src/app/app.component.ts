import { Component, VERSION } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  constructor(private fb: FormBuilder) {}

  createForm = this.fb.group({
    name: [''],
    age: [''],
  });
  changeForm() {
    this.createForm.setErrors({ invalid: true });
  }
}
