import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EmployeeCustomerInfo page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-employee-customer-info',
  templateUrl: 'employee-customer-info.html',
})
export class EmployeeCustomerInfo {
customername
servicestart
serviceend
services
cutomerpic
customeraddress
bookingdate
total
customeremail
note
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	 this.customername=this.navParams.get('name');
  	 this.cutomerpic=this.navParams.get('pic');
  	 this.customeraddress=this.navParams.get('address');
  	 this.bookingdate=this.navParams.get('date');
  	 // alert(this.customeraddress)
  	 this.servicestart=this.navParams.get('startime');
  	 this.serviceend=this.navParams.get('endtime');
  	 this.services=this.navParams.get('services');
  	 this.total=this.navParams.get('total');
     this.customeremail=this.navParams.get('email');
     this.note=this.navParams.get('note');
  	 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeeCustomerInfo');
  }

}
