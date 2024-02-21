import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEstimateComponent } from './pages/create-estimate/create-estimate.component';
import { CreateManualEstimateComponent } from './pages/create-manual-estimate/create-manual-estimate.component';
import { NewOrderReceivedComponent } from './pages/new-order-received/new-order-received.component';
import { EditEstimateComponent } from './pages/edit-estimate/edit-estimate.component';
import { FetchOrderComponent } from './pages/fetch-order/fetch-order.component';
import { EditManualEstimateComponent } from './pages/edit-manual-estimate/edit-manual-estimate.component';


const routes: Routes = [
  { path: '', redirectTo: 'create-estimate', pathMatch: 'full' },
  { path: 'create-estimate', component: CreateEstimateComponent },
  { path: 'edit-estimate', component: EditEstimateComponent },
  { path: 'fetch-order', component: FetchOrderComponent },
  { path: 'create-manual-estimate', component: CreateManualEstimateComponent },
  { path: 'edit-manual-estimate', component: EditManualEstimateComponent },
  { path: 'new-order-received', component: NewOrderReceivedComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstimateRoutingModule { }
