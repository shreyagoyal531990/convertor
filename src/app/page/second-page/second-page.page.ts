import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.page.html',
  styleUrls: ['./second-page.page.scss'],
})
export class SecondPagePage implements OnInit {
public open_currency_convertor:any
public open_link_list:any;
  constructor(
    public auth_service: AuthenticationService,

  ) {
    this.open_currency_convertor=false;
    this.open_link_list=false;
   }
  logOut(){
    this.open_currency_convertor=false;
    this.open_link_list=false;
    try{
      this.auth_service.logOut()
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
  ngOnInit() {
  }

}
