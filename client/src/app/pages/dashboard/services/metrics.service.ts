import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Metric } from '../models/metric.model';

@Injectable({
  providedIn: 'root'
})
export class MetricsService {

  private URL = environment.apiUrl

  constructor(private http: HttpClient) { }

  public getMetrics(): Observable<Metric> {
    return this.http.get<Metric>(`${this.URL}/mock`)
  }
}
