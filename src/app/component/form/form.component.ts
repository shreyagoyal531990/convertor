import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() form_name: any;
  private sign_up: FormGroup;
  private login: FormGroup;
  public open_login_form: any;
  public open_sign_up_form: any;
  constructor(private formBuilder: FormBuilder,
    public auth_service: AuthenticationService,
    private router: Router,
    public modalController: ModalController) {
    this.open_login_form = false;
    this.open_sign_up_form = false;
    this.sign_up = this.formBuilder.group({
      email: ['', Validators.required],
      password: [''],
    });
    this.login = this.formBuilder.group({
      email: ['', Validators.required],
      password: [''],
    });
  }
  ngAfterViewInit() {
    console.log("this.form_name", this.form_name)
  }
  openLoginForm() {
    this.open_sign_up_form == true ? this.open_sign_up_form = false : this.open_sign_up_form = false
    this.open_login_form = true;
    console.log("login form", this.login.value)
  }

  openSignUpForm() {
    this.open_login_form == true ? this.open_login_form = false : this.open_login_form = false

    this.open_sign_up_form = true;

    console.log("sign_up", this.sign_up.value)
  }

  async loginForm() {
    try {
      await this.auth_service.login(this.login.value.email, this.login.value.password)
     await this.router.navigate(['/second-page'])
      await this.modalController.dismiss()

    }
    catch (error) {
      console.log("Error for login", error)
    }
  }
  async  signUpForm() {
    try {
      await this.auth_service.signUp(this.sign_up.value.email, this.sign_up.value.password)
      await this.router.navigate(['/second-page'])

      await this.modalController.dismiss()

    }
    catch (error) {
      console.log("Error for login", error)
    }
  }
  async logOut() {
    try {
      await this.auth_service.getLoggedUser()
      await this.auth_service.logOut()
    }
    catch (error) {
      console.log("Error while logging out", error)
    }
  }
  ngOnInit() { }

}
