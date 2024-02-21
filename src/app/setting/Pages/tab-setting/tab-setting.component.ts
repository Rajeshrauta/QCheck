import { Component } from '@angular/core';
import { faEllipsisVertical,faPenToSquare,faTrash,faCloud} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-tab-setting',
  templateUrl: './tab-setting.component.html',
  styleUrl: './tab-setting.component.scss'
})
export class TabSettingComponent {
  threedot = faEllipsisVertical;
  edit = faPenToSquare;
  delete = faTrash;
  sync = faCloud;
}
