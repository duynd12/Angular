import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Response } from 'src/app/interface/response.interface';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  response: Response;
  constructor(private userService: UserService) { }
  data: any;
  ngOnInit(): void {
    this.onGetUsers();
    this.onGetUserEx();
  }
  onGetUsers() {
    this.userService.getUsers(3).subscribe(data => this.response = data);
    console.log(this.response);
  }
  onGetUserEx() {
    this.userService.getUserEx().subscribe(item => this.data = item);
  }
  onDeleteUserEx(id: string) {
    this.userService.deleteUser(id).subscribe(() => this.onGetUserEx());
  }
}
