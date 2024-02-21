import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceComponent } from './invoice.component';
import { EditInvoiceComponent } from './pages/edit-invoice/edit-invoice.component';
import { CreateInvoiceComponent } from './pages/create-invoice/create-invoice.component';
import { InvoiceLinkedWithEstimateComponent } from './pages/invoice-linked-with-estimate/invoice-linked-with-estimate.component';
import { ScanItemModalComponent } from './modals/scan-item-modal/scan-item-modal.component';


@NgModule({
  declarations: [
    InvoiceComponent,
    EditInvoiceComponent,
    CreateInvoiceComponent,
    InvoiceLinkedWithEstimateComponent,
    ScanItemModalComponent,
  ],
  imports: [CommonModule, InvoiceRoutingModule, NgbModule, FontAwesomeModule],
})
export class InvoiceModule {}
