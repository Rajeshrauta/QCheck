import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss',
})
export class CustomerComponent {
  searchicon = faMagnifyingGlass;
  
  selectedRoute: string = '';
  constructor(private router: Router) {}

  customers = [
    { id: 1, name: 'First Customer Name', value: '/customer/customer-info' },
    { id: 1, name: 'Second Customer Name', value: '/customer/customer-info' },
    { id: 1, name: 'Third Customer Name', value: '/customer/customer-info' },
    // Add other customer objects here
  ];

  ngOnInit(): void {
    // Retrieve the selected route from local storage on component initialization
    const storedRoute = localStorage.getItem('selectedCustomer');
    if (storedRoute) {
      this.selectedRoute = storedRoute;
    }
  }
  onSelect(event: any): void {
    this.selectedRoute = event.target.value;
    // Store the selected route in local storage
    localStorage.setItem('selectedCustomer', this.selectedRoute);
    this.router.navigate([this.selectedRoute]);
  }
}
