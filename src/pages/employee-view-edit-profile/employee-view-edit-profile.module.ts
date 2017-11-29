import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmployeeViewEditProfile } from './employee-view-edit-profile';

@NgModule({
  declarations: [
    EmployeeViewEditProfile,
  ],
  imports: [
    IonicPageModule.forChild(EmployeeViewEditProfile),
  ],
  exports: [
    EmployeeViewEditProfile
  ]
})
export class EmployeeViewEditProfileModule {}
