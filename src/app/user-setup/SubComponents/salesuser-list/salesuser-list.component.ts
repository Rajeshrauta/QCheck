import { Component } from '@angular/core';
import { faEllipsisVertical,faPenToSquare,faTrashCan,faUnlockKeyhole  } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-salesuser-list',
  templateUrl: './salesuser-list.component.html',
  styleUrl: './salesuser-list.component.scss'
})
export class SalesuserListComponent {
  threedot = faEllipsisVertical;
  edit = faPenToSquare;
  trash = faTrashCan;
  key = faUnlockKeyhole;
}
