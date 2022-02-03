import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { FindAllComponent } from './find-all/find-all.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AddComponent } from './add/add.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    FindAllComponent,
    AddComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  entryComponents:[AddComponent]
})
export class EmployeeModule { }
