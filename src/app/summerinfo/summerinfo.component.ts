import { Component, OnInit } from '@angular/core';
import {Summer} from '../models/content'
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {CosmoserviceService} from '../cosmoservice.service'
import { Ipro} from '../data';
@Component({
  selector: 'app-summerinfo',
  templateUrl: './summerinfo.component.html',
  styleUrls: ['./summerinfo.component.css']
})
export class SummerinfoComponent implements OnInit {
  product: Observable<Summer[]>;
  products :Ipro[]
  constructor(private service:CosmoserviceService,
    private store: Store<{ category: Summer[] }>) {
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
