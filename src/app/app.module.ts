import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';

const firebaseConfig = {
  apiKey: "AIzaSyDUh23YhzenJF2PXRWNGH3YfhWIX2TbLTY",
  authDomain: "arcmavens.firebaseapp.com",
  databaseURL: "https://arcmavens.firebaseio.com",
  projectId: "arcmavens",
  storageBucket: "arcmavens.appspot.com",
  messagingSenderId: "967824871947"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
