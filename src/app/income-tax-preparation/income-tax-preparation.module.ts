import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IncomeTaxPreparationPageRoutingModule } from './income-tax-preparation-routing.module';

import { IncomeTaxPreparationPage } from './income-tax-preparation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IncomeTaxPreparationPageRoutingModule
  ],
  declarations: [IncomeTaxPreparationPage]
})
export class IncomeTaxPreparationPageModule {}
