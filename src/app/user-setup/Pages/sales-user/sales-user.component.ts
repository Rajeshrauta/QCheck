import { Component } from '@angular/core';
import { faEllipsisVertical,faPenToSquare,faTrashCan,faUnlockKeyhole  } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sales-user',
  templateUrl: './sales-user.component.html',
  styleUrl: './sales-user.component.scss'
})
export class SalesUserComponent {
  threedot = faEllipsisVertical;
  edit = faPenToSquare;
  trash = faTrashCan;
  key = faUnlockKeyhole;
}
