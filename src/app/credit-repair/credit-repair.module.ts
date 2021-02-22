import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreditRepairPageRoutingModule } from './credit-repair-routing.module';

import { CreditRepairPage } from './credit-repair.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreditRepairPageRoutingModule
  ],
  declarations: [CreditRepairPage]
})
export class CreditRepairPageModule {}
