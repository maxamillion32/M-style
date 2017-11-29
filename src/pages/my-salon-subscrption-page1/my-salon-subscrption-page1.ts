import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';

/**
 * Generated class for the MySalonSubscrptionPage1 page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-salon-subscrption-page1',
  templateUrl: 'my-salon-subscrption-page1.html',
})
export class MySalonSubscrptionPage1 {
mysubscribe_first_date
mysubscrption_date
mydate
remaining_days
mycurrentdate
myfinalsubscriptiondate
  constructor(public navCtrl: NavController, public navParams: NavParams,public events: Events) {
   this.mysubscribe_first_date= localStorage['my_register_date']
 // alert(this.mysubscribe_first_date)


  }


  purchase_plan(){
  	this.navCtrl.push('MySalonSubscrptionPage2')
  }
  



  ionViewDidLoad() {
 

  }

ngOnInit(){
var someDate = new Date(this.mysubscribe_first_date);

var todayDate = new Date();

var numberOfDaysToAdd = 30;

someDate.setDate(someDate.getDate() +numberOfDaysToAdd) 

 var dd = someDate.getDate();
 var mymonth = someDate.getMonth()+1 
var mm = someDate.getMonth() +1 ;
var y = someDate.getFullYear();

 var today = todayDate.getDate();
 var todaymonth = todayDate.getMonth()+1 

   var todayyear = todayDate.getFullYear();
// var someFormattedDate = dd + '/'+ mm + '/'+ y;
var someFormattedDate = y + '/'+ mm + '/'+ dd;


 var subscrptn_currentdate= todayyear + '/'+ todaymonth + '/'+ today;


     this.mycurrentdate=subscrptn_currentdate

   this.myfinalsubscriptiondate =someFormattedDate
// alert("final hai date"+ this.myfinalsubscriptiondate)
   // alert( 'aaj ke date'+this.mycurrentdate)

       // this.mysubscrption_date = mm + '/'+ dd + '/'+ y;

     this.mysubscrption_date = y + '/'+ mm + '/'+ dd
     // alert("first date"+ this.mycurrentdate )
         // alert("jo chaiye vo date"+this.mysubscrption_date)

 // var result = new Date(date);
 //  result.setDate(result.getDate() + days);
 //  return result;

 // if(this.mysubscrption_date!=null)
  var date1 = new Date(this.mycurrentdate);
  var date2 = new Date(this.myfinalsubscriptiondate);
var timeDiff = Math.abs(date2.getTime() - date1.getTime()); 
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
this.remaining_days=diffDays;
// alert(this.remaining_days)

 

}

}