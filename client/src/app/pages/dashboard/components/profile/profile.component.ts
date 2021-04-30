import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ProfileService } from '../../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public formProfile!: FormGroup;
  public profile: any;

  constructor(
    private profileService: ProfileService,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formProfile = this.formBuilder.group({
      homeTeam: [''],
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: [''],
      age: [null, [Validators.required]],
      height: [null],
    });

    this.fillFormProfile();
  }

  fillFormProfile(): void {
    this.profileService.getProfile().subscribe((profile: any) => {
      this.profile = profile;
      this.formProfile.setValue({
        homeTeam: profile.homeTeam,
        name: profile.name,
        username: profile.username,
        password: '',
        age: profile.age,
        height: profile.height,
      });
    });
  }

  submit(): void {
    const {
      homeTeam,
      name,
      username,
      password,
      age,
      height,
    } = this.formProfile.value;

    let formUpdate: any = { homeTeam, name, username, age, height };

    password && (formUpdate = { ...formUpdate, password });

    this.profileService
      .updateProfile(this.profile.id, formUpdate)
      .subscribe(() => {
        this.alertService.success('Success', 'Updated Profile', 'Ok');
      });
  }

  async deleteProfile(): Promise<void> {
    const { value } = await this.alertService.question2(
      'Warn',
      'you want to delete your account ?',
      'Ok'
    );

    if (value) {
      this.profileService.deleteProfile(this.profile.id).subscribe(() => {
        this.alertService.success('Success', 'Deleted Profile', 'Ok');
        localStorage.clear();
        this.router.navigate(['/login']);
      });
    }
  }
}
