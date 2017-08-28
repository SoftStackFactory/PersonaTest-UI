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
        let loading = this.loadingCtrl.create({
              spinner: "dots",
              duration: 5000
            });
            
            loading.onDidDismiss(() => {
              console.log("Dismissed loading");
            });
            
            loading.present();
  }


    
    
  // presentLoadingCustom() {
  //   let loading = this.loadingCtrl.create({
  //     spinner: 'hide',
  //     content: `
  //       <div class="custom-spinner-container">
  //         <div class="custom-spinner-box"></div>
  //       </div>`,
  //     duration: 5000,
  //     showBackdrop: false,
  //     // dismissOnPageChange: true,
  //   });
  
  //   loading.onDidDismiss(() => {
  //     console.log('Dismissed loading');
  //   });
  
  //   loading.present();
  // }
  /*  ionViewLoaded() {
    let loader = this.loading.create({
      content: 'Getting latest entries...',
    });
  
    loader.present().then(() => {
      this.someService.getLatestEntries()
        .subscribe(res => {
          this.latestEntries = res;
        });
      loader.dismiss();
    });
  }*/
}