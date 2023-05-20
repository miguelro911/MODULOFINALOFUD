import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';

const materialModule = [
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  ReactiveFormsModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatSelectModule,
  MatRadioModule,
  MatToolbarModule,
  MatListModule,
  MatTableModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSlideToggleModule,
  MatSidenavModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, ...materialModule
  ],
  exports: materialModule
})
export class MaterialModule { }
