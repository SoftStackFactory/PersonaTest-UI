import { Component } from '@angular/core';
import { NavController, ModalController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LobbyPage } from '../../pages/lobby/lobby';
import { LoginPage } from '../../pages/login/login';

import { EulaModal } from '../../modals/eula/eula';

import { AppUserProvider } from '../../providers/app-user/app-user';

import { AgeValidator } from '../../validators/age';
import { PasswordValidator } from '../../validators/password';
/**
 * Generated class for the RegistrationComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'registration',
  templateUrl: 'registration.html'
})
export class RegistrationComponent {
  
  isEula: boolean;
  alertTitle: string;
  alertSubtitle: string;
  registerForm: FormGroup;
  submitAttempt: boolean = false;
  checked: boolean = false;
  
  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private appUser: AppUserProvider,
    private formBuilder: FormBuilder
    ) {
      this.registerForm = formBuilder.group({
        firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        age: ['', AgeValidator.isValid],
        email: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$'), Validators.required])],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.compose([PasswordValidator.isValid, Validators.required])],
        gender: ['', Validators.required],
        isEula: [false]
        
      });
      console.log("flag", Validators);
  }
  
  showAlert() {
    let alert = this.alertCtrl.create({
      title: this.alertTitle,
      subTitle: this.alertSubtitle,
      buttons: ["Dismiss"]
    });
    alert.present();
  }
  
  clickedEula() {
    this.checked = !this.checked;
    console.log("checked hit", this.checked);
  }
  
  
  submit(){
    this.submitAttempt = true;
    //If user does not input an age, set to zero since formControls makes it required.
    if(!this.registerForm.value.age) {
      this.registerForm.value.age = 0;
    }
    //INCOMPLETE FORM!!
    if(!this.registerForm.valid){
    // if(!this.registerForm.value.firstName.valid &&
    //   !this.registerForm.value.lastName.valid &&
    //   !this.registerForm.value.email.valid &&
    //   !this.registerForm.value.password.valid &&
    //   !this.registerForm.value.confirmPassword.valid &&
    //   !this.registerForm.value.gender.valid
    // ){
      console.log("incomplete form")
      this.alertTitle = "Incomplete Form";
      this.alertSubtitle = "Please fill in all required fields properly.";
      return this.showAlert();
      
      //EULA CHECK!!!
    } else if(this.checked !== true){
        console.log("uhoh you didnt check the eula");
        this.alertTitle = "Terms & Conditions";
        this.alertSubtitle = "Please accept the Terms & Conditions";
        return this.showAlert();
    }
      //successful registration
      delete this.registerForm.value.confirmPassword;
      console.log("Registration Complete", this.registerForm.value)
      this.appUser.register(this.registerForm.value)
      .map(res => res.json())
      .subscribe(res => {
        console.log("result from appUser.register ", res);
        window.localStorage.setItem('token', res.token);
        window.localStorage.setItem('userId', res.id);
        this.navCtrl.setRoot(LobbyPage);
    }, error => {
      //Server side errors
        if (error.status === 404) {
          this.alertTitle = "404";
          this.alertSubtitle = "Not Found.";
          return this.showAlert();
          
        } else if (error.status === 422) {
          this.alertTitle = "422";
          this.alertSubtitle = "Invalid email address or email is already taken";
          return this.showAlert();
          
        } else if (error.status === 500) {
          this.alertTitle = "500";
          this.alertSubtitle = "Server is currently offline, please try again in a few minutes.";
          return this.showAlert();
        }
    });
  }
  
  //When user clicks 'View Terms and Conditions', display EULA through modal
  showEula(){
    let modal = this.modalCtrl.create(EulaModal);
    modal.present();
  }
  
  //User already has account, navigate to login page
  goToLogin() {
    this.navCtrl.push(LoginPage);
  }
}
