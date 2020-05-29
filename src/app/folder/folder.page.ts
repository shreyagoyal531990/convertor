import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder: string;
  private sign_up: FormGroup;
  private login_new: FormGroup;
  public form_name:any;
  constructor(private activatedRoute: ActivatedRoute, 
     public modalController: ModalController,
    public auth_service: AuthenticationService,
    private router: Router,


     private formBuilder: FormBuilder,) { 
    this.sign_up = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['']
    });
    this.login_new = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['']
    });
  }
  async loginForm() {
    try {
      await this.auth_service.login(this.login_new.value.email, this.login_new.value.password)
     await this.router.navigate(['/second-page'])
     this.login_new.reset()

      // await this.modalController.dismiss()

    }
    catch (error) {
      console.log("Error for login", error)
    }
  }
  async  signUpForm() {
    try {
      await this.auth_service.signUp(this.sign_up.value.email, this.sign_up.value.password)
      await this.router.navigate(['/second-page'])
      this.sign_up.reset()

      // await this.modalController.dismiss()

    }
    catch (error) {
      console.log("Error for login", error)
    }
  }
presentform(form_name){
  this.form_name=form_name
}
  async presentModal(form_name) {
    const modal = await this.modalController.create({
      component:'',
      componentProps:{
        form_name:form_name
      },
      // cssClass: 'my-custom-class'
    });
    return await modal.present();
  }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
