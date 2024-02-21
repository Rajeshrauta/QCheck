import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ReturnPickupRoutingModule } from './return-pickup-routing.module';
import { ReturnPickupComponent } from './return-pickup.component';


@NgModule({
  declarations: [ReturnPickupComponent],
  imports: [
    CommonModule,
    ReturnPickupRoutingModule,
    NgbModule,
    FontAwesomeModule,
  ],
})
export class ReturnPickupModule {}
