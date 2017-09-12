import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Http, HttpModule } from '@angular/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

//Pages
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
import { AppUserProvider } from '../providers/app-user/app-user';
import { AnswersProvider } from '../providers/answers/answers';
import { ResultsProvider } from '../providers/results/results';
import { OrganizationProvider } from '../providers/organization/organization'

//Pipes
import { FilterTestsByTimePipe } from '../pipes/filter-tests-by-time/filter-tests-by-time';
import { SearchTermPipe } from '../pipes/search-term/search-term';

//Components
import { ChartComponent } from '../components/chart/chart';
import { TestlistComponent } from '../components/testlist/testlist';
import { RegistrationComponent } from '../components/registration/registration';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { SearchListComponent } from '../components/search-list/search-list';
import { MiniGraphComponent } from '../components/mini-graph/mini-graph';
import { TestSelectionComponent } from '../components/test-selection/test-selection'
import { IpiptestlistComponent } from '../components/ipiptestlist/ipiptestlist';
import { LogoutComponent } from '../components/logout/logout';
import { HomeComponent } from '../components/home/home';
import { OrgSearchComponent } from '../components/org-search/org-search';
import { RememberMeComponent } from '../components/remember-me/remember-me';
import { TestSearchComponent } from '../components/test-search/test-search';

//Modals
import { ForWorkModal } from '../modals/for-work-modal/for-work-modal';
import { BeAnOrganizationModal } from '../modals/be-an-organization/be-an-organization';

import { ManageAccountModal } from '../modals/manage-account/manage-account';
import { PasswordResetModal } from '../modals/password-reset/password-reset';
import { PasswordChangeModal } from '../modals/password-change/password-change';
import { EulaModal } from '../modals/eula/eula';


export function createTranslateLoader(http: Http){
  return new TranslateHttpLoader(http, './assets/lang/', '.json');
}


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
    EulaModal,
    TestSelectionComponent,
    ForWorkModal,
    BeAnOrganizationModal,
    IpiptestlistComponent,
    MiniGraphComponent,
    LobbyOrganizationPage,
    LogoutComponent,
    ManageAccountModal,
    PasswordResetModal,
    PasswordChangeModal,
    HomeComponent,
    OrgSearchComponent,
    RememberMeComponent,
    TestSearchComponent,
    ]

@NgModule({
  declarations: [
    injections, 
    FilterTestsByTimePipe,
    SearchTermPipe,
    TestSearchComponent 
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    })
    
  ],
  bootstrap: [IonicApp],
  entryComponents: injections,
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuestionsProvider,
    TestHistoryProvider,
    AppUserProvider,
    AnswersProvider,
    ResultsProvider,
    OrganizationProvider
  ]
})
export class AppModule {}
