import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewBusinessSetupPage } from './new-business-setup.page';

const routes: Routes = [
  {
    path: '',
    component: NewBusinessSetupPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewBusinessSetupPageRoutingModule {}
