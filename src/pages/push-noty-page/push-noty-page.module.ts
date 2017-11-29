import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PushNotyPage } from './push-noty-page';

@NgModule({
  declarations: [
    PushNotyPage,
  ],
  imports: [
    IonicPageModule.forChild(PushNotyPage),
  ],
  exports: [
    PushNotyPage
  ]
})
export class PushNotyPageModule {}
