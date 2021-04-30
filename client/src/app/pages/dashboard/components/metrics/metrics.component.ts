import { Component, OnInit } from '@angular/core';
import { SpinnerService } from 'src/app/shared/services/spinner.service';
import { Metric } from '../../models/metric.model';
import { MetricsService } from '../../services/metrics.service';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.scss'],
})
export class MetricsComponent implements OnInit {
  public cards!: number[];
  public barChartData: any;
  public barChartLabels: any;

  public lineChartData!: any;
  public lineChartLabels!: any;

  constructor(
    private metricsSerive: MetricsService,
    private spinnerService: SpinnerService
  ) {}

  ngOnInit(): void {
    this.getMetricsMock();
  }

  getMetricsMock() {
    this.spinnerService.showSpinner();
    this.metricsSerive.getMetrics().subscribe((mock: Metric) => {
      const { kpis, charts } = mock;

      this.cards = kpis;
      this.barChartData = charts.barchart.data;
      this.barChartLabels = charts.barchart.labels;
      this.lineChartData = charts.linechart.data;
      this.lineChartLabels = charts.linechart.labels;

      this.spinnerService.hideSpinner();
    });
  }
}
