import { Product } from './../models/product';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  // filterText, product arrayinin içinde var mı
  // indexi -1 değilse yeni array'e ekle
  transform(value: Product[], filterText: string): Product[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : "";
    return filterText ? value.filter((product: Product) => product.productName.toLocaleLowerCase().indexOf(filterText) !== -1) : value;
  }
}
