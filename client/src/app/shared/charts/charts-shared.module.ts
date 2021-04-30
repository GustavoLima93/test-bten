import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';

import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { DoughnutChartComponent } from './components/doughnut-chart/doughnut-chart.component';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { RadarChartComponent } from './components/radar-chart/radar-chart.component';
import { LineChartComponent } from './components/line-chart/line-chart.component';



@NgModule({
  declarations: [
    BarChartComponent,
    DoughnutChartComponent,
    PieChartComponent,
    RadarChartComponent,
    LineChartComponent
  ],
  imports: [
    CommonModule,
    ChartsModule,
  ],
  exports: [
    BarChartComponent,
    DoughnutChartComponent,
    PieChartComponent,
    RadarChartComponent,
    LineChartComponent
  ]
})
export class ChartsSharedModule { }
