import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormArray, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'dashboard-ng19-about',
  imports: [ FormsModule, ReactiveFormsModule ],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  studentsDetails: FormGroup<any> = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    city: new FormControl(''),
    age: new FormControl(''),
  });

  onClick() {
    alert(JSON.stringify(this.studentsDetails?.value));
  }
}
