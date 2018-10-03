import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import * as firebase from 'firebase';
import { UsersProvider } from '../../providers/users/users'
import { HomePage } from '../home/home';


/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 @IonicPage()
 @Component({
 	selector: 'page-sign-up',
 	templateUrl: 'sign-up.html',
 	providers: [
 	UsersProvider
 	]
 })
 export class SignUpPage {

 	public password: any;
 	public email: any;

 	constructor(public navCtrl: NavController,public toastCtrl: ToastController, public navParams: NavParams, public loadingCtrl: LoadingController, public usersProvider: UsersProvider) {

 	}

 	ionViewDidLoad() {
 		console.log('ionViewDidLoad SignUpPage');
 	}

 	submitSignup() {
 		let that = this;

 		let loader = this.loadingCtrl.create({
 			content: "Please wait..."
 		});
 		loader.present();

 		let account = {
 			email: this.email,
 			password: this.password
 		}

 		this.usersProvider.signUpUser(account).then(authData => {
          //successful
          loader.dismiss();
          that.navCtrl.setRoot(HomePage);

      }, error => {
      	loader.dismiss();
         // Unable to log in
         let toast = this.toastCtrl.create({
         	message: error,
         	duration: 3000,
         	position: 'top'
         });
         toast.present();

    that.password = ""//empty the password field
    
});
 	}

 }
