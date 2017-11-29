import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import {DataService } from "../../providers/data-service"
import { LoadingController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Observable} from "rxjs/Rx";
/**
 * Generated class for the MyEmployees page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-my-employees',
  templateUrl: 'my-employees.html',
})
export class MyEmployees {
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
owner_data
full_name
profile_image
    show:boolean=false
  constructor(public navCtrl: NavController,private dataservice :DataService,
   public navParams: NavParams,private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,public modalCtrl :ModalController) {
  
    this.items=[
      { name:'kary watson',img:'assets/img/user.jpg',profile:'Barber'},
      { name:'Charlie',img:'assets/img/user.jpg',profile:'Barber'},
     { name:'Ramy jackson',img:'assets/img/user.jpg',profile:'Barber'},
     { name:'Shane Watson',img:'assets/img/user.jpg',profile:'Barber'},
     { name:'Hamilton shobby',img:'assets/img/user.jpg',profile:'Barber'},
     { name:'Paul Hariday ',img:'assets/img/user.jpg',profile:'Barber'},
     { name:'Ramy ',img:'assets/img/user.jpg',profile:'Barber'},
     { name:'Mohit',img:'assets/img/user.jpg',profile:'Barber'},
     ]
  
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyEmployees');
  }
  view(data){
	// let profileModal = this.modalCtrl.create('SpecificEmployee',{profiledata:data});
 //             profileModal.present();
 //          profileModal.onDidDismiss(data => {
	this.navCtrl.push('SpecificEmployee',{profiledata:data})
            }
 view2(data){
  // let profileModal = this.modalCtrl.create('SpecificEmployee',{profiledata:data});
 //             profileModal.present();
 //          profileModal.onDidDismiss(data => {
  this.navCtrl.push('SpecificEmployee2Page',{profiledata:data})
            }
          ngOnInit(){
             let loading = this.loadingCtrl.create({content: 'Loading..'});
         Observable.fromPromise(loading.present())
         .flatMap(data => this.dataservice.view_employee_list(this.id))
         .subscribe(data =>
                    loading.dismiss().then(() =>{ 
                      this.minedata = data.employeeinfo
                          this.owner_data=data.salonowner
                                    this.full_name=this.owner_data.full_name
                                    this.profile_image=this.owner_data.profile_image
                          console.log("staff"+data)
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
                      loading.dismiss().then(() => {
let alert=this.alertCtrl.create({
        title:'Timeout',
        subTitle:'Please Try Again',
        buttons:['Ok']
      })
      loading.dismiss();
      alert.present()
}));
 
}

ionViewDidLeave(){
  // alert("ohhggg Yeah")
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
                      
                                    let alert = this.alertCtrl.create({
                                    title: 'Registration Successful',
                                    subTitle: 'Check your mail inbox  and  create a new password',
                                    buttons: ['Dismiss']
                     });
                          alert.present();
                         
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
             loading.dismiss().then(() => {
let alert=this.alertCtrl.create({
        title:'Timeout',
        subTitle:'Please Try Again',
        buttons:['Ok']
      })
      loading.dismiss();
      alert.present()


                      })
                   );




})
}







}