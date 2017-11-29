import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController  } from 'ionic-angular';
import {DataService} from '../../providers/data-service' 
import { Observable} from "rxjs/Rx"

/**
 * Generated class for the SalonMyClient2 page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-salon-my-client2',
  templateUrl: 'salon-my-client2.html',
})
export class SalonMyClient2 {
minedata
customer_name
user_id
 past:boolean=false
 unique_client_array=[]
 count:number
  constructor(public navCtrl: NavController, public navParams: NavParams,public dataservice:DataService,public loadingCtrl: LoadingController,public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SalonMyClient2');
  }


  ngOnInit(){

let loading = this.loadingCtrl.create({content: 'Loading...'});
         Observable.fromPromise(loading.present())
         .flatMap(data => this.dataservice.myclient())
         .subscribe(data =>
                    loading.dismiss().then(() =>{ 
                        this.minedata = data
                        console.log(JSON.stringify(this.minedata))

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

client_page2(m){
this.navCtrl.push('SalonMyClient3',{data:m})

}


       }

         










