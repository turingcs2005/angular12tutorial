import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { FormFactoryService } from 'src/app/services/form-factory.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skillForm = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private formFactoryService: FormFactoryService
  ) { }

  ngOnInit(): void {
    this.skillForm = this.fb.group({
      user: this.formFactoryService.getUserForm(),
      skill: ['']
    });
  }

  get user() {
    return (<FormGroup>this.skillForm.get('user'));
  }

  onSubmit() {
    console.log('Skill form submitted!');
  }

}
