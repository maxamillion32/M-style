import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController } from 'ionic-angular';
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
import {DataService}  from '../../providers/data-service';
import { Observable} from "rxjs/Rx"
/**
 * Generated class for the MySalonSubscrptionPage2 page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-salon-subscrption-page2',
  templateUrl: 'my-salon-subscrption-page2.html',
})
export class MySalonSubscrptionPage2 {
	clientenv
responsetype
transactionid
createtime
transsactionstatus
salon_id
staff_member
mysalon_id 
cost
transction_id
payresponse
  constructor(public navCtrl: NavController,public alertCtrl:AlertController,
    private dataservice:DataService, public navParams: NavParams,
    public loadingCtrl:LoadingController,
    private payPal: PayPal) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MySalonSubscrptionPage2');
  }
// salon_id,staffmember,transaction_id,transaction_amount
purchase1(){
  this.salon_id= localStorage['salonid']
this.payPal.init({
  PayPalEnvironmentProduction: 'EHAcM2INSj9ek0nFpvo407Lm6HAVMKek2IJ5Ogg-oAYUV_GHYn8SOluvJkEeQIgMXAJhU40zB1u8OYULEHAcM2INSj9ek0nFpvo407Lm6HAVMKek2IJ5Ogg-oAYUV_GHYn8SOluvJkEeQIgMXAJhU40zB1u8OYUL',
  PayPalEnvironmentSandbox: 'Ae_SllVss8pETOKsGsePBiQXLrQHEJ_nTLplLsgw2mjpzheo4ykCzrXX7gyBvlM6rWPul7YOUoMKQEoO'
}).then(() => {
  // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
  this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
    // Only needed if you get an "Internal Service Error" after PayPal login!
    //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
  })).then(() => {
    let payment = new PayPalPayment('25', 'USD', 'Description', 'sale');
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
          

         this.paypalpayment(1,this.salon_id,25,this.transactionid);
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
    }, () => {
      // Error or render dialog closed without being successful
    });
  }, () => {
    // Error in configuration
  });
}, () => {
  // Error in initialization, maybe PayPal isn't supported or something else
});








}

purchase2(){
 this.salon_id= localStorage['salonid']
this.payPal.init({
  PayPalEnvironmentProduction: 'EHAcM2INSj9ek0nFpvo407Lm6HAVMKek2IJ5Ogg-oAYUV_GHYn8SOluvJkEeQIgMXAJhU40zB1u8OYULEHAcM2INSj9ek0nFpvo407Lm6HAVMKek2IJ5Ogg-oAYUV_GHYn8SOluvJkEeQIgMXAJhU40zB1u8OYUL',
  PayPalEnvironmentSandbox: 'Ae_SllVss8pETOKsGsePBiQXLrQHEJ_nTLplLsgw2mjpzheo4ykCzrXX7gyBvlM6rWPul7YOUoMKQEoO'
}).then(() => {
  // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
  this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
    // Only needed if you get an "Internal Service Error" after PayPal login!
    //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
  })).then(() => {
    let payment = new PayPalPayment('35', 'USD', 'Description', 'sale');
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
          

          this.paypalpayment(5,this.salon_id,35,this.transactionid);
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
    }, () => {
      // Error or render dialog closed without being successful
    });
  }, () => {
    // Error in configuration
  });
}, () => {
  // Error in initialization, maybe PayPal isn't supported or something else
});

}

purchase3(){
 this.salon_id= localStorage['salonid']
this.payPal.init({
  PayPalEnvironmentProduction: 'EHAcM2INSj9ek0nFpvo407Lm6HAVMKek2IJ5Ogg-oAYUV_GHYn8SOluvJkEeQIgMXAJhU40zB1u8OYULEHAcM2INSj9ek0nFpvo407Lm6HAVMKek2IJ5Ogg-oAYUV_GHYn8SOluvJkEeQIgMXAJhU40zB1u8OYUL',
  PayPalEnvironmentSandbox:'Ae_SllVss8pETOKsGsePBiQXLrQHEJ_nTLplLsgw2mjpzheo4ykCzrXX7gyBvlM6rWPul7YOUoMKQEoO'
}).then(() => {
  // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
  this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
    // Only needed if you get an "Internal Service Error" after PayPal login!
    //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
  })).then(() => {
    let payment = new PayPalPayment('45', 'USD', 'Description', 'sale');
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
          

          this.paypalpayment(9,this.salon_id,45,this.transactionid);
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
    }, () => {
      // Error or render dialog closed without being successful
    });
  }, () => {
    // Error in configuration
  });
}, () => {
  // Error in initialization, maybe PayPal isn't supported or something else
});


}
purchase4(){
  this.salon_id= localStorage['salonid']
this.payPal.init({
  PayPalEnvironmentProduction: 'EHAcM2INSj9ek0nFpvo407Lm6HAVMKek2IJ5Ogg-oAYUV_GHYn8SOluvJkEeQIgMXAJhU40zB1u8OYULEHAcM2INSj9ek0nFpvo407Lm6HAVMKek2IJ5Ogg-oAYUV_GHYn8SOluvJkEeQIgMXAJhU40zB1u8OYUL',
  PayPalEnvironmentSandbox:'Ae_SllVss8pETOKsGsePBiQXLrQHEJ_nTLplLsgw2mjpzheo4ykCzrXX7gyBvlM6rWPul7YOUoMKQEoO'
}).then(() => {
  // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
  this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
    // Only needed if you get an "Internal Service Error" after PayPal login!
    //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
  })).then(() => {
    let payment = new PayPalPayment('55', 'USD', 'Description', 'sale');
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
          

          this.paypalpayment(10,this.salon_id,55,this.transactionid);
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
    }, () => {
      // Error or render dialog closed without being successful
    });
  }, () => {
    // Error in configuration
  });
}, () => {
  // Error in initialization, maybe PayPal isn't supported or something else
});
}
paypalpayment(staff_member,salon_id,cost,transction_id){

        this.staff_member= staff_member
          // alert("staff"+this.staff_member)
 // alert("salonid"+this.salon_id)
this.salon_id=salon_id
this.cost=cost
// alert("Cost"+this.cost)
this.transction_id=transction_id
// alert("id"+this.transction_id)
   // alert(JSON.stringify(this.transactionid))
   // alert(JSON.stringify(this.transsactionstatus))
   // alert(JSON.stringify(this.bookingid))
   // alert(JSON.stringify(this.totalcost))
         // this.transactionid='PAY-1AB23456CD789012EF34GHIJ';
         this.transsactionstatus='approved';

        let loading = this.loadingCtrl.create({content: 'Please Wait...'});
         Observable.fromPromise(loading.present())
   .flatMap(data => this.dataservice.subscription_plan(this.salon_id,this.staff_member,this.transction_id,this.cost))
         .subscribe(data  =>{ 
           
             loading.dismiss()


           this.payresponse=data;

           if(this.payresponse.status==1){

            this.navCtrl.push('MySalonSubscrptionPage3',{totalamount:this.cost,transactionid:this.transction_id,total_member:this.staff_member})
      //  this.orderid=this.payresponse.data.order_id;
      //  this.transactionid2=this.payresponse.data.transaction_id;
      //  this.paymentdate=this.payresponse.data.payment_date;
      //  this.paymenttime=this.payresponse.data.payment_time;
      // this.totalamount=this.payresponse.data.total_amount;
    // this.navCtrl.push('CustomerAfterPayment',{orderid:this.orderid,
    //   transactionid:this.transactionid2,paymentdate:this.paymentdate,
    //   paymenttime:this.paymenttime,totalamount:this.totalamount})
            
           }
           else{
             if(this.payresponse.status==0){
             let alert = this.alertCtrl.create({
              title: 'Something went wrong!',
              subTitle: 'Payment unsuccessful',
              buttons: ['OK']
    });
           
    alert.present();
           }
}
           

              
        }),
        error  => {
          let alert = this.alertCtrl.create({
      title: 'Something went wrong!',
      subTitle: 'Payment unsuccessful',
      buttons: ['OK']
    });
    alert.present();
        }

    
}

}
