import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminRoutingModule, routingComponent } from './admin-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AdminService } from '../services/admin.service';

@NgModule({
  declarations: [
    routingComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AdminService
  ]
})
export class AdminModule { }
