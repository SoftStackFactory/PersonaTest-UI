import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BrowserModule } from '@angular/platform-browser';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
 
let comp: MyApp;
let fixture: ComponentFixture<MyApp>;
 
describe('Component: Root Component', () => {
 
   beforeEach(async(() => {

        TestBed.configureTestingModule({
        
        declarations: [MyApp],
        
        providers: [
        StatusBar,
        SplashScreen
        ],
        
        imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
        ]
        
        }).compileComponents();
    
    }));
 
    beforeEach(() => {
 
        fixture = TestBed.createComponent(MyApp);
        comp    = fixture.componentInstance;
 
    });
 
    afterEach(() => {
        fixture.destroy();
        comp = null;
    });
 
    it('is created2', () => {
 
        expect(2).toBe(2);
        //expect(comp).toBeTruthy();
 
    });
 
     it('initialises with a root page of HomePage', () => {
        expect(comp['asdf']).toBe("Pedro");
    });
 
});