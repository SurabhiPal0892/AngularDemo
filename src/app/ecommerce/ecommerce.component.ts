import { Component, OnInit } from '@angular/core';
import { products_sample_data } from '../data';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent implements OnInit {
  products = [];
  layout = 'Grid';
  constructor() {}
  ngOnInit() {
    this.products = products_sample_data;
  }
  switchToGridLayout() {
    this.layout = 'Grid';
  }
  switchToListLayout() {
    this.layout = 'List';
  }
}
