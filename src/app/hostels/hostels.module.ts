import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HostelsPageRoutingModule } from './hostels-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HostelsPage } from './hostels.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HostelsPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [HostelsPage]
})
export class HostelsPageModule {}
