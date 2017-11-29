import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController  } from 'ionic-angular';
import {DataService}  from '../../providers/data-service';
import { Observable} from "rxjs/Rx";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import{Login}from'../login/login';

/**
 * Generated class for the ForgetPassword page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-forget-password',
  templateUrl: 'forget-password.html',
})
export class ForgetPassword {
   email;
   info;
   forgetform:FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private alertCtrl: AlertController,public formBuilder: FormBuilder,
  	private dataservice:DataService,public loadingCtrl: LoadingController) {
    let emailRegex =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
          this.forgetform= formBuilder.group({
          
       useremail: ['', Validators.compose([
         Validators.pattern(emailRegex), Validators.required])],
    });

  }

 forget(){

    let loading = this.loadingCtrl.create({content: 'Please Wait...'});
         Observable.fromPromise(loading.present())
         .flatMap(data => this.dataservice.forgetpassword(this.email))
         .subscribe(data =>
                    loading.dismiss().then(() =>{ 
                        this.info = data

                   

              if(this.info.status==1){
              let alert = this.alertCtrl.create({
                title: 'ALERT!',
                subTitle: 'Check your mail inbox and follow the procedure to reset your passowrd',
                buttons: ['ok']
              });
              alert.present();  
                    this.navCtrl.pop(Login)
                 } 

                 else if  (this.info.status==0) {

              let alert = this.alertCtrl.create({
                title: 'ALERT!',
                subTitle: 'Invalid E-Mail',
                buttons: ['ok']
              });
              alert.present();  


                 }  
}

),
                      error =>
                      loading.dismiss().then(() => {
                let alert=this.alertCtrl.create({
             title:'Something Went Wrong',
             subTitle:'Please Try Again',
             buttons:['Ok']
             })
     
            alert.present()
                      })
                    );    
  }    

}
