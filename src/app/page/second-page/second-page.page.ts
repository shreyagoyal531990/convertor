import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.page.html',
  styleUrls: ['./second-page.page.scss'],
})
export class SecondPagePage implements OnInit {
public open_currency_convertor:any
public open_link_list:any;
public user:any;
  constructor(
    public auth_service: AuthenticationService,
    private router: Router,

  ) {
    var self=this;
    this.auth_service.logged_user.subscribe((data)=>{
      console.log("data after user is logged in",data)
      self.user=data
    },(error)=>{
      console.log("Error while retrierving logged user",error)
    })
    this.open_currency_convertor=false;
    this.open_link_list=false;
   }
 async logOut(){
    this.open_currency_convertor=false;
    this.open_link_list=false;
    try{
    await  this.auth_service.logOut()
      await this.router.navigate([''])

    }
    catch(error){
      console.log("Error during logging out",error)
    }
  }
  currencyConvertor(){
    this.open_currency_convertor=true;
    this.open_link_list=false
  }
  linkList(){
    this.open_currency_convertor=false;
    this.open_link_list=true
  }
  async ngOnInit() {


  }


}
