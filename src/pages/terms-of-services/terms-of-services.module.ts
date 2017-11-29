import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TermsOfServices } from './terms-of-services';

@NgModule({
  declarations: [
    TermsOfServices,
  ],
  imports: [
    IonicPageModule.forChild(TermsOfServices),
  ],
  exports: [
    TermsOfServices
  ]
})
export class TermsOfServicesModule {}
