import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Saloncancelbookings page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-saloncancelbookings',
  templateUrl: 'saloncancelbookings.html',
})
export class Saloncancelbookings {
canceldata
image
service_selected=[]
mycanceldata
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.canceldata=this.navParams.get('nextpagedata')
  	 this.mycanceldata =this.canceldata.serviceinfo
  	  this.image=this.canceldata.customer_image
  for(var i=0;i<this.mycanceldata.length;i++){
                       this.service_selected.push(this.mycanceldata[i].title+' ')
                              
                           }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Saloncancelbookings');
  }

}
