import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './MyComponent/forgot-password/forgot-password.component';
import { LoginComponent } from './MyComponent/login/login.component';
import { RegisterComponent } from './MyComponent/register/register.component';
import { UploadDetailsComponent } from './MyComponent/upload-details/upload-details.component';
import { UploadFormComponent } from './MyComponent/upload-form/upload-form.component';
import { UploadListComponent } from './MyComponent/upload-list/upload-list.component';
import { VerifyEmailComponent } from './MyComponent/verify-email/verify-email.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'verify-email',component:VerifyEmailComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'upload-form',component:UploadFormComponent},
  {path:'upload-details',component:UploadDetailsComponent},
  {path:'upload-list',component:UploadListComponent},
  {
    path: 'upload-form', component: UploadFormComponent, children: [
      { path: 'upload-list', component: UploadListComponent },
      { path: 'upload-details', component: UploadDetailsComponent }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
