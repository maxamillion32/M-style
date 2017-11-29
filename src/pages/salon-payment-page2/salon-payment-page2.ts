import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SalonPaymentPage2 page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-salon-payment-page2',
  templateUrl: 'salon-payment-page2.html',
})
export class SalonPaymentPage2 {
payment_data2
services
myservice=[]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
          this.payment_data2=this.navParams.get('mypayment_data')
                            this.services=this.payment_data2.service
                            console.log(JSON.stringify(this.services))
                           
          

          // for(var i=0;i>this.services.length;i++){
          //    this.myservice.push(this.services[i].title)
          // }

         // console.log(JSON.stringify(this.myservice))
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalonPaymentPage2');
  }

}
