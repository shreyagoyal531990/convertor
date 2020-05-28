import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SecondPagePageRoutingModule } from './second-page-routing.module';

import { SecondPagePage } from './second-page.page';
import { AdminPanelComponent } from 'src/app/component/admin-panel/admin-panel.component';
import { CurrencyConvertorComponent } from 'src/app/component/currency-convertor/currency-convertor.component';
import { LinkLitComponent } from 'src/app/component/link-lit/link-lit.component';
import { FormComponent } from 'src/app/component/form/form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SecondPagePageRoutingModule
  ],
  declarations: [SecondPagePage,AdminPanelComponent,CurrencyConvertorComponent,LinkLitComponent,FormComponent],
  entryComponents:[AdminPanelComponent,CurrencyConvertorComponent,LinkLitComponent,FormComponent]
})
export class SecondPagePageModule {}
