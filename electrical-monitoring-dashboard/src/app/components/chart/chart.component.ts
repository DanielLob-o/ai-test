import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EChartsOption } from 'echarts';
import { ElectricalData } from '../../models/electrical-data.model';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnChanges {
  @Input() data: ElectricalData[] = [];
  @Input() title: string = '';
  @Input() series: string[] = [];
  @Input() yAxisLabel: string = '';

  chartOption: EChartsOption = {};

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['data'] && this.data.length > 0) {
      this.initChart();
    }
  }

  initChart(): void {
    const seriesData: EChartsOption['series'] = this.series.map(s => ({
      name: s,
      type: 'line',
      data: this.data.map(d => [d.timestamp, d[s as keyof ElectricalData]])
    }));

    this.chartOption = {
      title: {
        text: this.title
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: this.series
      },
      xAxis: {
        type: 'time'
      },
      yAxis: {
        type: 'value',
        name: this.yAxisLabel
      },
      series: seriesData
    };
  }
}
