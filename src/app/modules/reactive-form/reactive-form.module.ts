import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormRoutingModule } from './reactive-form-routing.module';
import { ReactiveFormComponent } from './reactive-form.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ReactiveFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormRoutingModule,
    SharedModule
  ]
})
export class ReactiveFormModule { }
