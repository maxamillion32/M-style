import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CustomerWithoutPaymentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-customer-without-payment',
  templateUrl: 'customer-without-payment.html',
})
export class CustomerWithoutPaymentPage {
  salonname
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	this.salonname=this.navParams.get('salonname')
  }

viewbooking(){
	this.navCtrl.setRoot('CustomerPayments')
}
}
