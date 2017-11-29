import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController,ViewController } from 'ionic-angular';
import {DataService } from "../../providers/data-service"
import { Observable} from "rxjs/Rx";
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { FormControl,FormGroup,Validators, FormBuilder } from '@angular/forms';


/**
 * Generated class for the SaloonAddEmployee page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-saloon-add-employee',
  templateUrl: 'saloon-add-employee.html',
})
export class SaloonAddEmployee {
	name
	email
	phone_number:number
	myselection
pasword
leads:any
value
pikabu
salonid;
pic
salon_id
mydata
printdata
form3:FormGroup
selected_service
message
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private dataservice :DataService,
    private loadingCtrl:LoadingController,
    private alertCtrl: AlertController,
    private camera: Camera,
    private transfer: FileTransfer, 
    private file: File,
    public formBuilder: FormBuilder,
    public viewCtrl: ViewController) {
    // alert("hello id"+localStorage['salonid'])
    this.salonid=localStorage['salonid'];
// let emailRegex =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    let name= /^([a-zA-Z ]){1,30}$/;
 let emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
 // let phoneRegex= '^[2-9]\d{2}-\d{3}-\d{4}$';
       this.form3 = formBuilder.group({ 

      name: ['', Validators.compose([Validators.maxLength(30), Validators.pattern( name), Validators.required])],
     email: ['', Validators.compose([Validators.maxLength(30), Validators.pattern(emailRegex), Validators.required])],
     phone_number :['', Validators.compose([Validators.maxLength(15),Validators.minLength(10),Validators.pattern("[0-9]*"), Validators.required])],
selected_service : [ '',  Validators.required],

  });

  }


save(){


 this.viewCtrl.dismiss({myname:this.form3.controls["name"].value,myemail:this.form3.controls["email"].value,my_number:this.form3.controls["phone_number"].value,my_salonid:this.salonid,my_service:this.form3.controls["selected_service"].value})
       

// if(this.leads.status==1){
//   this.viewCtrl.dismiss({myname:this.name,myservice:this.selected_service})
//   alert(this.name)
//   alert(this.selected_service)
// }
}
    

cancel(){


   this.viewCtrl.dismiss();
}
  







ngOnInit(){

let loading = this.loadingCtrl.create({content: 'Loading...'});
        Observable.fromPromise(loading.present())
            .flatMap(data => this.dataservice.getmyservicedata(this.salon_id))
.subscribe(data =>

                    loading.dismiss().then(() =>{ 
                      this.message=data.message
                        if (data.message == " Something Wrong"){
                              let alert = this.alertCtrl.create({
    title: 'Oops',
    subTitle: 'Seems like your list is empty',
    buttons: ['Dismiss']
  });
  alert.present();

                        }
                        else{
                          this.mydata = data
                        this.message=this.mydata.message
                        console.log("this is "+this.message)
                            this.printdata = this.mydata.data
                    
                      console.log('plz'+this.name)
                      
                        if(this.mydata.message=="data saved successfully"){
                      
                                let alert = this.alertCtrl.create({
             title: 'Service Added Successfully',
              buttons: ['Dismiss']
             });
                 alert.present();
                        }
                    }}),
                error =>
                    loading.dismiss().then(() => {})
     );

}
}
