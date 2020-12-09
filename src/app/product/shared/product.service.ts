import { Injectable } from "@angular/core";
import { products } from 'src/app/products';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
    // we declare that this service should be created
    // by the root application injector.
    providedIn: 'root',
  })
export class ProductService {

    constructor(private http : HttpClient){}
    
    getProducts():Observable<any>{
        return this.http.get('/api/v1/products')
    }

    getProductById( productId : string):Observable<any>{
        return this.http.get('/api/v1/products/' + productId)
    }
}