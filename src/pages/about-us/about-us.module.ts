import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutUs } from './about-us';

@NgModule({
  declarations: [
    AboutUs,
  ],
  imports: [
    IonicPageModule.forChild(AboutUs),
  ],
  exports: [
    AboutUs
  ]
})
export class AboutUsModule {}
