import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';

import { MainDashboardComponent } from './components/main-dashboard/main-dashboard.component';
import { AutomationComponent } from './components/automation/automation.component';
import { HttpClientModule } from '@angular/common/http';
import { AgGridComponent } from './components/ag-grid/ag-grid.component';
import { AgGridModule } from 'ag-grid-angular';
import { CommonComponent } from './components/common/common.component';

@NgModule({
  declarations: [
    AppComponent,
    MainDashboardComponent,
    AutomationComponent,
    AgGridComponent,
    CommonComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
