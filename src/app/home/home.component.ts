import { Component, OnInit } from '@angular/core';
import {Subcategory} from '../data'
import {CosmoserviceService} from '../cosmoservice.service'
import {Summer} from '../models/content';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import { CategorySelected } from '../category.actions';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  product: Observable<Summer[]>;
  constructor(private service:CosmoserviceService,
    private store: Store<{ category: Summer[] }>) {
      this.product = store.pipe(select('category'));
    }
  selectProduct(ProductName: string) {

    const product = new Summer();
    product.name =ProductName;
    this.service.tolsProduct(product)
    this.store.dispatch(new CategorySelected(product));

  }

  ngOnInit(): void {

  }

}
