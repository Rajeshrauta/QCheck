import { Component } from '@angular/core';
import { faEllipsisVertical,faPenToSquare,faTrash,faCloud, faFileExcel} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-product-and-service',
  templateUrl: './product-and-service.component.html',
  styleUrl: './product-and-service.component.scss'
})
export class ProductAndServiceComponent {
  threedot = faEllipsisVertical;
  edit = faPenToSquare;
  delete = faTrash;
  sync = faCloud;
  excel = faFileExcel

}
