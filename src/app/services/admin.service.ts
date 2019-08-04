import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  loginurl = 'https://testfoodi.herokuapp.com/customer';
  signupurl = 'https://testfoodi.herokuapp.com/customer';

  constructor(private http: HttpClient) { }

  public signUp(signupDetails) {
    return this.http.post<any>(this.signupurl, signupDetails);
  }


}

export class SignUpDetails {
  constructor(
    public name: string,
    public email: string,
    public password: string
  ) {}
}
