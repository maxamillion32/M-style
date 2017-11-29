import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmployeeUploadImages } from './employee-upload-images';

@NgModule({
  declarations: [
    EmployeeUploadImages,
  ],
  imports: [
    IonicPageModule.forChild(EmployeeUploadImages),
  ],
  exports: [
    EmployeeUploadImages
  ]
})
export class EmployeeUploadImagesModule {}
