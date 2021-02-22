import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaxPlanningAndConsultingPageRoutingModule } from './tax-planning-and-consulting-routing.module';

import { TaxPlanningAndConsultingPage } from './tax-planning-and-consulting.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaxPlanningAndConsultingPageRoutingModule
  ],
  declarations: [TaxPlanningAndConsultingPage]
})
export class TaxPlanningAndConsultingPageModule {}
