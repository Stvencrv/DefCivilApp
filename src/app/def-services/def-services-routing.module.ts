import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefServicesPage } from './def-services.page';

const routes: Routes = [
  {
    path: '',
    component: DefServicesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DefServicesPageRoutingModule {}
