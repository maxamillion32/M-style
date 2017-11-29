import { Component ,ViewChild } from '@angular/core';
import { Platform,Nav } from 'ionic-angular';
import { StatusBar} from '@ionic-native/status-bar';
import { Device} from 'ionic-native';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HomePage}    from '../pages/home/home';
import { Events,AlertController } from 'ionic-angular';
import { Network } from '@ionic-native/network';
// import {
//   Push,
//   PushToken
// } from '@ionic/cloud-angular';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;
  rootPage;
  pages: Array<{title: string, component: any, logo: string}>;
  salonside: Array<{title: string, component: any, logo: string}>;
  employeeside: Array<{title: string, component: any, logo: string}>;
  guestside: Array<{title: string, component: any, logo: string}>;
  username;
  usertype;
  auth;
  userprofilepic;
  constructor(
    platform: Platform, statusBar: StatusBar, 
    private alertCtrl: AlertController,
    splashScreen: SplashScreen,
    public events: Events,
    private network: Network,
   ) {

    events.subscribe('user:created', (user,authinfo,username,userpic,optional?) => {
           if(optional)    {
              this.userprofilepic=optional;
              this.username=username;
              this.usertype=user;
              this.auth= authinfo;

           }           
                          
             else
             {
                this.usertype=user;
                this.auth= authinfo;
               this.username=username;
               this.userprofilepic=userpic;
          if(this.userprofilepic=='null'){
               this.userprofilepic='false';

                           }
                           else{
              this.userprofilepic=userpic;
                           }

             }
                          

                        
             });
           

           
         
         

         

    this.pages = [
       { title: 'HOME', component:'CustomerCategories' , logo: 'assets/icon/icon8.png'},
       { title: 'MY PAYMENTS', component:'CustomerPayments' , logo: 'assets/icon/payment.png'},
       { title: 'MY BOOKINGS', component:'CustomerBookings', logo: 'assets/icon/icon11.png'},
       { title: 'MY APPOINTMENTS', component:'CustomerCalendarAppointmentsPage', logo: 'assets/icon/icon11.png'},
       { title: 'NOTIFICATION', component:'CustomerNotification', logo: 'assets/icon/icon30png.png'},
       { title: 'SHOPS NEAR BY', component:'NearBySalon' , logo: 'assets/icon/icon25.png'},
       { title: 'ABOUT US', component:'AboutUs' , logo: 'assets/icon/icon12.png'},       
       { title: 'CONTACT US', component:'ContactUs', logo: 'assets/icon/icon15.png'},
       { title: 'FAQ', component:'Faq', logo: 'assets/icon/icon18.png'},
       { title: 'HOW IT WORKS', component:'HowItWorks' , logo: 'assets/icon/icon19.png'},
       
       
      ]



    this.salonside = [
      { title: 'HOME', component:'MySalonHome' , logo: 'assets/icon/icon8.png'},
       // { title: 'MY APPOINTMENTS', component:'SalonAppointment' , logo: 'assets/icon/payment.png'},
       // { title: 'MY AVAILABILITY', component:'SalonOnlineBooking', logo: 'assets/icon/icon11.png'},
      // { title: 'NOTIFICATION', component:'SalonNotification', logo: 'assets/icon/icon30png.png'},
      { title: 'MY GALLERY', component:'SalonImageGallery' , logo: 'assets/icon/icon.png'},
       { title: 'ABOUT US', component:'AboutUs' , logo: 'assets/icon/icon12.png'},       
       { title: 'CONTACT US', component:'ContactUs', logo: 'assets/icon/icon15.png'},
       { title: 'FAQ', component:'Faq', logo: 'assets/icon/icon18.png'},
       // { title: 'HOW IT WORKS', component:'HowItWorks' , logo: 'assets/icon/icon19.png'},
       
      ]



    this.employeeside = [
      { title: 'HOME', component:'EmployeeHome' , logo: 'assets/icon/icon8.png'},
       { title: 'MY APPOINTMENTS', component:'EmployeeAppointments' , logo: 'assets/icon/payment.png'},
       { title: 'MY AVAILABILITY', component:'EmployeeOnlineOffline', logo: 'assets/icon/icon11.png'},
      ]



       this.guestside = [
    { title: 'HOME', component:HomePage , logo: 'assets/icon/icon8.png'},
    { title: 'LOGIN', component:'Login' , logo: 'assets/icon/icon8.png'},
    { title: 'SIGN UP', component:'Createaccount' , logo: 'assets/icon/payment.png'},
    { title: 'ABOUT US', component:'AboutUs' , logo: 'assets/icon/icon12.png'},       
    { title: 'CONTACT US', component:'ContactUs', logo: 'assets/icon/icon15.png'},
    { title: 'FAQ', component:'Faq', logo: 'assets/icon/icon18.png'},
    { title: 'HOW IT WORKS', component:'HowItWorks' , logo: 'assets/icon/icon19.png'},
        
      ]

      if(localStorage['authenticate']=='Customerside'){
              this.usertype=0;
              this.auth='true';
              this.rootPage = 'CustomerCategories';
             this.username=localStorage['username']
           this.userprofilepic=localStorage['img']
      }

      else if(localStorage['authenticate']=='Salonside'){
                 this.usertype=1;
                 this.auth='true';
                 this.rootPage = 'MySalonHome';
                 this.username=localStorage['username']
                 this.userprofilepic=localStorage['img']
      }

      else if(localStorage['authenticate']=='Employeeside'){

               this.usertype=2;
               this.auth='true';
               this.rootPage = 'EmployeeHome';
              this.username=localStorage['username']
              this.userprofilepic=localStorage['img']
      }
      else if(localStorage['authenticate']=='Guest'){

               this.usertype=3;
               this.auth='false';
               this.rootPage = 'CustomerCategories';
              this.username=localStorage['username']
              this.userprofilepic='false';
      }

      else if(
        localStorage['authenticate']!='Customerside'
        ||localStorage['authenticate']!='Salonside'
        ||localStorage['authenticate']!='Employeeside'
        ||localStorage['authenticate']!='Guest'){

            this.rootPage=HomePage;

      }



    platform.ready().then(() => {

      // if(Device.platform=='Browser'){
      //   console.log(Device);
      // this.push.register().then((t: PushToken) => {
      //   return this.push.saveToken(t);
      // }).then( (t: PushToken) => {
      //   console.log('Token Saved', t.token);
      //   localStorage['token']=t.token;
        // alert("token"+JSON.stringify(localStorage['token']))
      // }).catch( (err) => {
      //   console.log('Error Saving Token: ' , err);
      // });

      // this.push.rx.notification()
      // .subscribe((msg) => {
        // alert('I received awesome push: ' + JSON.stringify(msg));
      // });
      // }
      let disconnectSub = network.onDisconnect().subscribe(() => {
           let alert=this.alertCtrl.create({
              title:'ALERT',
             subTitle:'Please Turn Your Network On',
             buttons:['Ok']
              })         
           alert.present()
     });

     let connectSub = network.onConnect().subscribe(()=> {
         // alert('you are online');

       });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.overlaysWebView(false);
      // statusBar.styleDefault();
      splashScreen.hide();
    });


  }
  salonPage(page){
       this.nav.setRoot(page.component);
  }
  openPage(page) {

    this.nav.setRoot(page.component);
      
  }
 EmployeePage(page){

     this.nav.setRoot(page.component);
      
  }

  guest(page){

    this.nav.setRoot(page.component);
  }
  logout(){

    delete localStorage['customerid']
    let confirm = this.alertCtrl.create({
      title: 'Alert!',
      message: 'Are you sure want to Logout?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            console.log('Disagree clicked');

          }
        },
        {
          text: 'Agree',
          handler: () => {
                 
            localStorage['auth']='false'
            delete localStorage['authenticate'];
            delete localStorage['usertype'];         
            this.nav.push(HomePage);
          }
        }
      ]
    });
    confirm.present();
  }
  
  userprofile(){
     this.nav.push('CustomerAccount')
  }
 salonownerprofile(){
     this.nav.push('SalonOwnerProfile2')
  }
  Employeeprofile(){
         this.nav.push('EmployeeViewEditProfile')
  }
 logsalonout(){
    this.nav.setRoot(HomePage)
  }

  registerPush(){
      // Check that we are on a device

  }
}

