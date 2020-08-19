import { Component, OnInit ,Input} from '@angular/core';
import { Product } from '../data';
import {CosmoserviceService} from '../cosmoservice.service'
import {SS} from '../models/content';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import { CategorySelected } from '../category.actions';
@Component({
  selector: 'app-summer',
  templateUrl: './summer.component.html',
  styleUrls: ['./summer.component.css']
})
export class SummerComponent implements OnInit {
  @Input("product")
  public product:Product

  showcase: Observable<SS[]>;
  constructor(private service:CosmoserviceService,
    private store: Store<{ category: SS[] }>) {
      this.showcase = store.pipe(select('category'));
    }
    selectshowcase(selectshowcase:string){
    const showcase = new SS();
    showcase.name =selectshowcase;
    this.service.tolsShowcase(showcase)
    this.store.dispatch(new CategorySelected(showcase));
  }

  ngOnInit(): void {
  }

}
