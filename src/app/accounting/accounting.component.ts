import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrl: './accounting.component.scss'
})
export class AccountingComponent {

  selectedRoute: string = '';
  constructor(private router : Router){}

  ngOnInit(): void {
    // Retrieve the selected route from local storage on component initialization
    const storedRoute = localStorage.getItem('selectedAccountingNavRoute');
    if (storedRoute) {
      this.navigateToRoute(storedRoute);
    }
  }

  onSelect(event: any, route: string): void {
    this.selectedRoute = route;
    // Store the selected route in local storage
    localStorage.setItem('selectedAccountingNavRoute', this.selectedRoute);
    this.navigateToRoute(route);
  }

  private navigateToRoute(route: string): void {
    this.router.navigate([route]);
  }

}
