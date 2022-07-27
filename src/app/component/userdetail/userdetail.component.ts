import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {
  data: any;
  gender = ''
  mode: 'edit' | 'locked' = 'locked';
  mod = TextTrackCueList;
  btnText: string = 'Edit';
  constructor(private UserService: UserService, private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.UserService.getInfoUser(params.get('id')!).subscribe(item => this.data = item);
    })
    console.log(this.data);
  }
  changeMode(mode?: 'edit' | 'locked'): void {
    console.log(mode);
    this.mode = this.mode === 'locked' ? 'edit' : 'locked';
    this.btnText = this.btnText === 'Edit' ? 'Save Changes' : 'Edit';
  }
}
