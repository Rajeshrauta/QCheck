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
  selector: 'app-all-overdue',
  templateUrl: './all-overdue.component.html',
  styleUrl: './all-overdue.component.scss',
})
export class AllOverdueComponent {
  threedot = faEllipsisVertical;
  edit = faPenToSquare;
  delete = faTrash;
  refresh = faArrowsRotate;
  invoice = faFileLines;
  print = faPrint;
  email = faEnvelope;
  whatsapp = faWhatsapp;
}
