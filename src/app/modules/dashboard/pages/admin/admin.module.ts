import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { TestComponent } from './components/test/test.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
