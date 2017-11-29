import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';

/**
 * Generated class for the PendingPaymentSuccessPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-pending-payment-success',
  templateUrl: 'pending-payment-success.html',
})
export class PendingPaymentSuccessPage {
orderid
transactionid
paymentdate
paymenttime
totalamount
salonname
salonid
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public modalCtrl:ModalController) {

  	this.orderid=this.navParams.get('orderid');
  	this.transactionid=this.navParams.get('transactionid');
  	this.paymentdate=this.navParams.get('paymentdate');
  	this.paymenttime=this.navParams.get('paymenttime');
  	this.totalamount=this.navParams.get('totalamount');
    this.salonname=this.navParams.get('salonname');
    this.salonid=this.navParams.get('salonid');
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PendingPaymentSuccessPage');
  }
viewbooking(){
	this.navCtrl.setRoot('CustomerPayments')
}
givereview(){
  let profileModal = this.modalCtrl.create('CustomerAddReviewModel',{salonname:this.salonname,salonid: this.salonid});
   profileModal.onDidDismiss(data => {
     console.log(data);
   });
   profileModal.present();
}
}
