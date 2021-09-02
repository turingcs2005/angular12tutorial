import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-name-gender',
  templateUrl: './name-gender.component.html',
  styleUrls: ['./name-gender.component.scss']
})
export class NameGenderComponent implements OnInit {
  
  @Input() inputFormGroup = this.fb.group({});


  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
  }

}
