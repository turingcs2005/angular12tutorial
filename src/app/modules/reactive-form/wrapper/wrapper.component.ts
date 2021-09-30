import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Form } from '@angular/forms';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {

  intakeForm = this.fb.group({});

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.intakeForm = this.fb.group({
      firstName: [''],
      hireDate: [null]
    });
  }

  onSubmit() {
    console.log('Form submitted!');
  }

  show() {
    console.log(this.intakeForm.value);
  }

}
