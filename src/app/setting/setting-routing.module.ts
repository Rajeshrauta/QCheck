import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabSettingComponent } from './Pages/tab-setting/tab-setting.component';
import { ProductListComponent } from './Pages/product-list/product-list.component';
import { ManageCompanyComponent } from './Pages/manage-company/manage-company.component';
import { HangfireJobComponent } from './Pages/hangfire-job/hangfire-job.component';
import { ShippingCompanyComponent } from './Pages/shipping-company/shipping-company.component';
import { RackLocationComponent } from './Pages/rack-location/rack-location.component';
import { PricingRuleComponent } from './Pages/pricing-rule/pricing-rule.component';
import { SyncComponent } from './Pages/sync/sync.component';


const routes: Routes = [
  { path: '', redirectTo: 'tabsetting', pathMatch: 'full'},
  { path: 'tabsetting', component: TabSettingComponent},
  { path: 'productlist', component: ProductListComponent},
  { path: 'managecompany', component: ManageCompanyComponent},
  { path: 'hangfirejob', component: HangfireJobComponent},
  { path: 'shippingcompany', component: ShippingCompanyComponent},
  { path: 'racklocation', component: RackLocationComponent},
  { path: 'pricingrule', component: PricingRuleComponent},
  { path: 'sync',component: SyncComponent, loadChildren: () => import('./Pages/sync/sync.module').then(m => m.SyncModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingRoutingModule { }
