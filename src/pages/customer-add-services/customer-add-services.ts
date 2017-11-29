import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,LoadingController } from 'ionic-angular';
import {DataService}  from '../../providers/data-service';
import { Observable} from "rxjs/Rx";

/**
 * Generated class for the CustomerAddServices page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-customer-add-services',
  templateUrl: 'customer-add-services.html',
})
export class CustomerAddServices {
  data;
  bigdata
  ress
  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,public viewCtrl: ViewController,
    private dataservice:DataService,public loadingCtrl:LoadingController) {
this.data=this.dataservice.value.services;
this.bigdata=this.navParams.get('bigdata')
console.log('data get'+JSON.stringify(this.bigdata))


  console.log("hello model"+JSON.stringify(this.data))
    // this.data=this.dataservice.customerSideSalonServices;
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerAddServices');
  }


  dismiss() {
   // let data = { 'foo': 'bar' };

           

   this.viewCtrl.dismiss();
 }
  

  list(serviceid,title,cost,time,fulldata){
    this.viewCtrl.dismiss(fulldata);  
  }

}
