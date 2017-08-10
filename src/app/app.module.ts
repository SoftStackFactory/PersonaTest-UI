import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { EmailComposer } from '@ionic-native/email-composer';

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
import { OrganizationManagePage } from '../pages/organization-manage/organization-manage';
import { OrganizationBecomePage } from '../pages/organization-become/organization-become';

//Providers
import { QuestionsProvider } from '../providers/questions/questions';

//Components
import { ChartComponent } from '../components/chart/chart';
import { TestlistComponent } from '../components/testlist/testlist';
import { RegistrationComponent } from '../components/registration/registration';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { SearchHistoryComponent } from '../components/search-history/search-history';
import { MiniGraphComponent } from '../components/mini-graph/mini-graph';
import { EulaComponent } from '../components/eula/eula';
import { TestSelectionComponent } from '../components/test-selection/test-selection'


//Modals
import { ForWorkModal } from '../modals/for-work-modal/for-work-modal';
import { BeAnOrganizationModal } from '../modals/be-an-organization/be-an-organization';
import { IpiptestlistComponent } from '../components/ipiptestlist/ipiptestlist';
import { LogoutComponent } from '../components/logout/logout';


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
    OrganizationManagePage,
    OrganizationBecomePage,
    ChartComponent,
    TestlistComponent,
    ProgressBarComponent, 
    QuicklinksPage,
    RegistrationComponent,
    ProgressBarComponent,
    SearchHistoryComponent,
    MiniGraphComponent,
    TestSelectionComponent,
    ForWorkModal,
    BeAnOrganizationModal,
    IpiptestlistComponent,
    MiniGraphComponent
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
    EmailComposer,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuestionsProvider
  ]
})
export class AppModule {}
