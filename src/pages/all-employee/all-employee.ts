import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import {DataService } from "../../providers/data-service"
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Observable} from "rxjs/Rx";
/**

/**
 * Generated class for the AllEmployee page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-all-employee',
  templateUrl: 'all-employee.html',
})
export class AllEmployee {
     minedata
     items
     id
    my_name
    category
    myimage
    leads
    ourname
    ouremail
    ourphone_number
    ourpassword
    ourselected_service
     salonid
    show:boolean=false




  constructor(public navCtrl: NavController,private dataservice :DataService,
   public navParams: NavParams,private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,public modalCtrl :ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AllEmployee');
  }


    view(data){
	alert(JSON.stringify(data))
	this.navCtrl.push('SpecificEmployee',{profiledata:data})
            }

ngOnInit(){
let loading = this.loadingCtrl.create({content: 'Loading..'});
         Observable.fromPromise(loading.present())
         .flatMap(data => this.dataservice.view_employee_list(this.id))
         .subscribe(data =>
                    loading.dismiss().then(() =>{ 
                      this.minedata = data.employeeinfo
                      alert(JSON.stringify(this.minedata))
                      if(this.minedata==undefined){
                      
                            this.show=true
                            
                      }


                      else{
                        this.myimage= data.employeeinfo.profile_image
                         this.show=false

                      }
                      
}

),
                      error =>
                      loading.dismiss().then(() => {})
                    );







  
}

add_staff(){
 let profileModal = this.modalCtrl.create('SaloonAddEmployee');
   profileModal.present();
profileModal.onDidDismiss(data => {


  this.ourname=data.myname;
 
  this.ouremail=data.myemail;
  this.ourphone_number=data.my_number;
  this.ourselected_service=data.my_service;

  let loading = this.loadingCtrl.create({content: 'Loading..'});                                                                                                                                                                            
         Observable.fromPromise(loading.present())                                      
         .flatMap(data => this.dataservice.add_employee(this.ourname,this.ouremail,
this.ourphone_number,
this.salonid, this.ourselected_service))
         .subscribe(data =>
                    loading.dismiss().then(() =>{ 
                        this.leads = data
                        if(this.leads.status==1){
                      
                     //                let alert = this.alertCtrl.create({
                     //                title: 'Registration Successfully',
                     //                subTitle: 'Check your mail inbox  and your Email and password send  in to your Email',
                     //                buttons: ['Dismiss']
                     // });
                     //      alert.present();
                          this.ngOnInit();
                        }
                        else { if(this.leads.status==0){
                                 let alert = this.alertCtrl.create({
                                    title: 'Oops',
                                    subTitle: 'Entered E-mail Already Exists',
                                    buttons: ['Cancel']
                     });
                          alert.present();


                        }
                      }
                            // this.name="";
                            // this.email="";
                            // this.pasword="";
                            // this.phone_number="";
                            //  this.pikabu=""




                    }),
                       error =>
                      loading.dismiss().then(() => {}
                        )
                   );




})



}
  


}
