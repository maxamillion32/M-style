import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import {DataService}  from '../../providers/data-service';
import { Observable} from "rxjs/Rx";

/**
 * Generated class for the CustomerPayments page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-customer-payments',
  templateUrl: 'customer-payments.html',
})
export class CustomerPayments {
  payment
  paymentinfo2
  noinfo
  constructor(public navCtrl: NavController, public navParams: NavParams,
  	private dataservice:DataService,public alertCtrl:AlertController,
    public loadingCtrl: LoadingController) {
    
            this.noinfo='false';

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerPayments');
  }

  ngOnInit(){
     
     let loading = this.loadingCtrl.create({content: 'Please Wait...'});
         Observable.fromPromise(loading.present())
         .flatMap(data => this.dataservice.Paymentstatus())
         .subscribe(data =>
                    loading.dismiss().then(() =>{ 
                        this.payment = data
                          if(this.payment.status==1){
                           this.paymentinfo2=this.payment.customerpaymentdata.reverse();
                          }
                           if(this.payment.status==0){
                              this.noinfo='true';

                           }

                             }),
                        error =>
             loading.dismiss().then(() => {
let alert=this.alertCtrl.create({
        title:'SERVER ERROR',
        subTitle:'Please Try Again',
        buttons:['Ok']
      })
      loading.dismiss();
      alert.present()


                      })
                    ); 

  }




}
