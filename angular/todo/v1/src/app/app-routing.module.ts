import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Auth Guard
// components
import { LoginComponent } from './view/login';
import { HomeComponent } from './view/home/home.component';
import { IndexComponent } from './view/index/index.component';
import { AuthComponent } from './auth/auth/auth.component';
import { RegisterComponent } from './view/register/register.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'home', component: HomeComponent, pathMatch: 'full' },
  {
    //Authentication
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },

  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
