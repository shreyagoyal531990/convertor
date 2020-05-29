import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import * as firebase from "firebase";
import { AuthenticationService } from './service/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public  firebaseConfig = {
    apiKey: "AIzaSyA7n7GYvzOUj5ry9F1LrJwrGpWrE5pnqvo",
    authDomain: "apptunix-801eb.firebaseapp.com",
    databaseURL: "https://apptunix-801eb.firebaseio.com",
    projectId: "apptunix-801eb",
    storageBucket: "apptunix-801eb.appspot.com",
    messagingSenderId: "886475794199",
    appId: "1:886475794199:web:bda6dbf5c57082d56c7952",
    measurementId: "G-FT1C7Z4LSF"
  };
  public appPages = [
    {
      title: 'Inbox',
      url: '/folder/Inbox',
      icon: 'mail'
    },
    {
      title: 'Outbox',
      url: '/folder/Outbox',
      icon: 'paper-plane'
    },
    {
      title: 'Favorites',
      url: '/folder/Favorites',
      icon: 'heart'
    },
    {
      title: 'Archived',
      url: '/folder/Archived',
      icon: 'archive'
    },
    {
      title: 'Trash',
      url: '/folder/Trash',
      icon: 'trash'
    },
    {
      title: 'Spam',
      url: '/folder/Spam',
      icon: 'warning'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public auth_service: AuthenticationService,
    public router:Router

  ) {
    this.initializeApp();
  }

  initializeApp() {
    var vm=this;
    this.platform.ready().then(() => {

      this.statusBar.styleDefault();
      this.splashScreen.hide();
      firebase.initializeApp(vm.firebaseConfig);
      vm.auth_service.getLoggedUser()
      vm.auth_service.logged_user.subscribe(async (data)=>{
        console.log("data after user is logged in",data)
      await this.router.navigate(['/second-page'])

        // self.user=data
      },(error)=>{
        console.log("Error while retrierving logged user",error)
      })
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
