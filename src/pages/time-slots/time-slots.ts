import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the TimeSlots page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-time-slots',
  templateUrl: 'time-slots.html',
})
export class TimeSlots {
  selected_value
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewctrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimeSlots');
  }
   
     cancel(){
   this.viewctrl.dismiss();

  }

  accept(){
  	this.viewctrl.dismiss({value:this.selected_value})
  }
   





}
