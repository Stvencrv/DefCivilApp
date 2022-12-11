import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeasuresModalPageRoutingModule } from './measures-modal-routing.module';

import { MeasuresModalPage } from './measures-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeasuresModalPageRoutingModule
  ],
  declarations: [MeasuresModalPage]
})
export class MeasuresModalPageModule {}
