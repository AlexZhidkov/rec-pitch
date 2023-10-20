import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StartupComponent } from './startup/startup.component';
import { StartupsComponent } from './startups/startups.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'startups', component: StartupsComponent },
  { path: 'startup/:startupId', component: StartupComponent },
  { path: 'profile/:profileId', component: ProfileComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
