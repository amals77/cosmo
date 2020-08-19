import { Component, OnInit } from '@angular/core';
import {Subcategory} from '../data'
import {CosmoserviceService} from '../cosmoservice.service'
import {Category} from '../models/content';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import { CategorySelected } from '../category.actions';
@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {

  product: Observable<Category[]>;
  constructor(private service:CosmoserviceService,
    private store: Store<{ category: Category[] }>) {
      this.product = store.pipe(select('category'));
    }
  selectProduct(ProductName: string) {

    const product = new Category();
    product.name =ProductName;
    this.service.tolsProduct(product)
    this.store.dispatch(new CategorySelected(product));

  }

  ngOnInit(): void {
  }

}
