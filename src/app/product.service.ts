import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

// Service - used to call backend api ( Servlet api) - Ajax calls
  listProducts(){
    let products =  [ {"id":1,"name":"MAC","price":1000},
    {"id":2,"name":"Lenova","price":500}];
    return products;
  }
// call your servlet - which returns JSON []
  getProducts(){
    let url = "http://localhost:8080/servlet-webservice-demo/ListProductServletUsingGson";
    return this.http.get<[]>(url);
  }
}
