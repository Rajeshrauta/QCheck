import { Component } from '@angular/core';
import {
  faEllipsisVertical,
  faPenToSquare,
  faPrint,
  faEnvelope,
  faDownload,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recent-transactions-modal',
  templateUrl: './recent-transactions-modal.component.html',
  styleUrl: './recent-transactions-modal.component.scss',
})
export class RecentTransactionsModalComponent {
  threedot = faEllipsisVertical;
  edit = faPenToSquare;
  email = faEnvelope;
  print = faPrint;
  orderprocess = faDownload;
  searchicon = faMagnifyingGlass;

  RecentTransactions = [
    {
      Date: 'Jan 05,2024',
      Type: 'Estimate',
      Amount: '$128',
      Customer: 'Customer Name',
    },
    {
      Date: 'Jan 05,2024',
      Type: 'Estimate',
      Amount: '$128',
      Customer: 'Customer Name',
    },
    {
      Date: 'Jan 05,2024',
      Type: 'Estimate',
      Amount: '$128',
      Customer: 'Customer Name',
    },
  ];
}
