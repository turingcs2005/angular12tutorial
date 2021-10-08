import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup } from '@angular/forms';
import { FormFactoryService } from 'src/app/services/form-factory.service';
import { FormToolsService } from 'src/app/services/form-tools.service';

@Component({
  selector: 'app-currency-pipe',
  templateUrl: './currency-pipe.component.html',
  styleUrls: ['./currency-pipe.component.scss']
})
export class CurrencyPipeComponent implements OnInit {

  intakeForm = this.fb.group({});

  constructor(
    private fb: FormBuilder,
    private formFactoryService: FormFactoryService,
    private formToolsService: FormToolsService
  ) { }

  ngOnInit(): void {
    this.intakeForm = this.formFactoryService.getCurrencyForm();
  }

  get spouse() {
    return <FormGroup>this.intakeForm.controls.spouse;
  }

  onSubmit() {
    const o: any = {};
    Object.assign(o, this.intakeForm.value);
    this.formToolsService.traverseTree(o);
    console.log(o);

  }

}
