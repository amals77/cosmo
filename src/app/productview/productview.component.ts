import { Component, OnInit,Input } from '@angular/core';
import { Product } from '../data';
import {Category} from '../models/content'
import {CosmoserviceService} from '../cosmoservice.service'
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import { CategorySelected } from '../category.actions';
@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent implements OnInit {
  @Input("product")
  public product:Product

  showcase: Observable<Category[]>;
  constructor(private service:CosmoserviceService,
    private store: Store<{ category: Category[] }>) {
      this.showcase = store.pipe(select('category'));
    }
  selectshowcase(showcase){
    const category= new Category
    category.name=showcase
    this.service.tolsShowcase(category)
    this.store.dispatch(new CategorySelected(category));
  }
  ngOnInit(): void {
  }

}
