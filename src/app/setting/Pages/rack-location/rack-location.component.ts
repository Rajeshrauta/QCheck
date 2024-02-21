import { Component } from '@angular/core';
import {
  faTrash
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-rack-location',
  templateUrl: './rack-location.component.html',
  styleUrl: './rack-location.component.scss',
})
export class RackLocationComponent {
  delete = faTrash;
}
