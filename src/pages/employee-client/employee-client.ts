import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController,LoadingController } from 'ionic-angular';
import {DataService}  from '../../providers/data-service';
import { Observable} from "rxjs/Rx";
/**
 * Generated class for the EmployeeClient page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-employee-client',
  templateUrl: 'employee-client.html',
})
export class EmployeeClient {
lists
clientinfo
noclients
  constructor(public navCtrl: NavController,
  	private dataservice:DataService,
  public alertCtrl:AlertController, 
  public loadingCtrl: LoadingController,
   public navParams: NavParams) {
   	this.noclients=1;
  }

  ngOnInit(){
     
       let loading = this.loadingCtrl.create({content: 'Please Wait...'});
         Observable.fromPromise(loading.present())
         .flatMap(data => this.dataservice.EmployeeClientListing())
         .subscribe(data =>
                    loading.dismiss().then(() =>{ 
                        this.lists = data
                       this.clientinfo=this.lists.customerappointment;
                       console.log("client"+JSON.stringify(this.clientinfo))


                             if(this.lists.status==0){
                             	this.noclients=0;
                             }
                                                }),
                      error =>
                      loading.dismiss().then(() => {
                        let alert = this.alertCtrl.create({
                      title: 'ALERT!',
                      subTitle: 'Something Went Wrong',
                      buttons: ['ok']
                          });
                    alert.present(); 
                      })
                    );           
}
View(name,pic,starttime,endtime,date,service,address,amount,email,note){
	this.navCtrl.push('EmployeeCustomerInfo',{name:name,pic:pic,
		startime:starttime,endtime:endtime,date:date,services:service,
		address:address,total:amount,email:email,note:note})
}
}
