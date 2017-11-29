import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HowItWorks } from './how-it-works';

@NgModule({
  declarations: [
    HowItWorks,
  ],
  imports: [
    IonicPageModule.forChild(HowItWorks),
  ],
  exports: [
    HowItWorks
  ]
})
export class HowItWorksModule {}
