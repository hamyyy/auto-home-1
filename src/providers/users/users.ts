import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';


/*
  Generated class for the UsersProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
  */
  @Injectable()
  export class UsersProvider {


    public data: any;
    public fireAuth: any;
    public userProfile: any;

    constructor(public http: HttpClient) {
      this.fireAuth = firebase.auth();
      this.userProfile = firebase.database().ref('My-App/users');
    }

    loginUser(email: String, pass: String) {
      return this.fireAuth.signInWithEmailAndPassword(email, pass);
    }

    signUpUser(account: {}) {

      return this.fireAuth.createUserWithEmailAndPassword(account['email'], account['password']).then(newUser => {
        this.fireAuth.signInWithEmailAndPassword(account['email'], account['password']).then(authenticatedUser => {
          console.log(authenticatedUser)
          this.userProfile.child(authenticatedUser.user.uid).set(account);
        })
      });

    }

  }
