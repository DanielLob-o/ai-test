import { Component, OnInit } from '@angular/core';
import { ElectricalDataService } from '../../services/electrical-data.service';
import { ElectricalData } from '../../models/electrical-data.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
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
