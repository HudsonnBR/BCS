import { AuthService } from '../pages/provider/auth-service';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { FormPage } from '../pages/form/cadastro';
import { LoginPage } from '../pages/login/login';
import { CadastroServicoPage } from '../pages/servico/servico';
import {AjaxServiceProvider} from '../providers/ajax-service/ajax-service';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    FormPage,
    LoginPage,
    CadastroServicoPage
    ],
  imports: [
    BrowserModule,
      HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    FormPage,
    LoginPage,
    CadastroServicoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    AjaxServiceProvider
  ]
})
export class AppModule {}
