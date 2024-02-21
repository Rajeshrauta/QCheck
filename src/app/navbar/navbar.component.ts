import { Component } from '@angular/core';
import {
  faBars,
  faSearch,
  faRightFromBracket,
  faKey,
  faPlus,faMagnifyingGlass
} from '@fortawesome/free-solid-svg-icons';
import { DataService } from '../data.service';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  bars = faBars;
  search = faSearch;
  logout = faRightFromBracket;
  changepassword = faKey;
  add = faPlus;
  recent = faMagnifyingGlass;

  constructor(public dservice: DataService, private router: Router) {}

  navbarTitle: string = '';

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        const currentRoute = this.getCurrentRoute(
          this.router.routerState,
          this.router.routerState.root
        );
        // Update the title based on the current route
        this.updateNavbarTitle(currentRoute);
      }
    });
  }

  // Recursive function to get the current route
  getCurrentRoute(state: any, parent: any): ActivatedRoute {
    if (parent && parent.firstChild) {
      return this.getCurrentRoute(state, parent.firstChild);
    }
    return state;
  }

  // Update the navbar title based on the current route
  updateNavbarTitle(route: any) {
    const title = route?.snapshot?.data?.title || 'Default Title';
    this.navbarTitle = title;
  }
}
