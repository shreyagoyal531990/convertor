import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';
import { AdminPanelComponent } from '../component/admin-panel/admin-panel.component';
import { CurrencyConvertorComponent } from '../component/currency-convertor/currency-convertor.component';
import { LinkLitComponent } from '../component/link-lit/link-lit.component';
import { FormComponent } from '../component/form/form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    ReactiveFormsModule 
  ],
  declarations: [FolderPage,AdminPanelComponent,CurrencyConvertorComponent,LinkLitComponent,FormComponent],
  entryComponents:[AdminPanelComponent,CurrencyConvertorComponent,LinkLitComponent,FormComponent]

})
export class FolderPageModule {}
