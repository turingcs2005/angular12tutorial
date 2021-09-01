import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { ReactiveFormComponent } from './reactive-form.component';
import { SharedModule } from '../shared/shared.module';
import { FormArrayDemoComponent } from './form-array-demo/form-array-demo.component';
import { SkillsComponent } from './skills/skills.component';
import { HobbiesComponent } from './hobbies/hobbies.component';


@NgModule({
  declarations: [
    ReactiveFormComponent,
    FormArrayDemoComponent,
    SkillsComponent,
    HobbiesComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormRoutingModule,
    SharedModule
  ]
})
export class ReactiveFormModule { }
