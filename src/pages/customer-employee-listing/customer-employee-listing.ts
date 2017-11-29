import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import {DataService}  from '../../providers/data-service';
import { Observable} from "rxjs/Rx";
/**
 * Generated class for the CustomerEmployeeListing page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-customer-employee-listing',
  templateUrl: 'customer-employee-listing.html',
})
export class CustomerEmployeeListing {
   items;
   lists;
   salonid;
   itemss;
   imagedata;
   salonowner;
   salonowneremail
   salonempid
   salonaddress
   saloncontact
   ownerpic
   saloncategory
   ownerbook
   position
   salonstatus
  constructor(public navCtrl: NavController,public alertCtrl:AlertController,
   public navParams: NavParams,private dataservice:DataService,
    public loadingCtrl: LoadingController) {

        this.salonid=this.navParams.get('salonid')
     
     
  }

 
ngOnInit(){
     
       let loading = this.loadingCtrl.create({content: 'Please Wait...'});
         Observable.fromPromise(loading.present())
         .flatMap(data => this.dataservice.EmployeeListing(this.salonid))
         .subscribe(data =>
                    loading.dismiss().then(() =>{ 
                        this.lists = data
                         this.itemss=this.lists.employeeinfo;
           this.salonowner=this.lists.salonowner.full_name;
           this.salonempid=this.lists.salonowner.employee_id;
           this.salonowneremail=this.lists.salonowner.email;
           this.salonaddress=this.lists.salonowner.email;
           this.saloncontact=this.lists.salonowner.contact_number;
           this.ownerpic=this.lists.salonowner.profile_image;
           this.saloncategory=this.lists.salonowner.category;
           this.position=this.lists.salonowner.position;
           this.salonstatus=this.lists.salonowner.salon_online_status;


         console.log("position"+this.position)                          
    

                 for(let data of this.lists.employeeinfo){

                    console.log("image check"+data.profile_image) 


                    if(data.profile_image==null)   {

                      console.log("images null hai")

                      this.imagedata=0

                    }

                 }
                        

                                                }),
                         error =>
             loading.dismiss().then(() => {
          let alert=this.alertCtrl.create({
            title:'SERVER ERROR',
           subTitle:'Please Try Again',
           buttons:['Ok']
          })
          loading.dismiss();
           alert.present()


                      })
                    );           
}


view(employeeid,name,number,category,image,email,status){

  if(localStorage['auth']=='false'){


         let alert = this.alertCtrl.create({
                title: 'ALERT!',
                subTitle: 'You must Login to Continue',
                buttons: ['ok']
              });
              alert.present();
                      
            this.navCtrl.setRoot('Login')
    

  }

  else
  {
   // alert(email)
      this.ownerbook=false
	this.navCtrl.push('CustomerEmployeeViewProfile',{employee_id:employeeid,
    employeename:name,employeenumber:number,employeecategory:category,
    employeeimage:image,email:email,ownerbook:this.ownerbook,status:status})
}
}
owner(){
  if(localStorage['auth']=='false'){


         let alert = this.alertCtrl.create({
                title: 'ALERT!',
                subTitle: 'You must Login to Continue',
                buttons: ['ok']
              });
              alert.present();
                      
            this.navCtrl.setRoot('Login')
    

  }

  else
  {
   // alert(email)
   this.ownerbook=true;
  this.navCtrl.push('CustomerEmployeeViewProfile',{salonowner_id:this.salonempid,
    salonownername:this.salonowner,salonownernumber:this.saloncontact,salonownercategory:this.saloncategory,
    salonownerimage:this.ownerpic,salonowneremail:this.salonowneremail,ownerbook:this.ownerbook,position:this.position,Salonstatus:this.salonstatus})
}  
}
}
