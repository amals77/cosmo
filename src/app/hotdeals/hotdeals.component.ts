import { Component, OnInit } from '@angular/core';
import { Product } from '../data';
import {CosmoserviceService} from '../cosmoservice.service'
import {Category} from '../models/content';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import { CategorySelected } from '../category.actions';
@Component({
  selector: 'app-hotdeals',
  templateUrl: './hotdeals.component.html',
  styleUrls: ['./hotdeals.component.css']
})
export class HotdealsComponent implements OnInit {


  showcase: Observable<Category[]>;
  constructor(private service:CosmoserviceService,
    private store: Store<{ category: Category[] }>) {
      this.showcase = store.pipe(select('category'));
    }
  selectshowcase(selectshowcase:string){
    const showcase = new Category();
    showcase.name =selectshowcase;
    this.service.tolsShowcase(showcase)
    this.store.dispatch(new CategorySelected(showcase));
  }
  ngOnInit(): void {
  }

}
