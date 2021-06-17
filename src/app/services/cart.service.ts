import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cartUrl } from '../config/api';
import { CartItem } from '../models/cartItem';
import { Product } from '../models/product';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getCartItems(): Observable<CartItem[]> {

    //todo: mapping the obtsined result to our certain props.(pipe)and map()
    return this.http.get<CartItem[]>(cartUrl).pipe(
      map((result:any[]) => {
        let cartItem: CartItem[] = []
        for (let item of result) {
          let productExist = false
          for (let i in cartItem) {
            if (cartItem[i].productId === item.product.id ) {
              cartItem[i].qty++
              productExist = true
              break;
            }
          }
          if (!productExist) {
            cartItem.push(new CartItem(item.id,item.product,item.qty=1,item.price));
          }
        }
        return cartItem

      })
    )
  }
  addProductToCart(product: Product): Observable<any> {
    return this.http.post(cartUrl, { product })
  }
}
