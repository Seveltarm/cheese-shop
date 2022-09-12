import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';

import { OrderListRoutingModule } from './order-list-routing.module';
import { OrderListComponent } from './order-list.component';


@NgModule({
  declarations: [
    OrderListComponent
  ],
  imports: [
    ButtonModule,
    CommonModule,
    DialogModule,
    OrderListRoutingModule,
    TableModule
  ]
})
export class OrderListModule { }
