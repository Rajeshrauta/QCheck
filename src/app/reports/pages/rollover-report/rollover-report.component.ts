import { Component } from '@angular/core';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-rollover-report',
  templateUrl: './rollover-report.component.html',
  styleUrl: './rollover-report.component.scss',
})
export class RolloverReportComponent {
  delete = faTrashCan;
  now = Date.now();

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
