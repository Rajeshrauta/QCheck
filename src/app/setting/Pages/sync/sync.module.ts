import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { SyncRoutingModule } from './sync-routing.module';
import { SyncComponent } from './sync.component';
import { EntitySyncDetailsComponent } from './sub-components/entity-sync-details/entity-sync-details.component';
import { PendingCustomerOrdersComponent } from './sub-components/pending-customer-orders/pending-customer-orders.component';


@NgModule({
  declarations: [
    SyncComponent,
    EntitySyncDetailsComponent,
    PendingCustomerOrdersComponent
  ],
  imports: [
    CommonModule,
    SyncRoutingModule,
    FontAwesomeModule,
    NgbModule
  ]
})
export class SyncModule { }
