import {Component} from '@angular/core';
import {FileUploadEvent} from "primeng/fileupload";

@Component({
  selector: 'app-expenditure-submit',
  templateUrl: './expenditure-submit.component.html',
  styleUrls: ['./expenditure-submit.component.scss']
})
export class ExpenditureSubmitComponent {
  date: any;
  amount: any;
  categories: { id: number, name: string }[] = [
    {
      id: 1,
      name: '💧Назарбаева'
    },
    {
      id: 2,
      name: '💧Сарыарка'
    },
    {
      id: 3,
      name: '🔆Назарбаева'
    },
    {
      id: 4,
      name: '🔆Сарыарка'
    }
  ];


  onUpload($event: FileUploadEvent) {

  }
}
