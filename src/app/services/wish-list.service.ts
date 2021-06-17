import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Product } from '../models/product';
import { wishlistUrl } from './config/api';
@Injectable({
  providedIn: 'root'
})
export class WishListService {

  constructor(private http:HttpClient) { }
  getWishlist(){
    return this.http.get("http://localhost:3000/wishlist/").pipe(
      map((result: any) => {

        let productIds: any[] = [];

        result.forEach((item:any) =>productIds.push(item.id))
        return productIds;
      })
    )
  }
  addToWhishlist(productId: Product){
    return this.http.post("http://localhost:3000/wishlist/", {id:productId})
/*     return this.http.post(wishlistUrl,{id: productId})
 */  }
  removeFromWhishlist(productId: any){
    return this.http.delete("http://localhost:3000/wishlist/"+ productId)
  }
}
