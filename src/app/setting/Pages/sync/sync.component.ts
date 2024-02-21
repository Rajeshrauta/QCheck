import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sync',
  templateUrl: './sync.component.html',
  styleUrl: './sync.component.scss'
})
export class SyncComponent {
  selectedRoute: string = '';
  constructor(private router : Router){}

  ngOnInit(): void {
    // Retrieve the selected route from local storage on component initialization
    const storedRoute = localStorage.getItem('selectedRoute');
    if (storedRoute) {
      this.selectedRoute = storedRoute;
    }
  }

  onSelect(event: any): void {
    this.selectedRoute = event.target.value;
    // Store the selected route in local storage
    localStorage.setItem('selectedRoute', this.selectedRoute);
    this.router.navigate([this.selectedRoute]);
  }
}
