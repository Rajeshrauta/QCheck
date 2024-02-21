import { Component } from '@angular/core';
import {faCloud} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-entity-sync-details',
  templateUrl: './entity-sync-details.component.html',
  styleUrl: './entity-sync-details.component.scss'
})
export class EntitySyncDetailsComponent {
  sync = faCloud;
}
