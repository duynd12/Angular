import { Component, OnInit } from '@angular/core';
import { User } from './interface/user.interface';
import { UserService } from './service/user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ProHTTP';

  constructor(private UserService: UserService) {

  }
  ngOnInit(): void {

  }

}
