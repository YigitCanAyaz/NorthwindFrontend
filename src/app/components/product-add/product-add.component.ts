import { ToastrService } from 'ngx-toastr';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  productAddForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private productService: ProductService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm(): void {
    // group içerisine form controller (obje şeklinde, key: string)
    // bu fonksiyon hangi alanlar html'de mapleneceğini ve kurallarını yazarız
    this.productAddForm = this.formBuilder.group({
      productName: ["", Validators.required],
      categoryId: ["", Validators.required],
      unitPrice: ["", Validators.required],
      unitsInStock: ["", Validators.required]
    });
  }

  add(): void {

    // form geçerliyse
    if (this.productAddForm.valid) {
      // form'un karşılığını verir (değer olarak)
      // productModel için obje oluştur (içi boş)
      // aynı zamandaki sağdaki bütün değerleri alıp içine ekle
      // virgülden sonrası errolu kısmı
      let productModel = Object.assign({}, this.productAddForm.value);
      this.productService.add(productModel).subscribe(response => {
        this.toastrService.success(response.message, "Başarılı");
      }, responseError => {
        if (responseError.error.ValidationErrors.length > 0) {
          for (let i = 0; i < responseError.error.ValidationErrors.length; i++) {
            this.toastrService.error(responseError.error.ValidationErrors[i].ErrorMessage, responseError.error.ValidationErrors[i].PropertyName);
          }
        }
      });
    } else {
      this.toastrService.error("Formunuz eksik", "Dikkat!");
    }

  }

}
