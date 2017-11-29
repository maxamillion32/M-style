import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmployeeHome } from './employee-home';

@NgModule({
  declarations: [
    EmployeeHome,
  ],
  imports: [
    IonicPageModule.forChild(EmployeeHome),
  ],
  exports: [
    EmployeeHome
  ]
})
export class EmployeeHomeModule {}
