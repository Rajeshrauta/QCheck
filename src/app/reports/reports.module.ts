import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { CustomerReportComponent } from './pages/customer-report/customer-report.component';
import { RolloverReportComponent } from './pages/rollover-report/rollover-report.component';
import { NoOrderReportComponent } from './pages/no-order-report/no-order-report.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ItemReportComponent } from './pages/item-report/item-report.component';


@NgModule({
  declarations: [
    ReportsComponent,
    CustomerReportComponent,
    RolloverReportComponent,
    NoOrderReportComponent,
    ItemReportComponent,
  ],
  imports: [CommonModule, ReportsRoutingModule, FontAwesomeModule, NgbModule],
})
export class ReportsModule {}
