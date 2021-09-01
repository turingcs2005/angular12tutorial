import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FormFactoryService } from 'src/app/services/form-factory.service';

@Component({
  selector: 'app-form-array-demo',
  templateUrl: './form-array-demo.component.html',
  styleUrls: ['./form-array-demo.component.scss']
})
export class FormArrayDemoComponent implements OnInit {

  form1 = new FormGroup({});
  
  constructor(
    private fb: FormBuilder,
    private formFactoryService: FormFactoryService
  ) { }

  ngOnInit(): void {
    this.form1 = this.fb.group({
      company: [''],
      address: [''],
      userArray: new FormArray([])
    });
  }

  get userArray() {
    return (<FormArray>this.form1.get('userArray'));
  }

  addUser() {
    this.userArray.push(this.formFactoryService.getUserForm());
  }

  removeUser(i: number) {
    this.userArray.removeAt(i);
  }

  onSubmit() {
    console.log(this.form1.value);
  }

}
