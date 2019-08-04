import { Component, OnInit } from '@angular/core';
import { AdminService, SignUpDetails } from 'src/app/services/admin.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { error } from '@angular/compiler/src/util';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  abc: any;
  genderId: any;
  genders = ['Male', 'Female', 'Others'];
  signupForm: FormGroup;

  get name() {
      return this.signupForm.get('name');
  }
  get email() {
    return this.signupForm.get('email');
  }
  get gender() {
    return this.signupForm.get('gender');
  }
  get password() {
    return this.signupForm.get('password');
  }
  get confirmPassword() {
    return this.signupForm.get('confirmPassword');
  }

  constructor(private _adminService: AdminService, private fb: FormBuilder) { }

  ngOnInit() {

    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],

    }, {
      validator: this.MustMatch('password', 'confirmPassword')
  });

  }

  onSubmit() {
    console.log(this.signupForm.value);
    this.genderId = (this.genders.indexOf(this.signupForm.value.gender)) + 1;
    this.signupForm.patchValue({gender: this.genderId});
    this.signupForm.controls.confirmPassword.disable();
    console.log(this.signupForm.value);
    this._adminService.signUp(this.signupForm.value)
    .subscribe(
      response => console.log('success', response),
      error => console.log('error', error)
    );
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    };
}

}
