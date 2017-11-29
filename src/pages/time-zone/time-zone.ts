import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the TimeZone page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-time-zone',
  templateUrl: 'time-zone.html',
})
export class TimeZone {
   selected_value

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewctrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimeZone');
  }




   time=[
    {mytime:"On 15 min"},
     {mytime:"On 30 min"},
    {mytime:"On 45 min"},
      {mytime:"On 60 min"},
       

   ]


      cancel(){
   this.viewctrl.dismiss();

  }

  accept(){
  	this.viewctrl.dismiss({value:this.selected_value})
  }





}
