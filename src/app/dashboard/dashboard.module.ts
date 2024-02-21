import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { OrderReceivedComponent } from './pages/order-received/order-received.component';
import { DispatchRouteComponent } from './pages/dispatch-route/dispatch-route.component';
import { DispatchedRouteComponent } from './pages/dispatched-route/dispatched-route.component';
import { PendingOrdersComponent } from './pages/pending-orders/pending-orders.component';
import { InvoiceDetailModalComponent } from '../modals/invoice-detail-modal/invoice-detail-modal.component';

@NgModule({
  declarations: [
    DashboardComponent,
    OrderReceivedComponent,
    DispatchRouteComponent,
    DispatchedRouteComponent,
    PendingOrdersComponent,
    InvoiceDetailModalComponent
  ],
  imports: [CommonModule, DashboardRoutingModule, FontAwesomeModule, NgbModule],
})
export class DashboardModule {}
