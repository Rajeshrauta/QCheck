import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-setup',
  templateUrl: './user-setup.component.html',
  styleUrl: './user-setup.component.scss',
})
export class UserSetupComponent {
  selectedRoute: string = '';
  constructor(private router : Router){}

  ngOnInit(): void {
    // Retrieve the selected route from local storage on component initialization
    const storedRoute = localStorage.getItem('selectedUserSetupNavRoute');
    if (storedRoute) {
      this.navigateToRoute(storedRoute);
    }
  }

  onSelect(event: any, route: string): void {
    this.selectedRoute = route;
    // Store the selected route in local storage
    localStorage.setItem('selectedUserSetupNavRoute', this.selectedRoute);
    this.navigateToRoute(route);
  }

  private navigateToRoute(route: string): void {
    this.router.navigate([route]);
  }
}
