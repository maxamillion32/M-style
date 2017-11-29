import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController,ActionSheetController } from 'ionic-angular';
import {DataService}  from '../../providers/data-service';
import { Observable} from "rxjs/Rx";
import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';

/**
 * Generated class for the ConfirmDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-confirm-details',
  templateUrl: 'confirm-details.html',
})
export class ConfirmDetails {
   starttime
   endtime1
   endtime2
   salonid
   totalduration
   totalcost:any=[]
   selecteddate
   employeeid
   servicesselected
   servicesarray
   employeename
   salonname
    date
    exactdate
    exactday
    exactmonth
    exactyear
    username
    useremail
   salonaddress
   salonimg
   usernumber
   starttime2
   bookingdata
   bookingid
   clientenv
   responsetype
   transactionid
   createtime
   transsactionstatus
   payresponse
   orderid
   transactionid2
   paymentdate
   paymenttime
   totalamount
   totalstartime
   onlinebooking
   paystatus
   sum
   singlecost
   multipleserresponse
   multipleservice
   totalcostcalculated
   note
   employeepic
   salonownername
   salonownerpic
   salonownerid
   employeebook
   salonownerbook
  constructor(
    public navCtrl: NavController,
    private payPal: PayPal,
    public actionSheetCtrl: ActionSheetController,
    private dataservice:DataService,
    public alertCtrl:AlertController,
    public navParams: NavParams,
    public loadingCtrl:LoadingController) {

              this.salonimg=localStorage['salonimage']
              this.username=localStorage['username']
              this.useremail=localStorage['useremail']
              this.usernumber=localStorage['customernumber']
              this.starttime2=this.navParams.get('startime2')     
              this.starttime=this.navParams.get('starttime')
              this.endtime1=this.navParams.get('endtime1')
              this.endtime2=this.navParams.get('endtime2')
              this.salonid=this.navParams.get('salonid')
              this.totalduration=this.navParams.get('totalduration')
              this.totalcost=this.navParams.get('totalcost')

                 
                this.salonownername=this.navParams.get('salonownername')
                this.salonownerpic=this.navParams.get('salonownerpic')
                this.salonownerid=this.navParams.get('salonownerid')
                this.employeebook=this.navParams.get('employeebook')
                this.salonownerbook=this.navParams.get('salonownerbook')
                                                

              // this.singlecost=this.navParams.get('selectedcost')
              
             // alert("total"+this.totalcost)
            


               // this.sum=this.totalcost.reduce(this.add,0) 
               // alert("Multiple cost"+this.sum)       
              
              this.employeeid=this.navParams.get('employeeid')
              this.employeepic=this.navParams.get('employeepic')
             
              this.servicesselected=this.navParams.get('serviceid')
              // alert("services array"+this.servicesselected)
              this.servicesarray=this.navParams.get('servicesname')
              this.employeename=this.navParams.get('employeename')
              this.bookingid=this.navParams.get('bookingid')
              this.onlinebooking=this.navParams.get('onlinebooking')
              this.salonname=this.dataservice.datavalue.salonname;
   // alert("online"+this.onlinebooking)
              this.salonaddress=this.dataservice.datavalue.salonaddress;
              this.selecteddate=this.navParams.get('selecteddate')
              // alert("date"+this.selecteddate)
              this.date=new Date(this.selecteddate)

              let demo=this.date.toString()
             // alert("new demo"+demo)
            //   alert("new split date"+demo)
            // alert("split"+demo.split(" "))

               let demo2=demo.split(" ");
             
                // alert("day"+demo2[0])
                // alert("Month"+demo2[1])
                // alert("date"+demo2[2])
                // alert("year"+demo2[3])

             this.exactday=demo2[0] 
             this.exactmonth=demo2[1]
             this.exactdate=demo2[2]
             this.exactyear=demo2[3]

             // this.totalstartime=this.starttime+':'+this.starttime2;

             // alert("hello total"+this.totalstartime)

            
              
  }

  
checkout(){


  if(this.onlinebooking==0){
 
     this.withoutpaymentbooking()

  }

  else{
   this.withpaymentbooking()  
     // this.openactionsheet()
  }
  
}

// openactionsheet(){
//   let actionSheet = this.actionSheetCtrl.create({
//       title: 'Select Payment Mode',
//       buttons: [
//         {
//           text: 'Pay Online',
//           icon:'logo-usd',
//           cssClass: 'EditionIcon',
//           handler: () => {
//             this.withpaymentbooking()  

//             // this.paypalpayment()
//           }
//         },{
//           text: 'Pay Later',
//           icon:'cash',
//           handler: () => {

//             this.withoutpaymentbooking()
           
//           }
//         },{
//           text: 'Cancel',
//           icon:'close-circle',
//           role: 'cancel',
//           handler: () => {
//             console.log('Cancel clicked');
//           }
//         }
//       ]
//     });
//     actionSheet.present();
// }


withoutpaymentbooking(){

this.paystatus=0;
 let loading = this.loadingCtrl.create({content: 'Please Wait...'});
         Observable.fromPromise(loading.present())
         .flatMap(data => this.dataservice.paymentsuccess(this.note,this.bookingid,this.transactionid,this.transsactionstatus,this.totalcostcalculated,this.salonid,this.employeeid,this.onlinebooking,this.paystatus))
         .subscribe(data  =>{ 
           
             loading.dismiss().then(()=>{

                this.payresponse=data;
           if(this.payresponse.message=="Payment info saved Successfully"){
            
     this.orderid=this.payresponse.data.order_id;
     this.transactionid2=this.payresponse.data.transaction_id;
     this.paymentdate=this.payresponse.data.payment_date;
     this.paymenttime=this.payresponse.data.payment_time;
     this.totalamount=this.payresponse.data.total_amount;
     this.navCtrl.push('CustomerWithoutPaymentPage',{salonname:this.salonname})
            
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
              let alert=this.alertCtrl.create({
              title:'Something Went Wrong',
             subTitle:'Please Try Again',
             buttons:['Ok']
              })         
           alert.present()})


          

              
        })
     
}

withpaymentbooking(){
  var cost=this.totalcostcalculated.toString()
  // alert("cost hai"+cost)
  //  if (typeof cost === "string") {
  //    alert("hello String")

  //    alert("cost"+cost)
  //   }
this.payPal.init({
  PayPalEnvironmentProduction:"EHAcM2INSj9ek0nFpvo407Lm6HAVMKek2IJ5Ogg-oAYUV_GHYn8SOluvJkEeQIgMXAJhU40zB1u8OYUL",
  PayPalEnvironmentSandbox: "Ae_SllVss8pETOKsGsePBiQXLrQHEJ_nTLplLsgw2mjpzheo4ykCzrXX7gyBvlM6rWPul7YOUoMKQEoO"
}).then(() => {
  // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
  this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
    // Only needed if you get an "Internal Service Error" after PayPal login!
    //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
  })).then(() => {
    let payment = new PayPalPayment(cost, 'USD', 'Description', 'sale');
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
          

         this.paypalpayment();
  
    }, (error) => {
          // alert(error)
          let alert = this.alertCtrl.create({
              title: 'Something went wrong!',
              subTitle: 'Payment unsuccessful',
              buttons: ['OK']
             });
        alert.present();
      // Error or render dialog closed without being successful
    });
  }, (error) => {
    // Error in configuration
     // alert(error)

       let alert = this.alertCtrl.create({
              title: 'Something went wrong!',
              subTitle: 'Payment unsuccessful',
              buttons: ['OK']
             });
        alert.present();
  });
}, (error) => {
   // alert(error)
     let alert = this.alertCtrl.create({
              title: 'Something went wrong!',
              subTitle: 'Payment unsuccessful',
              buttons: ['OK']
             });
        alert.present();
  // Error in initialization, maybe PayPal isn't supported or something else
});


}
paypalpayment(){
    this.onlinebooking=1
    this.paystatus=1
   // alert(JSON.stringify(this.transactionid))
   // alert(JSON.stringify(this.transsactionstatus))
   // alert(JSON.stringify(this.bookingid))
   // alert(JSON.stringify(this.totalcost))
         // this.transactionid='PAY-1AB23456CD789012EF34GHIJ';
         // this.transsactionstatus='approved';

        let loading = this.loadingCtrl.create({content: 'Please Wait...'});
         Observable.fromPromise(loading.present())
         .flatMap(data => this.dataservice.paymentsuccess(this.note,this.bookingid,this.transactionid,this.transsactionstatus,this.totalcostcalculated,this.salonid,this.employeeid,this.onlinebooking,this.paystatus))
         .subscribe(data  =>{ 
           
             loading.dismiss().then(()=>{

             this.payresponse=data;
           if(this.payresponse.message=="Payment info saved Successfully"){
            
       this.orderid=this.payresponse.data.order_id;
       this.transactionid2=this.payresponse.data.transaction_id;
       this.paymentdate=this.payresponse.data.payment_date;
       this.paymenttime=this.payresponse.data.payment_time;
       this.totalamount=this.payresponse.data.total_amount;
       this.navCtrl.push('CustomerAfterPayment',{orderid:this.orderid,
      transactionid:this.transactionid2,paymentdate:this.paymentdate,
      paymenttime:this.paymenttime,totalamount:this.totalamount,
      salonname:this.salonname,salonid:this.salonid})
            
           }
           else{
             let alert = this.alertCtrl.create({
              title: 'Something went wrong!',
              subTitle: 'Payment unsuccessful',
              buttons: ['OK']
    });
    alert.present();
           }

             }),error =>
              loading.dismiss().then(() => {
              let alert=this.alertCtrl.create({
              title:'SERVER ERROR',
             subTitle:'Please Try Again',
             buttons:['Ok']
              })         
           alert.present()})      
        })

    
}
addzero(min){

 if(min=='0'){
   return '00';
 }else{
   return min;
 }
}
addzero3(min){

 if(min=='0'){
   return '00';
 }else{
   return min;
 }
}
addzero2(min){
  //alert(min)
  if(min<10){
    let a='0'+min
   // alert(a)
   return a;
 }else{
   return min;
 }
}
add(a, b) {
    return a + b;
}

ngOnInit(){
   let loading = this.loadingCtrl.create({content: 'Loading...'});
         Observable.fromPromise(loading.present())
         .flatMap(data => this.dataservice.CustomerAppointmentByServices(this.servicesselected))
         .subscribe(data=>{
         loading.dismiss().then(()=>{
        this.multipleserresponse=data;
        this.multipleservice=this.multipleserresponse.servicedata; 
                   var costdata=0; 
                  for(var i=0;i<this.multipleservice.length;i++){
                     costdata=costdata+this.multipleservice[i].cost;
                     console.log("total value"+JSON.stringify(costdata))

                     this.totalcostcalculated=costdata

                  }
  console.log("hello"+JSON.stringify(this.multipleserresponse))
         }),
         error =>
             loading.dismiss().then(() => {
            let alert=this.alertCtrl.create({
            title:'SERVER ERROR',
            subTitle:'Please Try Again',
            buttons:['Ok']
           })         
           alert.present()}); 

          })  

}
}
