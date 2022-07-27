import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css'],
})
export class UpdateComponent implements OnInit {
  formGroup: FormGroup

  firstName = ''
  lastName = ''
  phone = ''
  email = ''
  phoneNumber = ''
  dob = ''
  gender = ''
  street = ''
  district = ''
  city = ''
  constructor(private activatedRoute: ActivatedRoute, private UserService: UserService, private router: Router) { }
  data: any;
  private id: any;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.id = params.get('id');
      this.UserService.getInfoUser(params.get('id')!).subscribe(item => this.data = item);
    })
    console.log(this.data)
  }

  updateUser(value: any) {
    this.UserService.updateUser(this.id, value).subscribe(() => '');
  }
  onSubmit(value: any) {
    console.log(value);
  }
  redirectToUserDetail() {
    this.router.navigate(['/users', this.id]);
  }
}
