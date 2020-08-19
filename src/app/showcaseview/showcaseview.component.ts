import { Component, OnInit ,Input} from '@angular/core';
import { Product } from '../data';
import {select, Store} from '@ngrx/store';
import {Category, Cart} from '../models/content';
import {Observable} from 'rxjs';
import { CategorySelected} from '../category.actions';
import {CosmoserviceService} from '../cosmoservice.service'
@Component({
  selector: 'app-showcaseview',
  templateUrl: './showcaseview.component.html',
  styleUrls: ['./showcaseview.component.css']
})
export class ShowcaseviewComponent implements OnInit {
  @Input("showcase")
  public showcase:Product
  sizebtn:string[]=["S","M","L","XL"]
  constructor(private service:CosmoserviceService,
    ) {

  }

  subimg1(){
    var displayImg=<HTMLImageElement>document.getElementById("displayImg");
   var subimg=<HTMLImageElement>document.getElementById("smallimg1")

    displayImg.src=subimg.src
   }
   subimg2(){
     var displayImg=<HTMLImageElement>document.getElementById("displayImg");
    var subimg=<HTMLImageElement>document.getElementById("smallimg2")

     displayImg.src=subimg.src
    }
    subimg3(){
     var displayImg=<HTMLImageElement>document.getElementById("displayImg");
    var subimg=<HTMLImageElement>document.getElementById("smallimg3")

     displayImg.src=subimg.src
    }
    measure:string
    size(s){
     switch(s) {
       case "S":
         this.measure="SMALL"
         break;
       case "M":
         this.measure="MEDIUM"
         break;
         case "L":
           this.measure="LARGE"
           break;
           case "XL":
         this.measure="ETRA LARGE"
         break;
     }


     var ele=<HTMLInputElement>document.getElementById("ATC")
     ele.disabled = false;
    }
    AddCart(cartDetail) {
     const addcart = new Cart();
     addcart.name =cartDetail.name;
     addcart.desc =cartDetail.desc;
     addcart.size=this.measure
     addcart.image =cartDetail.image;
     addcart.price =cartDetail.price;
     addcart.code =cartDetail.code;
  this.service.tocart(addcart)
   }
   ngOnInit(): void {

   }


 }
