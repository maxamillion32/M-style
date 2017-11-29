import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AllEmployee } from './all-employee';

@NgModule({
  declarations: [
    AllEmployee,
  ],
  imports: [
    IonicPageModule.forChild(AllEmployee),
  ],
  exports: [
    AllEmployee
  ]
})
export class AllEmployeeModule {}
