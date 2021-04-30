import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { SigninService } from './services/signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['../../shared/styles/styles-shared.scss'],
})
export class SigninComponent implements OnInit {
  public form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private signinService: SigninService,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      homeTeam: [''],
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      age: [null, [Validators.required]],
      height: [null],
    });
  }

  public submit(): void {
    this.signinService.createUser(this.form.value).subscribe((resp: any) => {
      this.router.navigate(['/login']);
      this.alertService.success('Success', 'Created Account', 'Ok')
    });
  }
}
