import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactUs } from './contact-us';

@NgModule({
  declarations: [
    ContactUs,
  ],
  imports: [
    IonicPageModule.forChild(ContactUs),
  ],
  exports: [
    ContactUs
  ]
})
export class ContactUsModule {}
