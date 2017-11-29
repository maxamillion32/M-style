import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ForgetPassword } from './forget-password';

@NgModule({
  declarations: [
    ForgetPassword,
  ],
  imports: [
    IonicPageModule.forChild(ForgetPassword),
  ],
  exports: [
    ForgetPassword
  ]
})
export class ForgetPasswordModule {}
