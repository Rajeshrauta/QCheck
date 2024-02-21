import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AccountingRoutingModule } from './accounting-routing.module';
import { AccountingComponent } from './accounting.component';
import { AllOverdueComponent } from './pages/all-overdue/all-overdue.component';
import { TodayOverdueComponent } from './pages/today-overdue/today-overdue.component';


@NgModule({
  declarations: [
    AccountingComponent,
    AllOverdueComponent,
    TodayOverdueComponent,
  ],
  imports: [
    CommonModule,
    AccountingRoutingModule,
    NgbModule,
    FontAwesomeModule,
  ],
})
export class AccountingModule {}
