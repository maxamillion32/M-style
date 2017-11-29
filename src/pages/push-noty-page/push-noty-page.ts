import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import {DataService } from "../../providers/data-service"
import { LoadingController } from 'ionic-angular'
import { Observable} from "rxjs/Rx";
/**
 * Generated class for the PushNotyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-push-noty-page',
  templateUrl: 'push-noty-page.html',
})
export class PushNotyPage {
selected_value
id
mysalon_name
service
mydata
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewctrl:ViewController,private dataservice :DataService,
public loadingCtrl: LoadingController) {
this.id=localStorage['salonid'];

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PushNotyPage');
  }


  cancel(){
   this.viewctrl.dismiss();

  }

  send(){
     
         let loading = this.loadingCtrl.create({content: 'Loading..'});
         Observable.fromPromise(loading.present())
         .flatMap(data => this.dataservice.send_push_notification(this.mysalon_name,this.service,this.id))
         .subscribe(data =>
                    loading.dismiss().then(() =>{ 
                       this.mydata = data



  	this.viewctrl.dismiss({value:this.selected_value})
  }))


}
}