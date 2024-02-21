import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateInvoiceComponent } from './pages/create-invoice/create-invoice.component';
import { EditInvoiceComponent } from './pages/edit-invoice/edit-invoice.component';
import { InvoiceLinkedWithEstimateComponent } from './pages/invoice-linked-with-estimate/invoice-linked-with-estimate.component';


const routes: Routes = [
  { path: '', redirectTo: 'create-invoice', pathMatch: 'full' },
  { path: 'create-invoice', component: CreateInvoiceComponent },
  { path: 'edit-invoice', component: EditInvoiceComponent },
  {
    path: 'invoice-linked-with-estimate',
    component: InvoiceLinkedWithEstimateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }
