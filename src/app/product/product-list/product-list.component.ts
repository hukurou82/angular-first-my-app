import { Component, OnInit } from '@angular/core';
import { products } from '../../products';

@Component({
  selector: 'app-product-listingsings',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: any = [1, 2, 3, 4];

  constructor() {}

  ngOnInit(): void {
    this.products = products;
  }
}
