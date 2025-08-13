import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { NgxEchartsModule } from 'ngx-echarts';

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
