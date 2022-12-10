import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DefServicesPageRoutingModule } from './def-services-routing.module';

import { DefServicesPage } from './def-services.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DefServicesPageRoutingModule
  ],
  declarations: [DefServicesPage]
})
export class DefServicesPageModule {}
