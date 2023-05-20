import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    HomeComponent,
    SpinnerComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    SpinnerComponent
  ]
})
export class SharedModule { }
