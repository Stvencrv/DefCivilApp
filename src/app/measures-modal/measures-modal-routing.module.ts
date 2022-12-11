import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeasuresModalPage } from './measures-modal.page';

const routes: Routes = [
  {
    path: '',
    component: MeasuresModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeasuresModalPageRoutingModule {}
