import { Component } from '@angular/core';
import {
  faEllipsisVertical,
  faPenToSquare,
  faTrash,
  faCloud,
  faArrowsRotate,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrl: './pending-orders.component.scss',
  template: '<app-estimate-detail-modal></app-estimate-detail-modal>',
})
export class PendingOrdersComponent {
  threedot = faEllipsisVertical;
  edit = faPenToSquare;
  delete = faTrash;
  sync = faCloud;
  refresh = faArrowsRotate;
}
