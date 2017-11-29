import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Observable} from "rxjs/Rx";
import {DataService } from "../../providers/data-service"
/**  
/**
 * Generated class for the SpecificEmployee page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-specific-employee',
  templateUrl: 'specific-employee.html',
})
export class SpecificEmployee  {
mydata
name
myimage
email
address
contact_number
employee_status
category
employee_id
status
position
  constructor(public navCtrl: NavController,private dataservice :DataService,
   public navParams: NavParams,private alertCtrl: AlertController,
    public loadingCtrl: LoadingController) {

  	this.mydata=this.navParams.get('profiledata')
  this.name=this.mydata.full_name
   
   this.employee_id=this.mydata.employee_id
   this.email=this.mydata.email

    this.address=this.mydata.address

     this.contact_number=this.mydata.contact_number

     this.category=this.mydata.category
     console.log("yeah"+JSON.stringify(this.category))

     this.myimage=this.mydata.profile_image
     
  this.position=this.mydata.position
  // alert(this.position)

    
  	console.log(JSON.stringify(this.mydata))

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpecificEmployee');
  }
    showConfirm() {
    let confirm = this.alertCtrl.create({
      title: 'Delete Staff?',
      message: 'Are You Sure To Delete This Staff Member?',
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
            this.delete_staff()
          }
        }
      ]
    });
    confirm.present();
  }
 
delete_staff(){
     let loading = this.loadingCtrl.create({content: 'Loading..'});
         Observable.fromPromise(loading.present())
         .flatMap(data => this.dataservice.delete_staff(this.employee_id))
         .subscribe(data =>
                    loading.dismiss().then(() =>{ 
                      this.status = data.status
                  
                      if (this.status==1){
                          this.navCtrl.setRoot('MyEmployees');
                         let alert = this.alertCtrl.create({
                                    title: ' Deleted Successfully',
                                    buttons: ['Dismiss']
                                   


                     });
                          alert.present();
                            }
}))
}
}