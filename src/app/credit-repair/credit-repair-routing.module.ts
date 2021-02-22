import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreditRepairPage } from './credit-repair.page';

const routes: Routes = [
  {
    path: '',
    component: CreditRepairPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreditRepairPageRoutingModule {}
