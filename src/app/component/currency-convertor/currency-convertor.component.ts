import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-convertor',
  templateUrl: './currency-convertor.component.html',
  styleUrls: ['./currency-convertor.component.scss'],
})
export class CurrencyConvertorComponent implements OnInit {
  public usd_amount: any;
  public rupee_amount: any;
  public toogle:any
  constructor() { }
  enterRupeeValue(ev) {
    // console.log("enterRuppee value entered",ev['detail']['value'])
    this.rupee_amount = ev['detail']['value']
    console.log("this.rupee_amount", this.rupee_amount)
    this.toogle=false;
  }
  enterUSDValue(ev) {
    // console.log("Enter USD value",ev['detail']['value'])
    this.usd_amount = ev['detail']['value']
    console.log("this.usd_amount", this.usd_amount)
    this.toogle=false;

  }
  changeToRupee() {
    var self = this;
    console.log("changeToRupee")
    self.usd_amount = Math.ceil(parseInt(self.usd_amount) * 75.74);
    console.log("self.usd_amoun", self.usd_amount)
    this.toogle=true;


  }
  changeToUSD() {
    var self = this;

    console.log("change ton USD")
    self.rupee_amount = Math.ceil(parseInt(self.rupee_amount) / 75.74);
    console.log("self.rupee_amount", self.rupee_amount)
    this.toogle=true;

  }
  ngOnInit() { }

}
