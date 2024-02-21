import { Component } from '@angular/core';
import {
  faEllipsisVertical,
  faPenToSquare,
  faTrash,
  faCloud,
  faArrowsRotate,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-order-received',
  templateUrl: './order-received.component.html',
  styleUrl: './order-received.component.scss',
})
export class OrderReceivedComponent {
  threedot = faEllipsisVertical;
  edit = faPenToSquare;
  delete = faTrash;
  sync = faCloud;
  refresh = faArrowsRotate;
}
