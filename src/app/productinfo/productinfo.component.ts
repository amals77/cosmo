import { Component, OnInit } from '@angular/core';
import {Category} from '../models/content'
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {CosmoserviceService} from '../cosmoservice.service'
import { Ipro} from '../data';
@Component({
  selector: 'app-productinfo',
  templateUrl: './productinfo.component.html',
  styleUrls: ['./productinfo.component.css']
})
export class ProductinfoComponent implements OnInit {
  product: Observable<Category[]>;
  products :Ipro[]
  constructor(private service:CosmoserviceService,
    private store: Store<{ category: Category[] }>) {
   this.product = store.pipe(select('category'));
 }


  ngOnInit(): void {
    this.product.subscribe(()=>{
      var pro=localStorage.getItem("products")
      this.service.getproduct(pro).subscribe(response =>
        {console.log(response)
          this.products=response;

        });
      })
  }

}
