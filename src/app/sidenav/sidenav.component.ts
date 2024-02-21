import { Component,HostListener  } from '@angular/core';
import { DataService } from '../data.service';
import { faTv,faUser,faFileLines,faBoxOpen,faGear,faCalculator,faUsers,faPhone,faUserGear,faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {
    dashboard = faTv;
    customer = faUser;
    reports = faFileLines;
    product = faBoxOpen;
    setting = faGear;
    accounting = faCalculator;
    vendors = faUsers;
    communication = faPhone;
    usersetup = faUserGear;
    logout = faRightFromBracket;

    isExpanded: boolean = true;

    constructor( public dservice : DataService,private router : Router) {
      this.checkScreenSize();
    }
  
    @HostListener('window:resize', ['$event'])
    onResize() {
      this.checkScreenSize();
    }
  
    private checkScreenSize() {
      if (window.innerWidth <= 768) {
        this.dservice.isExpanded = false;
        this.dservice.isCollapsed = true;
      } else {
        this.dservice.isExpanded = true;
        this.dservice.isCollapsed = false;
      }
    }


  //   selectedRoute: string = '';

  // ngOnInit(): void {
  //   // Retrieve the selected route from local storage on component initialization
  //   const storedRoute = localStorage.getItem('selectedSidebarNavRoute');
  //   if (storedRoute) {
  //     this.navigateToRoute(storedRoute);
  //   }
  // }

  // onSelect(event: any, route: string): void {
  //   this.selectedRoute = route;
  //   // Store the selected route in local storage
  //   localStorage.setItem('selectedSidebarNavRoute', this.selectedRoute);
  //   this.navigateToRoute(route);
  // }

  // private navigateToRoute(route: string): void {
  //   this.router.navigate([route]);
  // }
}
