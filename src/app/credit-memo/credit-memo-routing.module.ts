import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCreditMemoComponent } from './pages/create-credit-memo/create-credit-memo.component';
import { EditCreditMemoComponent } from './pages/edit-credit-memo/edit-credit-memo.component';

const routes: Routes = [
  { path: '', redirectTo: 'create-credit-memo', pathMatch: 'full' },
  { path: 'create-credit-memo', component: CreateCreditMemoComponent },
  { path: 'edit-credit-memo', component: EditCreditMemoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditMemoRoutingModule { }
