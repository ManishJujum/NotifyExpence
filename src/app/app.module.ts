import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { SignInComponent } from './SignIn/SignIn.component';
import {DashboardComponent } from './Dashboard/Dashboard.component';
import {SignUpComponent} from './SignUp/SignUp.component';
import { RegisterScreenComponent } from './RegisterScreen/RegisterScreen.component';
import { UserProfileComponent } from './UserProfile/user-profile.component';
import {chatmessageComponent} from './ChatSupport/Chat-Message/Chat-Message.component';
import {chatwindowComponent} from './ChatSupport/Chat-Window/Chat-Window.component';
import { TransactionListComponent } from './Trasactions/TransactionList.coponent'; 

const routes: Routes = [
  { path: 'login', component: SignInComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'singup', component: SignUpComponent },
  { path: 'RegisterScreen', component : RegisterScreenComponent },
  { path: 'UserProfile', component: UserProfileComponent},
  { path: 'TransactionList', component: TransactionListComponent},
  { path: 'chatmessageComponent', component: chatmessageComponent},
  { path: 'chatwindowComponent', component: chatwindowComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    DashboardComponent,
    SignUpComponent,
    RegisterScreenComponent,
    UserProfileComponent,
    chatmessageComponent,
    chatwindowComponent,
    TransactionListComponent
  ],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  entryComponents :[],
  providers: [HttpClient, FormsModule,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
