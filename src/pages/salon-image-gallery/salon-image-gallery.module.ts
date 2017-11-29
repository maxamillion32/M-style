import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalonImageGallery } from './salon-image-gallery';

@NgModule({
  declarations: [
    SalonImageGallery,
  ],
  imports: [
    IonicPageModule.forChild(SalonImageGallery),
  ],
  exports: [
    SalonImageGallery
  ]
})
export class SalonImageGalleryModule {}
