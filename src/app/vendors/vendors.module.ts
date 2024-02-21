import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { VendorsRoutingModule } from './vendors-routing.module';
import { VendorsComponent } from './vendors.component';
import { VendorsTransactionComponent } from './sub-components/vendors-transaction/vendors-transaction.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    VendorsComponent,
    VendorsTransactionComponent
  ],
  imports: [
    CommonModule,
    VendorsRoutingModule,
    FontAwesomeModule,
    NgbModule
  ]
})
export class VendorsModule { }
