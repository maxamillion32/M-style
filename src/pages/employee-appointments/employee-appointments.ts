import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController} from 'ionic-angular';
import {DataService}  from '../../providers/data-service';
import { Observable} from "rxjs/Rx";
/**
 * Generated class for the EmployeeAppointments page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-employee-appointments',
  templateUrl: 'employee-appointments.html',
})
export class EmployeeAppointments {
bookings;
appoint
bookingdata
upcomingdata
pastdata
currentdata
past
up
  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public loadingCtrl:LoadingController,public alertCtrl:AlertController,
   private dataservice:DataService) {
  		this.bookings="upcoming";
  		 this.past='false'
        this.up='false'
  	
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeeAppointments');
  }
ngOnInit(){
     
     let loading = this.loadingCtrl.create({content: 'Please Wait...'});
         Observable.fromPromise(loading.present())
         .flatMap(data => this.dataservice.EmployeebookingList())
         .subscribe(data =>
                    loading.dismiss().then(() =>{ 
                this.bookingdata = data
                this.upcomingdata= this.bookingdata.upcominginfo;
                this.pastdata=this.bookingdata.pastinfo; 
                this.currentdata=this.bookingdata.currentinfo; 
                    // if(this.pastdata==''){
                    //    // alert("no past info")

                    //    this.past='true';
                    //   }
                    // else if (this.currentdata=='')
                    //  {
                    //       alert("no current data")
                    // }   


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
                           let alert = this.alertCtrl.create({
                      title: 'ALERT!',
                      subTitle: 'Something Went Wrong',
                      buttons: ['ok']
                          });
                    alert.present(); 
                      })
                    ); 

  }

}
