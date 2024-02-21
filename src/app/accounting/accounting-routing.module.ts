import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountingComponent } from './accounting.component';
import { TodayOverdueComponent } from './pages/today-overdue/today-overdue.component';
import { AllOverdueComponent } from './pages/all-overdue/all-overdue.component';

const routes: Routes = [
  { path: '', redirectTo: 'today-overdue', pathMatch: 'full'},
  { path: 'today-overdue', component: TodayOverdueComponent },
  { path: 'all-overdue', component: AllOverdueComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountingRoutingModule { }
