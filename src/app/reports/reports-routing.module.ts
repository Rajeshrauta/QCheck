import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerReportComponent } from './pages/customer-report/customer-report.component';
import { ItemReportComponent } from './pages/item-report/item-report.component';
import { NoOrderReportComponent } from './pages/no-order-report/no-order-report.component';
import { RolloverReportComponent } from './pages/rollover-report/rollover-report.component';

const routes: Routes = [
  {path: '', redirectTo: 'customer-report', pathMatch: 'full'},
  { path: 'customer-report', component: CustomerReportComponent },
  { path: 'item-report', component: ItemReportComponent },
  { path: 'no-order-report', component: NoOrderReportComponent },
  { path: 'rollover-report', component: RolloverReportComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
