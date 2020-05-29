import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecondPagePageRoutingModule } from './second-page-routing.module';

import { SecondPagePage } from './second-page.page';
import { CurrencyConvertorComponent } from 'src/app/component/currency-convertor/currency-convertor.component';
import { LinkLitComponent } from 'src/app/component/link-lit/link-lit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecondPagePageRoutingModule
  ],
  declarations: [SecondPagePage,CurrencyConvertorComponent,LinkLitComponent],
  entryComponents:[CurrencyConvertorComponent,LinkLitComponent]
})
export class SecondPagePageModule {}
