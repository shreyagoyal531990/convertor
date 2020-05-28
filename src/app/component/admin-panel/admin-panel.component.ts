import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/service/authentication.service';
import * as firebase from 'firebase';
import { ModalController } from '@ionic/angular';
import { FormComponent } from '../form/form.component';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss'],
})
export class AdminPanelComponent implements OnInit {
  private sign_up: FormGroup;
  private login: FormGroup;
  public open_login_form: any;
  public open_sign_up_form: any;
  constructor(private formBuilder: FormBuilder, 
    public auth_service: AuthenticationService,
    public modalController: ModalController) {

  }
  async presentModal(form_name) {
    const modal = await this.modalController.create({
      component:FormComponent,
      componentProps:{
        form_name:form_name
      },
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }


  ngOnInit() { }

}
