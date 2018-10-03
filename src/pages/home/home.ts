import { Component } from '@angular/core';
import { NavController, ModalController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase/firebase';
import { DragulaService } from 'ng2-dragula';
import { InfoScreenPage } from '../info-screen/info-screen'
import { Config } from 'ionic-angular';
import { ModalFadeInTransition } from './transitions/fade-in';
import { ModalFadeOutTransition } from './transitions/fade-out';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [DragulaService],
})

export class HomePage {

  q2:any = [1, 2];


  draggable: any = false;

  constructor(public config: Config, public modalCtrl: ModalController, public navCtrl: NavController, public fb: FirebaseProvider, public dragulaService: DragulaService) {
    this.setCustomTransitions();

    let heldForThreeSeconds = 3000
    let itemWasClicked
    document.body.addEventListener('mousedown', function () {
      itemWasClicked = new Date().getMilliseconds();
    })

    dragulaService.createGroup("bag-task1", {
      removeOnSpill: false,
      revertOnSpill: false,
      moves: function (el, source, handle, sybling) {
        console.log(el);
        return true; //this.draggable;
      }
      // moves: function () {
      //   console.log(new Date().getMilliseconds() - itemWasClicked);
      //   return new Date().getMilliseconds() - itemWasClicked > heldForThreeSeconds;
      // }
    });

  }

  makeDraggable() {
    this.draggable = true;
  }

  private setCustomTransitions() {
    this.config.setTransition('modal-fade-in-transition', ModalFadeInTransition);
    this.config.setTransition('modal-fade-out-transition', ModalFadeOutTransition);
  }

  infoScreen(name) {
    console.log(event);
    let profileModal = this.modalCtrl.create(InfoScreenPage, {name}, {
      enterAnimation: 'modal-fade-in-transition',
      leaveAnimation: 'modal-fade-out-transition'
    });
    profileModal.present();
  }

  addComponent() {

  }

  ionViewDidLoad() {
  	this.fb.getData();
  }

}
