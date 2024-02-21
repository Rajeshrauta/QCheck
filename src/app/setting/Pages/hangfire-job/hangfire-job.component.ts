import { Component } from '@angular/core';
import { faEllipsisVertical,faPenToSquare,faTrash,faCloud} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hangfire-job',
  templateUrl: './hangfire-job.component.html',
  styleUrl: './hangfire-job.component.scss'
})
export class HangfireJobComponent {
  threedot = faEllipsisVertical;
  edit = faPenToSquare;
  delete = faTrash;
  sync = faCloud;
}
