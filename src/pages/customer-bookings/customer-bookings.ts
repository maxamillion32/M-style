import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import {DataService}  from '../../providers/data-service';
import { Observable} from "rxjs/Rx";
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
/**
 * Generated class for the CustomerBookings page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-customer-bookings',
  templateUrl: 'customer-bookings.html',
})
export class CustomerBookings {
bookings;
appoint
bookingdata
upcomingdata
pastdata
currentdata
past
up
clientenv
responsetype
transactionid
createtime
transsactionstatus
canceldata
cancelstatus
paymenttdata
paymentstatus
orderid
transactionid2
paymentdate
paymenttime
totalamount
  constructor( private payPal: PayPal,public navCtrl: NavController, public loadingCtrl:LoadingController,
   private dataservice:DataService,public navParams: NavParams,public alertCtrl:AlertController) {
  	this.bookings="upcoming";
    this.past='false'
    this.up='false'
  	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerBookings');
  }
ngOnInit(){
     
     let loading = this.loadingCtrl.create({content: 'Please Wait...'});
         Observable.fromPromise(loading.present())
         .flatMap(data => this.dataservice.CustomerbookingList())
         .subscribe(data =>
                    loading.dismiss().then(() =>{ 
                this.bookingdata = data
                this.upcomingdata= this.bookingdata.upcominginfo.reverse();
                this.pastdata=this.bookingdata.pastinfo.reverse(); 
                this.currentdata=this.bookingdata.currentinfo.reverse(); 

                // alert("past data"+this.pastdata)
                // alert("upcoming data"+this.upcomingdata)
                // alert("pic"+JSON.stringify(this.currentdata[0].employee_image))
                      if(this.pastdata=='' && this.upcomingdata==''){
                       // alert("no past info")

                       this.past='true'
                       this.up='true'

                      }
                    else if (this.pastdata=='')
                     {
                           this.past='true'
                          
                    }  
                    else if(this.upcomingdata==''){
                      this.up='true'
                    }                    
                        }),
                        error =>
                loading.dismiss().then(() => {
                let alert=this.alertCtrl.create({
                title:'Something Went Wrong',
               subTitle:'Please Try Again',
                 buttons:['Ok']
      })
      
      alert.present()


                      })
                    ); 

  }
pay(payment_id,cost,salonname,salonid){
    // alert("cost"+cost)
    var total=cost.toString()
    //   if (typeof total === "string") {
    
    //  alert("gggggcost"+cost)
    // }

  this.payPal.init({
  PayPalEnvironmentProduction:"EHAcM2INSj9ek0nFpvo407Lm6HAVMKek2IJ5Ogg-oAYUV_GHYn8SOluvJkEeQIgMXAJhU40zB1u8OYUL",
  PayPalEnvironmentSandbox: "Ae_SllVss8pETOKsGsePBiQXLrQHEJ_nTLplLsgw2mjpzheo4ykCzrXX7gyBvlM6rWPul7YOUoMKQEoO"
}).then(() => {
  // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
  this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
    // Only needed if you get an "Internal Service Error" after PayPal login!
    //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
  })).then(() => {
    let payment = new PayPalPayment(total, 'USD', 'Description', 'sale');
    this.payPal.renderSinglePaymentUI(payment).then((data) => {

      // alert("hello data"+JSON.stringify(data))
      // alert("hello payment"+JSON.stringify(payment))

        localStorage['client_environment']=data.client.environment;
        localStorage['payment_state']=data.response.state;
        localStorage['response_type']=data.response_type;
        localStorage['response_id']=data.response.id;
        localStorage['create_time']=data.create_time;
      
         
               this.clientenv=localStorage['client_environment']
               this.responsetype=  localStorage['response_type']
               this.transactionid= localStorage['response_id']
               this.createtime= localStorage['create_time']
               this.transsactionstatus=localStorage['payment_state']

         this.paycost(payment_id,total,salonname,salonid);
      // Successfully paid

      // Example sandbox response
      //
      // {
      //   "client": {
      //     "environment": "sandbox",
      //     "product_name": "PayPal iOS SDK",
      //     "paypal_sdk_version": "2.16.0",
      //     "platform": "iOS"
      //   },
      //   "response_type": "payment",
      //   "response": {
      //     "id": "PAY-1AB23456CD789012EF34GHIJ",
      //     "state": "approved",
      //     "create_time": "2016-10-03T13:33:33Z",
      //     "intent": "sale"
      //   }
      // }
    }, (error) => {
          alert(error)
      // Error or render dialog closed without being successful
    });
  }, (error) => {
    // Error in configuration
     alert(error)
  });
}, (error) => {
   alert(error)
  // Error in initialization, maybe PayPal isn't supported or something else
});
   
  
}
cancelbooking(payment_id,bookingdata){
        
        
     const alert = this.alertCtrl.create({
    title: 'Confirm Cancel',
    message: 'Do you want to Cancel this Booking?',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Yes',
        handler: () => {
          this.cancel(payment_id)
        }
      }
    ]
  });
  alert.present();
}
cancel(payment_id){
let loading = this.loadingCtrl.create({content: 'Please Wait...'});
         Observable.fromPromise(loading.present())
         .flatMap(data => this.dataservice.CancelBooking(payment_id))
         .subscribe(data =>
                    loading.dismiss().then(() =>{ 
                        this.canceldata=data;
                        this.cancelstatus=this.canceldata.status

                          if(this.cancelstatus==2){
                         
                          
                          const alert = this.alertCtrl.create({
                          title: 'Alert!',
                          subTitle: 'Booking Cancelled Successfully',
                          buttons: [{
                          text: 'Ok',
                          role: 'cancel',
                         handler: () => {
                           console.log('Cancel clicked');
                            this.ngOnInit();
                          }
                            },]
                       });
                  alert.present();
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
paycost(payment_id,total,salonname,salonid){

   // this.transactionid='PAY-1AB23456CD789012EF34GHIJ';
   // this.transsactionstatus='approved';

 let loading = this.loadingCtrl.create({content: 'Please Wait...'});
         Observable.fromPromise(loading.present())
         .flatMap(data => this.dataservice.pendingpayment(payment_id,total,this.transactionid,this.transsactionstatus))
         .subscribe(data =>
                    loading.dismiss().then(() =>{ 
                        this.paymenttdata=data;
                        this.paymentstatus=this.paymenttdata.status
                              if(this.paymentstatus==1){
                                   
       this.orderid=this.paymenttdata.paymentdata.order_id;
       this.transactionid2=this.paymenttdata.paymentdata.transaction_id;
       this.paymentdate=this.paymenttdata.paymentdata.payment_date;
       this.paymenttime=this.paymenttdata.paymentdata.payment_time;
       this.totalamount=this.paymenttdata.paymentdata.cost;
       this.navCtrl.setRoot('PendingPaymentSuccessPage',{orderid:this.orderid,
      transactionid:this.transactionid2,paymentdate:this.paymentdate,
      paymenttime:this.paymenttime,totalamount:this.totalamount,
     salonname:salonname,salonid:salonid})
                    
                          }
                           else{
               let alert = this.alertCtrl.create({
              title: 'Something went wrong!',
              subTitle: 'Payment unsuccessful',
              buttons: ['OK']
              });
                 alert.present();
           }
                             }),
                      error =>
                      loading.dismiss().then(() => {
                        let alert = this.alertCtrl.create({
                   title: 'SERVER ERROR',
                   subTitle: 'Something went wrong',
                   buttons: ['OK']
              });
                 alert.present();
                      })
                    ); 
}

}
