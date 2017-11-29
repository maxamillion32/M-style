import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DataService } from "../../providers/data-service"
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Observable} from "rxjs/Rx";

/**
 * Generated class for the MySalonClientDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-salon-client-details',
  templateUrl: 'my-salon-client-details.html',
})
export class MySalonClientDetailsPage {
request_data
cancel_data
my_cancel_data
my_request_data
segment
client_data
customer_id
  constructor(public navCtrl: NavController,private dataservice :DataService,
   public navParams: NavParams,private alertCtrl: AlertController,
  	public loadingCtrl: LoadingController) {
  	 this.segment="booking_request"
  	  this.client_data=this.navParams.get('client_id_data')
  	                    this.customer_id=this.client_data.customer_id
  	                    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MySalonClientDetailsPage');
  }

   ngOnInit(){

// http://europa.promaticstechnologies.com/salonDirectory/img/salonimage

    let loading = this.loadingCtrl.create({content: 'Loading'});
    Observable.of(loading).flatMap(loading => loading.present())

     .flatMap(data => Observable.forkJoin(this.dataservice.MySalonNotification(),this.dataservice.get_appointment_data()))
    

     .subscribe(data =>
                    loading.dismiss().then(() =>{ 
                       this.request_data=data[1]
                    this.my_request_data=this.request_data.customerappointment
            
                        this.cancel_data = data[0].cancelinfo
                      
                    }),
               error=>{
      let alert=this.alertCtrl.create({
        title:'Timeout',
        buttons:['Ok']
      })
      loading.dismiss();
      alert.present()
    })
 }
 
  

}



// {"employee_id":309,
// "employeename":"Jack",
// "customer_id":22,
// "customername":"MD ASIF",
// "customercontactnumber":"7500003388",
// "customeremail":"promatics.asif@gmail.com",
// "customer_profile_image":"7WwrC7.image.jpg",
// "total_amount":"11","service_id":"99",
// "starttime":"10:30","endtime":"11:45",
// "date":"2017-11-29",
// "service":[{"id":99,"salon_id":35,"title":"Cutting","description":"wqfq","time":"01:15","cost":"11"}]}