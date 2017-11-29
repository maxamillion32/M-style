import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ModalController,LoadingController,
AlertController } from 'ionic-angular';

import {DataService } from "../../providers/data-service"
import { Observable} from "rxjs/Rx"
/**
 * Generated class for the SalonSchedule page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-salon-schedule',
  templateUrl: 'salon-schedule.html',
}) 
export class SalonSchedule {

 value1: boolean;
  value2: boolean;
   value3: boolean;
    value4: boolean;
    value5: boolean;
    value6: boolean
    value7: boolean;

mon_start_time
mon_end_time
tue_start_time
tue_end_time
wed_start_time
wed_end_time
thu_start_time
thu_end_time
fri_start_time
fri_end_time
sat_start_time
sat_end_time
sun_start_time
sun_end_time

fb
insta
wheelchair_value
wifi
id
 description;
    address:any = {
        place: '',
        set: false,
    };
    placesService:any;
    map: any;
    markers = [];
placedetails: any;
mydata
     minedata
     mysalon_name
     myaddress
     mydescription
     mycontact_number
     salon_name
    salon_description
    website
    schedule_value
    parking_value
    contact_number
    leads
    myvalue2
       myvalue1
          myvalue3
             myvalue4
                myvalue5   
                myvalue6
                  myvalue7
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewctrl:ViewController,public modalCtrl:ModalController,private dataservice :DataService,
private alertCtrl: AlertController,
public loadingCtrl: LoadingController ) {

   // alert(this.mon_start_time)
 
}

 


time1=[
{time:"10:00" , value:1},
{time:"10:30 ",value:2},
{time:"11:00 ",value:3},
{time:"11:30 ",value:4},
{time:"12:00 ", value:5},
{time:"12:30 ",value:6},
{time:"13:00",value:7},
{time:"13:30 ",value:8},
{time:"14:00 ",value:9},
{time:"14:30 ",value:10},
{time:"15:00 ",value:11},
{time:"15:30 ",value:12},
{time:"16:00 ",value:13},
{time:"16:30 ",value:14},
{time:"17:00 ",value:15},

{time:"17:30 ",value:16},
{time:"18:00 ",value:17},

{time:"18:30 ",value:18},
{time:"19:00 ",value:19},

{time:"19:30 ",value:20},
{time:"20:00 ",value:21},

{time:"20:30 ",value:22},
{time:"21:00 ",value:23},

{time:"21:30 ",value:24},
{time:"22:00 ",value:25},
{time:"22:30 ",value:26},
{time:"23:00 ",value:27},
{time:"23:30 ",value:28},

]

time2=[

{time:"10:30 ",value:2},
{time:"11:00 ",value:3},
{time:"11:30 ",value:4},
{time:"12:00 ", value:5},
{time:"12:30 ",value:6},
{time:"13:00",value:7},
{time:"13:30 ",value:8},
{time:"14:00 ",value:9},
{time:"14:30 ",value:10},
{time:"15:00 ",value:11},
{time:"15:30 ",value:12},
{time:"16:00 ",value:13},
{time:"16:30 ",value:14},
{time:"17:00 ",value:15},

{time:"17:30 ",value:16},
{time:"18:00 ",value:17},

{time:"18:30 ",value:18},
{time:"19:00 ",value:19},

{time:"19:30 ",value:20},
{time:"20:00 ",value:21},

{time:"20:30 ",value:22},
{time:"21:00 ",value:23},

{time:"21:30 ",value:24},
{time:"22:00 ",value:25},
{time:"22:30 ",value:26},
{time:"23:00 ",value:27},
{time:"23:30 ",value:28},

]


days=[

{day:"Monday"},
{day :"Tuesday"},
{day :"Wednesday"},
{day :"Thursday"},
{day :"Friday"},
{day :"Saturday"},
{day :"Sunday"}
 

 ]




  ionViewDidLoad() {
    console.log('ionViewDidLoad SalonSchedule');
  }



   update1(){
this.myvalue1= this.value1;

 this.mon_start_time =""
this.mon_end_time =""
    }

       update2(){
this.myvalue2= this.value2;

 this.tue_start_time=""
this.tue_end_time=""

    }

       update3(){
this.myvalue3= this.value3;

 this.wed_start_time=""
this.wed_end_time=""
    }
       update4(){
this.myvalue4= this.value4;

 this.thu_start_time=""
this.thu_end_time=""
    }
       update5(){
this.myvalue5= this.value5;

 this.fri_start_time=""
this.fri_end_time=""
    }
       update6(){
this.myvalue6= this.value6;

 this.sat_start_time=""
this.sat_end_time= ""
    }
          update7(){
this.myvalue7= this.value7;

 this.sun_start_time= ""
this.sun_end_time= ""
    }
   // cancel(){
   //   this.viewctrl.dismiss()   
   //   }

    timepicker1(value1){
      value1=false
  let modal =this.modalCtrl.create('SalonScheduleTimePicker',{day1:'Monday'})
                  modal.present();
                  modal.onDidDismiss(data =>{
                            this.mon_start_time=data.our_start_time+'-'
                            this.mon_end_time=data.our_end_time+' '
  })
}
timepicker2(){
  let modal =this.modalCtrl.create('SalonScheduleTimePicker',{day2:'Tuesday'})
                  modal.present();
                  modal.onDidDismiss(data =>{
                 
                       this.tue_start_time=data.our_start_time+'-'
                            this.tue_end_time = data.our_end_time+' '
                   
                  })
}


    timepicker3(value3){
      value3=false
  let modal =this.modalCtrl.create('SalonScheduleTimePicker',{day3:'Wednesday'})
                  modal.present();
                  modal.onDidDismiss(data =>{
                            this.wed_start_time= data.our_start_time+'-'
                            this.wed_end_time=data.our_end_time+' '
  })
}


    timepicker4(value4){
      value4=false
  let modal =this.modalCtrl.create('SalonScheduleTimePicker',{day4:'Thursday'})
                  modal.present();
                  modal.onDidDismiss(data =>{
                            this.thu_start_time=data.our_start_time+'-'
                            this.thu_end_time=data.our_end_time+' '
  })
}

    timepicker5(value5){


      value5=false
  let modal =this.modalCtrl.create('SalonScheduleTimePicker',{day5:'Friday'})
                  modal.present();
                  modal.onDidDismiss(data =>{
                            this.fri_start_time=data.our_start_time+'-'
                            this.fri_end_time=data.our_end_time+' '
  })
}

    timepicker6(value6){
      value6=false
  let modal =this.modalCtrl.create('SalonScheduleTimePicker',{day6:'Saturday'})
                  modal.present();
                  modal.onDidDismiss(data =>{
                            this.sat_start_time=data.our_start_time+'-'
                            this.sat_end_time=data.our_end_time+' '
  })
}

    timepicker7(value7){
      value7=false
  let modal =this.modalCtrl.create('SalonScheduleTimePicker',{day7:'Sunday'})
                  modal.present();
                  modal.onDidDismiss(data =>{
                    
                            this.sun_start_time=data.our_start_time+'-'
                         
                            this.sun_end_time=data.our_end_time
  })
}




       save(){
    this.viewctrl.dismiss({
     mon:this.mon_start_time + this.mon_end_time,
      tue:this.tue_start_time+this.tue_end_time,
      wed: this.wed_start_time+this.wed_end_time,
       thu:this.thu_start_time+this.thu_end_time,

        fri:this.fri_start_time+this.fri_end_time,
         sat:this.sat_start_time+this.sat_end_time,
         sun:this.sun_start_time+this.sun_end_time,
       
       }
       )

     }
  // this.schedule_value= 'Monday'+' '+ this.mon+' ' + 'Tuesday'+ ' '+ this.tue+' ' +  'Wednesday'+' '+



  //       this.wed +'Thursday'+' '+ this.thurs+'Friday'+' '+ this.fri+'Saturday'+' '+this.sat+'Sunday'+' '+this.sun
    cancel(){
     this.viewctrl.dismiss()


    }
  


// showDateTimePicker(event) {
//     this.datePicker.show({
//         date: new Date(),
//         mode: 'time',
//         is24Hour: true,
//         androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
//     }).then(
//         date => { event.target.value = date },
//         err => console.log('Error occurred while getting date: ' + err)
//     )
// }


}
