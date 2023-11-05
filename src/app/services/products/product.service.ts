import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Rating{
  rate: number;
  count: number
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }
  
  getProducts(): Observable<Product[]> {
    const apiUrl = 'https://fakestoreapi.com/products';
    return this.http.get<Product[]>(apiUrl);
  }

  getProductById(id: number){
    const url = `https://fakestoreapi.com/products/${id}`;
    let item = this.http.get<Product>(url);
    return item;
  }

  getBestSellers(limit: number = 10, category?: string): Observable<Product[]> {
    return this.getProducts().pipe(
      map((products) => {
        // Sort products by rating (descending)
        products.sort((a, b) => b.rating.rate - a.rating.rate);

        // Filter products with count > 20 and take the top 'limit' items
        return products
          .filter((product) => product.rating.count > 20 && (category ? product.category == category : product.category != 'electronics'))
          .slice(0, limit);
      })
    );
  }

  getNewArrivals(limit: number = 10): Observable<Product[]> {
    return this.getProducts().pipe(
      map((products) => {
        // Sort products by ID (descending) to get the latest additions
        products.sort((a, b) => b.id - a.id);

        // Take the top 'limit' items
        return products
        .filter((product) => product.category != 'electronics')
        .slice(0, limit);
      })
    );
  }
}
