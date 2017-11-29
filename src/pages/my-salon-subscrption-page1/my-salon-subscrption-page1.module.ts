import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MySalonSubscrptionPage1 } from './my-salon-subscrption-page1';

@NgModule({
  declarations: [
    MySalonSubscrptionPage1,
  ],
  imports: [
    IonicPageModule.forChild(MySalonSubscrptionPage1),
  ],
  exports: [
    MySalonSubscrptionPage1
  ]
})
export class MySalonSubscrptionPage1Module {}
