import { Component } from '@angular/core';

import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-edit-manual-estimate',
  templateUrl: './edit-manual-estimate.component.html',
  styleUrl: './edit-manual-estimate.component.scss',
})
export class EditManualEstimateComponent {
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
