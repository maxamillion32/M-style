import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import {DataService}  from '../../providers/data-service';
import { Observable} from "rxjs/Rx";
/**
 * Generated class for the TermsOfServices page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-terms-of-services',
  templateUrl: 'terms-of-services.html',
})
export class TermsOfServices {
  terms;
  termheading;
  termcontent;
  policytitle;
  policydesc;
  constructor(public navCtrl: NavController, public navParams: NavParams,private dataservice:DataService,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsOfServices');
  }
ngOnInit(){
     
     let loading = this.loadingCtrl.create({content: 'Please Wait...'});
         Observable.fromPromise(loading.present())
         .flatMap(data => this.dataservice.TermsandCondition())
         .subscribe(data =>
                    loading.dismiss().then(() =>{ 
                        this.terms = data
                         this.termheading= this.terms.termdata.heading;
                         this.termcontent=this.terms.termdata.content;

                         this.policytitle= this.terms.policydata.title;
                         this.policydesc=this.terms.policydata.description;
                                                }),
                      error =>
                      loading.dismiss().then(() => {})
                    ); 

  }
}
