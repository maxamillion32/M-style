import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the SalonCancelHours page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-salon-cancel-hours',
  templateUrl: 'salon-cancel-hours.html',
})
export class SalonCancelHours {
  selected_value
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewctrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalonCancelHours');
  }

  

   time=[
    {mytime:"30 min"},
     {mytime:"1 hour"},
    {mytime:"2  hour"},
      {mytime:"3 hour"},
       {mytime:"24 hour"},
     

   ]


      cancel(){
   this.viewctrl.dismiss();

  }

  accept(){
  	this.viewctrl.dismiss({value:this.selected_value})
  }











}
