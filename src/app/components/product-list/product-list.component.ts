import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productService: ProductService) { }

  products = [];

  ngOnInit() {
    //this.loadProducts();
  }
 
  /*loadProducts(){
    this.products = this.productService.listProducts();  
    //avoid calling servlets or backend api from component  
  }
*/
  loadProducts(){
    this.productService.getProducts().subscribe((res)=>{
      this.products = res;
    });
  }

  clear(){
    this.products = [];
  }

  name:string;
  price:number;
  
  addProduct(){
    console.log("add product:" + this.name + "-" + 
    this.price);
    let obj = { "id":  this.products.length+1 , 
                "name": this.name , 
                "price": this.price
              };
    this.products.push(obj);
  }
  deleteProduct(obj){
    let index = this.products.indexOf(obj);
    this.products.splice(index,1);
  }



}
