import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'cheese-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(
    private router: Router
  ) {}

  goToOrderForm(): void {
    this.router.navigate(['order-form']);
  }

  goToOrderList(): void {
    this.router.navigate(['order-list']);
  }

}
