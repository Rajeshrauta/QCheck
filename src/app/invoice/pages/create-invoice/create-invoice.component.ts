import { Component } from '@angular/core';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrl: './create-invoice.component.scss',
})
export class CreateInvoiceComponent {
  delete = faTrashCan;

  customerTransaction = [
    {
      Product: 'HRFAP',
      Description: 'Haldi ram frozen aloo paratha',
      UnitPrice: '$23',
      Qty: '33',
      Free: '3',
      QuantityOnHand: '24',
    },
    {
      Product: 'HRFAP',
      Description: 'Haldi ram frozen aloo paratha',
      UnitPrice: '$23',
      Qty: '33',
      Free: '3',
      QuantityOnHand: '24',
    },
    {
      Product: 'HRFAP',
      Description: 'Haldi ram frozen aloo paratha',
      UnitPrice: '$23',
      Qty: '33',
      Free: '3',
      QuantityOnHand: '24',
    },
  ];
}
