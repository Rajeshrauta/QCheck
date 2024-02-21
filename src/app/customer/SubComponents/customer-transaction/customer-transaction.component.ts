import { Component } from '@angular/core';
import { faEllipsisVertical,faPenToSquare,faPrint,faEnvelope,faDownload,  } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp  } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-customer-transaction',
  templateUrl: './customer-transaction.component.html',
  styleUrl: './customer-transaction.component.scss',
})
export class CustomerTransactionComponent {
  threedot = faEllipsisVertical;
  edit = faPenToSquare;
  email = faEnvelope;
  print = faPrint;
  orderprocess = faDownload;
  whatsapp = faWhatsapp;

  customerTransaction = [
    {
      CreatedDate: 'Jan 05,2024',
      Type: 'Estimate',
      Id: '62041',
      Balance: '$123',
      Total: '$128',
      TransactionDate: 'Jan 05,2024',
    },
    {
      CreatedDate: 'Jan 05,2024',
      Type: 'Invoice',
      Id: '62041',
      Balance: '$123',
      Total: '$128',
      TransactionDate: 'Jan 05,2024',
    },
    {
      CreatedDate: 'Jan 05,2024',
      Type: 'Estimate',
      Id: '62041',
      Balance: '$123',
      Total: '$128',
      TransactionDate: 'Jan 05,2024',
    },
  ];
}
