import { NgModule } from '@angular/core';
import { UserSetupRoutingModule } from './user-setup-routing.module';
import { UserSetupComponent } from './user-setup.component';
import { WarehouseUserComponent } from './Pages/warehouse-user/warehouse-user.component';
import { AccountingUserComponent } from './Pages/accounting-user/accounting-user.component';
import { OfficeUserComponent } from './Pages/office-user/office-user.component';
import { SalesUserComponent } from './Pages/sales-user/sales-user.component';
import { CustomerComponent } from './Pages/customer/customer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerListComponent } from './SubComponents/customer-list/customer-list.component';
import { CreateCustomerModalComponent } from './Modals/create-customer-modal/create-customer-modal.component';
import { CreateSalseuserModalComponent } from './Modals/create-salseuser-modal/create-salseuser-modal.component';
import { CreateOfficeuserModalComponent } from './Modals/create-officeuser-modal/create-officeuser-modal.component';
import { CreateWarehouseuserModalComponent } from './Modals/create-warehouseuser-modal/create-warehouseuser-modal.component';
import { CreateAccountinguserModalComponent } from './Modals/create-accountinguser-modal/create-accountinguser-modal.component';
import { SalesuserListComponent } from './SubComponents/salesuser-list/salesuser-list.component';
import { AccountinguserListComponent } from './SubComponents/accountinguser-list/accountinguser-list.component';
import { OfficeuserListComponent } from './SubComponents/officeuser-list/officeuser-list.component';
import { WarehouseuserListComponent } from './SubComponents/warehouseuser-list/warehouseuser-list.component';



@NgModule({
  declarations: [
    UserSetupComponent,
    WarehouseUserComponent,
    AccountingUserComponent,
    OfficeUserComponent,
    SalesUserComponent,
    CustomerComponent,
    CustomerListComponent,
    CreateCustomerModalComponent,
    CreateSalseuserModalComponent,
    CreateOfficeuserModalComponent,
    CreateWarehouseuserModalComponent,
    CreateAccountinguserModalComponent,
    SalesuserListComponent,
    AccountinguserListComponent,
    OfficeuserListComponent,
    WarehouseuserListComponent
  ],
  imports: [
    UserSetupRoutingModule,
    FontAwesomeModule,
    NgbModule
  ]
})
export class UserSetupModule { }
