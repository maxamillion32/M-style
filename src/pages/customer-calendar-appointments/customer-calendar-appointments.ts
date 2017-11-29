import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController } from 'ionic-angular';
import { NgCalendarModule  } from 'ionic2-calendar';
import {DataService} from '../../providers/data-service' 
import { Observable} from "rxjs/Rx"
/**
 * Generated class for the CustomerCalendarAppointmentsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-customer-calendar-appointments',
  templateUrl: 'customer-calendar-appointments.html',
})
export class CustomerCalendarAppointmentsPage {
  viewTitle;
  isToday: boolean;
  minedata
  eventSource;
  events = []; 
  customer_name
  calendar = {
    mode: 'month',
    currentDate: new Date()
  }; 
  selecteddate;
  mydata
  date_change
  current_date
  my_services
  all_dates
  segment
  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	public loadingCtrl:LoadingController, 
  	public dataservice:DataService,
  	public alertCtrl:AlertController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CustomerCalendarAppointmentsPage');
  }
 loadEvents() {
       
        this.eventSource=this.dynamicEvents(); 
    }
      onViewTitleChanged(title) {
        this.viewTitle = title;
    }
    onEventSelected(event) {
        console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
    }
    changeMode(mode) {
        this.calendar.mode = mode;
    }
    today() {
        this.calendar.currentDate = new Date();
// alert("Current_date"+this.calendar.currentDate)
    }
    onTimeSelected(ev) {
        console.log('Selected time: ' + ev.selectedTime + ', hasEvents: ' +
            (ev.events !== undefined && ev.events.length !== 0) + ', disabled: ' + ev.disabled);
   this.date_change=ev.selectedTime
   var someDate = new Date(this.date_change);
      // alert(someDate)
    var year=someDate.getFullYear()
       month=someDate.getMonth()+1
        day =someDate.getDate()
      if(month<=9){
     var month="0"+ month
   }
     

       if(day<=9){
         var day ="0"+day
            
         }
         var mydate = year + '-'+ month + '-'+ day;
         this.current_date=mydate
   
    }
    onCurrentDateChanged(event:Date) {
        var today = new Date();
       
        today.setHours(0, 0, 0, 0);
        event.setHours(0, 0, 0, 0);
        this.isToday = today.getTime() === event.getTime();
         // alert( "Hope"+this.isToday)
    }
   
    onRangeChanged(ev) {
        console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
    }
    markDisabled = (date:Date) => {
        var current = new Date();
        current.setHours(0, 0, 0);
        return date < current
    };

     ngOnInit(){
let loading = this.loadingCtrl.create({content: 'Loading...'});
         Observable.fromPromise(loading.present())
         .flatMap(data => this.dataservice.getcustomerCalendarAppointments())
         .subscribe(data =>
                    loading.dismiss().then(() =>{ 
                     this.minedata = data
                    this.mydata=this.minedata.customerappointment
                    this.my_services=this.minedata.customerappointment.service
                    this.all_dates=this.minedata.customerappointment
             if(this.minedata.customerappointment!=undefined){
  this.customer_name=this.minedata.customerappointment[0].customer_name
              }
 
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


                    )}
dynamicEvents(){
  if(this.minedata.customerappointment==undefined){
        let alert = this.alertCtrl.create({
      title: 'Oops!',
      subTitle: 'No Appointment Exist !',
      buttons: ['OK']
                        });
        alert.present();
      }
          else {
    
         
  // var date=new Date('2017-08-23T12:00:00')
   
  for (var i = 0; i <this.minedata.customerappointment.length; i++) {

for (var j=0;j<this.minedata.customerappointment[i].service.length;j++){
  if(this.minedata.customerappointment[i].service[j]!=null){
 this.events.push({ 
  

   startTime:new Date(this.minedata.customerappointment[i].date), 
   endTime: new Date(this.minedata.customerappointment[i].date)
})
 // console.log('services'+this.minedata.customerappointment[i].service[j].title)

}
    }
    if(this.minedata.customerappointment.length==i+1)
      {
      
         return this.events;
         }
        }
  

  }}

}
