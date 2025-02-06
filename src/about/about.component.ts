import { Component, inject } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormArray, FormGroup, FormControl, Validators } from '@angular/forms';
import { SharedService } from '../app/shared/shared.service';

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
  sharedService: any = inject(SharedService);
  // constructor(
  //   private sharedService: SharedService
  // ) {
  // }

  onClick() {
    alert(JSON.stringify(this.studentsDetails?.value));
    this.sharedService.saveFormDetails(this.studentsDetails?.value);
  }
}
