import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth-components/signup/signup.component';
import { LoginComponent } from './auth-components/login/login.component';
import { SignupUserComponent } from './auth-components/signup-user/signup-user.component';
import { SignupAdminComponent } from './auth-components/signup-admin/signup-admin.component';


const routes: Routes = [
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"register_admin",component:SignupAdminComponent},
  {path:"register_user",component:SignupUserComponent},
  {path:"admin",loadChildren: () => import("./modules/admin/admin.module").then(m => m.AdminModule)},
  {path:"customer",loadChildren: () => import("./modules/customer/customer.module").then(m => m.CustomerModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
