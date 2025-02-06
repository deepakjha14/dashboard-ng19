import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  formDetails: any;
  constructor() { }

  saveFormDetails(data: any) {
    this.formDetails = data;
  }

  getFormDetails() {
    return this.formDetails;
  }
}
