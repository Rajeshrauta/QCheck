import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  isExpanded: boolean = true;
  isCollapsed: boolean = false;

    toggleSidebar(): void {
      this.isExpanded = !this.isExpanded;
    }

    collapseSidebar(): void {
      this.isCollapsed = !this.isCollapsed;
    }

  constructor() { }
}
