import { HttpClient } from '@angular/common/http';
import { ProductResponseModel } from './../../models/productResponseModel';
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit {

  products: Product[] = [];

  apiUrl = 'https://localhost:44319/api/products/getall';

  // productResponseModel: ProductResponseModel = {
  //   data: this.products,
  //   message: "",
  //   success: true
  // };

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    // gelen datayı, ProductResponseModel'e map eder
    // Aşağıdaki komut satırını yazdığımızda hiçbir anlamı yok çünkü asenkron çalışma durumu ve bunu çözmek için Angular ekibi Observable Design Pattern kullanıyor
    //this.httpClient.get<ProductResponseModel>(this.apiUrl);

    this.httpClient.get<ProductResponseModel>(this.apiUrl).subscribe(response => { this.products = response.data });
  }

}
