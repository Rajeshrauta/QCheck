import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CreditMemoRoutingModule } from './credit-memo-routing.module';
import { CreditMemoComponent } from './credit-memo.component';
import { CreateCreditMemoComponent } from './pages/create-credit-memo/create-credit-memo.component';
import { EditCreditMemoComponent } from './pages/edit-credit-memo/edit-credit-memo.component';


@NgModule({
  declarations: [
    CreditMemoComponent,
    CreateCreditMemoComponent,
    EditCreditMemoComponent,
  ],
  imports: [
    CommonModule,
    CreditMemoRoutingModule,
    FontAwesomeModule,
    NgbModule,
  ],
})
export class CreditMemoModule {}
