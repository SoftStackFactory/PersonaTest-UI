import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LandingPage } from '../pages/landing/landing';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { LobbyPage } from '../pages/lobby/lobby';
import { TestListsPage } from '../pages/test-lists/test-lists';
import { ResultsPage } from '../pages/results/results';

const components = [ 
    MyApp,
    LandingPage,
    HomePage,
    RegisterPage,
    LobbyPage,
    TestListsPage,
    ResultsPage
  ]

@NgModule({
  declarations: components,
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: components,
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
