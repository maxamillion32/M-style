import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the TimeNotice page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-time-notice',
  templateUrl: 'time-notice.html',
})
export class TimeNotice {
 selected_value
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewctrl:ViewController) {
  }
 time=[
    {mytime:"30 min"}, 
     {mytime:"1 hour"}, 
    {mytime:"2  hour"}, 
      {mytime:"3 hour"}, 
      

{mytime:"24  hr"},

   ]

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimeNotice');
  }

    cancel(){
   this.viewctrl.dismiss();

  }

  accept(){
  	this.viewctrl.dismiss({value:this.selected_value})
  }


}
