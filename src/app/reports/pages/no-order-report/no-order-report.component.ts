import { Component } from '@angular/core';
import {
  faEllipsisVertical,
  faPenToSquare,
  faTrash,
  faCloud,
  faFileExcel,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-no-order-report',
  templateUrl: './no-order-report.component.html',
  styleUrl: './no-order-report.component.scss',
})
export class NoOrderReportComponent {
  excel = faFileExcel;
}
