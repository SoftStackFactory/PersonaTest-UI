import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Pages
import { HomePage } from '../pages/home/home';
import { LobbyPage } from '../pages/lobby/lobby';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { QuestionPage } from '../pages/question/question';
import { FlexDemoPage } from '../pages/flex-demo/flex-demo';
import { LandingPage } from '../pages/landing/landing';
<<<<<<< HEAD
=======

>>>>>>> 5c8d3218f5ab876f135535519f6f3bf06ada0fdd


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
<<<<<<< HEAD

  rootPage:any = HomePage;


  rootPage:any = FlexDemoPage;
  
=======
  rootPage:any = FlexDemoPage 
>>>>>>> 5c8d3218f5ab876f135535519f6f3bf06ada0fdd
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
