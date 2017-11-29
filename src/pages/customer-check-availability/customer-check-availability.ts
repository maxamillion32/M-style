import { Component } from '@angular/core';
import { IonicPage, NavController,ToastController,
 NavParams,ModalController,LoadingController,AlertController } from 'ionic-angular';
import {DataService}  from '../../providers/data-service';
import { Observable} from "rxjs/Rx";
import { NgCalendarModule  } from 'ionic2-calendar';
import {Http} from '@angular/http';
@IonicPage()
@Component({
  selector: 'page-customer-check-availability',
  templateUrl: 'customer-check-availability.html',
})


export class CustomerCheckAvailability {
  eventSource;
  viewTitle;
  isToday: boolean;
  calendar = {
    mode: 'month',
    currentDate: new Date()
  }; // these are the variable used by the calendar.
  add;
  title;
  cost;
  time;
  icon;
  bookingdata
  addservicesdata;
  userid;
  http;
  service_id;
  data;
  barber_id
  content
  employeepic
  employeename;
  datecolor: string = null;
  bigdata = []
  bigdata1 = []
  servicear = []
  servicesname=[]
  secondarr=[]
  selectedcost=[]
  title1
  cost1
  time1
  model;
  selectedservicetitle
  selectedservicetime
  selectedservicecost
  updatedadddata
  deleteres
  timedata
  timedata1
  servicesid
  selectedsalonid
  selectedserviceid
  myDate
  myDate2
  salonid
  selecteddate
  employeeid
  noservices
  color
  choosentime
  totaltimevalue
  totalTime:number=0;
  endtime
  slot;
 totalcost:number=0;
 defaultcost:number=0;
 totalvalue
 selectedItem
 selectedhour
 selectedmin
 choosetime2
 endtime1
 endtime2
 starting
 end
 selectedservicehour
 selectedservicemin
 defaulttime1
 defaulttime2
 totalhour
 totalmin
 bookingid
 totalstartime
 bookeddate
 sevicearray
 totalvalue2
 timeselected1
 timeselected2
 serviceid
 currentHr1;
 currentMin1;
 currentHr2;
 currentMin2;
 serviceid2
 newserviceid
 starttime1
 starttime2
 starttime3
 accountsetting
 onlinebooking
 scheduleappointment
 allowmultiplebooking
 hournoticeforbooking
 hournoticeforCancel
 timeslotsavailable
   month:any=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    days:any=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    selectedMonth;
    daysinmonth;
    selectedYear;
    date:number;
    year;
    leapornot;
    totaldays;
    oddDays
    monthfirstday;
    selectDate:any;
    Currentdate
    selectm
    salonownername
    salonownerpic
    salonownerid
    employeebook
    salonownerbook
    currenthours
    box:any=['','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','','']
  constructor(public navCtrl: NavController, http: Http,private alertCtrl: AlertController,
    private dataservice: DataService, public modalCtrl: ModalController,
    public navParams: NavParams, public loadingCtrl: LoadingController,
    public toastCtrl: ToastController) {
    this.http = http;
    this.slot=0;
    this.color='without';
    this.employeepic = this.navParams.get('pic')
    this.employeename = this.navParams.get('employeename')
    this.employeeid = this.navParams.get('employeeid')
    this.employeebook=this.navParams.get('employeebook')

    // alert("employeebook"+this.employeebook)
    this.salonownername=this.navParams.get('salonownername')
    this.salonownerpic=this.navParams.get('salonownerpic')
    this.salonownerid=this.navParams.get('salonownerid')
    this.salonownerbook=this.navParams.get('salonbook')

     // alert("salonownerbook"+this.salonownerbook)
    this.model = this.dataservice.value2.selectedservices;
      var currenttime=new Date();
     console.log("currenttime"+currenttime)
     console.log("hours"+currenttime.getHours())
     console.log("minutes"+currenttime.getMinutes())
     this.currenthours=currenttime.getHours()

                
    // this.salonid = this.model.salon_id
    // alert("model data"+JSON.stringify(this.model))
    if (this.model ) {
      // code...
     // alert("hello model"+JSON.stringify(this.model))
    this.salonid = this.model.salon_id
    this.selectedservicetitle=this.model.title;
    this.selectedservicehour=this.model.time.hr;
    this.selectedservicemin=this.model.time.min;
     
    
      this.defaulttime1=10
      this.defaulttime2=0
      this.totalhour=parseInt(this.defaulttime1+this.selectedservicehour)
       this.totalmin=parseInt(this.defaulttime2+this.selectedservicemin)
            if(this.totalmin>59){
               this.totalmin=this.totalmin-60
               this.defaulttime1++

            }
    
     
    this.selectedservicecost=this.model.cost;
    this.selectedsalonid=this.model.salon_id;
    this.selectedserviceid=this.model.service_id;
    this.servicear.push(this.selectedserviceid)
    this.servicesname.push(this.selectedservicetitle)
    this.selectedcost.push(this.selectedservicecost)
 
    }
    
let m=new Date();
    var today = new Date();
    this.Currentdate = today.getDate();
   
    this.selectedYear=m.getFullYear()
    this.selectedMonth=m.getMonth()
    console.log(m.getMonth());
    var month=this.selectedMonth+1;
      this.selecteddate=this.selectedYear+'-'+month+'-'+this.Currentdate;

   // alert("Currentdate"+  this.Currentdate)   
   // alert("Selected Date"+ this.selecteddate)
    this.calculate();
  

   
  }
  calculate(){
    if((this.selectedYear % 4 == 0 && this.selectedYear % 100 !=0) || this.selectedYear % 400 == 0 )
    {
      this.leapornot='leap'
      this.totaldays=366;
      if(this.selectedMonth+1==1 || this.selectedMonth+1==3 || this.selectedMonth+1==5 || this.selectedMonth+1==7 || this.selectedMonth+1==8 || this.selectedMonth+1==10 || this.selectedMonth+1==12)
      {this.daysinmonth=31;}
      if(this.selectedMonth+1==2)
      {this.daysinmonth=29;}
      if(this.selectedMonth+1==4 || this.selectedMonth+1==6 || this.selectedMonth+1==9 || this.selectedMonth+1==11) 
      {this.daysinmonth=30;}
    }
    else{
      this.leapornot='not leap'
      this.totaldays=365;
      if(this.selectedMonth+1==1 || this.selectedMonth+1==3 || this.selectedMonth+1==5 || this.selectedMonth+1==7 || this.selectedMonth+1==8 || this.selectedMonth+1==10 || this.selectedMonth+1==12)
      {this.daysinmonth=31;}
      if(this.selectedMonth+1==2)
      {this.daysinmonth=28;}
      if(this.selectedMonth+1==4 || this.selectedMonth+1==6 || this.selectedMonth+1==9 || this.selectedMonth+1==11) 
      {this.daysinmonth=30;}
    }
    this.calculatedays();
    let z=1 
    for(let i=0;i<this.box.length;i++){
      if(i>=this.monthfirstday){
        if(z<=this.daysinmonth){
          this.box[i]=z;
          z++;
        }
        else{
          this.box[i]=null;
        }
      }
      else{
        this.box[i]=null;
      }
    }
  }
  previousMonth(){
    if(this.selectedMonth>0){
      this.selectedMonth=this.selectedMonth-1;  
    }else{
      this.selectedMonth=11;
      this.selectedYear--;
    }
    this.calculate();
  }
  nextMonth(){
    if(this.selectedMonth<11){
      this.selectedMonth=this.selectedMonth+1;  
    }else{
      this.selectedMonth=0;
      this.selectedYear++;
    }
    this.calculate();
  }
  calculatedays(){
    let d=0;
    this.oddDays = this.selectedYear % 400
    console.log(this.oddDays)
    for(let i=this.oddDays;i>0;i--){
      if((i % 4 == 0 && i % 100 != 0) || i % 400 == 0){
        d=d+2
        console.log('leap')
      }
      else{
        d=d+1
        console.log('not leap')
      } 
    }
    if(d>7){
      d = d % 7
    }
    let a = this.odddaysinmonth();
    console.log((a+d)%7)
    this.monthfirstday=(a+d)%7;
  }
  odddaysinmonth(){
    let d=0
    let m=[31,28,31,30,31,30,31,31,30,31,30,31]
    for(let i=0;i<this.selectedMonth;i){
        d=d+m[i];i++;
    } 
    if((this.selectedYear % 4 == 0 && this.selectedYear % 100 !=0) || this.selectedYear % 400 == 0){
      d=d+1;
    }  
    return d;
  }

