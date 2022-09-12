import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'order-form', loadChildren: () => import('./modules/order-form/order-form.module').then(m => m.OrderFormModule) },
  { path: 'order-list', loadChildren: () => import('./modules/order-list/order-list.module').then(m => m.OrderListModule) },
  { path: '**', loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
