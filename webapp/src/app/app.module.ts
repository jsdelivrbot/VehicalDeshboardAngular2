import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './Components/Dashboard/dashboard.component';
import { ToolbarComponent } from './Components/toolbar/toolbar.component';
import {MaterialModule} from '@angular/material';
import { TabsComponent } from './Components/tabs/tabs.component';
import { DashboardbodyComponent } from './Components/dashboardbody/dashboardbody.component';
import { InfotabbodyComponent } from './Components/infotabbody/infotabbody.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    TabsComponent,
    DashboardbodyComponent,
    InfotabbodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    NoopAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
