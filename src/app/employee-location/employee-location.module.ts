import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmployeeLocationPageRoutingModule } from './employee-location-routing.module';

import { EmployeeLocationPage } from './employee-location.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmployeeLocationPageRoutingModule
  ],
  declarations: [EmployeeLocationPage]
})
export class EmployeeLocationPageModule {}
