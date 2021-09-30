import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// material modules
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatDividerModule} from '@angular/material/divider';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { WrappedComponent } from './wrapped/wrapped.component';
import { WrappedDateComponent } from './wrapped-date/wrapped-date.component';

@NgModule({
  declarations: [
       WrappedComponent,
       WrappedDateComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatNativeDateModule
  ],
  exports: [
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatInputModule,
    MatMenuModule,
    MatTooltipModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatDatepickerModule,
    
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    WrappedComponent,
    WrappedDateComponent
  ]
})
export class SharedModule { }
