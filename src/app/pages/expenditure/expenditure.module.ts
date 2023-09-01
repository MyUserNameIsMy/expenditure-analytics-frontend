import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ExpenditureSubmitComponent} from './pages/expenditure-submit/expenditure-submit.component';
import {RouterModule, Routes} from "@angular/router";
import {CalendarModule} from "primeng/calendar";
import {FormsModule} from "@angular/forms";
import {CardModule} from "primeng/card";
import {FileUploadModule} from "primeng/fileupload";
import {DropdownModule} from "primeng/dropdown";
import {PaginatorModule} from "primeng/paginator";
import {ExpenditureAnalyticsComponent} from './pages/expenditure-analytics/expenditure-analytics.component';
import {TableModule} from "primeng/table";
import {ChartModule} from "primeng/chart";

const routes: Routes = [
  {
    path: 'expenditure-submit',
    component: ExpenditureSubmitComponent,
    title: 'Expenditure-Submit'
  },
  {
    path: 'expenditure-analytics',
    component: ExpenditureAnalyticsComponent,
    title: 'Expenditure-Submit'
  }
]

@NgModule({
  declarations: [
    ExpenditureSubmitComponent,
    ExpenditureAnalyticsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CalendarModule,
    FormsModule,
    CardModule,
    FileUploadModule,
    DropdownModule,
    PaginatorModule,
    TableModule,
    ChartModule
  ]
})
export class ExpenditureModule {
}
