import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Choice, MultiChoices, menuChoices } from './multi-choice';

@Component({
  selector: 'app-multi-selet',
  templateUrl: './multi-selet.component.html',
  styleUrls: ['./multi-selet.component.scss']
})
export class MultiSeletComponent implements OnInit {

  intakeForm: FormGroup = this.fb.group({});
  menuChoices = menuChoices;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.intakeForm = this.fb.group({
      order: [null]
    });
  }

  // 💩 Multi-choice mutual-exclusion
  onSelectionChange(v: any) {
    const name = v.source.value;
    const selected = v.source._selected;
    const choice = this.menuChoices.returnChoice(name);

    choice.selected = selected;

    this.menuChoices.click(choice);
  }

  onSubmit() {
    console.log(this.intakeForm.value);
  }

}
