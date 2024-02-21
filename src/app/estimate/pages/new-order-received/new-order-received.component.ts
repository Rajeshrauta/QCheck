import { Component } from '@angular/core';

import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-new-order-received',
  templateUrl: './new-order-received.component.html',
  styleUrl: './new-order-received.component.scss',
})
export class NewOrderReceivedComponent {
  searchicon = faMagnifyingGlass;
}
