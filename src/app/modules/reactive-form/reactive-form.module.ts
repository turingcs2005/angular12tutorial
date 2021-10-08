import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { ReactiveFormComponent } from './reactive-form.component';
import { SharedModule } from '../shared/shared.module';
import { FormArrayDemoComponent } from './form-array-demo/form-array-demo.component';
import { SkillsComponent } from './skills/skills.component';
import { HobbiesComponent } from './hobbies/hobbies.component';
import { FormBasicsComponent } from './form-basics/form-basics.component';
import { ReuseFormComponent } from './reuse-form/reuse-form.component';
import { NameGenderComponent } from './name-gender/name-gender.component';
import { MultiSeletComponent } from './multi-selet/multi-selet.component';
import { CurrencyPipeComponent } from './currency-pipe/currency-pipe.component';


@NgModule({
  declarations: [
    ReactiveFormComponent,
    FormArrayDemoComponent,
    SkillsComponent,
    HobbiesComponent,
    FormBasicsComponent,
    ReuseFormComponent,
    NameGenderComponent,
    MultiSeletComponent,
    CurrencyPipeComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormRoutingModule,
    SharedModule
  ]
})
export class ReactiveFormModule { }
