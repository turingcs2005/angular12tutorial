import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  intakeForm: FormGroup = new FormGroup({});
  
  // connect obj to intakeForm using two-way data binding
  obj: any = {
    name: '',
    value: null
  }

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.intakeForm = this.fb.group({
      name: [''],
      value: [null]
    })
  }

  // bind form control to object property
  onSubmit() {
    console.log('Form submitted!');
    this.obj.name = this.intakeForm.get('name')?.value;
  }

}