  pickDate(value){
    if(value!=null){
      if(this.datecolor!=null){
        document.getElementById(this.datecolor).style.background = '#fff';
        document.getElementById(this.datecolor).style.color = "#000";
        this.datecolor=null;
        this.pickDate(value);
      }
      if(this.datecolor==null){
        this.datecolor = value + 'datediv';
        document.getElementById(this.datecolor).style.background = '#FF0000';
        document.getElementById(this.datecolor).style.color = "white";
        this.selectm=this.selectedMonth+1;
        // alert("picked date "+value+'-'+this.selectedMonth+'-'+this.selectedYear);
        this.selecteddate=this.selectedYear+'-'+this.selectm+'-'+value;
       // alert("Selected Date 2"+this.selecteddate)
      }
    }
  }

  ngAfterViewInit(){
       this.datecolor = this.Currentdate + 'datediv';
       document.getElementById(this.datecolor).style.background = '#FF0000';
        document.getElementById(this.datecolor).style.color = "white"; 
  }
 
  ngOnInit(){
       this.accountsetting_timeslots()  
}

  openservicesmodel() {

    let profileModal = this.modalCtrl.create('CustomerAddServices', {
      bigdata: this.bigdata
    });

    profileModal.onDidDismiss(data => {
       console.log('hello dismissed data'+JSON.stringify(data))

          this.noservices='false'
         this.title=data.title;
         this.cost=data.cost;
         this.time=data.time;
         this.serviceid=data.service_id;

         this.bigdata.push({title:this.title,cost:this.cost,time:this.time,service_id:this.serviceid})
             
    });

    profileModal.present();


  }

  
  
