import { Component, Input } from '@angular/core';
import { CardModule} from 'primeng/card';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  imports: [
    CardModule
  ],
  styleUrls: ['./stats-card.component.css']
})
export class StatsCardComponent {
  @Input() title: string = '';
  @Input() value: number | undefined = 0;
  @Input() unit: string = '';
}
