import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpecificEmployee } from './specific-employee';

@NgModule({
  declarations: [
    SpecificEmployee,
  ],
  imports: [
    IonicPageModule.forChild(SpecificEmployee),
  ],
  exports: [
    SpecificEmployee
  ]
})
export class SpecificEmployeeModule {}
