import { Component } from '@angular/core';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-edit-estimate',
  templateUrl: './edit-estimate.component.html',
  styleUrl: './edit-estimate.component.scss',
})
export class EditEstimateComponent {
  delete = faTrashCan;

  estimatedtl = [
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
