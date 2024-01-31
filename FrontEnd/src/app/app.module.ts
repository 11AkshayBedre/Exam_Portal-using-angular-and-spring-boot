import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './MyComponent/navbar/navbar.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { HomeComponent } from './page/home/home.component';
import { Form, FormsModule } from '@angular/forms';
import { UserDashboardComponent } from './page/user/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './page/profile/profile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './page/admin/sidebar/sidebar.component';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { WelcomeComponent } from './page/admin/welcome/welcome.component';
import { ViewCategoryComponent } from './page/admin/view-category/view-category.component';
import { AddCategoryComponent } from './page/admin/add-category/add-category.component';
import { AddQuizComponent } from './page/admin/add-quiz/add-quiz.component';
import { ViewQuizComponent } from './page/admin/view-quiz/view-quiz.component';
import { UpdateQuizComponent } from './page/admin/update-quiz/update-quiz.component';
import { ViewQuestionComponent } from './page/admin/view-question/view-question.component';
import { AddQuestionComponent } from './page/admin/add-question/add-question.component';
import { UserSidebarComponent } from './page/user/user-sidebar/user-sidebar.component';
import { PrequizComponent } from './page/user/prequiz/prequiz.component';
import { LoadquizComponent } from './page/user/loadquiz/loadquiz.component';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import { StartquizComponent } from './page/user/startquiz/startquiz.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    DashboardComponent,
    WelcomeComponent,
    ViewCategoryComponent,
    AddCategoryComponent,
    AddQuizComponent,
    ViewQuizComponent,
    UpdateQuizComponent,
    ViewQuestionComponent,
    AddQuestionComponent,
    UserSidebarComponent,
    PrequizComponent,
    LoadquizComponent,
    StartquizComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule
  ],
  providers: [LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
