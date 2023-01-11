import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private http: HttpClient) {}

  getAllProducts(
    limit = '12',
    sort = 'desc',
    category?: string
  ): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(
      `https://fakestoreapi.com/products${
        category ? '/category/' + category : ''
      }`,
      {
        params: {
          sort: sort,
          limit: limit,
        },
      }
    );
  }

  getAllcategories(): Observable<Array<string>> {
    return this.http.get<Array<string>>(
      'https://fakestoreapi.com/products/categories'
    );
  }
}
