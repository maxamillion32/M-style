import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerEmployeePreviousWorkImages } from './customer-employee-previous-work-images';

@NgModule({
  declarations: [
    CustomerEmployeePreviousWorkImages,
  ],
  imports: [
    IonicPageModule.forChild(CustomerEmployeePreviousWorkImages),
  ],
  exports: [
    CustomerEmployeePreviousWorkImages
  ]
})
export class CustomerEmployeePreviousWorkImagesModule {}
