import { Component, OnInit } from '@angular/core';

import { OrderTypeItem } from 'src/app/interfaces/order-list-item';
import  data  from './../../../assets/load-folder/data.json';

@Component({
  selector: 'cheese-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  products: Array<OrderTypeItem>;

  ngOnInit() {
      this.products = data;
  }

  checkOrder(id: number): void {
    const item = this.products.filter((item) => item.id === id);
    item[0].display = true;
  }
}
