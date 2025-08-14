import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ElectricalData } from '../models/electrical-data.model';

@Injectable({
  providedIn: 'root'
})
export class ElectricalDataService {

  constructor() { }

  getElectricalData(): Observable<ElectricalData[]> {
    const data: ElectricalData[] = [];
    const now = new Date();
    for (let i = 24 ; i >= 0; i--) { // Data for every minute in the last 24 hours
      const timestamp = new Date(now.getTime() - i * 60 * 1000);
      data.push({
        timestamp,
        v_l1_l2: 220 + Math.random() * 10 - 5,
        v_l2_l3: 220 + Math.random() * 10 - 5,
        v_l1_l3: 220 + Math.random() * 10 - 5,
        i_l1: 10 + Math.random() * 2 - 1,
        i_l2: 10 + Math.random() * 2 - 1,
        i_l3: 10 + Math.random() * 2 - 1,
        active_power: 5 + Math.random() * 1 - 0.5,
        reactive_power: 1 + Math.random() * 0.5 - 0.25,
        apparent_power: 5.1 + Math.random() * 1 - 0.5,
        consumption: 1000 + (24 * 60 - i) * 0.1
      });
    }
    return of(data);
  }
}
