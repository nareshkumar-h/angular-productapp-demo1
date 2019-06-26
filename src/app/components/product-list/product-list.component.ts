import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  products = [];

  ngOnInit() {
    //this.loadProducts();
  }
 
  loadProducts(){
    this.products =  [ {"id":1,"name":"MAC","price":1000},
    {"id":2,"name":"Lenova","price":500}];
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
