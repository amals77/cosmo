import { Component, OnInit } from '@angular/core';
import {Category} from '../models/content'
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {CosmoserviceService} from '../cosmoservice.service'
import { Ipro} from '../data';
@Component({
  selector: 'app-showcaseinfo',
  templateUrl: './showcaseinfo.component.html',
  styleUrls: ['./showcaseinfo.component.css']
})
export class ShowcaseinfoComponent implements OnInit {

  showcase: Observable<Category[]>;
  show :Ipro[]
  constructor(private service:CosmoserviceService,
    private store: Store<{ category: Category[] }>) {
   this.showcase = store.pipe(select('category'));
 }


  ngOnInit(): void {
    this.showcase.subscribe(()=>{
      var scase=localStorage.getItem("showcase")
      this.service.getshowcase(scase).subscribe(response =>
        {console.log(response)
          this.show=response;

        });
      })
    }

  }
