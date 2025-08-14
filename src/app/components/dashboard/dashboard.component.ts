import { Component, OnInit } from '@angular/core';
import { ElectricalDataService } from '../../services/electrical-data.service';
import { ElectricalData } from '../../models/electrical-data.model';
import {ChartComponent} from '../chart/chart.component';
import {StatsCardComponent} from '../stats-card/stats-card.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  imports: [
    ChartComponent,
    StatsCardComponent
  ],
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  electricalData: ElectricalData[] = [];
  latestData: ElectricalData | undefined;

  constructor(private electricalDataService: ElectricalDataService) { }

  ngOnInit(): void {
    this.electricalDataService.getElectricalData().subscribe(data => {
      this.electricalData = data;
      this.latestData = data[data.length - 1];
    });
  }
}
