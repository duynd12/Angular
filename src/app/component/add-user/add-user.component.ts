import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../service/user.service';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  providers: [UsersComponent]

})
export class AddUserComponent implements OnInit {

  constructor(private userService: UserService, private users: UsersComponent, private router: Router) { }
  formGroup: FormGroup;
  firstName = ''
  regexEmail = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$'
  regexPhoneNumber = '^(0|84)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$'
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.pattern(this.regexEmail)]),
      address: new FormGroup({
        street: new FormControl('', Validators.required),
        district: new FormControl('', Validators.required),
        city: new FormControl('', Validators.required),
      }),
      phone: new FormControl('', [Validators.required, Validators.pattern(this.regexPhoneNumber)]),
      dob: new FormControl('', Validators.required),
      gender: new FormControl('male', Validators.required),
      image: new FormControl('', Validators.required)
    })
    console.log(this.formGroup)
    console.log(this.f['address']);
    console.log(this.f['address'].get('city'));
  }
  save(value: any) {
    this.userService.addUser(value).subscribe(() => this.formGroup.reset());
  }
  noSpaceAllowed(control: FormControl) {
    if (control.value != null && control.value.indexOf(' ') != -1) {
      return { noSpaceAllowed: true };
    }
    return null;
  }
  onSave() {
    console.log(this.formGroup.value);
  }
  get f() {
    return this.formGroup.controls;
  }
  save1() {
    console.log('123')
  }
  directiveHome() {
    this.router.navigateByUrl('/users')
  }
}


////////////////////////////////////////////////////////////////
// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { emailMatcher } from './email-matcher';

// @Component({
//   selector: 'signup-form',
//   template: `
//     <form class="form" novalidate (ngSubmit)="onSubmit(user)" [formGroup]="user">
//       <label>
//         <span>Full name</span>
//         <input type="text" placeholder="Your full name" formControlName="name">
//       </label>
//       <div class="error" *ngIf="user.get('name').touched && user.get('name').hasError('required')">
//         Name is required
//       </div>
//       <div formGroupName="account">
//         <label>
//           <span>Email address</span>
//           <input type="email" placeholder="Your email address" formControlName="email">
//         </label>
//         <label>
//           <span>Confirm address</span>
//           <input type="email" placeholder="Confirm your email address" formControlName="confirm">
//         </label>
//         <div class="error" *ngIf="user.get('account').touched && user.get('account').hasError('nomatch')">
//           Email addresses must match
//         </div>
//       </div>
//       <button type="submit" [disabled]="user.invalid">Sign up</button>
//     </form>
//   `
// })
// export class SignupFormComponent implements OnInit {
//   user: FormBuilder;
//   constructor(public fb: FormBuilder) { }
//   ngOnInit() {
//     this.user = this.fb.group({
//       name: ['', Validators.required],
//       account: this.fb.group({
//         email: ['', Validators.required],
//         confirm: ['', Validators.required]
//       }, { validator: emailMatcher })
//     });
//   }
//   onSubmit({ value, valid }) {
//     console.log(value, valid);
//   }
// }
// //////////////
// export const emailMatcher = (control: AbstractControl): { [key: string]: boolean } => {
//   const email = control.get('email');
//   const confirm = control.get('confirm');
//   if (!email || !confirm) {
//     return null;
//   }
//   return email.value === confirm.value ? null : { nomatch: true };
// };