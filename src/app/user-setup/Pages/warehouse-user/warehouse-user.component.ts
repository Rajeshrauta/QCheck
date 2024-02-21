import { Component } from '@angular/core';
import { faEllipsisVertical,faPenToSquare,faTrashCan,faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-warehouse-user',
  templateUrl: './warehouse-user.component.html',
  styleUrl: './warehouse-user.component.scss'
})
export class WarehouseUserComponent {
  threedot = faEllipsisVertical;
  edit = faPenToSquare;
  trash = faTrashCan;
  key = faUnlockKeyhole;

}
