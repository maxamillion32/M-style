import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Createaccount } from './createaccount';

@NgModule({
  declarations: [
    Createaccount,
  ],
  imports: [
    IonicPageModule.forChild(Createaccount),
  ],
  exports: [
    Createaccount
  ]
})
export class CreateaccountModule {}
