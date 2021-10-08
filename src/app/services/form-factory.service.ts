import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormFactoryService {

  constructor(
    private fb: FormBuilder
  ) { }

  getUserForm() {
    return this.fb.group({
      name: [''],
      gender: ['']
    });
  }

  getCurrencyForm() {
    return this.fb.group({
      name: [''],
      profession: [''],
      salary: [0],
      spouse: this.fb.group({
        name: [''],
        profession: [''],
        salary: [0]
      })
    });
  }

}
