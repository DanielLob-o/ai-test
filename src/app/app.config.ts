import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations }     from '@angular/platform-browser/animations';

// ECharts provider
import { provideEchartsCore } from 'ngx-echarts';
import * as echarts from 'echarts/core';
import { BarChart, LineChart, GaugeChart } from 'echarts/charts';
import { GridComponent, TooltipComponent, LegendComponent, TitleComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
echarts.use([BarChart, LineChart, GaugeChart, GridComponent, TooltipComponent, LegendComponent, TitleComponent, CanvasRenderer]);


import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimations(),
    provideEchartsCore({ echarts })

  ]
};
