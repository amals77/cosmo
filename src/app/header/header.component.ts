import { Component, OnInit } from '@angular/core';
import {CosmoserviceService} from '../cosmoservice.service'
import {Category} from '../models/content'
import {select, Store} from '@ngrx/store';
import { CategorySelected } from '../category.actions';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  categories:any[]
  category: Observable<Category[]>;
  constructor(private service:CosmoserviceService,
    private store: Store<{ category: Category[] }>) {
      this.category = store.pipe(select('category'));

    }
  selectCatagory(mainCategory){
    console.log("clicked")
    const category= new Category
    category.name=mainCategory
    this.service.tolsSubcat(category)
    this.store.dispatch(new CategorySelected(category));


  }

  search(){
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    }
    close(){
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
    }

  ngOnInit(): void {
    this.service.getCategories().subscribe( (data)=>{

      this.categories=data

  })
  }

}
