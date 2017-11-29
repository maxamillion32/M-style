import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OnlineConfirmation } from './online-confirmation';

@NgModule({
  declarations: [
    OnlineConfirmation,
  ],
  imports: [
    IonicPageModule.forChild(OnlineConfirmation),
  ],
  exports: [
    OnlineConfirmation
  ]
})
export class OnlineConfirmationModule {}
