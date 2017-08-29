import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController } from 'ionic-angular';

/**
 * Generated class for the LoadingControllerComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'loading-controller',
  templateUrl: 'loading-controller.html',
})
export class LoadingControllerModal {

  constructor(public loadingCtrl: LoadingController) {
    console.log('Hello LoadingControllerModal');
        // functioning ionic loader
        let loading = this.loadingCtrl.create({
              spinner: "dots",
              duration: 5000
            });
            
            loading.onDidDismiss(() => {
              console.log("Dismissed loading");
            });
            
            loading.present();
        
  }
  
// maybe replace ionic default spinner?
// $ionicLoading.show({
//   template: '<object data="assets/so-spinner.svg" type="image/svg+xml"></object>',
//   animation: 'fade-in',
//   showDelay: 0
// });

}