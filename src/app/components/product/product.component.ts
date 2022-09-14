import { ProductService } from './../../services/product.service';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  products: Product[] = [];
  dataLoaded: boolean = false;

  // productResponseModel: ProductResponseModel = {
  //   data: this.products,
  //   message: "",
  //   success: true
  // };

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(response => {
      this.products = response.data
      this.dataLoaded = true;
    });
  }

}
