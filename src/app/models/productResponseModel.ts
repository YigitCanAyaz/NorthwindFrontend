import { ResponseModel } from './responseModel';
import { Product } from './product';
// api data'yı karşılayacak model
export interface ProductResponseModel extends ResponseModel {
  data: Product[],
}
