import { Component } from '@angular/core';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrl: './edit-invoice.component.scss',
})
export class EditInvoiceComponent {
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
