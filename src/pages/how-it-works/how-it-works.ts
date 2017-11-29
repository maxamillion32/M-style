import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import {DataService}  from '../../providers/data-service';
import { Observable} from "rxjs/Rx";
/**
 * Generated class for the HowItWorks page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-how-it-works',
  templateUrl: 'how-it-works.html',
})
export class HowItWorks {
howworks
  constructor(public navCtrl: NavController, public navParams: NavParams,
  	private dataservice:DataService,public alertCtrl:AlertController,
    public loadingCtrl: LoadingController) {
  }

  ngOnInit(){
     
     let loading = this.loadingCtrl.create({content: 'Please Wait...'});
         Observable.fromPromise(loading.present())
         .flatMap(data => this.dataservice.Howitworks())
         .subscribe(data =>
                    loading.dismiss().then(() =>{ 
                        this.howworks = data
                          
                                                }),
                         error =>
             loading.dismiss().then(() => {
let alert=this.alertCtrl.create({
        title:'Timeout',
        subTitle:'Please Try Again',
        buttons:['Ok']
      })
      
      alert.present()


                      })
                    ); 

  }
}
