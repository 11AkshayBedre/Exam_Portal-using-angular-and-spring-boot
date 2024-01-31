import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { UserDashboardComponent } from './page/user/user-dashboard/user-dashboard.component';
import { userGuard } from './MyService/user.guard';
import { ProfileComponent } from './page/profile/profile.component';
import { DashboardComponent } from './page/admin/dashboard/dashboard.component';
import { adminGuard } from './MyService/admin.guard';
import { WelcomeComponent } from './page/admin/welcome/welcome.component';
import { ViewCategoryComponent } from './page/admin/view-category/view-category.component';
import { AddCategoryComponent } from './page/admin/add-category/add-category.component';
import { AddQuizComponent } from './page/admin/add-quiz/add-quiz.component';
import { ViewQuizComponent } from './page/admin/view-quiz/view-quiz.component';
import { UpdateQuizComponent } from './page/admin/update-quiz/update-quiz.component';
import { ViewQuestionComponent } from './page/admin/view-question/view-question.component';
import { AddQuestionComponent } from './page/admin/add-question/add-question.component';
import { LoadquizComponent } from './page/user/loadquiz/loadquiz.component';
import { PrequizComponent } from './page/user/prequiz/prequiz.component';
import { StartquizComponent } from './page/user/startquiz/startquiz.component';



const routes: Routes = [
  { path:'', component: HomeComponent,pathMatch:'full'},
  { path: 'login', component: LoginComponent,pathMatch:'full' },
  { path: 'register', component: RegisterComponent ,pathMatch:'full'},

  // //admin
  {
    path: "dashboard", component: DashboardComponent, canActivate: [adminGuard],
    children : [
      {path:"",component:WelcomeComponent},
      {path:"profile",component:ProfileComponent},
      {path:"categories",component:ViewCategoryComponent},
      {path:"add-category",component:AddCategoryComponent},
      {path:"add-quiz",component:AddQuizComponent},
      {path:"quiz",component:ViewQuizComponent},
      {path:'update/:quizId',component:UpdateQuizComponent},
      {path:"view-questions/:qid/:title",component:ViewQuestionComponent},
      {path:"add-questions/:qid/:title",component:AddQuestionComponent}
    ]
  },

  //user
  // {path:"user-dashboard",component:UserDashboardComponent},

  //user routerLinks
{
    path: 'user-dashboard', component: UserDashboardComponent, canActivate: [userGuard],
    children: [
      { path: 'user-profile', component: ProfileComponent },
      { path: ":catId",component:LoadquizComponent},
      { path: "instructions/:qid",component:PrequizComponent}
      // // {path:':catId',component:LoadQuizComponent},
      // // {path:'instructions/:qid',component:PrequizComponent},
    ],
  },

  {path:'start-quiz/:qid',component:StartquizComponent,canActivate:[userGuard]}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
