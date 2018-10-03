import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';


import * as Firebase from 'firebase'


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    
    let config = {
      apiKey: "AIzaSyC0bBgebSRn4PgzU2NRfGBmdf372CrJErc",
      authDomain: "auto-home-1.firebaseapp.com",
      databaseURL: "https://auto-home-1.firebaseio.com",
      projectId: "auto-home-1",
      storageBucket: "auto-home-1.appspot.com",
      messagingSenderId: "412101966545"
    };
    Firebase.initializeApp(config);

    let that = this;
    Firebase.auth().onAuthStateChanged(user => {
      if (user) {
    // User is signed in.
    that.rootPage = HomePage;

  } else {
        // User is signed out.
        that.rootPage = LoginPage;
      }
    });
    
    
    
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
