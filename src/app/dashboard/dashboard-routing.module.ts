import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderReceivedComponent } from './pages/order-received/order-received.component';
import { DispatchRouteComponent } from './pages/dispatch-route/dispatch-route.component';
import { DispatchedRouteComponent } from './pages/dispatched-route/dispatched-route.component';
import { PendingOrdersComponent } from './pages/pending-orders/pending-orders.component';

const routes: Routes = [
  {path: '', redirectTo: 'order-received', pathMatch: 'full'},
  { path: 'order-received', component: OrderReceivedComponent },
  { path: 'pending-orders', component: PendingOrdersComponent },
  { path: 'dispatch-route', component: DispatchRouteComponent },
  { path: 'dispatched-route', component: DispatchedRouteComponent },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
