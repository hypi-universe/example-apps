// Core Module
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

//App Module
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';

//Packages
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components
import { LoginComponent } from './view/login/login.component';
import { RegisterComponent } from './view/register/register.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { IndexComponent } from './view/index/index.component';
import { AuthComponent } from './auth/auth/auth.component';

import { HomeComponent } from './view/home/home.component';
import { TodoComponent } from './components/todo/todo.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    NavbarComponent,
    IndexComponent,
    AuthComponent,
    HomeComponent,
    TodoComponent,
    AddTodoComponent,
    EditTodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    NgbModule,
  ],
  entryComponents: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
