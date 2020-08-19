import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {CosmoserviceService} from '../cosmoservice.service'
import { Isub} from '../data';
import {select, Store} from '@ngrx/store';
import {Category} from '../models/content';
@Component({
  selector: 'app-subcatinfo',
  templateUrl: './subcatinfo.component.html',
  styleUrls: ['./subcatinfo.component.css']
})
export class SubcatinfoComponent implements OnInit {
  subcategory :Isub[]
  category: Observable<Category[]>;
  constructor(private service:CosmoserviceService,
    private store: Store<{ category: Category[] }>) {
      this.category = store.pipe(select('category'));
    }

  ngOnInit(): void {
    this.category.subscribe(()=>{


    console.log("reach")
    var subcat=localStorage.getItem("subcat")
    this.service.getsubcat(subcat).subscribe(response =>
      {console.log(response)
        this.subcategory=response;

      });
    })
  }

}
