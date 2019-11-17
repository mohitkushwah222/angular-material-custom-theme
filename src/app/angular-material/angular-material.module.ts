import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatSlideToggleModule
  ],
  declarations: [],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatRadioModule,
    MatSlideToggleModule
  ]
})
export class AngularMaterialModule { }
