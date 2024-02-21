import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-communication',
  templateUrl: './communication.component.html',
  styleUrl: './communication.component.scss'
})
export class CommunicationComponent {
  selectedRoute: string = '';
  constructor(private router : Router){}

  ngOnInit(): void {
    // Retrieve the selected route from local storage on component initialization
    const storedRoute = localStorage.getItem('selectedCommunicationNavRoute');
    if (storedRoute) {
      this.navigateToRoute(storedRoute);
    }
  }

  onSelect(event: any, route: string): void {
    this.selectedRoute = route;
    // Store the selected route in local storage
    localStorage.setItem('selectedCommunicationNavRoute', this.selectedRoute);
    this.navigateToRoute(route);
  }

  private navigateToRoute(route: string): void {
    this.router.navigate([route]);
  }
}
