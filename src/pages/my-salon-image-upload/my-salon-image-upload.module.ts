import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MySalonImageUpload } from './my-salon-image-upload';

@NgModule({
  declarations: [
    MySalonImageUpload,
  ],
  imports: [
    IonicPageModule.forChild(MySalonImageUpload),
  ],
  exports: [
    MySalonImageUpload
  ]
})
export class MySalonImageUploadModule {}
