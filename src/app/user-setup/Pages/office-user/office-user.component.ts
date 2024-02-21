import { Component } from '@angular/core';
import { faEllipsisVertical,faPenToSquare,faTrashCan,faUnlockKeyhole  } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-office-user',
  templateUrl: './office-user.component.html',
  styleUrl: './office-user.component.scss'
})
export class OfficeUserComponent {
  threedot = faEllipsisVertical;
  edit = faPenToSquare;
  trash = faTrashCan;
  key = faUnlockKeyhole;
}