  selectedtime(data,timevalue,timemin) {


     this.slot=1; 
     this.defaulttime1=timevalue
     this.defaulttime2=timemin

 this.totalhour=this.defaulttime1+this.selectedservicehour
 this.totalmin=this.defaulttime2+this.selectedservicemin
            if(this.totalmin>59){
               this.totalmin=this.totalmin-60
              this.totalhour++

            }
    this.selectedhour=timevalue
    this.selectedmin=timemin
    this.selectedItem =data;  
     
    

  }
  appoint() {
    this.starttime3=this.currentHr2+':'+this.currentMin2;
     // alert("hello"+this.bigdata.length)
    if(this.currentHr2==undefined && this.currentMin2==undefined){

     this.sevicearray=this.selectedserviceid       
     this.starttime1=this.defaulttime1+':'+this.defaulttime2;
     this.starttime2=this.totalhour+':'+this.totalmin;
         this.endtime1=this.totalhour;
         this.endtime2=this.totalmin;

    // this.booking(this.newserviceid,this.selectedservicetitle,this.selectedservicecost)


    }

    if(this.bigdata.length==0){
       this.endtime1=this.totalhour;
       this.endtime2=this.totalmin;
       this.sevicearray=this.selectedserviceid     
       this.starttime1=this.defaulttime1+':'+this.defaulttime2;
      this.starttime2=this.totalhour+':'+this.totalmin;
    this.booking(this.sevicearray,this.selectedservicetitle,this.selectedservicecost)
   }
 
    if(this.bigdata.length > 0){



      this.starttime1=this.defaulttime1+':'+this.defaulttime2;
      this.starttime2=this.currentHr2+':'+this.currentMin2;

         this.endtime1=this.currentHr2;
         this.endtime2=this.currentMin2;
              for (var i = 0; i <  this.bigdata.length; i++) {

                console.log("id check" + JSON.stringify( this.bigdata[i].service_id))
                console.log("services name"+JSON.stringify( this.bigdata[i].title))

                this.servicear.push( this.bigdata[i].service_id)
                this.servicesname.push( this.bigdata[i].title)
                this.selectedcost.push( this.bigdata[i].cost)   
             console.log("servicesname"+JSON.stringify(this.servicesname))
             console.log("servicesarray"+JSON.stringify(this.servicear))
             console.log("Cost array"+JSON.stringify(this.selectedcost))
                if ( this.bigdata.length == i + 1) {
                        
                        // alert("Repeated Array"+this.servicear);
                       let b=this.unique(this.servicear)
                         // alert("Filter Array id"+b)
                        let c=this.unique(this.servicesname)
                          // alert("Filter Array name"+c)

                        let d=this.unique(this.selectedcost)
                        // alert("Filter Array cost"+d)
                       this.booking(b,c,d)
                 
                   
                }


              }



  }

    // alert("salonid"+salonid)
  }

