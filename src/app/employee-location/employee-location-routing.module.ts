import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmployeeLocationPage } from './employee-location.page';

const routes: Routes = [
  {
    path: '',
    component: EmployeeLocationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeLocationPageRoutingModule {}
