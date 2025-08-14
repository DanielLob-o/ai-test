import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { NgxEchartsModule } from 'ngx-echarts';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatsCardComponent } from './stats-card/stats-card.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    CardModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  exports: [
  ]
})
export class ComponentsModule { }
