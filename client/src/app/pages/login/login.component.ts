import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Sessions } from './models/session.model';
import { LoginService } from './services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../shared/styles/styles-shared.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
    if(this.loginService.token) {
      this.router.navigate(['/metrics']);
    }
  }

  public submit(): void {
   this.loginService.createSession(this.form.value).subscribe((resp: Sessions) => {
     const { token, user} = resp
     this.loginService.setToken(token);
     this.loginService.setUser(user);
     this.router.navigate(['/metrics']);
   })
  }

}
