import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // tslint:disable-next-line:no-shadowed-variable
  constructor(private router: Router, private LoginService: LoginService) {
  }

  ngOnInit() {
  }

  try(formValue) {
    console.log('Try Login : ' + formValue.email);

    this.LoginService.isUser(formValue.email, formValue.password)
      .subscribe(response => {

        if (response) {

          localStorage.setItem('access_token', response['access_token']);
          localStorage.setItem('token_type', response['token_type']);
          this.LoginService.setLoginExists(true);

          this.router.navigate(['list']);

        } else {
          console.log('Try Login Response Unsuccesful');
          // TODO: Do something for fail case
          this.router.navigate(['signin']);

        }

      });
  }

  git() {
    this.router.navigate(['kayit']);
  }

}
