import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaxPlanningAndConsultingPage } from './tax-planning-and-consulting.page';

const routes: Routes = [
  {
    path: '',
    component: TaxPlanningAndConsultingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaxPlanningAndConsultingPageRoutingModule {}
