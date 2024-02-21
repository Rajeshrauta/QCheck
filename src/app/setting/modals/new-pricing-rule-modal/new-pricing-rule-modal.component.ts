import { Component } from '@angular/core';
import { faEllipsisVertical,faPenToSquare,faTrash,faCloud} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-new-pricing-rule-modal',
  templateUrl: './new-pricing-rule-modal.component.html',
  styleUrl: './new-pricing-rule-modal.component.scss'
})
export class NewPricingRuleModalComponent {
  threedot = faEllipsisVertical;
  edit = faPenToSquare;
  delete = faTrash;
  sync = faCloud;
}
