import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-customer-after-payment',
  templateUrl: 'customer-after-payment.html',
})
export class CustomerAfterPayment {
  orderid;
  transactionid;
  paymentdate;
  paymenttime;
  totalamount;
  salonname
  salonid
  constructor(public navCtrl: NavController, public modalCtrl:ModalController,
    public navParams: NavParams) {

  	this.orderid=this.navParams.get('orderid');
  	this.transactionid=this.navParams.get('transactionid');
  	this.paymentdate=this.navParams.get('paymentdate');
  	this.paymenttime=this.navParams.get('paymenttime');
  	this.totalamount=this.navParams.get('totalamount');
    this.salonname=this.navParams.get('salonname');
    this.salonid=this.navParams.get('salonid');
 
  	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerAfterPayment');
  }
givereview(){
  let profileModal = this.modalCtrl.create('CustomerAddReviewModel',{salonname:this.salonname,salonid: this.salonid});
   profileModal.onDidDismiss(data => {
     console.log(data);
   });
   profileModal.present();
 
}
}
