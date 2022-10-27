import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import { BrowserModule } from '@angular/platform-browser';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LogoutComponent } from './components/logout/logout.component';



const routes: Routes = [

{path:'', component:HomeComponent},
{path:'login', component:LoginComponent},
{path:'register', component:RegisterComponent},
{path:'forgot-password', component:ForgotPasswordComponent},
{path:'forgot-password', component:ForgotPasswordComponent},
{path:'reset-password', component:ResetPasswordComponent},
{path:'dashboard', component:DashboardComponent},
{path:'logout', component:LogoutComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
