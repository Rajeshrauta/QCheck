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
  selector: 'app-today-overdue',
  templateUrl: './today-overdue.component.html',
  styleUrl: './today-overdue.component.scss',
})
export class TodayOverdueComponent {
  threedot = faEllipsisVertical;
  edit = faPenToSquare;
  delete = faTrash;
  refresh = faArrowsRotate;
  invoice = faFileLines;
  print = faPrint;
  email = faEnvelope;
  whatsapp = faWhatsapp;
}
