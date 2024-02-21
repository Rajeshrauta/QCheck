import { Component } from '@angular/core';
import { faEllipsisVertical,faPenToSquare,faTrashCan,faUnlockKeyhole  } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-accountinguser-list',
  templateUrl: './accountinguser-list.component.html',
  styleUrl: './accountinguser-list.component.scss'
})
export class AccountinguserListComponent {
  threedot = faEllipsisVertical;
  edit = faPenToSquare;
  trash = faTrashCan;
  key = faUnlockKeyhole;

}
