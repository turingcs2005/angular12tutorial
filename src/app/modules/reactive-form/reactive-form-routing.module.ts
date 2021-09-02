import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormBasicsComponent } from './form-basics/form-basics.component';
import { ReactiveFormComponent } from './reactive-form.component';
import { ReuseFormComponent } from './reuse-form/reuse-form.component';

const routes: Routes = [
  { path: '', component: ReactiveFormComponent },
  { path: 'form-basics', component: FormBasicsComponent },
  { path: 'reuse-form', component: ReuseFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReactiveFormRoutingModule { }
