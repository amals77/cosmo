import { Component, OnInit,Input} from '@angular/core';
import { Product } from '../data';
import {select, Store} from '@ngrx/store';
import { Cart} from '../models/content';
import {Observable} from 'rxjs';
import { CategorySelected} from '../category.actions';
@Component({
  selector: 'app-sscaseview',
  templateUrl: './sscaseview.component.html',
  styleUrls: ['./sscaseview.component.css']
})
export class SscaseviewComponent implements OnInit {
  @Input("showcase")
  public showcase:Product

  sizebtn:string[]=["S","M","L","XL"]
  cart: Observable<Cart[]>;
  constructor(private store: Store<{ category: Cart[] }>) {
    this.cart = store.pipe(select('category'));
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
  ngOnInit(): void {
  }

}
