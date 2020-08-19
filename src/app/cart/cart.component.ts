import { Component, OnInit } from '@angular/core';
import {CosmoserviceService}from '../cosmoservice.service'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart:any[]
cost:number
discount:number
platfee:number=100
totalAmount:number
  constructor(private service:CosmoserviceService) {}
  quantity(qt,pri,cod){
    // console.log(qt,pri,cod)
    var amount:any=qt*pri
    var item=document.getElementById(cod)
    var price=parseFloat(item.innerHTML)
    document.getElementById(cod).innerHTML=amount
     this.cost=this.cost+amount-price
     this.discount=(this.cost*10)/100
     this.totalAmount=this.cost-this.discount+this.platfee
  }


  remove(rem,cod){
    var index=this.cart.indexOf(rem)
    this.cart.splice(index,1)
this.service.remcart(index)
var item=document.getElementById(cod)
var price=parseFloat(item.innerHTML)
this.cost-=price
this.discount=(this.cost*10)/100
     this.totalAmount=this.cost-this.discount+this.platfee
     if(this.cart.length==0){

      var data=document.getElementById("nodata")
      var data1=document.getElementById("data")
      data.style.display ='block';
      data1.style.display ='none';
    }
  }


  ngOnInit(): void {
    let a= this.service.getcart()

    this.cart=JSON.parse(a)
if(this.cart.length==0){

  var data=document.getElementById("nodata")
  var data1=document.getElementById("data")
  data.style.display ='block';
  data1.style.display ='none';
}
else{
  var data=document.getElementById("nodata")
  var data1=document.getElementById("data")

  data1.style.display ='block';
  data.style.display ='none';
}
    var s:number[]=[]
    this.cart.forEach(function(item) {

          s.push(item.price)

    });
    // console.log(s)
    var total=0
    s.forEach(function(x){
      total=total+x;

    })
this.cost=total
this.discount=(this.cost*10)/100
this.totalAmount=this.cost-this.discount+this.platfee
  }

}
