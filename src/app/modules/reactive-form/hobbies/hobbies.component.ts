import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { FormFactoryService } from 'src/app/services/form-factory.service';

@Component({
  selector: 'app-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.scss']
})
export class HobbiesComponent implements OnInit {

  hobbyForm = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private formFactoryService: FormFactoryService
  ) { }

  ngOnInit(): void {
    this.hobbyForm = this.fb.group({
      user: this.formFactoryService.getUserForm(),
      hobby: ['']
    });
  }

  get user() {
    return (<FormGroup>this.hobbyForm.get('user'));
  }

  onSubmit() {
    console.log('Hobby form submitted!');
    console.log(this.hobbyForm.value);
  }

}
