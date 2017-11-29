import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SalonMyClient3 page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-salon-my-client3',
  templateUrl: 'salon-my-client3.html',
})
export class SalonMyClient3 {
     clientdata
     myclientdata
     services
     image
  constructor(public navCtrl: NavController, public navParams: NavParams) {
 this.myclientdata=this.navParams.get('data')
  
         this.services=this.myclientdata.service

 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalonMyClient3');
  }

 details(){

this.navCtrl.push('MySalonClientDetailsPage',{client_id_data:this.myclientdata})


 }
}
