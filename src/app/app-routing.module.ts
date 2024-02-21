import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSetupComponent } from './user-setup/user-setup.component';
import { SettingComponent } from './setting/setting.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountingComponent } from './accounting/accounting.component';
import { CustomerComponent } from './customer/customer.component';
import { ReportsComponent } from './reports/reports.component';
import { VendorsComponent } from './vendors/vendors.component';
import { CommunicationComponent } from './communication/communication.component';
import { ProductAndServiceComponent } from './product-and-service/product-and-service.component';
import { EstimateComponent } from './estimate/estimate.component';
import { ReturnPickupComponent } from './return-pickup/return-pickup.component';
import { CreditMemoComponent } from './credit-memo/credit-memo.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';



const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'user-setup',
    component: UserSetupComponent,
    loadChildren: () =>
      import('./user-setup/user-setup.module').then((m) => m.UserSetupModule),
    data: { title: 'UserS etup' },
  },
  {
    path: 'setting',
    component: SettingComponent,
    loadChildren: () =>
      import('./setting/setting.module').then((m) => m.SettingModule),
    data: { title: 'Setting' },
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
    data: { title: 'Dashboard' },
  },
  {
    path: 'accounting',
    component: AccountingComponent,
    loadChildren: () =>
      import('./accounting/accounting.module').then((m) => m.AccountingModule),
    data: { title: 'Accounting' },
  },
  {
    path: 'customer',
    component: CustomerComponent,
    loadChildren: () =>
      import('./customer/customer.module').then((m) => m.CustomerModule),
    data: { title: 'Customer' },
  },
  {
    path: 'reports',
    component: ReportsComponent,
    loadChildren: () =>
      import('./reports/reports.module').then((m) => m.ReportsModule),
    data: { title: 'Reports' },
  },
  {
    path: 'vendors',
    component: VendorsComponent,
    loadChildren: () =>
      import('./vendors/vendors.module').then((m) => m.VendorsModule),
    data: { title: 'Vendors' },
  },
  {
    path: 'communication',
    component: CommunicationComponent,
    loadChildren: () =>
      import('./communication/communication.module').then(
        (m) => m.CommunicationModule
      ),
    data: { title: 'Communication' },
  },
  {
    path: 'product-and-service',
    component: ProductAndServiceComponent,
    loadChildren: () =>
      import('./product-and-service/product-and-service.module').then(
        (m) => m.ProductAndServiceModule
      ),
    data: { title: 'Product And Service' },
  },
  {
    path: 'estimate',
    component: EstimateComponent,
    loadChildren: () =>
      import('./estimate/estimate.module').then((m) => m.EstimateModule),
  },
  {
    path: 'return-pickup',
    component: ReturnPickupComponent,
    loadChildren: () =>
      import('./return-pickup/return-pickup.module').then(
        (m) => m.ReturnPickupModule
      ),
  },
  {
    path: 'credit-memo',
    component: CreditMemoComponent,
    loadChildren: () =>
      import('./credit-memo/credit-memo.module').then(
        (m) => m.CreditMemoModule
      ),
  },
  {
    path: 'invoice',
    component: InvoiceComponent,
    loadChildren: () =>
      import('./invoice/invoice.module').then((m) => m.InvoiceModule),
    data: { title: 'Setting' },
  },
  {
    path: 'admin-layout',
    component: AdminLayoutComponent,
    loadChildren: () =>
      import('./layout/admin-layout/admin-layout.module').then(
        (m) => m.AdminLayoutModule
      ),
  },
  {
    path: 'auth-layout',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./layout/auth-layout/auth-layout.module').then(
        (m) => m.AuthLayoutModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
