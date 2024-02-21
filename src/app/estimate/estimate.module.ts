import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EstimateRoutingModule } from './estimate-routing.module';
import { EstimateComponent } from './estimate.component';
import { CreateManualEstimateComponent } from './pages/create-manual-estimate/create-manual-estimate.component';
import { CreateEstimateComponent } from './pages/create-estimate/create-estimate.component';
import { NewOrderReceivedComponent } from './pages/new-order-received/new-order-received.component';
import { FetchOrderComponent } from './pages/fetch-order/fetch-order.component';
import { EditEstimateComponent } from './pages/edit-estimate/edit-estimate.component';
import { EditManualEstimateComponent } from './pages/edit-manual-estimate/edit-manual-estimate.component';
import { FreeItemComponent } from './sub-components/free-item/free-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PopoverComponent } from './sub-components/popover/popover.component';


@NgModule({
  declarations: [
    EstimateComponent,
    CreateManualEstimateComponent,
    CreateEstimateComponent,
    NewOrderReceivedComponent,
    FetchOrderComponent,
    EditEstimateComponent,
    EditManualEstimateComponent,
    FreeItemComponent,
    PopoverComponent,
  ],
  imports: [
    CommonModule,
    EstimateRoutingModule,
    FontAwesomeModule,
    NgbModule,
    ReactiveFormsModule,
  ],
})
export class EstimateModule {}
