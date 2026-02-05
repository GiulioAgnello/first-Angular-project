import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-product-service',
  imports: [],
  templateUrl: './product-service.html',
  styleUrl: './product-service.css',
})
export class ProductService {
  http = inject(HttpClient);

  getAllProducts() {
    return this.http.get(environment.APP_URL);
  }
}
