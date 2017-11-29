import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MySalonSubscrptionPage3 page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-salon-subscrption-page3',
  templateUrl: 'my-salon-subscrption-page3.html',
})
export class MySalonSubscrptionPage3 {
 orderid;
  transactionid;
  paymentdate;
  paymenttime;
  totalamount;
  staff_member
  constructor(public navCtrl: NavController, public navParams: NavParams) {

// this.orderid=this.navParams.get('orderid');
  	this.transactionid=this.navParams.get('transactionid');
 
  	this.staff_member=this.navParams.get('total_member');
 
  	// this.paymenttime=this.navParams.get('paymenttime');
  	this.totalamount=this.navParams.get('totalamount');


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MySalonSubscrptionPage3');
  }

}
