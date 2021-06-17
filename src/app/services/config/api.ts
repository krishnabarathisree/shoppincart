import { environment } from "src/environments/environment";
export const baseUrl= environment.production?'http://api.shopingcart.com':'http://locolhost:3000';
export const productUrl =baseUrl+ '/products';
export const cartUrl = baseUrl + '/cart';
export const wishlistUrl =baseUrl+'/wishlist/'
