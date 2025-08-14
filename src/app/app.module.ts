import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { ElectricalDataService } from './services/electrical-data.service';
import { RouterModule } from '@angular/router';
import { providePrimeNG } from 'primeng/config';

@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ComponentsModule,
    RouterModule
  ],
  providers: [
    ElectricalDataService,

  ],
  bootstrap: []
})
export class AppModule { }
