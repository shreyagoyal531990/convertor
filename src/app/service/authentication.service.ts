import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public logged_user = new Subject<any>();
  constructor() { }
 async signUp(email,password){
   try{
     await  firebase.auth().createUserWithEmailAndPassword(email, password)
     console.log("sign up is doner")
     await this.login(email,password)
   }
   catch(error){
console.log("Error during sign up",error)
   }

  }
  async login(email,password){
    try{
      await  firebase.auth().signInWithEmailAndPassword(email, password)
      console.log("Login is doner")
    }
    catch(error){
 console.log("Error during Login",error)
    }
 
   }
   async logOut(){
     try{
      await firebase.auth().signOut()
      console.log("User is successfully logged out")
     }
     catch(error){
       console.log("Erroir while logging out",error)
     }
   }
   getLoggedUser(){
     var self=this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("user",user)
        self.logged_user.next(user)
 
        // ...
      } else {
        return('')
        // User is signed out.
        // ...
      }
    });
    // firebase.auth.OAuthCredential.
  }
}
