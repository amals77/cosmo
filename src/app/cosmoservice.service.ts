import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {ICategory,Isub,Ipro} from './data'
@Injectable({
  providedIn: 'root'
})
export class CosmoserviceService {
  categoryUrl:string ="http://localhost:3000/category"
  subcatUrl:string ="http://localhost:3000/subcat"
  productUrl:string="http://localhost:3000/products"
  showcaseUrl:string="http://localhost:3000/product"

  constructor(private http:HttpClient) { }
  getCategories() :Observable<ICategory[]>{
    return this.http.get<ICategory[]>(this.categoryUrl)
  }
  getsubcat(subcat):Observable<Isub[]>{

    return this.http.get<Isub[]>(this.subcatUrl+"/"+subcat)

  }
  getproduct(pro) :Observable<Ipro[]>{
    return this.http.get<Ipro[]>(this.productUrl+"/"+pro)
  }
getshowcase(scase):Observable<Ipro[]>{
    return this.http.get<Ipro[]>(this.showcaseUrl+"/"+scase)
  }
  tolsSubcat(subcat){

    localStorage.setItem("subcat",subcat.name)
  }
  tolsProduct(pro){

    localStorage.setItem("products",pro.name)
  }
  tolsShowcase(showcase){

    localStorage.setItem("showcase",showcase.name)
  }
  products:string[]=[]
  a:string[]=[]
    tocart (e){
  this.products.push(e)

      localStorage.setItem("cart",JSON.stringify(this.products))

    }
    getcart(){

     var product=localStorage.getItem("cart")

     return product

    }
    remcart(index){
      var product=localStorage.getItem("cart")
      var a=JSON.parse(product)

  a.splice(index,1)

  this.products=a
  localStorage.setItem("cart",JSON.stringify(this.products))


    }
  }
