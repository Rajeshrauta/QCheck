import { Component } from '@angular/core';
import { faEllipsisVertical,faPenToSquare,faTrashCan,faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-accounting-user',
  templateUrl: './accounting-user.component.html',
  styleUrl: './accounting-user.component.scss'
})
export class AccountingUserComponent {
  threedot = faEllipsisVertical;
  edit = faPenToSquare;
  trash = faTrashCan;
  key = faUnlockKeyhole;
}
