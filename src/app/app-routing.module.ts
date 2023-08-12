import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './guards/auth.guard';

import { LoginPageComponent } from './login-page/login-page.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UsersPageComponent },
  // *NEED FIXES* nested routes???
  { path: 'users/add', component: AddUserComponent },
  { path: 'users/:id', component: UserInfoComponent },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  // *NEED FIXES* "redirect all" doesn't work correct (needs to reload page)!
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
