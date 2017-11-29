import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyEmployees } from './my-employees';

@NgModule({
  declarations: [
    MyEmployees,
  ],
  imports: [
    IonicPageModule.forChild(MyEmployees),
  ],
  exports: [
    MyEmployees
  ]
})
export class MyEmployeesModule {}
