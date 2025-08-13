import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartComponent } from './chart/chart.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StatsCardComponent } from './stats-card/stats-card.component';
import { CardModule } from 'primeng/card';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  declarations: [
    DashboardComponent,
    StatsCardComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    })
  ],
  exports: [
    DashboardComponent,
    StatsCardComponent,
    ChartComponent
  ]
})
export class ComponentsModule { }
