import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewBusinessSetupPageRoutingModule } from './new-business-setup-routing.module';

import { NewBusinessSetupPage } from './new-business-setup.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewBusinessSetupPageRoutingModule
  ],
  declarations: [NewBusinessSetupPage]
})
export class NewBusinessSetupPageModule {}
