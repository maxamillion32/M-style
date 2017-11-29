import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomerSalonGallery } from './customer-salon-gallery';

@NgModule({
  declarations: [
    CustomerSalonGallery,
  ],
  imports: [
    IonicPageModule.forChild(CustomerSalonGallery),
  ],
  exports: [
    CustomerSalonGallery
  ]
})
export class CustomerSalonGalleryModule {}