  booking(serviceids,servicesname,servicescost) {
  
       var a=this.selecteddate.split("-")
       var b=a[0]
       var c=a[1]
       var d=a[2]
       var e=parseInt(d)
       var f=parseInt(this.Currentdate)

    if(e<f){
       let alert = this.alertCtrl.create({
            title: 'SORRY!',
            subTitle: 'Selected Date is already passed' ,
            buttons: ['ok']
          });
          alert.present();
    }

  else {

    // var tzoffset = (new Date(this.selecteddate)).getTimezoneOffset() * 60000; //offset in milliseconds
    // var localISOTime = (new Date(this.selecteddate - tzoffset)).toISOString().slice(0,-1)
    // let c=localISOTime.split('T')
   

     this.bookeddate=this.selecteddate
     // console.log("start time"+this.choosentime)
     // console.log("end time"+ this.endtime)
     // console.log("salon id"+this.salonid)
     // console.log("total Duration"+this.totaltimevalue)
     // console.log("total Cost"+this.totalcost)
     // console.log("Employee id"+this.employeeid)
     // console.log("Service id"+serviceids)

  this.checkbooking(serviceids,servicesname,servicescost)
  
}
  }


getMin(min){
 if(min=='0'){
   return '00';
 }else{
   return min;
 }
}
addzero(min){

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

unique(array){
         return array.filter(function(el, index, arr) {
                  return index == arr.indexOf(el);    
              });
     }
  
  
 checkbooking(serviceids,servicesname,servicescost){
      // alert("hello starttime"+this.starttime1)

      var a=this.starttime1.split(':')
     
     if(a[0]>=18){    
        let alert = this.alertCtrl.create({
         title: 'SORRY!',
        subTitle: ' You are not allowed to book the last time slot of the sine',
         buttons: ['ok']
                  });
          alert.present();
     }
else{
    this.sevicearray=serviceids
    let loading = this.loadingCtrl.create({
      content: 'Please Wait...'
    });
    Observable.fromPromise(loading.present())
      .flatMap(data => this.dataservice.customerbooking(this.sevicearray,this.starttime1,
           this.starttime2,this.salonid,this.bookeddate,this.employeeid))
      .subscribe(data =>
        loading.dismiss().then(() => {
          this.bookingdata = data

                if(this.bookingdata.status==1){
                    

                    this.bookingid=this.bookingdata.data.booking_id;
           console.log("hello new "+this.bookingid)
         this.navCtrl.push('ConfirmDetails',{
         bookingid:this.bookingid,
         starttime:this.defaulttime1,
         startime2:this.defaulttime2,
         endtime1: this.endtime1,
         endtime2: this.endtime2,
         salonid:this.salonid,
         totalduration:this.totaltimevalue,
         totalcost:servicescost,
         selecteddate:this.bookeddate,
         employeeid:this.employeeid,
         serviceid:this.sevicearray,
         servicesname:servicesname,
         employeename:this.employeename,
         onlinebooking:this.onlinebooking,
         employeepic:this.employeepic,
         salonownername:this.salonownername,
         salonownerpic:this.salonownerpic,
         salonownerid:this.salonownerid,
         employeebook:this.employeebook,
         salonownerbook:this.salonownerbook


       })
        
          
                }

                else if(this.bookingdata.status==0){
                    let alert = this.alertCtrl.create({
                    title: 'SORRY!',
                    subTitle: 'This slot is already booked,Please choose another slot',
                    buttons: ['ok']
                  });
                  alert.present();
           
                }
              
              
        }),
        error =>
        loading.dismiss().then(() => {})
      );
}
    

            
 }
deleteservice(i){
  this.bigdata.splice(i,1)
}
getHours1(time,i){
  if (i==0) {
     this.currentHr1=this.totalhour
     if (this.currentHr1<10) {
       return '0'+this.currentHr1
     }else{
      return this.currentHr1
     }
  }else{
    this.currentHr1=this.currentHr2
       if (this.currentHr1<10) {
         return '0'+this.currentHr1
       }else{
        return this.currentHr1
       }
  }
}
getMin1(time,i){
  if (i==0) {
     this.currentMin1=this.totalmin
     
     if (this.currentMin1<10) {
       return '0'+this.currentMin1
     }else{
       return this.currentMin1
     }
    
  }else{
     this.currentMin1=this.currentMin2
    if (this.currentMin1<10) {
       return '0'+this.currentMin1
     }else{
     return  this.currentMin1
     }
    }
}
getHours2(time,i){ 
    if(this.currentMin1+time.min>59){
      this.currentHr2=this.currentHr1+time.hr+1;
      if (this.currentHr2<10) {
       return '0'+this.currentHr2
     }else{
       return this.currentHr2
     }
    }else{
      this.currentHr2=this.currentHr1+time.hr;
      if (this.currentHr2<10) {
       return '0'+this.currentHr2
     }else{
      return this.currentHr2
     }
    }
}
getMin2(time,i){
    if(this.currentMin1+time.min>59){
      this.currentMin2=this.currentMin1+time.min-60
      if (this.currentMin2<10) {
       return '0'+this.currentMin2
      }else{

        return this.currentMin2;
      }
    }else{
      this.currentMin2=this.currentMin1+time.min
     if (this.currentMin2<10) {
       return '0'+this.currentMin2
      }else{

        return this.currentMin2;
      }
    }
}
accountsetting_timeslots() {
  let loading = this.loadingCtrl.create({content: 'Please wait...'});
  loading.present();
   Observable.forkJoin(
        this.http.post('http://gagandeepsethi.com/salonDirectory/WebServices/accountSettingsGetBySalonId.json',{salon_id:this.salonid}).map((res:Response) => res.json()),
        this.http.post('http://gagandeepsethi.com/salonDirectory/WebServices/customerSideTimeSlot.json',{salon_id:this.salonid,}).map((res:Response) => res.json())
    ).subscribe(
      data => {
          loading.dismiss();

     this.accountsetting = data[0]
     this.onlinebooking=this.accountsetting.data.online_booking;
     this.scheduleappointment=this.accountsetting.data.schedule_appointment;
     this.allowmultiplebooking=this.accountsetting.data.allow_multi_service_booking;
     this.hournoticeforbooking=this.accountsetting.data.hours_notice_for_online_booking;
     this.hournoticeforCancel=this.accountsetting.data.hours_notice_for_cancel_booking;

         //Timeslots
         this.timeslotsavailable= data[1]
         this.timedata=this.timeslotsavailable.slotdata;
      },
      (err) => {
        loading.dismiss();

         let alert=this.alertCtrl.create({
          title:'SERVER ERROR',
          subTitle:'Please Try Again',
          buttons:['Ok']
           })
     
            alert.present()
        console.error(err)}
    );
}
}

