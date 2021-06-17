import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/cartItem';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { MassengerService } from 'src/app/services/massenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItem:any =[
   // {id:1,productId:1, productName:'Test 1',qty:4,price:100},
   // {id:2,productId:2, productName:'Test 2',qty:2,price:50},
   // {id:3,productId:3, productName:'Test 3',qty:7,price:150},
   // {id:4,productId:4, productName:'Test 4',qty:4,price:200},
   // {id:5,productId:5, productName:'Test 5',qty:8,price:300}
  ];
  cartTotal=0
  constructor(private msg:MassengerService,
    private cartService:CartService) { }

  ngOnInit(): void {

this.handleSubscription();
this.loadCartItems();
  }
  handleSubscription(){
    this.msg.getMsg().subscribe((product: any) =>{
      /* this.addProductToCart(product) */
      this.loadCartItems();
     })

  }
  loadCartItems(){
    this.cartService.getCartItems().subscribe((item:CartItem[])=>{
      this.cartItem=item;
      this.calcCartTotal();
    })
  }
  calcCartTotal(){
    this.cartTotal=0
    this.cartItem.forEach((item:any)=>{
      this.cartTotal +=(item.qty*item.price)
  })
  }
}
 /*  addProductToCart(product:Product){
    let productExist=false
    for (let item in this.cartItem){
      if(this.cartItem[item].productId===product.id){
        this.cartItem[item].qty++
        productExist = true
        break;
      }
    }
    if(!productExist){
      this.cartItem.push({
        productName: product.name,
        productId:product.id,
        qty:1,
        price:product.price
      })
    }
    /* if (this.cartItem.length===0){
      this.cartItem.push({
        productName: product.name,
        productId:product.id,
        qty:1,
        price:product.price
      })
    }else{
    for (let item in this.cartItem){
      if(this.cartItem[item].productId===product.id){
        this.cartItem[item].qty++
        break;
      }else{
        this.cartItem.push({
          productName: product.name,
          productId:product.id,
          qty:1,
          price:product.price
        })
      }
    }
    this.calcCartTOtal()
  } */

