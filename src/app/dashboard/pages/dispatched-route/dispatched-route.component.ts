import { Component } from '@angular/core';
import {
  faEllipsisVertical,
  faPenToSquare,
  faTrash,
  faArrowsRotate,
  faFileLines,
  faPrint,
  faEnvelope,
} from '@fortawesome/free-solid-svg-icons';

import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'app-dispatched-route',
  templateUrl: './dispatched-route.component.html',
  styleUrl: './dispatched-route.component.scss',
})
export class DispatchedRouteComponent {
  threedot = faEllipsisVertical;
  edit = faPenToSquare;
  delete = faTrash;
  refresh = faArrowsRotate;
  invoice = faFileLines;
  print = faPrint;
  email = faEnvelope;
  whatsapp = faWhatsapp;
}
