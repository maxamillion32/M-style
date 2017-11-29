import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,AlertController } from 'ionic-angular';
import {DataService}  from '../../providers/data-service';
import { Observable} from "rxjs/Rx";
/**
 * Generated class for the AboutUs page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-about-us',
  templateUrl: 'about-us.html',
})
export class AboutUs {
   about;
   pic;
   content;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  	private dataservice:DataService,public loadingCtrl: LoadingController,
    public alertCtrl:AlertController) {
  }

  ngOnInit(){

       let loading = this.loadingCtrl.create({content: 'Please Wait...'});
         Observable.fromPromise(loading.present())
         .flatMap(data => this.dataservice.AboutUs())
         .subscribe(data =>
                    loading.dismiss().then(() =>{ 
                        this.about = data
                        this.pic=this.about.data.aboutus_image;
                        this.content=this.about.data.description;
                                                }),
                      error =>
              loading.dismiss().then(() => {
              let alert=this.alertCtrl.create({
              title:'Something Went Wrong',
             subTitle:'Please Try Again',
             buttons:['Ok']
              })         
           alert.present()})
                    );           

  }
}
