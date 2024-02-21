import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss'
})
export class ReportsComponent {

  selectedRoute: string = '';
  constructor(private router : Router){}

  ngOnInit(): void {
    // Retrieve the selected route from local storage on component initialization
    const storedRoute = localStorage.getItem('selectedReportsNavRoute');
    if (storedRoute) {
      this.navigateToRoute(storedRoute);
    }
  }

  onSelect(event: any, route: string): void {
    this.selectedRoute = route;
    // Store the selected route in local storage
    localStorage.setItem('selectedReportsNavRoute', this.selectedRoute);
    this.navigateToRoute(route);
  }

  private navigateToRoute(route: string): void {
    this.router.navigate([route]);
  }

}
