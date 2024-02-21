import { Component } from '@angular/core';
import {
  faEllipsisVertical,
  faPenToSquare,
  faTrash,
  faArrowsRotate,
  faFileLines,
  faPrint,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-dispatch-route',
  templateUrl: './dispatch-route.component.html',
  styleUrl: './dispatch-route.component.scss',
})
export class DispatchRouteComponent {
  threedot = faEllipsisVertical;
  edit = faPenToSquare;
  delete = faTrash;
  refresh = faArrowsRotate;
  invoice = faFileLines;
  print = faPrint;
  email = faEnvelope;
  whatsapp = faWhatsapp;
}
