import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    LayoutModule,
    SharedModule
  ]
})
export class DashboardModule { }
