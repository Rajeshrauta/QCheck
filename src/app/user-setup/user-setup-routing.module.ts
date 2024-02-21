import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountingUserComponent } from './Pages/accounting-user/accounting-user.component';
import { CustomerComponent } from './Pages/customer/customer.component';
import { OfficeUserComponent } from './Pages/office-user/office-user.component';
import { SalesUserComponent } from './Pages/sales-user/sales-user.component';
import { WarehouseUserComponent } from './Pages/warehouse-user/warehouse-user.component';


const routes: Routes = [
  { path: '', redirectTo: 'customer', pathMatch: 'full'},
  { path: 'customer', component: CustomerComponent},
  { path: 'officeuser', component: OfficeUserComponent},
  { path: 'salesuser', component: SalesUserComponent},
  { path: 'warehouseuser', component: WarehouseUserComponent},
  { path: 'accountinguser', component: AccountingUserComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserSetupRoutingModule { }
