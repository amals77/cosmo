import { Component, OnInit } from '@angular/core';
import {SS} from '../models/content'
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {CosmoserviceService} from '../cosmoservice.service'
import { Ipro} from '../data';
@Component({
  selector: 'app-sscaseinfo',
  templateUrl: './sscaseinfo.component.html',
  styleUrls: ['./sscaseinfo.component.css']
})
export class SscaseinfoComponent implements OnInit {

  showcase: Observable<SS[]>;
  show :Ipro[]
  constructor(private service:CosmoserviceService,
    private store: Store<{ category: SS[] }>) {
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
