import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController  } from 'ionic-angular';
import {DataService}  from '../../providers/data-service';
import { Observable} from "rxjs/Rx";
@IonicPage()
@Component({
  selector: 'page-employee-online-offline',
  templateUrl: 'employee-online-offline.html',
})
export class EmployeeOnlineOffline {
   status;
   status_text;
   employeeStatusdata
   status_employee
   checkdatastatus
  constructor(public navCtrl: NavController,public alertCtrl:AlertController,
    public navParams: NavParams,private dataservice:DataService
    ,public loadingCtrl: LoadingController) {
  }

 ngOnInit(){
 	
 	this.checkstatus()

 }

  Status(){

if(this.status==true){
var Status_active=1;

	  let alert = this.alertCtrl.create({
    title: 'Confirm Status',
    message: 'Are you sure you want to be on duty?',
    buttons: [
      {
        text: 'No',
        role: 'cancel',
        handler: () => {
          console.log('No clicked');
          this.status_text='Off Duty';
          this.status='false';
        }
      },
      {
        text: 'Yes',
        handler: () => {
          console.log('Yes clicked');
          this.status_text='On Duty';
         
          	 this.dataservice.employeestatus(Status_active)
         .subscribe(data  =>{ 
         	this.employeeStatusdata=data;
         	if(this.employeeStatusdata.message=="employee status active saved suceessfully"){
console.log("active");
 this.status='true';
 let alert = this.alertCtrl.create({
                    subTitle: 'Status Updated successfully ',
                    buttons: ['OK']
                    });
                    alert.present();  

  }
  console.log('data'+JSON.stringify(this.employeeStatusdata.message));
        }),
        error  => {}
        }
      }
    ]
  });
  alert.present();
  }
  else if(this.status==false){
  	var Status_active=0;
  		  let alert = this.alertCtrl.create({
    title: 'Confirm Status',
    message: 'Are you sure you want to be off duty?',
    buttons: [
      {
        text: 'No',
        role: 'cancel',
        handler: () => {
          console.log('No clicked');
          this.status_text='On Duty';
          this.status='true';
        }
      },
      {
        text: 'Yes',
        handler: () => {
          console.log('Yes clicked');
          this.status_text='Off Duty';
          
          	 this.dataservice.employeestatus(Status_active)
         .subscribe(data  =>{ 
          this.employeeStatusdata=data;
    console.log('data'+JSON.stringify(this.employeeStatusdata.message));
  if(this.employeeStatusdata.message=="employee status inactive saved successfully"){
console.log("Inactive");
this.status='false';
 let alert = this.alertCtrl.create({
                    subTitle: 'Status Updated successfully ',
                    buttons: ['OK']
                    });
                    alert.present();     

  }

        }),
        error  => {}


        }
      }
    ]
  });
  alert.present();
  }
}
checkstatus(){


	let loading = this.loadingCtrl.create({content: 'Please Wait...'});
          Observable.fromPromise(loading.present())
.flatMap(data => this.dataservice.employeestatusstatuscheck())  
         .subscribe(data  =>{ 
         	  loading.dismiss()
         	this.checkdatastatus=data;
         	console.log(JSON.stringify(this.checkstatus))
         	console.log(JSON.stringify(this.checkstatus['employee_online_status']))
         	console.log(JSON.stringify(data.employee_online_status))
         	this.status_employee=this.checkdatastatus.employee_online_status;
         	if(this.status_employee=="1"){
         		this.status='true';
         		this.status_text='On Duty';
         	}
         	else if(this.status_employee=="0"){
             
         		this.status='false';
         		this.status_text='Off Duty';
         	}
         	// console.log(JSON.stringify("status"+this.checkstatus.employee_online_status));
        }),
        error  => {}
            
    }

}
