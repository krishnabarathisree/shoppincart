import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../models/product';
import { productsUrl } from '../config/api';
const apiUrl='http://localhost:3000/products'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
/*
  products:Product[] =[
  // new Product(1,'product 1','this is the product 1 description. THe product is really cool!',100),
  // new Product(2,'product 2','this is the product 2 description. THe product is really cool!',150),
  // new Product(3,'product 3','this is the product 3 description. THe product is really cool!',200),
  // new Product(4,'product 4','this is the product 4 description. THe product is really cool!',250),
  // new Product(5,'product 5','this is the product 5 description. THe product is really cool!',300),
  // new Product(6,'product 6','this is the product 6 description. THe product is really cool!',350),
  // new Product(7,'product 7','this is the product 7 description. THe product is really cool!',400),
  // new Product(8,'product 7','this is the product 7 description. THe product is really cool!',400)
  ] */
  constructor(private http:HttpClient) { }

  getProducts():Observable<Product[]>{
      //TODO: Populate products from an API and return an Observable
      return this.http.get<Product[]>(productsUrl)
  }
}
