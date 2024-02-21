import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProductAndServiceRoutingModule } from './product-and-service-routing.module';
import { ProductAndServiceComponent } from './product-and-service.component';


@NgModule({
  declarations: [
    ProductAndServiceComponent
  ],
  imports: [
    CommonModule,
    ProductAndServiceRoutingModule,
    FontAwesomeModule,
    NgbModule
  ]
})
export class ProductAndServiceModule { }
