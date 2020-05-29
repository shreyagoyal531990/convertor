import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';

import { CurrencyConvertorComponent } from '../component/currency-convertor/currency-convertor.component';
import { LinkLitComponent } from '../component/link-lit/link-lit.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    ReactiveFormsModule 
  ],
  declarations: [FolderPage,CurrencyConvertorComponent,LinkLitComponent],
  entryComponents:[CurrencyConvertorComponent,LinkLitComponent]

})
export class FolderPageModule {}
