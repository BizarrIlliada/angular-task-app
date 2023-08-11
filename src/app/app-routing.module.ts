import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { UserInfoComponent } from './user-info/user-info.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'users', component: UsersPageComponent },
  { path: 'user/:id', component: UserInfoComponent },
  // *NEED FIXES* it must exist something like Vue Routing Guards but Angular version!
  {
    path: '',
    redirectTo: localStorage.getItem('isAuthorized') === 'true' ? '/users' : 'login',
    pathMatch: 'full',
  },
  // *NEED FIXES* redirect all doesn't work correct (needs to reload page)!
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
