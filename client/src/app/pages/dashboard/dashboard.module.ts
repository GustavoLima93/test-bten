import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { MetricsComponent } from './components/metrics/metrics.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ChartsSharedModule } from 'src/app/shared/charts/charts-shared.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MetricsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ChartsSharedModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
