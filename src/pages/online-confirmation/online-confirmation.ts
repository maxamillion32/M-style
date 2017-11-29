import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';

/**
 * Generated class for the OnlineConfirmation page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-online-confirmation',
  templateUrl: 'online-confirmation.html',
})
export class OnlineConfirmation {
selected_value
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewctrl:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnlineConfirmation');
  }

   cancel(){
   this.viewctrl.dismiss();

  }

  accept(){
  	this.viewctrl.dismiss({value:this.selected_value})
  }


}
