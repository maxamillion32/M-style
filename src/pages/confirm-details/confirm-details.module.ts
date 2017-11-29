import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmDetails } from './confirm-details';

@NgModule({
  declarations: [
    ConfirmDetails,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmDetails),
  ],
  exports: [
    ConfirmDetails
  ]
})
export class ConfirmDetailsModule {}
