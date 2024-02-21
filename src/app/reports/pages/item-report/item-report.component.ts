import { Component } from '@angular/core';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item-report',
  templateUrl: './item-report.component.html',
  styleUrl: './item-report.component.scss',
})
export class ItemReportComponent {
  delete = faTrashCan;
}
