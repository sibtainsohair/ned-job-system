import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ApplicantRoutingModule } from './applicant-routing.module';

import { TestComponent } from './test/test.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
    ApplicantRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class ApplicantModule { }
