 import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import {DataService} from '../../providers/data-service' 
import { Observable} from "rxjs/Rx";

/**
 * Generated class for the SalonPaymentPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-salon-payment-page',
  templateUrl: 'salon-payment-page.html',
})
export class SalonPaymentPage {
minedata
customer_name
user_id
past:boolean=false
payment_data
  constructor(public navCtrl: NavController, public navParams: NavParams,public dataservice:DataService,public loadingCtrl: LoadingController,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalonPaymentPage');
  }


 payment_page2(m){
this.navCtrl.push('SalonPaymentPage2',{mypayment_data:m})


 }

ngOnInit(){

let loading = this.loadingCtrl.create({content: 'Loading...'});
         Observable.fromPromise(loading.present())
         .flatMap(data => this.dataservice.get_appointment_data())
         .subscribe(data =>
                    loading.dismiss().then(() =>{ 
                        this.minedata = data
                        // alert(this.minedata.status)
                        if (this.minedata.status==0){  
                          this.past=true
                    }
                        
                         this.customer_name=this.minedata.customerappointment
                            
                      




}),
    error =>
             loading.dismiss().then(() => {
let alert=this.alertCtrl.create({
        title:'Timeout',
        subTitle:'Please Try Again',
        buttons:['Ok']
      })
      loading.dismiss();
      alert.present()


                      })



                    )
}



}
