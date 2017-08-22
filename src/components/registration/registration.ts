import { Component } from '@angular/core';
import { NavController, ModalController, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LobbyPage } from '../../pages/lobby/lobby';
import { LoginPage } from '../../pages/login/login';
import { EulaModal } from '../../modals/eula/eula';
import { AppUserProvider } from '../../providers/app-user/app-user';
import { AgeValidator } from '../../validators/age';

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
  user: any = {}
  isEula: boolean
  alertTitle: string
  alertSubtitle: string
  registerForm: FormGroup;
  submitAttempt: boolean = false;
  
  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private appUser: AppUserProvider,
    private formBuilder: FormBuilder
    ) {
      this.registerForm = formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        age: ['', AgeValidator.isValid],
        email: ['', Validators.required],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required],
        gender: ['', Validators.required],
        isEula: [false, Validators.required]
      });
  }

  checkEula() {
    console.log("User has agreed to Terms & Conditions", this.isEula);
  }
  
  showAlert() {
    let alert = this.alertCtrl.create({
      title: this.alertTitle,
      subTitle: this.alertSubtitle,
      buttons: ["Dismiss"]
    });
    alert.present();
  }
  
  submit(){
    
    this.submitAttempt = true;
    
    if(!this.registerForm.valid){
      this.alertTitle = "Incomplete Form";
      this.alertSubtitle = "Please fill in all required fields.";
      return this.showAlert();
      
    }
      console.log(this.registerForm.value)
      this.appUser.register(this.registerForm.value)
      .map(res => res.json())
      .subscribe(res => {
        window.localStorage.setItem('token', res.token);
        window.localStorage.setItem('id', res.id)
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
  
  // signupForm(form) {
  //   if(form.invalid) {
  //     this.alertTitle = "Invalid Form";
  //     this.alertSubtitle = "Please fill in all required fields.";
  //     return this.showAlert();
      
  //     //Passwords did not match, delete user passwords
  //   } else if(this.user.password !== this.user.confirmPassword) {
  //     this.user.password = null;
  //     this.user.confirmPassword = null;
  //     this.alertTitle = "Passwords do not match";
  //     this.alertSubtitle = "Please re-enter your passwords.";
  //     return this.showAlert();
      
  //     //User must agree to terms and conditions before registering
  //   } else if(this.user.isEula !== true) {
  //     this.alertTitle = "Terms & Conditions";
  //     this.alertSubtitle = "Please check the box to accept our Terms & Conditions.";
  //     return this.showAlert();
  //   }
    
  //   //successfull registration
  //   delete this.user.confirmPassword;
  //   console.log(this.user);
  //   this.appUser.register(this.user)
  //     .map(res => res.json())
  //     .subscribe(res => {
  //       window.localStorage.setItem('token', res.token);
  //       window.localStorage.setItem('id', res.id)
  //       this.navCtrl.setRoot(LobbyPage);
        
  //     }, error => {
  //       //Server side errors
  //       if (error.status === 404) {
  //         this.alertTitle = "404";
  //         this.alertSubtitle = "Not Found.";
  //         return this.showAlert();
          
  //       } else if (error.status === 422) {
  //         this.alertTitle = "422";
  //         this.alertSubtitle = "Invalid email address or email is already taken";
  //         return this.showAlert();
          
  //       } else if (error.status === 500) {
  //         this.alertTitle = "500";
  //         this.alertSubtitle = "Server is currently offline, please try again in a few minutes.";
  //         return this.showAlert();
  //       }    
  //     });
  // }
  
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
