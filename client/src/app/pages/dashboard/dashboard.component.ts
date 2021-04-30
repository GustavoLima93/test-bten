import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';

import { delay } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginService } from '../login/services/login.service';
import { User } from '../login/models/session.model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit, AfterViewInit {
  public user!: User;

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  constructor(
    private observer: BreakpointObserver,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    const user = this.loginService.user;
    this.user = user && JSON.parse(user);
  }

  ngAfterViewInit(): void {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(500))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
