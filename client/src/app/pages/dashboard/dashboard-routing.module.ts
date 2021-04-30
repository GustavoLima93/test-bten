import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MetricsComponent } from './components/metrics/metrics.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'metrics',
        component: MetricsComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
