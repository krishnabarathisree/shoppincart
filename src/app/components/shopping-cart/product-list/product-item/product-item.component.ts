import { WishListService } from 'src/app/services/wish-list.service';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MassengerService } from 'src/app/services/massenger.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {


  @Input() productItem:Product | any
  @Input() addedToWishlist:boolean | undefined
  addToWishlist:boolean | undefined;
  constructor(private msg:MassengerService,
    private cartservice:CartService,
    private wishlistService:WishListService) { }

  ngOnInit(): void {

  }
  handleAddToCart(){
    this.cartservice.addProductToCart(this.productItem).subscribe(()=>{

      this.msg.sendMsg(this.productItem)
    })
  }
  handleAddToWishlist(){
  this.wishlistService.addToWhishlist(this.productItem.id).subscribe(()=>{
   this.addToWishlist=true;
  })
  }
  handleRemoveWishlist(){
    this.wishlistService.removeFromWhishlist(this.productItem.id).subscribe(()=>{
      this.addToWishlist=false;
    })
  }
}
