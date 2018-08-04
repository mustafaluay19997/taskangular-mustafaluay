import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms'; // new 
import { AngularFireModule } from 'angularfire2'; // new 
import { AngularFireDatabaseModule } from 'angularfire2/database'; // new 
import { environment } from '../environments/environment'; // new 
import { RouterModule, Routes } from '@angular/router'; // new 
import { AngularFireAuthModule } from 'angularfire2/auth';// new 
import { AngularFireStorageModule } from 'angularfire2/storage';// new 

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AddnewsComponent } from './addnews/addnews.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AllnewsComponent } from './allnews/allnews.component';
import { AwishComponent } from './awish/awish.component';
import { AllawishsComponent } from './allawishs/allawishs.component';
import { ContactpostComponent } from './contactpost/contactpost.component';
import { AllcontactpostComponent } from './allcontactpost/allcontactpost.component';
import { DetailsnewsComponent } from './detailsnews/detailsnews.component';
import { DetailawishComponent } from './detailawish/detailawish.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserinfoComponent } from './userinfo/userinfo.component';


const routes:Routes = [ // new 
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'addnews',component:AddnewsComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'allnews',component:AllnewsComponent},
  {path:'awish',component:AwishComponent},
  {path:'allawishs',component:AllawishsComponent},
  {path:'contactpost',component:ContactpostComponent},
  {path:'allcontactpost',component:AllcontactpostComponent},
  {path:'detailsnews/:id',component:DetailsnewsComponent},
  {path:'detailswish/:id',component:DetailawishComponent},
  {path:'userprofile',component:UserprofileComponent},
  {path:'userinfo/:id',component:UserinfoComponent},
  
]



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AddnewsComponent,
    LoginComponent,
    RegisterComponent,
    AllnewsComponent,
    AwishComponent,
    AllawishsComponent,
    ContactpostComponent,
    AllcontactpostComponent,
    DetailsnewsComponent,
    DetailawishComponent,
    UserprofileComponent,
    UserinfoComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),// new 
    FormsModule,// new 
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
