import { Component, Input } from '@angular/core';
import {Card, CardModule} from 'primeng/card';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  imports: [
    Card
  ],
  styleUrls: ['./stats-card.component.css']
})
export class StatsCardComponent {
  @Input() title: string = '';
  @Input() value: number | undefined = 0;
  @Input() unit: string = '';
}
