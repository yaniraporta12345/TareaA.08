import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidarComponent } from './validar/validar.component';



@NgModule({
  declarations: [
    ValidarComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ValidarComponent
  ]
})
export class FormModule { }
