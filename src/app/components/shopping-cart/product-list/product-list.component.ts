import { WishListService } from 'src/app/services/wish-list.service';
import { Product } from './../../../models/product';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList:Product[]=[]
  wishlist:number[]=[]

  constructor(private productService:ProductService,
    private wishlistService:WishListService) { }

  ngOnInit(): void {
/*     this.productList=this.productService.getProducts()*/
    this.loadProducts()
    this.loadWhislist()
  }
  loadProducts(){
    this.productService.getProducts().subscribe((products)=>{
      this.productList=products
    })
  }
  loadWhislist(){
    this.wishlistService.getWishlist().subscribe(productIds=>{
      console.log(productIds)
      this.wishlist=productIds
    })
  }
}
