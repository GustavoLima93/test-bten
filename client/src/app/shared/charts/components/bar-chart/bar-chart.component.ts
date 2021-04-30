import { Component, Input, OnInit } from '@angular/core';

import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
})
export class BarChartComponent implements OnInit {
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };

  @Input()
  public barChartLabels!: Label[] 

  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  @Input()
  public barChartData!: ChartDataSets[] 

  constructor() {}

  ngOnInit(): void {}
}
