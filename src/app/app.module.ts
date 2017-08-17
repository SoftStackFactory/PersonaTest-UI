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
import { OrganizationManagePage } from '../pages/organization-manage/organization-manage';
import { OrganizationBecomePage } from '../pages/organization-become/organization-become';
import { LobbyOrganizationPage } from '../pages/lobby-organization/lobby-organization';

//Providers
import { QuestionsProvider } from '../providers/questions/questions';
import { TestHistoryProvider } from '../providers/test-history/test-history'
import { AppUser } from '../providers/app-user';


//Components
import { ChartComponent } from '../components/chart/chart';
import { TestlistComponent } from '../components/testlist/testlist';
import { RegistrationComponent } from '../components/registration/registration';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { SearchListComponent } from '../components/search-list/search-list';
import { MiniGraphComponent } from '../components/mini-graph/mini-graph';
import { EulaComponent } from '../components/eula/eula';
import { TestSelectionComponent } from '../components/test-selection/test-selection'
import { IpiptestlistComponent } from '../components/ipiptestlist/ipiptestlist';
import { LogoutComponent } from '../components/logout/logout';
import { ManageAccountModal } from '../modals/manage-account/manage-account';
import { HomeComponent } from '../components/home/home';

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
    SearchListComponent,
    ProgressBarComponent,
    MiniGraphComponent,
    EulaComponent,
    TestSelectionComponent,
    ForWorkModal,
    BeAnOrganizationModal,
    IpiptestlistComponent,
    MiniGraphComponent,
    LobbyOrganizationPage,
    LogoutComponent,
    ManageAccountModal,
    HomeComponent
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
    QuestionsProvider,
    TestHistoryProvider,
    AppUser
  ]
})
export class AppModule {}
