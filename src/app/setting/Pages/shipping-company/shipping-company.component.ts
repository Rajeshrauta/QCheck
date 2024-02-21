import { Component } from '@angular/core';
import { faEllipsisVertical,faPenToSquare,faTrash,faCloud} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-shipping-company',
  templateUrl: './shipping-company.component.html',
  styleUrl: './shipping-company.component.scss'
})
export class ShippingCompanyComponent {
  threedot = faEllipsisVertical;
  edit = faPenToSquare;
  delete = faTrash;
  sync = faCloud;
}
