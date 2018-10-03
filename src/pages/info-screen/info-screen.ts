import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';



@IonicPage()
@Component({
	selector: 'page-info-screen',
	templateUrl: 'info-screen.html',
})
export class InfoScreenPage {

	constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad InfoScreenPage', this.navParams);
	}

	exitPopUp() {
		this.viewCtrl.dismiss();
	}

}
