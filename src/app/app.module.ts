import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';
import { SplashPage } from '../pages/splash/splash';
import { KrazzytabsPage } from '../pages/krazzytabs/krazzytabs';
import { MovetypesProvider } from '../providers/movetypes/movetypes';
import { ItemlistProvider } from '../providers/itemlist/itemlist';
import { InvoiceProvider } from '../providers/invoice/invoice';
import { CustomnodalProvider } from '../providers/customnodal/customnodal';
import { CustommodalProvider } from '../providers/custommodal/custommodal';

@NgModule({
  declarations: [
    MyApp,
    SplashPage
    
    
   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, ['ionic', 'ionic-steps-bar'])
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SplashPage
   
   
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovetypesProvider,
    ItemlistProvider,
    InvoiceProvider,
    CustomnodalProvider,
    CustommodalProvider
  ]
})
export class AppModule {}
