import { FormControl } from '@angular/forms';
// import { AlertController } from 'ionic-angular';

export class AgeValidator {
    
    
    static isValid(control: FormControl): any {
        
    //     alertTitle: string
    // alertSubtitle: string
    
    // constructor(
    //     private alertCtrl: AlertController
    //     ) {
    // }
    
//     showAlert() {
//     let alert = this.alertCtrl.create({
//       title: "title",
//       subTitle: this.alertSubtitle,
//       buttons: ["Dismiss"]
//     });
//     alert.present();
//   }
        
        // this.alertSubtitle = "Please enter a valid number for your age"
        // this.showAlert();
        
        if(isNaN(control.value)){
            
            return {
                "not a number": true
            };
        }
        
        if(control.value % 1 !== 0){
            return {
                "not a whole number": true
            }
        }
    }
}