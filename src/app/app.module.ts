import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { LandingPage } from '../pages/landing/landing';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { LoginPage } from '../pages/login/login';
import { LobbyPage } from '../pages/lobby/lobby';
import { TestListsPage } from '../pages/test-lists/test-lists';
import { HistoryPage } from '../pages/history/history';
import { ResultsPage } from '../pages/results/results';
import { QuestionPage } from '../pages/question/question';
import { FlexDemoPage } from '../pages/flex-demo/flex-demo';
import { QuicklinksPage } from '../pages/quicklinks/quicklinks';


//Providers
import { QuestionsProvider } from '../providers/questions/questions';

//Components
import { ChartComponent } from '../components/chart/chart';
import { TestlistComponent } from '../components/testlist/testlist';
import { RegistrationComponent } from '../components/registration/registration';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { SearchHistoryComponent } from '../components/search-history/search-history';




let injections: any[] = [
    MyApp,
    LandingPage,
    HomePage,
    RegisterPage,
    LoginPage,
    LobbyPage,
    TestListsPage,
    HistoryPage,
    ResultsPage,
    QuestionPage,
    FlexDemoPage,
    ChartComponent,
    TestlistComponent,
    ProgressBarComponent, 
    QuicklinksPage,
    RegistrationComponent,
    SearchHistoryComponent
    ]

@NgModule({
  declarations: injections,
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: injections,
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuestionsProvider
  ]
})
export class AppModule {}
