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

const routes: Routes = [
  {
    path: 'expenditure-submit',
    component: ExpenditureSubmitComponent,
    title: 'Expenditure-Submit'
  }
]

@NgModule({
  declarations: [
    ExpenditureSubmitComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CalendarModule,
    FormsModule,
    CardModule,
    FileUploadModule,
    DropdownModule,
    PaginatorModule
  ]
})
export class ExpenditureModule {
}
