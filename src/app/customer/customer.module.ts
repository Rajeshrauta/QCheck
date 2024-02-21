import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerTransactionComponent } from './SubComponents/customer-transaction/customer-transaction.component';
import { CreditMemoListModalComponent } from './modals/credit-memo-list-modal/credit-memo-list-modal.component';
import { EstimateListModalComponent } from './modals/estimate-list-modal/estimate-list-modal.component';
import { InvoiceListModalComponent } from './modals/invoice-list-modal/invoice-list-modal.component';
import { CustomerInfoComponent } from './pages/customer-info/customer-info.component';
import { EstimateDetailModalComponent } from '../modals/estimate-detail-modal/estimate-detail-modal.component';


@NgModule({
  declarations: [
    CustomerComponent,
    CustomerTransactionComponent,
    CreditMemoListModalComponent,
    EstimateListModalComponent,
    InvoiceListModalComponent,
    CustomerInfoComponent,
    EstimateDetailModalComponent,
  ],
  imports: [CommonModule, CustomerRoutingModule, FontAwesomeModule, NgbModule],
})
export class CustomerModule {}
