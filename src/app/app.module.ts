import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBoSAhMQko-AX84C3P3zaUIluBZSoxIwFE",
  authDomain: "ionic-todolist-3721f.firebaseapp.com",
  databaseURL: "https://ionic-todolist-3721f.firebaseio.com",
  projectId: "ionic-todolist-3721f",
  storageBucket: "ionic-todolist-3721f.appspot.com",
  messagingSenderId: "374536034938",
  appId: "1:374536034938:web:87724849e5060d65dc79c3",
  measurementId: "G-8C8PPJB6Y8"
};
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,
            IonicModule.forRoot(),
            AppRoutingModule,
            AngularFireModule.initializeApp(firebaseConfig),
            AngularFireDatabaseModule,
            AngularFireAuthModule ,
            AngularFireStorageModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
