import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './component/add-user/add-user.component';
import { UpdateComponent } from './component/update/update.component';
import { UserdetailComponent } from './component/userdetail/userdetail.component';
import { UsersComponent } from './component/users/users.component';
const routes: Routes = [
  {
    path: 'users', component: UsersComponent
  },
  {
    path: 'users/addUser', component: AddUserComponent
  },
  {
    path: 'users/:id/edit', component: UpdateComponent
  },
  {
    path: 'users/:id', component: UserdetailComponent
  },
  {
    path: '**', redirectTo: 'users'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
