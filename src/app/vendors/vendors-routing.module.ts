import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorsTransactionComponent } from './sub-components/vendors-transaction/vendors-transaction.component';


const routes: Routes = [{ path: 'vendors-transaction', component: VendorsTransactionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorsRoutingModule { }
