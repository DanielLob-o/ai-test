import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgxEchartsModule } from 'ngx-echarts';
import { CardModule } from 'primeng/card';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ChartComponent } from './components/chart/chart.component';
import { StatsCardComponent } from './components/stats-card/stats-card.component';

import { ElectricalDataService } from './services/electrical-data.service';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ChartComponent,
    StatsCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    CardModule
  ],
  providers: [
    ElectricalDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
