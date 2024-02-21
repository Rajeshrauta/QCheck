import { Component } from '@angular/core';
import { faEllipsisVertical,faPenToSquare,faPrint,faEnvelope,faDownload,  } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp  } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-vendors-transaction',
  templateUrl: './vendors-transaction.component.html',
  styleUrl: './vendors-transaction.component.scss'
})
export class VendorsTransactionComponent {
  threedot = faEllipsisVertical;
  edit = faPenToSquare;
  email = faEnvelope;
  print = faPrint;
  orderprocess = faDownload;
  whatsapp = faWhatsapp;
}
