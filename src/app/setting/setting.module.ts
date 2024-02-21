import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SettingRoutingModule } from './setting-routing.module';
import { SettingComponent } from './setting.component';
import { ProductListComponent } from './Pages/product-list/product-list.component';
import { TabSettingComponent } from './Pages/tab-setting/tab-setting.component';
import { ManageCompanyComponent } from './Pages/manage-company/manage-company.component';
import { HangfireJobComponent } from './Pages/hangfire-job/hangfire-job.component';
import { ShippingCompanyComponent } from './Pages/shipping-company/shipping-company.component';
import { RackLocationComponent } from './Pages/rack-location/rack-location.component';
import { PricingRuleComponent } from './Pages/pricing-rule/pricing-rule.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewShippingCompanyModalComponent } from './modals/new-shipping-company-modal/new-shipping-company-modal.component';
import { NewPricingRuleModalComponent } from './modals/new-pricing-rule-modal/new-pricing-rule-modal.component';


@NgModule({
  declarations: [
    SettingComponent,
    ProductListComponent,
    TabSettingComponent,
    ManageCompanyComponent,
    HangfireJobComponent,
    ShippingCompanyComponent,
    RackLocationComponent,
    PricingRuleComponent,
    NewShippingCompanyModalComponent,
    NewPricingRuleModalComponent,
  ],
  imports: [
    CommonModule,
    SettingRoutingModule,
    FontAwesomeModule,
    NgbModule
  ]
})
export class SettingModule { }
