import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersComponent } from './component/users/users.component';
import { UserdetailComponent } from './component/userdetail/userdetail.component';
import { AddUserComponent } from './component/add-user/add-user.component';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UpdateComponent } from './component/update/update.component';
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserdetailComponent,
    AddUserComponent,
    UpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
