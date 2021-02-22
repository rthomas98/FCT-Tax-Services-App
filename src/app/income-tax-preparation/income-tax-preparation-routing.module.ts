import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IncomeTaxPreparationPage } from './income-tax-preparation.page';

const routes: Routes = [
  {
    path: '',
    component: IncomeTaxPreparationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IncomeTaxPreparationPageRoutingModule {}
