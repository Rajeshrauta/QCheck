import { Component } from '@angular/core';
import { faEllipsisVertical,faPenToSquare,faTrashCan,faUnlockKeyhole  } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-warehouseuser-list',
  templateUrl: './warehouseuser-list.component.html',
  styleUrl: './warehouseuser-list.component.scss'
})
export class WarehouseuserListComponent {
  threedot = faEllipsisVertical;
  edit = faPenToSquare;
  trash = faTrashCan;
  key = faUnlockKeyhole;
}
