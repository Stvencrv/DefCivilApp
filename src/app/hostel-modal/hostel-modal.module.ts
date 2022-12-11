import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HostelModalPageRoutingModule } from './hostel-modal-routing.module';

import { HostelModalPage } from './hostel-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HostelModalPageRoutingModule
  ],
  declarations: [HostelModalPage]
})
export class HostelModalPageModule {}
