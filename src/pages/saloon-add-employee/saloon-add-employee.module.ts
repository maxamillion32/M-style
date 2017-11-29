import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SaloonAddEmployee } from './saloon-add-employee';

@NgModule({
  declarations: [
    SaloonAddEmployee,
  ],
  imports: [
    IonicPageModule.forChild(SaloonAddEmployee),
  ],
  exports: [
    SaloonAddEmployee
  ]
})
export class SaloonAddEmployeeModule {}
