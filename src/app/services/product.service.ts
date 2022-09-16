import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44319/api/products/getall';

  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<ListResponseModel<Product>> {
    // gelen datayı, ProductResponseModel'e map eder
    // Aşağıdaki komut satırını yazdığımızda hiçbir anlamı yok çünkü asenkron çalışma durumu ve bunu çözmek için Angular ekibi Observable Design Pattern kullanıyor
    //this.httpClient.get<ProductResponseModel>(this.apiUrl);

    // Subscribe olunabilir bir observable döner
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl);
  }
}
