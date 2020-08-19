import { Component, OnInit,Input } from '@angular/core';
import {Subcategory} from '../data'
import {CosmoserviceService} from '../cosmoservice.service'
import {Category} from '../models/content'
import {select, Store} from '@ngrx/store';
import { CategorySelected } from '../category.actions';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-subcatview',
  templateUrl: './subcatview.component.html',
  styleUrls: ['./subcatview.component.css']
})
export class SubcatviewComponent implements OnInit {
  @Input("subcategory")
  public subcategory:Subcategory
  category: Observable<Category[]>;
  constructor(private service:CosmoserviceService,
    private store: Store<{ category: Category[] }>) {
      this.category = store.pipe(select('category'));

    }
  selectProduct(pro){
    const category= new Category
    category.name=pro
    this.service.tolsProduct(category)
    this.store.dispatch(new CategorySelected(category));
  }
  ngOnInit(): void {
  }

}
