import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  selectedRoute: string = '';
  constructor(private router : Router){}

  ngOnInit(): void {
    // Retrieve the selected route from local storage on component initialization
    const storedRoute = localStorage.getItem('selectedDashboardNavRoute');
    if (storedRoute) {
      this.navigateToRoute(storedRoute);
    }
  }

  onSelect(event: any, route: string): void {
    this.selectedRoute = route;
    // Store the selected route in local storage
    localStorage.setItem('selectedDashboardNavRoute', this.selectedRoute);
    this.navigateToRoute(route);
  }

  private navigateToRoute(route: string): void {
    this.router.navigate([route]);
  }

}
