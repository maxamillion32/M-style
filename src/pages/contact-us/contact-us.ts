import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import {DataService}  from '../../providers/data-service';
import { Observable} from "rxjs/Rx";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * Generated class for the ContactUs page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
})
export class ContactUs {
  name;
  email;
  code;
  number;
  message;
  res;
  contactus:FormGroup;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public formBuilder: FormBuilder,
  	private dataservice:DataService,public loadingCtrl: LoadingController,
  	private alertCtrl: AlertController) {


    let emailRegex =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let name= /^([a-zA-Z ]){1,30}$/;
    let numberregex=/^\d+$/;
        this.contactus = formBuilder.group({
          

           username: ['', Validators.compose([ Validators.pattern(name),Validators.required])],
 // countrycode: ['', Validators.compose([Validators.pattern(numberregex),Validators.required])],

       useremail: ['', Validators.compose([
         Validators.pattern(emailRegex), Validators.required])],

      
usernumber: ['', Validators.compose([Validators.minLength(10),Validators.maxLength(15),Validators.pattern(numberregex),Validators.required])],
usermessage: ['', Validators.compose([ Validators.required])]

    });


  }

Contact(){
               
               
   // alert(this.usernumber)
   
	 let loading = this.loadingCtrl.create({content: 'Please Wait...'});
         Observable.fromPromise(loading.present())
         .flatMap(data => this.dataservice.ContactUs(this.name,this.email,this.number,this.message))
         .subscribe(data =>
                    loading.dismiss().then(() =>{ 
                        this.res = data
                           if(this.res.usertype==0){
                         let alert = this.alertCtrl.create({
                         title: 'Thank You ',
                          subTitle: 'We will Contact you Soon',
                        buttons: [{
                        text: 'OK',
                          handler: data => {
                  this.navCtrl.setRoot('CustomerCategories')
                }
              }]
              });
              alert.present();
              
                                  }
                   if(this.res.usertype==1){
                         let alert = this.alertCtrl.create({
                         title: 'Thank You ',
                          subTitle: 'We will Contact you Soon',
                        buttons: [{
                        text: 'OK',
                          handler: data => {
                  this.navCtrl.setRoot('MySalonHome')
                }
              }]
              });
              alert.present();
              
                                  }
                    if(this.res.usertype==2){
                         let alert = this.alertCtrl.create({
                         title: 'Thank You ',
                          subTitle: 'We will Contact you Soon',
                        buttons: [{
                        text: 'OK',
                          handler: data => {
                  this.navCtrl.setRoot('EmployeeHome')
                }
              }]
              });
              alert.present();
              
                                  }
       if(this.res.usertype==3){
                         let alert = this.alertCtrl.create({
                         title: 'Thank You ',
                          subTitle: 'We will Contact you Soon',
                        buttons: [{
                        text: 'OK',
                          handler: data => {
                  this.navCtrl.setRoot('CustomerCategories')
                }
              }]
              });
              alert.present();
              
                                  }

                                                }),
                       error =>
           loading.dismiss().then(() => {
           let alert=this.alertCtrl.create({
           title:'SERVER ERROR',
           subTitle:'Please Try Again',
           buttons:['Ok']
             })
          alert.present()


                      })
                    );    
}




}
