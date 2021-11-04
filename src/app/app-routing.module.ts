import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpComponent } from './components/help/help.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'help', component: HelpComponent},
  { path: 'reactive-form', loadChildren: () => import('./modules/reactive-form/reactive-form.module').then(m => m.ReactiveFormModule) },
  { path: 'button', loadChildren: () => import('./modules/button/button.module').then(m => m.ButtonModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
