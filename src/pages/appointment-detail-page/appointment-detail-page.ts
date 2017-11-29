import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AppointmentDetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-appointment-detail-page',
  templateUrl: 'appointment-detail-page.html',
})
export class AppointmentDetailPage {
appointment_data
   str
    str2
    str3
   customer_name
    employe_name
     service
       appointment_date
         start_time

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.appointment_data= this.navParams.get('data')
  	
   this.str=this.appointment_data.title

  this.str2=this.appointment_data.startTime
  
       this.str3=this.appointment_data.endTime

       var splitted =this.str.split('-'); 

           // var splitted2 =this.str2.substring(0,4); 

           // alert('split2'+splitted2)

       // var splitted3 =this.str2.substring(5,9);

       // alert(splitted3) 

        var splitted3 =this.str.split('T'); 

      // this.appointment_date=splitted2[0]

           // this.appointment_date=splitted2[1]
           
    this.customer_name =splitted[0]

      this.service =splitted[1]
         
           this.employe_name =splitted[2]

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentDetailPage');
  }

}
