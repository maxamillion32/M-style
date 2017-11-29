import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MySalonClientDetailsPage } from './my-salon-client-details';

@NgModule({
  declarations: [
    MySalonClientDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MySalonClientDetailsPage),
  ],
  exports: [
    MySalonClientDetailsPage
  ]
})
export class MySalonClientDetailsPageModule {}
