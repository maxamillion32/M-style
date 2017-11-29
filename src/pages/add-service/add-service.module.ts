import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddService } from './add-service';

@NgModule({
  declarations: [
    AddService,
  ],
  imports: [
    IonicPageModule.forChild(AddService),
  ],
  exports: [
    AddService
  ]
})
export class AddServiceModule {}
