import { Component } from '@angular/core';
import { faEllipsisVertical,faPenToSquare,faTrash,faCloud} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-pricing-rule',
  templateUrl: './pricing-rule.component.html',
  styleUrl: './pricing-rule.component.scss'
})
export class PricingRuleComponent {
  threedot = faEllipsisVertical;
  edit = faPenToSquare;
  delete = faTrash;
  sync = faCloud;

}
