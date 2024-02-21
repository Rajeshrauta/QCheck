import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SyncComponent } from './sync.component';
import { PendingCustomerOrdersComponent } from './sub-components/pending-customer-orders/pending-customer-orders.component';
import { EntitySyncDetailsComponent } from './sub-components/entity-sync-details/entity-sync-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'entity-sync-details', pathMatch: 'full'},
  { path: 'pending-customer-orders', component: PendingCustomerOrdersComponent },
  { path: 'entity-sync-details', component: EntitySyncDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SyncRoutingModule { }
