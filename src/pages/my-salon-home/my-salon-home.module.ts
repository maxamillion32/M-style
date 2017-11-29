import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MySalonHome } from './my-salon-home';

@NgModule({
  declarations: [
    MySalonHome,
  ],
  imports: [
    IonicPageModule.forChild(MySalonHome),
  ],
  exports: [
    MySalonHome
  ]
})
export class MySalonHomeModule {}
