import { Component } from '@angular/core';

@Component({
  selector: 'app-product-service',
  imports: [],
  templateUrl: './product-service.html',
  styleUrl: './product-service.css',
})
export class ProductService {
  http = inject(HttpClient);

  getAllProducts() {
    return this.http.get('https://fakestoreapi.com/products');
  }
}
