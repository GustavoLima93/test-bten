export interface Datum {
  data: number[];
  label: string;
  backgroundColor: string;
  hoverBackgroundColor: string;
  borderColor: string;
}

export interface Barchart {
  data: Datum[];
  labels: string[];
}

export interface Datum2 {
  data: number[];
  label: string;
  yAxisID: string;
}

export interface Linechart {
  data: Datum2[];
  labels: string[];
}

export interface Charts {
  barchart: Barchart;
  linechart: Linechart;
}

export interface Metric {
  kpis: number[];
  charts: Charts;
}